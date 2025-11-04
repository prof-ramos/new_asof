-- ============================================
-- TABELA DE ASSOCIADOS - ASOF
-- Estrutura baseada na planilha de controle
-- ============================================

-- Criar a tabela de associados
CREATE TABLE associados (
  -- Identificação única
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Dados Pessoais (Colunas A-H)
  nome text NOT NULL,
  sexo text CHECK (sexo IN ('M', 'F')),
  email text UNIQUE,
  naturalidade text,
  uf_naturalidade text,
  estado_civil text,
  numero_dependentes integer DEFAULT 0,
  dependentes jsonb, -- Array de objetos {nome: string, parentesco: string}

  -- Documentação (Colunas I-N)
  data_nascimento date,
  cpf text UNIQUE,
  rg text,
  uf_rg text,
  orgao_expedidor text,
  data_expedicao_rg date,

  -- Endereço (Colunas O-T)
  endereco text,
  cidade text,
  uf_residencia text,
  bairro text,
  cep text,
  pais text DEFAULT 'Brasil',

  -- Contatos (Colunas U-W)
  telefone text,
  celular text,
  fax text,

  -- Dados Funcionais (Colunas X-AF)
  matricula_siape text UNIQUE,
  ceoc boolean DEFAULT false,
  caoc boolean DEFAULT false,
  data_admissao date,
  data_posse date,
  origem text, -- Brasil/Exterior
  lotacao text,
  data_lotacao date,
  missao text, -- ex: PERMANENTE

  -- Dados de Associação (Colunas AG-AK)
  associado boolean DEFAULT true,
  data_adesao date,
  licenca text,
  data_licenca date,
  data_cancelamento date,

  -- Dados Profissionais e Benefícios (Colunas AL-AM)
  classe_padrao text,
  convenios jsonb, -- Array de convênios

  -- Metadados
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,

  -- Índices para busca rápida
  CONSTRAINT cpf_valido CHECK (cpf ~ '^\d{11}$' OR cpf IS NULL),
  CONSTRAINT email_valido CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' OR email IS NULL)
);

-- ============================================
-- ÍNDICES PARA PERFORMANCE
-- ============================================

CREATE INDEX idx_associados_nome ON associados(nome);
CREATE INDEX idx_associados_cpf ON associados(cpf);
CREATE INDEX idx_associados_email ON associados(email);
CREATE INDEX idx_associados_matricula_siape ON associados(matricula_siape);
CREATE INDEX idx_associados_lotacao ON associados(lotacao);
CREATE INDEX idx_associados_associado ON associados(associado);
CREATE INDEX idx_associados_data_adesao ON associados(data_adesao);

-- ============================================
-- FUNÇÃO PARA ATUALIZAR updated_at
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_associados_updated_at
  BEFORE UPDATE ON associados
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE associados ENABLE ROW LEVEL SECURITY;

-- Política: Administradores podem fazer tudo
CREATE POLICY "Administradores têm acesso completo"
ON associados
FOR ALL
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM auth.users
    WHERE auth.users.id = auth.uid()
    AND auth.users.raw_user_meta_data->>'role' = 'admin'
  )
);

-- Política: Associados podem ver apenas seus próprios dados
CREATE POLICY "Associados veem apenas seus dados"
ON associados
FOR SELECT
TO authenticated
USING (
  email = (SELECT email FROM auth.users WHERE id = auth.uid())
);

-- Política: Associados podem atualizar apenas dados não-críticos
CREATE POLICY "Associados atualizam dados pessoais"
ON associados
FOR UPDATE
TO authenticated
USING (
  email = (SELECT email FROM auth.users WHERE id = auth.uid())
)
WITH CHECK (
  email = (SELECT email FROM auth.users WHERE id = auth.uid())
);

-- ============================================
-- DADOS DE EXEMPLO
-- ============================================

