'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/authContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Award, Shield, Download, Mail, CheckCircle, Clock, XCircle } from 'react-feather';

const Filiacao = () => {
  const { user } = useAuth();

  // Dados de exemplo para requisitos de filiação
  const requisitosFiliacao = [
    { id: 1, descricao: 'Ser Oficial de Chancelaria do Serviço Exterior Brasileiro', obrigatorio: true },
    { id: 2, descricao: 'Estar em dia com as obrigações com a ASOF', obrigatorio: true },
    { id: 3, descricao: 'Apresentar declaração de tempo de serviço', obrigatorio: true },
    { id: 4, descricao: 'Preencher formulário de inscrição', obrigatorio: true },
    { id: 5, descricao: 'Estar em dia com o pagamento da anuidade', obrigatorio: false }
  ];

  // Dados de exemplo para benefícios da filiação
  const beneficiosFiliacao = [
    { id: 1, titulo: 'Representação Institucional', descricao: 'A ASOF atua como representante dos interesses da categoria' },
    { id: 2, titulo: 'Acesso à Área Restrita', descricao: 'Documentos exclusivos e serviços para associados' },
    { id: 3, titulo: 'Consultoria Jurídica', descricao: 'Acesso à base de orientações jurídicas' },
    { id: 4, titulo: 'Eventos Exclusivos', descricao: 'Participação em eventos e formações exclusivas' },
    { id: 5, titulo: 'Rede de Contatos', descricao: 'Acesso à rede de contatos da ASOF' },
    { id: 6, titulo: 'Descontos e Convênios', descricao: 'Benefícios com parceiros e convênios especiais' }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Filiação à ASOF</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Torne-se associado e faça parte da associação que representa os Oficiais de Chancelaria
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Junte-se à ASOF</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A Associação Nacional dos Oficiais de Chancelaria (ASOF) representa e defende os interesses 
              dos Oficiais de Chancelaria do Serviço Exterior Brasileiro.
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sobre a ASOF</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A ASOF é uma associação civil, sem fins lucrativos, fundada em 1998 com o objetivo de 
                representar e defender os interesses dos Oficiais de Chancelaria do Serviço Exterior Brasileiro.
              </p>
              <p className="text-gray-700">
                A associação atua na defesa dos direitos e prerrogativas da carreira, na promoção de 
                eventos e formações, e na representação institucional perante órgãos governamentais.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Processo de Filiação</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              O processo de filiação é simples e pode ser realizado totalmente online
            </p>
          </div>
        </div>
      </section>

      {/* Seção de requisitos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Requisitos para Filiação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Requisitos Obrigatórios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitosFiliacao
                    .filter(req => req.obrigatorio)
                    .map((requisito) => (
                      <li key={requisito.id} className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{requisito.descricao}</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Requisitos Adicionais (Opcional)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitosFiliacao
                    .filter(req => !req.obrigatorio)
                    .map((requisito) => (
                      <li key={requisito.id} className="flex items-start">
                        <XCircle className="text-yellow-600 mr-2 mt-0.5 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{requisito.descricao}</span>
                      </li>
                    ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefícios de Ser Associado</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beneficiosFiliacao.map((beneficio) => (
              <Card key={beneficio.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex items-center text-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Award size={24} />
                  </div>
                  <CardTitle className="text-lg">{beneficio.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{beneficio.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de etapas do processo */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Etapa do Processo de Filiação</h2>
          
          <div className="space-y-8">
            {[
              { 
                titulo: 'Preenchimento do Formulário', 
                descricao: 'Preencha o formulário de inscrição com seus dados pessoais e profissionais',
                icone: <FileText size={24} className="text-blue-600" />
              },
              { 
                titulo: 'Apresentação de Documentos', 
                descricao: 'Envie os documentos necessários para comprovar sua condição de Oficial de Chancelaria',
                icone: <Download size={24} className="text-green-600" />
              },
              { 
                titulo: 'Análise da Comissão', 
                descricao: 'Sua solicitação será analisada pela Comissão de Filiacao da ASOF',
                icone: <CheckCircle size={24} className="text-purple-600" />
              },
              { 
                titulo: 'Aprovação e Ativação', 
                descricao: 'Após aprovação, sua conta de associado será ativada e você receberá as credenciais',
                icone: <Users size={24} className="text-indigo-600" />
              }
            ].map((etapa, index) => (
              <Card key={index} className="flex flex-col sm:flex-row items-start p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 sm:mb-0 sm:mr-6">
                  <span className="text-lg font-bold">{index + 1}</span>
                </div>
                <div>
                  <div className="flex items-center mb-2">
                    <div className="mr-3">
                      {etapa.icone}
                    </div>
                    <h3 className="text-xl font-semibold">{etapa.titulo}</h3>
                  </div>
                  <p className="text-gray-700">{etapa.descricao}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de documentos necessários */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Documentos Necessários</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Lista de Documentos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Cópia da Carteira de Identidade (RG)</li>
                <li>Cópia do Cadastro de Pessoas Físicas (CPF)</li>
                <li>Comprovante de vínculo com o Serviço Exterior Brasileiro</li>
                <li>Declaração de tempo de serviço (se aplicável)</li>
                <li>Foto 3x4 recente (para emissão de carteirinha)</li>
              </ul>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Modelos de Documentos</h4>
                <p className="text-gray-700 mb-4">
                  Baixe os modelos de documentos necessários para o processo de filiação:
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" asChild>
                    <Link href="/documentos/filiacao/declaracao-tempo-servico.pdf" target="_blank">
                      <Download size={16} className="mr-2" />
                      Declaração de Tempo de Serviço
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/documentos/filiacao/formulario-inscricao.pdf" target="_blank">
                      <Download size={16} className="mr-2" />
                      Formulário de Inscrição
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de status da filiação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Status da Filiacao</h2>
          
          {user ? (
            <Card className="text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                  <Users size={48} />
                </div>
              </div>
              <CardTitle className="text-2xl mb-4">Você já é associado</CardTitle>
              <p className="text-gray-700 mb-6">
                Seu status de associado está ativo. Acesse a área do associado para mais informações.
              </p>
              <Button asChild>
                <Link href="/associado">Acessar Área do Associado</Link>
              </Button>
            </Card>
          ) : (
            <Card className="text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-green-100 text-green-600">
                  <Shield size={48} />
                </div>
              </div>
              <CardTitle className="text-2xl mb-4">Como se Filia</CardTitle>
              <p className="text-gray-700 mb-6">
                Para iniciar o processo de filiação, clique no botão abaixo e preencha o formulário de inscrição.
              </p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/auth/sign-up">Iniciar Processo de Filiacao</Link>
              </Button>
              <p className="text-sm text-gray-500 mt-4">
                Já é cadastrado? <Link href="/auth/sign-in" className="text-blue-600 hover:underline">Faça login</Link>
              </p>
            </Card>
          )}
        </div>
      </section>

      {/* Seção de dúvidas frequentes */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dúvidas sobre a Filiacao</h2>
          
          <div className="space-y-6">
            {[
              { 
                pergunta: 'Qual é o custo da anuidade?', 
                resposta: 'O valor da anuidade é definido anualmente em assembleia. O valor atual pode ser consultado no site da ASOF.' 
              },
              { 
                pergunta: 'Como faço para cancelar minha filiação?', 
                resposta: 'O cancelamento deve ser solicitado por escrito à diretoria da ASOF, com aviso prévio de 30 dias.' 
              },
              { 
                pergunta: 'Posso me filiar se estou inativo?', 
                resposta: 'Sim, Oficiais de Chancelaria inativos também podem se filiar à ASOF.' 
              },
              { 
                pergunta: 'Como é feito o pagamento da anuidade?', 
                resposta: 'O pagamento pode ser realizado via boleto bancário ou transferência eletrônica, conforme opções disponíveis na área do associado.' 
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.pergunta}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{faq.resposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Torne-se um Associado</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Junte-se à associação que representa e defende os interesses dos Oficiais de Chancelaria
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/auth/sign-up">Fazer Filiacao</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contato">Dúvidas</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Filiacao;