'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'react-feather';

const Concursos = () => {
  // Dados de exemplo para concursos ativos
  const concursosAtivos = [
    {
      id: 1,
      titulo: 'Concurso para Oficial de Chancelaria 2025',
      status: 'Inscrições abertas',
      dataInscricoes: '15/03/2025 a 15/04/2025',
      edital: 'Edital 001/2025',
      vagas: 20,
      valorInscricao: 'R$ 180,00',
      cor: 'green'
    },
    {
      id: 2,
      titulo: 'Concurso para Assistente de Chancelaria 2025',
      status: 'Previsto',
      dataInscricoes: 'Junho/2025',
      edital: 'Em breve',
      vagas: 40,
      valorInscricao: 'Em breve',
      cor: 'yellow'
    }
  ];

  // Dados de exemplo para concursos finalizados
  const concursosFinalizados = [
    {
      id: 1,
      titulo: 'Concurso para Oficial de Chancelaria 2024',
      status: 'Finalizado',
      dataInscricoes: 'Fechadas',
      edital: 'Edital 001/2024',
      vagas: 15,
      inscritos: 3245,
      aprovados: 15
    },
    {
      id: 2,
      titulo: 'Concurso para Assistente de Chancelaria 2024',
      status: 'Finalizado',
      dataInscricoes: 'Fechadas',
      edital: 'Edital 002/2024',
      vagas: 30,
      inscritos: 8932,
      aprovados: 30
    }
  ];

  // Dados de exemplo para etapas do concurso
  const etapasConcurso = [
    { id: 1, nome: 'Provas Objetivas', descricao: 'Provas objetivas de conhecimentos gerais e específicos', data: '15/05/2025', status: 'agendada' },
    { id: 2, nome: 'Provas Discursivas', descricao: 'Provas discursivas de conhecimentos específicos', data: '22/05/2025', status: 'agendada' },
    { id: 3, nome: 'Prova de Língua Estrangeira', descricao: 'Prova de proficiência em língua estrangeira', data: '29/05/2025', status: 'agendada' },
    { id: 4, nome: 'Arguição Pública', descricao: 'Defesa pública de tese perante banca examinadora', data: '10/06/2025', status: 'pendente' },
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Concursos e Seleções</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Informações sobre concursos públicos para ingresso na carreira de Oficial de Chancelaria
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Processo Seletivo para a Carreira</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              O ingresso na carreira de Oficial de Chancelaria é realizado por meio de concursos públicos 
              altamente concorridos, que avaliam conhecimentos técnicos, culturais e habilidades essenciais 
              para a atuação diplomática.
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sobre os Concursos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Os concursos para a carreira de Oficial de Chancelaria são organizados pelo Instituto Rio Branco 
                e seguem um processo seletivo rigoroso, composto por várias etapas que avaliam tanto conhecimentos 
                específicos quanto habilidades necessárias para a atuação diplomática.
              </p>
              <p className="text-gray-700">
                O cargo de Oficial de Chancelaria é de nível superior e exige formação em qualquer área de estudo, 
                com especialização obrigatória no Instituto Rio Branco após a aprovação no concurso.
              </p>
            </CardContent>
          </Card>

          <div className="text-center mb-12">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/carreira/processo-seletivo">Edital Completo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de concursos ativos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Concursos Ativos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concursosAtivos.map((concurso) => (
              <Card key={concurso.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{concurso.titulo}</CardTitle>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      concurso.cor === 'green' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {concurso.status}
                    </span>
                  </div>
                  <CardDescription>Edital: {concurso.edital}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Período de Inscrições:</span>
                      <span className="font-medium">{concurso.dataInscricoes}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vagas:</span>
                      <span className="font-medium">{concurso.vagas}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Taxa de Inscrição:</span>
                      <span className="font-medium">{concurso.valorInscricao}</span>
                    </div>
                    <div className="pt-4">
                      <Button className="w-full" asChild>
                        <Link href={`/concursos/${concurso.id}`}>Inscreva-se</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de etapas do concurso */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Etapas do Concurso</h2>
          
          <div className="space-y-6">
            {etapasConcurso.map((etapa) => (
              <Card key={etapa.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className={`p-2 rounded-full ${
                        etapa.status === 'agendada' ? 'bg-blue-100 text-blue-600' : 
                        etapa.status === 'pendente' ? 'bg-yellow-100 text-yellow-600' : 
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {etapa.status === 'agendada' ? <Clock size={20} /> : 
                         etapa.status === 'pendente' ? <Clock size={20} /> : 
                         <CheckCircle size={20} />}
                      </div>
                      <div className="ml-4">
                        <CardTitle className="text-xl">{etapa.nome}</CardTitle>
                        <CardDescription>{etapa.descricao}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{etapa.data}</p>
                      <p className={`text-sm ${
                        etapa.status === 'agendada' ? 'text-blue-600' : 
                        etapa.status === 'pendente' ? 'text-yellow-600' : 
                        'text-green-600'
                      }`}>
                        {etapa.status === 'agendada' ? 'Agendada' : 
                         etapa.status === 'pendente' ? 'Pendente' : 
                         'Concluída'}
                      </p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de concursos anteriores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Concursos Anteriores</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left text-gray-700">Concurso</th>
                  <th className="py-3 px-6 text-left text-gray-700">Edital</th>
                  <th className="py-3 px-6 text-left text-gray-700">Vagas</th>
                  <th className="py-3 px-6 text-left text-gray-700">Inscritos</th>
                  <th className="py-3 px-6 text-left text-gray-700">Aprovados</th>
                  <th className="py-3 px-6 text-left text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {concursosFinalizados.map((concurso) => (
                  <tr key={concurso.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">{concurso.titulo}</td>
                    <td className="py-4 px-6">{concurso.edital}</td>
                    <td className="py-4 px-6">{concurso.vagas}</td>
                    <td className="py-4 px-6">{concurso.inscritos?.toLocaleString('pt-BR')}</td>
                    <td className="py-4 px-6">{concurso.aprovados}</td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                        {concurso.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seção de preparação */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Como se Preparar</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Dicas e recursos para se preparar para o concurso de Oficial de Chancelaria
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                titulo: 'Programa de Provas', 
                descricao: 'Confira o programa completo das provas do concurso',
                icone: <BookOpen size={32} />
              },
              { 
                titulo: 'Bibliografia', 
                descricao: 'Conheça a bibliografia recomendada para o concurso',
                icone: <FileText size={32} />
              },
              { 
                titulo: 'Questões Anteriores', 
                descricao: 'Acesse as provas dos concursos anteriores',
                icone: <CheckCircle size={32} />
              }
            ].map((recurso, index) => (
              <Card key={index} className="text-center p-6">
                <div className="mb-4 mx-auto">
                  {recurso.icone}
                </div>
                <CardTitle className="mb-2">{recurso.titulo}</CardTitle>
                <p className="text-gray-600">{recurso.descricao}</p>
                <Button variant="outline" className="mt-4" asChild>
                  <Link href={`/concursos/preparacao/${index + 1}`}>Acessar</Link>
                </Button>
              </Card>
            ))}
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Dicas de Preparação</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Mantenha-se atualizado sobre os assuntos nacionais e internacionais</li>
                <li>Domine os principais idiomas estrangeiros (inglês e espanhol)</li>
                <li>Estude a fundo a história diplomática do Brasil</li>
                <li>Pratique a escrita discursiva e a argumentação</li>
                <li>Entenda a estrutura e as funções do Serviço Exterior Brasileiro</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Prepare-se para o Concurso</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Acesse todos os recursos necessários para sua aprovação
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/concursos/material">Material de Estudo</Link>
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

export default Concursos;