INSERT INTO associados (
  nome,
  sexo,
  email,
  cpf,
  matricula_siape,
  estado_civil,
  data_nascimento,
  cidade,
  uf_residencia,
  telefone,
  celular,
  lotacao,
  associado,
  data_adesao,
  classe_padrao
) VALUES
(
  'João Silva Santos',
  'M',
  'joao.silva@mre.gov.br',
  '12345678901',
  '1234567',
  'Casado',
  '1980-05-15',
  'Brasília',
  'DF',
  '61-3333-4444',
  '61-98888-7777',
  'Brasília - Secretaria de Estado',
  true,
  '2020-01-15',
  'Oficial de Chancelaria - Classe A, Padrão III'
),
(
  'Maria Oliveira Costa',
  'F',
  'maria.costa@mre.gov.br',
  '98765432100',
  '7654321',
  'Solteira',
  '1985-08-22',
  'Rio de Janeiro',
  'RJ',
  '21-2222-3333',
  '21-99999-8888',
  'Consulado Geral em Nova York',
  true,
  '2019-06-10',
  'Oficial de Chancelaria - Classe B, Padrão II'
),
(
  'Carlos Eduardo Pereira',
  'M',
  'carlos.pereira@mre.gov.br',
  '11122233344',
  '9876543',
  'Divorciado',
  '1975-12-03',
  'São Paulo',
  'SP',
  '11-4444-5555',
  '11-97777-6666',
  'Embaixada em Lisboa',
  true,
  '2018-03-20',
  'Oficial de Chancelaria - Classe A, Padrão IV'
);

-- ============================================
-- VIEWS ÚTEIS
-- ============================================

-- View: Associados ativos
CREATE VIEW associados_ativos AS
SELECT
  id,
  nome,
  email,
  celular,
  lotacao,
  data_adesao,
  classe_padrao
FROM associados
WHERE associado = true
  AND data_cancelamento IS NULL
ORDER BY nome;

-- View: Estatísticas gerais
CREATE VIEW estatisticas_associados AS
SELECT
  COUNT(*) as total_associados,
  COUNT(*) FILTER (WHERE associado = true) as associados_ativos,
  COUNT(*) FILTER (WHERE associado = false OR data_cancelamento IS NOT NULL) as associados_inativos,
  COUNT(*) FILTER (WHERE sexo = 'M') as total_masculino,
  COUNT(*) FILTER (WHERE sexo = 'F') as total_feminino,
  COUNT(DISTINCT lotacao) as total_lotacoes,
  COUNT(*) FILTER (WHERE origem = 'Exterior') as servidores_exterior
FROM associados;

-- View: Distribuição por lotação
CREATE VIEW associados_por_lotacao AS
SELECT
  lotacao,
  COUNT(*) as total,
  COUNT(*) FILTER (WHERE associado = true) as ativos
FROM associados
WHERE lotacao IS NOT NULL
GROUP BY lotacao
ORDER BY total DESC;

-- ============================================
-- COMENTÁRIOS NA TABELA
-- ============================================

COMMENT ON TABLE associados IS 'Tabela principal de associados da ASOF';
COMMENT ON COLUMN associados.nome IS 'Nome completo do servidor';
COMMENT ON COLUMN associados.cpf IS 'CPF (apenas números, 11 dígitos)';
COMMENT ON COLUMN associados.matricula_siape IS 'Número de matrícula no SIAPE';
COMMENT ON COLUMN associados.dependentes IS 'JSON array com lista de dependentes: [{nome: string, parentesco: string}]';
COMMENT ON COLUMN associados.convenios IS 'JSON array com lista de convênios';
COMMENT ON COLUMN associados.ceoc IS 'Indicador CEOC (Curso de Especialização de Oficiais de Chancelaria)';
COMMENT ON COLUMN associados.caoc IS 'Indicador CAOC (Curso de Aperfeiçoamento de Oficiais de Chancelaria)';

-- ============================================
-- FUNÇÕES AUXILIARES
-- ============================================

-- Função: Buscar associados por nome ou matrícula
CREATE OR REPLACE FUNCTION buscar_associados(termo text)
RETURNS SETOF associados AS $$
BEGIN
  RETURN QUERY
  SELECT * FROM associados
  WHERE
    nome ILIKE '%' || termo || '%'
    OR matricula_siape ILIKE '%' || termo || '%'
    OR email ILIKE '%' || termo || '%'
  ORDER BY nome;
END;
$$ LANGUAGE plpgsql;

-- Função: Calcular idade
CREATE OR REPLACE FUNCTION calcular_idade(data_nasc date)
RETURNS integer AS $$
BEGIN
  RETURN EXTRACT(YEAR FROM age(CURRENT_DATE, data_nasc))::integer;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

COMMENT ON FUNCTION calcular_idade IS 'Calcula a idade a partir da data de nascimento';
