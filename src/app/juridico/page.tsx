'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Award, Shield, Calendar, Mail, Download, BookOpen } from 'react-feather';

const ConsultoriaJuridica = () => {
  // Dados de exemplo para categorias jurídicas
  const categoriasJuridicas = [
    { id: 1, titulo: 'Direito Administrativo', total: 24 },
    { id: 2, titulo: 'Direito do Trabalho', total: 18 },
    { id: 3, titulo: 'Direito Internacional', total: 15 },
    { id: 4, titulo: 'Legislação de Carreira', total: 32 },
    { id: 5, titulo: 'Licitações e Contratos', total: 12 },
    { id: 6, titulo: 'Outros', total: 8 }
  ];

  // Dados de exemplo para orientações jurídicas recentes
  const orientacoesRecentes = [
    {
      id: 1,
      titulo: 'Procedimento para progressão na carreira de Oficial de Chancelaria',
      descricao: 'Orientações sobre os requisitos e processo para progressão funcional',
      categoria: 'Legislação de Carreira',
      data: '15 out 2025',
      tipo: 'Orientação'
    },
    {
      id: 2,
      titulo: 'Direitos dos servidores em caso de redistribuição',
      descricao: 'Diretrizes sobre direitos e garantias dos servidores redistribuídos',
      categoria: 'Direito Administrativo',
      data: '10 out 2025',
      tipo: 'Orientação'
    },
    {
      id: 3,
      titulo: 'Benefícios previdenciários para Oficiais de Chancelaria',
      descricao: 'Informações sobre direitos previdenciários e como solicitá-los',
      categoria: 'Direito do Trabalho',
      data: '5 out 2025',
      tipo: 'Orientação'
    },
    {
      id: 4,
      titulo: 'Análise da nova legislação sobre comissionados',
      descricao: 'Impactos da nova legislação sobre cargos comissionados no Itamaraty',
      categoria: 'Legislação de Carreira',
      data: '1 out 2025',
      tipo: 'Análise'
    }
  ];

  // Dados de exemplo para serviços jurídicos
  const servicosJuridicos = [
    { 
      id: 1, 
      titulo: 'Orientação Jurídica', 
      descricao: 'Orientação sobre direitos, deveres e procedimentos legais',
      icone: <FileText size={24} className="text-blue-600" />
    },
    { 
      id: 2, 
      titulo: 'Análise de Processos', 
      descricao: 'Análise detalhada de processos administrativos e judiciais',
      icone: <BookOpen size={24} className="text-green-600" />
    },
    { 
      id: 3, 
      titulo: 'Acompanhamento Processual', 
      descricao: 'Acompanhamento de processos em tribunais e órgãos administrativos',
      icone: <Shield size={24} className="text-purple-600" />
    },
    { 
      id: 4, 
      titulo: 'Revisão de Atos Administrativos', 
      descricao: 'Revisão de atos administrativos e defesa de interesses',
      icone: <Award size={24} className="text-yellow-600" />
    }
  ];

  // Dados de exemplo para equipe jurídica
  const equipeJuridica = [
    {
      id: 1,
      nome: 'Dr. Carlos Mendes',
      cargo: 'Coordenador Jurídico',
      especialidade: 'Direito Administrativo',
      formacao: 'Doutor em Direito Administrativo pela USP',
      contato: 'carlos.mendes@asof.org.br'
    },
    {
      id: 2,
      nome: 'Dra. Fernanda Oliveira',
      cargo: 'Advogada Sênior',
      especialidade: 'Direito do Trabalho',
      formacao: 'Mestre em Direito do Trabalho pela UnB',
      contato: 'fernanda.oliveira@asof.org.br'
    },
    {
      id: 3,
      nome: 'Dr. Roberto Santos',
      cargo: 'Consultor Internacional',
      especialidade: 'Direito Internacional',
      formacao: 'Doutor em Direito Internacional pela UFRJ',
      contato: 'roberto.santos@asof.org.br'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Consultoria Jurídica</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Orientações e consultoria jurídica especializada para associados da ASOF
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Consultoria Jurídica da ASOF</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Serviços jurídicos especializados para associados da ASOF
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sobre a Consultoria Jurídica</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A Consultoria Jurídica da ASOF oferece orientação e suporte jurídico especializado 
                aos associados da associação, com foco em questões relacionadas à carreira de 
                Oficial de Chancelaria e ao Serviço Exterior Brasileiro.
              </p>
              <p className="text-gray-700 mb-4">
                Nossa equipe de especialistas oferece orientações sobre direitos, deveres e 
                procedimentos legais, além de fornecer suporte em processos administrativos 
                e judiciais relacionados à carreira.
              </p>
              <p className="text-gray-700">
                Todos os serviços são oferecidos de forma confidencial e com total compromisso 
                com a ética profissional e os interesses dos associados.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de serviços jurídicos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicosJuridicos.map((servico) => (
              <Card key={servico.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="items-center text-center">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                    {servico.icone}
                  </div>
                  <CardTitle>{servico.titulo}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{servico.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de categorias jurídicas */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Categorias Jurídicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoriasJuridicas.map((categoria) => (
              <Card key={categoria.id} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{categoria.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold text-blue-600 mb-2">{categoria.total}</p>
                  <p className="text-gray-600">orientações disponíveis</p>
                  <Button variant="outline" className="mt-4" asChild>
                    <Link href={`/juridico/${categoria.id}`}>Explorar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de orientações recentes */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Orientações Recentes</h2>
            <Button variant="outline" asChild>
              <Link href="/juridico/consultas">Ver todas</Link>
            </Button>
          </div>
          
          <div className="space-y-6">
            {orientacoesRecentes.map((orientacao) => (
              <Card key={orientacao.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        {orientacao.categoria}
                      </span>
                      <span className="text-sm text-gray-500">{orientacao.data}</span>
                    </div>
                    <CardTitle className="text-lg">{orientacao.titulo}</CardTitle>
                    <CardDescription className="mt-2">{orientacao.descricao}</CardDescription>
                  </div>
                  <Button variant="outline" size="sm" className="ml-4" asChild>
                    <Link href={`/juridico/orientacoes/${orientacao.id}`}>Ler mais</Link>
                  </Button>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de equipe jurídica */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossa Equipe Jurídica</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {equipeJuridica.map((membro) => (
              <Card key={membro.id} className="text-center">
                <div className="bg-gray-200 border-2 border-dashed w-full h-48 mx-auto" />
                <CardHeader>
                  <CardTitle className="text-lg">{membro.nome}</CardTitle>
                  <CardDescription>{membro.cargo}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600 font-medium mb-2">{membro.especialidade}</p>
                  <p className="text-sm text-gray-700 mb-4">{membro.formacao}</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`mailto:${membro.contato}`}>Contatar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Como Acessar os Serviços</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Associados da ASOF podem acessar os serviços jurídicos da associação através 
                da área restrita do associado ou entrando em contato diretamente com nossa 
                equipe jurídica.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="/associado/juridico">Área do Associado</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contato?assunto=juridico">Contato Direto</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de base de conhecimento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Base de Conhecimento Jurídico</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Acesse nossa base de conhecimento com artigos, pareceres e orientações jurídicas
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="text-blue-600 mr-3" size={24} />
                  Artigos e Pareceres
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/juridico/artigos/direitos-servidores.pdf" className="text-blue-600 hover:underline">
                      Direitos dos Servidores no Exterior
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/juridico/artigos/progressao-carreira.pdf" className="text-blue-600 hover:underline">
                      Procedimento de Progressão na Carreira
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/juridico/artigos/estabilidade.pdf" className="text-blue-600 hover:underline">
                      Estabilidade no Serviço Público
                    </Link>
                  </li>
                </ul>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/juridico/artigos">Ver todos</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="text-blue-600 mr-3" size={24} />
                  Modelos e Formulários
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/juridico/modelos/requerimento.pdf" className="text-blue-600 hover:underline">
                      Requerimento Administrativo
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/juridico/modelos/recurso.pdf" className="text-blue-600 hover:underline">
                      Recurso Administrativo
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/juridico/modelos/peticao.pdf" className="text-blue-600 hover:underline">
                      Petição Inicial (modelo)
                    </Link>
                  </li>
                </ul>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/juridico/modelos">Ver todos</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Dúvidas Jurídicas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Nossa equipe jurídica está pronta para orientar você
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/associado/juridico">Acessar Área do Associado</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contato?assunto=juridico">Solicitar Orientação</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultoriaJuridica;