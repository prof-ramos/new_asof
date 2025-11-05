'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Download, Eye, Users, Calendar } from 'react-feather';

const LGPD = () => {
  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidade e LGPD</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Em conformidade com a Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Política de Privacidade</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A ASOF compromete-se com a proteção de dados pessoais de acordo com a LGPD
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="text-blue-600 mr-3" size={24} />
                Sobre a LGPD
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A Lei Geral de Proteção de Dados (LGPD) - Lei nº 13.709/2018 - é a legislação brasileira 
                que regula o tratamento de dados pessoais, inclusive nos meios digitais, por pessoa natural 
                ou por pessoa jurídica de direito público ou privado, com o objetivo de proteger os direitos 
                fundamentais de liberdade e de privacidade.
              </p>
              <p className="text-gray-700">
                A ASOF está em total conformidade com a LGPD e adota as melhores práticas de proteção de 
                dados para garantir a privacidade e a segurança das informações coletadas.
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Canal DPO</h3>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              Para questões relacionadas à proteção de dados, entre em contato com o nosso 
              Encarregado de Proteção de Dados (DPO).
            </p>
            <Button asChild>
              <Link href="/dpo">Contatar DPO</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de como coletamos e utilizamos dados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Como Coletamos e Utilizamos Dados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="text-blue-600 mr-3" size={24} />
                  Fontes de Coleta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Formulários de contato e inscrição</li>
                  <li>Área de associado cadastrado</li>
                  <li>Newsletter e comunicações</li>
                  <li>Utilização do site e serviços</li>
                  <li>Redes sociais e canais oficiais</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Finalidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Prestação de serviços específicos</li>
                  <li>Comunicação institucional</li>
                  <li>Gestão administrativa</li>
                  <li>Personalização de experiências</li>
                  <li>Cumprimento de obrigações legais</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Dados Coletados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A ASOF pode coletar os seguintes tipos de dados pessoais:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Dados de identificação (nome, CPF, RG)</li>
                <li>Dados de contato (e-mail, telefone, endereço)</li>
                <li>Dados profissionais (cargo, local de trabalho)</li>
                <li>Dados acadêmicos (formação, especializações)</li>
                <li>Dados de navegação no site</li>
                <li>Cookies e tecnologias semelhantes</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de bases legais */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Bases Legais para Tratamento</h2>
          
          <div className="space-y-6">
            {[
              { 
                titulo: 'Consentimento', 
                descricao: 'Quando você autoriza expressamente o tratamento de seus dados para uma finalidade específica.' 
              },
              { 
                titulo: 'Execução de Contrato', 
                descricao: 'Para a execução de contrato do qual você é parte ou para a implementação de medidas preliminares.' 
              },
              { 
                titulo: 'Obrigação Legal', 
                descricao: 'Quando o tratamento é necessário para o cumprimento de obrigação legal ou regulatória.' 
              },
              { 
                titulo: 'Interesses Legítimos', 
                descricao: 'Para proteger seus interesses vitais ou de terceiros, em situações de emergência.' 
              },
              { 
                titulo: 'Exercício de Direitos', 
                descricao: 'Para o exercício de direitos em processo judicial, administrativo ou arbitral.' 
              }
            ].map((base, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{base.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{base.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de direitos do titular */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Direitos do Titular de Dados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                titulo: 'Confirmação de Existência', 
                descricao: 'Direito de confirmar se seus dados pessoais estão sendo tratados' 
              },
              { 
                titulo: 'Acesso aos Dados', 
                descricao: 'Direito de acessar os dados pessoais que estão sendo tratados' 
              },
              { 
                titulo: 'Correção de Dados', 
                descricao: 'Direito de corrigir dados incompletos, inexatos ou desatualizados' 
              },
              { 
                titulo: 'Anonimização, Bloqueio ou Eliminação', 
                descricao: 'Direito de solicitar a anonimização ou eliminação de dados desnecessários' 
              },
              { 
                titulo: 'Portabilidade', 
                descricao: 'Direito de solicitar a portabilidade dos dados a outro fornecedor' 
              },
              { 
                titulo: 'Eliminação de Dados', 
                descricao: 'Direito de solicitar a eliminação dos dados tratados com consentimento' 
              },
              { 
                titulo: 'Informação sobre Compartilhamento', 
                descricao: 'Direito de obter informações sobre o compartilhamento de dados com terceiros' 
              },
              { 
                titulo: 'Revogação de Consentimento', 
                descricao: 'Direito de revogar consentimento anteriormente fornecido' 
              }
            ].map((direito, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{direito.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{direito.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Como Exercer Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Você pode exercer qualquer um dos direitos acima mencionados entrando em contato 
                diretamente com o nosso Encarregado de Proteção de Dados (DPO).
              </p>
              <Button asChild>
                <Link href="/contato?canal=dpo">Solicitar Exercício de Direitos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de segurança e prazos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Segurança e Prazos</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Medidas de segurança e prazos de retenção de dados
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Medidas de Segurança
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  A ASOF adota medidas técnicas e organizacionais para proteger os dados pessoais 
                  contra acessos não autorizados e situações acidentais ou ilícitas de destruição, 
                  perda, alteração, comunicação ou qualquer forma de tratamento inadequado.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>Controles de acesso físico e lógico</li>
                  <li>Backups regulares e seguros</li>
                  <li>Testes de segurança periódicos</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="text-blue-600 mr-3" size={24} />
                  Prazos de Retenção
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Os dados pessoais são armazenados apenas pelo tempo necessário para a realização 
                  das finalidades para as quais foram coletados, respeitando-se os prazos legais 
                  aplicáveis e os princípios de proteção de dados.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Até 5 anos para fins de fiscalização</li>
                  <li>Até o tempo necessário para cumprimento de obrigações legais</li>
                  <li>Até que o titular solicite a exclusão</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de compartilhamento e documentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Compartilhamento e Documentos</h2>
          
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Compartilhamento de Dados</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A ASOF não compartilha seus dados pessoais com terceiros sem o seu consentimento, 
                exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Para cumprimento de obrigações legais ou regulatórias</li>
                <li>Para proteção dos interesses do titular em situações de risco</li>
                <li>Para prestadores de serviço terceirizados contratados pela ASOF</li>
                <li>Para órgãos públicos, por determinação legal</li>
              </ul>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  Documentos Oficiais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/documentos/lgpd/politica-privacidade.pdf" className="text-blue-600 hover:underline">
                      Política de Privacidade Completa
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/documentos/lgpd/guia-direitos-titular.pdf" className="text-blue-600 hover:underline">
                      Guia de Direitos do Titular
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/documentos/lgpd/termo-consentimento.pdf" className="text-blue-600 hover:underline">
                      Termo de Consentimento
                    </Link>
                  </li>
                </ul>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/documentos/lgpd">
                    <Download size={16} className="mr-2" />
                    Todos os Documentos
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="text-blue-600 mr-3" size={24} />
                  Transparência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  A ASOF mantém um compromisso com a transparência e disponibiliza regularmente 
                  informações sobre o tratamento de dados pessoais.
                </p>
                <Button asChild>
                  <Link href="/transparencia">Acessar Informações de Transparência</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Dúvidas sobre Proteção de Dados?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Entre em contato com o nosso Encarregado de Proteção de Dados
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/dpo">Contatar DPO</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/ouvidoria">Ouvidoria</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LGPD;