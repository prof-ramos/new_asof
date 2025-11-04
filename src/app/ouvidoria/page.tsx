'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Users, Shield, FileText, Download, Eye, Award, Calendar } from 'react-feather';

const Ouvidoria = () => {
  // Dados de exemplo para tipos de manifestação
  const tiposManifestacao = [
    { 
      id: 1, 
      titulo: 'Sugestão', 
      descricao: 'Contribua com ideias para melhorar nossos serviços e processos',
      icone: <MessageSquare size={24} className="text-blue-600" />
    },
    { 
      id: 2, 
      titulo: 'Elogio', 
      descricao: 'Reconheça o bom atendimento ou serviço prestado',
      icone: <Award size={24} className="text-green-600" />
    },
    { 
      id: 3, 
      titulo: 'Reclamação', 
      descricao: 'Registre sua insatisfação com nossos serviços',
      icone: <Shield size={24} className="text-yellow-600" />
    },
    { 
      id: 4, 
      titulo: 'Denúncia', 
      descricao: 'Comunique irregularidades ou situações inadequadas',
      icone: <FileText size={24} className="text-red-600" />
    }
  ];

  // Dados de exemplo para canais de atendimento
  const canaisAtendimento = [
    { 
      id: 1, 
      titulo: 'Formulário Online', 
      descricao: 'Preencha o formulário disponível na página',
      tempoResposta: 'Até 48 horas úteis'
    },
    { 
      id: 2, 
      titulo: 'E-mail', 
      descricao: 'Envie sua manifestação para ouvidoria@asof.org.br',
      tempoResposta: 'Até 72 horas úteis'
    },
    { 
      id: 3, 
      titulo: 'Presencial', 
      descricao: 'Realize sua manifestação em nossa sede em Brasília',
      tempoResposta: 'Imediato'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ouvidoria</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Canal independente para sugestões, elogios, reclamações e denúncias
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Ouvidoria</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Canal independente que atua como interface entre a ASOF e os cidadãos
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sobre a Ouvidoria</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A Ouvidoria da ASOF é um canal independente que atua como interface entre a associação 
                e os cidadãos, visando à melhoria contínua dos serviços prestados e à transparência 
                institucional.
              </p>
              <p className="text-gray-700 mb-4">
                A Ouvidoria é responsável por receber, analisar e encaminhar as manifestações dos 
                cidadãos, bem como por acompanhar as respostas fornecidas pelos órgãos e entidades 
                responsáveis.
              </p>
              <p className="text-gray-700">
                Todas as manifestações são tratadas com confidencialidade e sigilo, garantindo a 
                proteção da identidade dos manifestantes, conforme previsto na Lei Geral de Proteção 
                de Dados (LGPD).
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Princípios da Ouvidoria</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <Shield size={32} className="text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium">Imparcialidade</h4>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <Eye size={32} className="text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium">Transparência</h4>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <Award size={32} className="text-blue-600 mx-auto mb-2" />
                <h4 className="font-medium">Ética</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de tipos de manifestação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Tipos de Manifestação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tiposManifestacao.map((tipo) => (
              <Card key={tipo.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex items-center text-center">
                  <div className="mb-4">
                    {tipo.icone}
                  </div>
                  <CardTitle>{tipo.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{tipo.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de como fazer uma manifestação */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Como Fazer uma Manifestação</h2>
          
          <div className="space-y-8">
            {[
              { 
                titulo: 'Escolha o Tipo de Manifestação', 
                descricao: 'Selecione o tipo mais adequado: sugestão, elogio, reclamação ou denúncia',
                icone: <MessageSquare size={24} className="text-blue-600" />
              },
              { 
                titulo: 'Acesse o Canal de Atendimento', 
                descricao: 'Utilize um dos canais de atendimento disponíveis',
                icone: <Users size={24} className="text-green-600" />
              },
              { 
                titulo: 'Preencha os Dados Solicitados', 
                descricao: 'Forneça informações claras e completas sobre sua manifestação',
                icone: <FileText size={24} className="text-purple-600" />
              },
              { 
                titulo: 'Acompanhe o Andamento', 
                descricao: 'Receba atualizações sobre o tratamento da sua manifestação',
                icone: <Calendar size={24} className="text-indigo-600" />
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

      {/* Seção de canais de atendimento */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Canais de Atendimento</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {canaisAtendimento.map((canal) => (
              <Card key={canal.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{canal.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{canal.descricao}</p>
                  <p className="text-sm text-gray-500">Tempo de resposta: {canal.tempoResposta}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de formulário de ouvidoria */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Formulário de Manifestação</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Envie sua Manifestação</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo para registrar sua manifestação
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      placeholder="seu.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de Manifestação
                  </label>
                  <select
                    id="tipo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="elogio">Elogio</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="denuncia">Denúncia</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Assunto da manifestação"
                  />
                </div>
                
                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">
                    Categoria
                  </label>
                  <select
                    id="categoria"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecione a categoria</option>
                    <option value="associado">Associado</option>
                    <option value="candidato">Candidato a Concurso</option>
                    <option value="servico">Serviço Prestado</option>
                    <option value="processo">Processo Administrativo</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Descrição da Manifestação
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Descreva sua manifestação com todos os detalhes pertinentes"
                  ></textarea>
                </div>
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="anonimato"
                      type="checkbox"
                      className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="anonimato" className="font-medium text-gray-700">
                      Solicito tratamento anônimo da manifestação (identidade protegida)
                    </label>
                  </div>
                </div>
                
                <div>
                  <Button className="w-full" type="submit">
                    Enviar Manifestação
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de transparência */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Transparência e Relatórios</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Acompanhe as manifestações recebidas e ações tomadas
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  Relatórios da Ouvidoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/documentos/ouvidoria/relatorio-2024.pdf" className="text-blue-600 hover:underline">
                      Relatório Anual 2024
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/documentos/ouvidoria/relatorio-2023.pdf" className="text-blue-600 hover:underline">
                      Relatório Anual 2023
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <FileText size={16} className="text-blue-600 mr-2" />
                    <Link href="/documentos/ouvidoria/relatorio-trimestral.pdf" className="text-blue-600 hover:underline">
                      Relatório Trimestral
                    </Link>
                  </li>
                </ul>
                <Button className="mt-4" variant="outline" asChild>
                  <Link href="/documentos/ouvidoria">
                    <Download size={16} className="mr-2" />
                    Todos os Relatórios
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="text-blue-600 mr-3" size={24} />
                  Acompanhamento de Manifestações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Acompanhe o status de sua manifestação ou visualize estatísticas gerais 
                  sobre as manifestações recebidas e resolvidas.
                </p>
                <div className="space-y-3">
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/ouvidoria/acompanhar">Acompanhar Manifestação</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/ouvidoria/estatisticas">Estatísticas Gerais</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Fale com a Ouvidoria</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Sua opinião é importante para a melhoria contínua da ASOF
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/ouvidoria">Registrar Manifestação</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contato">Outros Canais</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ouvidoria;