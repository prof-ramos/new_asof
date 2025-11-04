/**
 * Tipos TypeScript para o sistema de Associados da ASOF
 * Baseado na estrutura da planilha de controle
 */

// Tipos auxiliares
export type Sexo = 'M' | 'F';
export type EstadoCivil = 'Solteiro' | 'Casado' | 'Divorciado' | 'Viúvo' | 'União Estável';
export type Origem = 'Brasil' | 'Exterior';
export type TipoMissao = 'PERMANENTE' | 'TEMPORÁRIA' | 'OUTRO';

// Interface para dependentes
export interface Dependente {
  nome: string;
  parentesco: string;
  dataNascimento?: string;
}

// Interface para convênios
export interface Convenio {
  tipo: string;
  nome: string;
  numero?: string;
  ativo: boolean;
}

// Interface principal de Associado
export interface Associado {
  // Identificação
  id: string;

  // Dados Pessoais
  nome: string;
  sexo: Sexo | null;
  email: string | null;
  naturalidade: string | null;
  uf_naturalidade: string | null;
  estado_civil: EstadoCivil | null;
  numero_dependentes: number;
  dependentes: Dependente[] | null;

  // Documentação
  data_nascimento: string | null; // ISO date string
  cpf: string | null;
  rg: string | null;
  uf_rg: string | null;
  orgao_expedidor: string | null;
  data_expedicao_rg: string | null;

  // Endereço
  endereco: string | null;
  cidade: string | null;
  uf_residencia: string | null;
  bairro: string | null;
  cep: string | null;
  pais: string;

  // Contatos
  telefone: string | null;
  celular: string | null;
  fax: string | null;

  // Dados Funcionais
  matricula_siape: string | null;
  ceoc: boolean;
  caoc: boolean;
  data_admissao: string | null;
  data_posse: string | null;
  origem: Origem | null;
  lotacao: string | null;
  data_lotacao: string | null;
  missao: TipoMissao | null;

  // Dados de Associação
  associado: boolean;
  data_adesao: string | null;
  licenca: string | null;
  data_licenca: string | null;
  data_cancelamento: string | null;

  // Dados Profissionais
  classe_padrao: string | null;
  convenios: Convenio[] | null;

  // Metadados
  created_at: string;
  updated_at: string;
}

// Tipo para criação de novo associado (omite campos gerados automaticamente)
export type NovoAssociado = Omit<Associado, 'id' | 'created_at' | 'updated_at'>;

// Tipo para atualização de associado (todos os campos são opcionais)
export type AtualizarAssociado = Partial<Omit<Associado, 'id' | 'created_at' | 'updated_at'>>;

// Interface para filtros de busca
export interface FiltrosAssociados {
  nome?: string;
  email?: string;
  cpf?: string;
  matricula_siape?: string;
  lotacao?: string;
  associado?: boolean;
  sexo?: Sexo;
  uf_residencia?: string;
  origem?: Origem;
  ceoc?: boolean;
  caoc?: boolean;
}

// Interface para estatísticas
export interface EstatisticasAssociados {
  total_associados: number;
  associados_ativos: number;
  associados_inativos: number;
  total_masculino: number;
  total_feminino: number;
  total_lotacoes: number;
  servidores_exterior: number;
}

// Interface para distribuição por lotação
export interface AssociadosPorLotacao {
  lotacao: string;
  total: number;
  ativos: number;
}

// Interface para view de associados ativos
export interface AssociadoAtivo {
  id: string;
  nome: string;
  email: string | null;
  celular: string | null;
  lotacao: string | null;
  data_adesao: string | null;
  classe_padrao: string | null;
}

// Tipo para resultado de busca paginada
export interface ResultadoPaginado<T> {
  dados: T[];
  total: number;
  pagina: number;
  porPagina: number;
  totalPaginas: number;
}

// Constantes úteis
export const UFS_BRASIL = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
  'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN',
  'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
] as const;

export const ESTADOS_CIVIS: EstadoCivil[] = [
  'Solteiro',
  'Casado',
  'Divorciado',
  'Viúvo',
  'União Estável'
];

export const TIPOS_PARENTESCO = [
  'Cônjuge',
  'Companheiro(a)',
  'Filho(a)',
  'Pai',
  'Mãe',
  'Irmão(ã)',
  'Outro'
] as const;

// Funções auxiliares de validação
export function validarCPF(cpf: string): boolean {
  // Remove caracteres não numéricos
  const cpfLimpo = cpf.replace(/\D/g, '');

  // Verifica se tem 11 dígitos
  if (cpfLimpo.length !== 11) return false;

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;

  // Validação dos dígitos verificadores
  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

  return true;
}

export function formatarCPF(cpf: string): string {
  const cpfLimpo = cpf.replace(/\D/g, '');
  return cpfLimpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

export function formatarCEP(cep: string): string {
  const cepLimpo = cep.replace(/\D/g, '');
  return cepLimpo.replace(/(\d{5})(\d{3})/, '$1-$2');
}

export function formatarTelefone(telefone: string): string {
  const telefoneLimpo = telefone.replace(/\D/g, '');

  if (telefoneLimpo.length === 11) {
    // Celular: (XX) 9XXXX-XXXX
    return telefoneLimpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (telefoneLimpo.length === 10) {
    // Fixo: (XX) XXXX-XXXX
    return telefoneLimpo.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }

  return telefone;
}

export function calcularIdade(dataNascimento: string): number {
  const hoje = new Date();
  const nascimento = new Date(dataNascimento);
  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mes = hoje.getMonth() - nascimento.getMonth();

  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }

  return idade;
}

export function obterNomeCompleto(associado: Associado): string {
  return associado.nome;
}

export function obterIniciais(nome: string): string {
  return nome
    .split(' ')
    .filter(parte => parte.length > 0)
    .map(parte => parte[0].toUpperCase())
    .join('');
}

export function estaAtivo(associado: Associado): boolean {
  return associado.associado && !associado.data_cancelamento;
}

export function tempoDeAssociacao(dataAdesao: string): string {
  const adesao = new Date(dataAdesao);
  const hoje = new Date();

  const anos = hoje.getFullYear() - adesao.getFullYear();
  const meses = hoje.getMonth() - adesao.getMonth();

  if (anos > 0) {
    return `${anos} ano${anos > 1 ? 's' : ''}`;
  } else if (meses > 0) {
    return `${meses} mes${meses > 1 ? 'es' : ''}`;
  } else {
    return 'Menos de 1 mês';
  }
}
