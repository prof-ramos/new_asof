'use client';

import Link from 'next/link';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Users, Award, Calendar, Mail, Download, Eye } from 'react-feather';

const AreaAssociado = () => {
  const { isSignedIn } = useUser();

  // Dados de exemplo para serviços exclusivos
  const servicosExclusivos = [
    {
      id: 1,
      titulo: 'Área Restrita',
      descricao: 'Acesse documentos exclusivos para associados',
      icone: <Shield size={24} />,
      href: isSignedIn ? '/associado/restrito' : '/auth/sign-in',
      cor: 'blue',
      tipo: 'acesso'
    },
    {
      id: 2,
      titulo: 'Protocolos e Requerimentos',
      descricao: 'Sistema para protocolar documentos e requerimentos',
      icone: <FileText size={24} />,
      href: isSignedIn ? '/associado/protocolos' : '/auth/sign-in',
      cor: 'green',
      tipo: 'servico'
    },
    {
      id: 3,
      titulo: 'Consulta Jurídica',
      descricao: 'Acesse nossa base de orientações jurídicas',
      icone: <Award size={24} />,
      href: isSignedIn ? '/associado/juridico' : '/auth/sign-in',
      cor: 'purple',
      tipo: 'servico'
    },
    {
      id: 4,
      titulo: 'Financeiro',
      descricao: 'Segunda via de boletos e histórico financeiro',
      icone: <Download size={24} />,
      href: isSignedIn ? '/associado/financeiro' : '/auth/sign-in',
      cor: 'yellow',
      tipo: 'servico'
    }
  ];

  // Dados de exemplo para notícias exclusivas
  const noticiasExclusivas = [
    {
      id: 1,
      titulo: 'Novos benefícios para associados',
      descricao: 'A ASOF anuncia novos convênios e benefícios exclusivos para associados...',
      data: '15 out 2025',
      categoria: 'Associados'
    },
    {
      id: 2,
      titulo: 'Atualização sobre representações diplomáticas',
      descricao: 'Informações sobre novas representações e mudanças na estrutura consular...',
      data: '10 out 2025',
      categoria: 'Institucional'
    },
    {
      id: 3,
      titulo: 'Calendário de eventos para associados',
      descricao: 'Próximos eventos, encontros e formações exclusivas para associados...',
      data: '5 out 2025',
      categoria: 'Eventos'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Área do Associado</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Acesse serviços exclusivos, documentos e informações reservadas para associados da ASOF
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo ao Portal do Associado</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Aqui você encontra todos os serviços e informações exclusivas para membros da ASOF
            </p>
          </div>

          {!isSignedIn ? (
            <Card className="mb-12 bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-xl text-center">Faça Login para Acessar a Área do Associado</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 mb-6">
                  Para acessar os serviços exclusivos, é necessário estar autenticado como associado da ASOF
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/auth/sign-in">Acessar Conta</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/associado/filiacao">Ainda não é Associado?</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="text-2xl">Sua Conta</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Nome do Associado</h3>
                    <p className="text-gray-600">Associado desde: 15 de março de 2023</p>
                    <p className="text-gray-600">Status: Ativo</p>
                  </div>
                  <div className="flex items-center">
                    <Button asChild>
                      <Link href="/associado/perfil">Editar Perfil</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossos Serviços Exclusivos</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acesse os serviços exclusivos disponíveis para associados da ASOF
            </p>
          </div>
        </div>
      </section>

      {/* Seção de serviços exclusivos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicosExclusivos.map((servico) => (
              <Link 
                key={servico.id} 
                href={servico.href} 
                className="block group"
                aria-label={`Acessar ${servico.titulo}`}
              >
                <Card className={`h-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group-hover:-translate-y-1 ${
                  !isSignedIn && (servico.tipo === 'acesso' || servico.tipo === 'servico') ? 'opacity-70' : ''
                }`}>
                  <CardHeader className="flex items-center text-center">
                    <div className={`p-4 rounded-full bg-${servico.cor}-100 text-${servico.cor}-600 mb-4 group-hover:bg-${servico.cor}-200 transition-colors`}>
                      {servico.icone}
                    </div>
                    <CardTitle className="text-lg">{servico.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{servico.descricao}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de últimas notícias exclusivas */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Notícias Exclusivas para Associados</h2>
            <Button variant="outline" asChild>
              <Link href="/noticias?categoria=associados">Ver Todas</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticiasExclusivas.map((noticia) => (
              <Card key={noticia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      {noticia.categoria}
                    </span>
                    <span className="text-sm text-gray-500">{noticia.data}</span>
                  </div>
                  <CardTitle className="text-xl">{noticia.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{noticia.descricao}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/noticias/${noticia.id}`}>Ler mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de benefícios para associados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefícios de Ser Associado</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={24} />
                  Representação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A ASOF atua como representante dos interesses da categoria nos órgãos competentes, 
                  defendendo os direitos e promovendo a valorização da carreira.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="text-blue-600 mr-3" size={24} />
                  Rede de Contatos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Acesso à rede de contatos da ASOF, facilitando o intercâmbio e a colaboração 
                  entre Oficiais de Chancelaria em todo o mundo.
                </p>
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
                <p className="text-gray-700">
                  Informações privilegiadas sobre a gestão e decisões institucionais da carreira 
                  e da associação, com total transparência e acesso a documentos exclusivos.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="text-blue-600 mr-3" size={24} />
                  Eventos Exclusivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Participação em eventos, seminários e formações exclusivos para associados, 
                  com temas relevantes para a carreira e desenvolvimento profissional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de dúvidas frequentes */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dúvidas Frequentes</h2>
          
          <div className="space-y-4">
            {[
              { 
                pergunta: 'Como atualizo meus dados cadastrais?', 
                resposta: 'Você pode atualizar seus dados cadastrais acessando a seção "Editar Perfil" na área do associado.' 
              },
              { 
                pergunta: 'Como acesso documentos exclusivos?', 
                resposta: 'Documentos exclusivos estão disponíveis na área restrita, após autenticação.' 
              },
              { 
                pergunta: 'Como protocolo um novo requerimento?', 
                resposta: 'O protocolo de requerimentos pode ser feito através da seção "Protocolos e Requerimentos".' 
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
          <h2 className="text-3xl font-bold mb-4">Ainda não é Associado?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Participe da associação que representa e defende os interesses dos Oficiais de Chancelaria
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/associado/filiacao">Tornar-se Associado</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaAssociado;