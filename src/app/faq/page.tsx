'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { HelpCircle, Users, FileText, Award, Shield, Mail, BookOpen } from 'react-feather';

const FAQ = () => {
  // Dados de exemplo para categorias de perguntas
  const categoriasFAQ = [
    { id: 1, titulo: 'Geral', total: 8 },
    { id: 2, titulo: 'Filiação', total: 6 },
    { id: 3, titulo: 'Área do Associado', total: 7 },
    { id: 4, titulo: 'LGPD e Privacidade', total: 5 },
    { id: 5, titulo: 'Concursos', total: 9 },
    { id: 6, titulo: 'Transparência', total: 4 }
  ];

  // Dados de exemplo para perguntas frequentes
  const perguntasFrequentes = [
    {
      id: 1,
      categoria: 'Geral',
      pergunta: 'O que é a ASOF?',
      resposta: 'A ASOF (Associação Nacional dos Oficiais de Chancelaria) é uma associação civil, sem fins lucrativos, fundada em 1998 com o objetivo de representar e defender os interesses dos Oficiais de Chancelaria do Serviço Exterior Brasileiro.'
    },
    {
      id: 2,
      categoria: 'Filiação',
      pergunta: 'Quem pode se filiar à ASOF?',
      resposta: 'Podem se filiar à ASOF os Oficiais de Chancelaria do Serviço Exterior Brasileiro, ativos ou inativos, que estejam em dia com suas obrigações com a associação.'
    },
    {
      id: 3,
      categoria: 'Área do Associado',
      pergunta: 'Como acesso a área restrita do associado?',
      resposta: 'A área restrita do associado pode ser acessada após autenticação com as credenciais fornecidas durante o processo de filiação. Acesse o menu "Área do Associado" e clique em "Acessar Conta".'
    },
    {
      id: 4,
      categoria: 'LGPD e Privacidade',
      pergunta: 'Como a ASOF protege meus dados pessoais?',
      resposta: 'A ASOF está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e adota medidas técnicas e organizacionais para proteger seus dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou qualquer forma de tratamento inadequado.'
    },
    {
      id: 5,
      categoria: 'Concursos',
      pergunta: 'Quando será o próximo concurso para Oficial de Chancelaria?',
      resposta: 'As datas dos concursos são definidas pelo Instituto Rio Branco e divulgadas com antecedência. Acompanhe as informações no site oficial do Instituto e na área de "Concursos" do nosso portal.'
    },
    {
      id: 6,
      categoria: 'Transparência',
      pergunta: 'Onde posso acessar a prestação de contas da ASOF?',
      resposta: 'A prestação de contas da ASOF está disponível na seção "Transparência" do nosso portal, onde você também encontra relatórios anuais, atas e demais documentos de prestação de contas.'
    }
  ];

  // Dados de exemplo para perguntas por categoria
  const perguntasPorCategoria = {
    geral: [
      { id: 1, pergunta: 'O que é a ASOF?', resposta: 'A ASOF (Associação Nacional dos Oficiais de Chancelaria) é uma associação civil, sem fins lucrativos, fundada em 1998 com o objetivo de representar e defender os interesses dos Oficiais de Chancelaria do Serviço Exterior Brasileiro.' },
      { id: 2, pergunta: 'Qual é a missão da ASOF?', resposta: 'A missão da ASOF é fortalecer a representação da carreira de Oficial de Chancelaria, promover o diálogo institucional e defender os interesses dos oficiais de chancelaria do Serviço Exterior Brasileiro, contribuindo para a excelência do Itamaraty e das relações internacionais do Brasil.' },
      { id: 3, pergunta: 'Quais são os objetivos estratégicos da ASOF?', resposta: 'Os objetivos estratégicos da ASOF incluem fortalecer a institucionalidade e credibilidade da associação, tornar-se fonte oficial de informação sobre a carreira, modernizar atendimento e serviços ao associado, e cumprir requisitos de transparência, acessibilidade e proteção de dados.' },
      { id: 4, pergunta: 'Onde fica a sede da ASOF?', resposta: 'A sede da ASOF está localizada no Safra Wing Plaza, 2º Andar, Torre A, Sala 230, Asa Norte, Brasília - DF, 70070-910.' }
    ],
    filiacao: [
      { id: 1, pergunta: 'Quem pode se filiar à ASOF?', resposta: 'Podem se filiar à ASOF os Oficiais de Chancelaria do Serviço Exterior Brasileiro, ativos ou inativos, que estejam em dia com suas obrigações com a associação.' },
      { id: 2, pergunta: 'Como faço para me filiar?', resposta: 'O processo de filiação é realizado online. Acesse a seção "Área do Associado" e clique em "Filiacao". Siga as instruções para preencher o formulário e enviar os documentos necessários.' },
      { id: 3, pergunta: 'Qual é o custo da anuidade?', resposta: 'O valor da anuidade é definido anualmente em assembleia. O valor atual pode ser consultado no site da ASOF na seção de filiação.' },
      { id: 4, pergunta: 'Como é feito o pagamento da anuidade?', resposta: 'O pagamento pode ser realizado via boleto bancário ou transferência eletrônica, conforme opções disponíveis na área do associado após a ativação da conta.' }
    ],
    associado: [
      { id: 1, pergunta: 'Como acesso a área restrita do associado?', resposta: 'A área restrita do associado pode ser acessada após autenticação com as credenciais fornecidas durante o processo de filiação. Acesse o menu "Área do Associado" e clique em "Acessar Conta".' },
      { id: 2, pergunta: 'Como atualizo meus dados cadastrais?', resposta: 'Você pode atualizar seus dados cadastrais acessando a seção "Perfil" na área do associado, após autenticação.' },
      { id: 3, pergunta: 'Como acesso documentos exclusivos?', resposta: 'Documentos exclusivos estão disponíveis na área restrita, após autenticação como associado.' },
      { id: 4, pergunta: 'Como protocolo um novo requerimento?', resposta: 'O protocolo de requerimentos pode ser feito através da seção "Protocolos e Requerimentos" na área do associado.' }
    ]
  };

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Perguntas Frequentes</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre a ASOF e seus serviços
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Central de Ajuda</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Aqui você encontra as respostas para as perguntas mais frequentes
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <HelpCircle className="text-blue-600 mr-3" size={24} />
                Sobre o FAQ
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                O FAQ (Frequently Asked Questions) da ASOF reúne as perguntas mais comuns sobre a associação, 
                seus serviços, processos e regulamentos. Esta central de ajuda tem como objetivo esclarecer 
                dúvidas de forma rápida e eficiente.
              </p>
              <p className="text-gray-700">
                Se sua dúvida não for respondida aqui, entre em contato conosco através dos canais 
                disponíveis na seção "Fale Conosco".
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Categorias</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriasFAQ.map((categoria) => (
              <Card key={categoria.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{categoria.titulo}</CardTitle>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                    {categoria.total} perguntas
                  </span>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild>
                    <Link href={`/faq#${categoria.titulo.toLowerCase()}`}>Ver Perguntas</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de perguntas frequentes */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            {perguntasFrequentes.map((faq) => (
              <Card key={faq.id}>
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

      {/* Seção por categorias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Perguntas por Categoria</h2>
          
          {/* Categoria Geral */}
          <div className="mb-12">
            <h3 id="geral" className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="text-blue-600 mr-3" size={24} />
              Geral
            </h3>
            <div className="space-y-6">
              {perguntasPorCategoria.geral.map((faq) => (
                <Card key={faq.id}>
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
          
          {/* Categoria Filiação */}
          <div className="mb-12">
            <h3 id="filiacao" className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="text-blue-600 mr-3" size={24} />
              Filiação
            </h3>
            <div className="space-y-6">
              {perguntasPorCategoria.filiacao.map((faq) => (
                <Card key={faq.id}>
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
          
          {/* Categoria Área do Associado */}
          <div className="mb-12">
            <h3 id="associado" className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Shield className="text-blue-600 mr-3" size={24} />
              Área do Associado
            </h3>
            <div className="space-y-6">
              {perguntasPorCategoria.associado.map((faq) => (
                <Card key={faq.id}>
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
        </div>
      </section>

      {/* Seção de busca de perguntas */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Buscar Pergunta</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Utilize a busca para encontrar perguntas específicas
          </p>
          
          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Digite sua dúvida ou palavra-chave..."
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <Button>Buscar</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de contatos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="text-center p-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                <Mail size={48} />
              </div>
            </div>
            <CardTitle className="text-2xl mb-4">Não Encontrou a Resposta?</CardTitle>
            <p className="text-gray-700 mb-6">
              Se sua dúvida não foi esclarecida, entre em contato conosco para obter assistência personalizada
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link href="/contato">Fale Conosco</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/ouvidoria">Ouvidoria</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Outras Informações</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Acesse outros recursos da ASOF
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/documentos">Documentos</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/noticias">Notícias</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/eventos">Eventos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;