'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Clock, Users, Award, Download } from 'react-feather';

const Eventos = () => {
  // Dados de exemplo para próximos eventos
  const proximosEventos = [
    {
      id: 1,
      titulo: 'Seminário Internacional de Relações Exteriores',
      descricao: 'Análise das tendências atuais e desafios da diplomacia no cenário global',
      data: '15 a 17 de novembro de 2025',
      hora: '09:00 - 17:00',
      local: 'Centro Internacional de Convenções do Brasil - Brasília',
      categoria: 'Seminário',
      tags: ['Diplomacia', 'Internacional', 'Carreira'],
      inscricoes: true
    },
    {
      id: 2,
      titulo: 'Workshop: Gestão de Crises Diplomáticas',
      descricao: 'Capacitação prática para Oficiais de Chancelaria em situações de crise internacional',
      data: '22 de novembro de 2025',
      hora: '09:00 - 16:00',
      local: 'Instituto Rio Branco - Brasília',
      categoria: 'Workshop',
      tags: ['Capacitação', 'Gestão', 'Crises'],
      inscricoes: true
    },
    {
      id: 3,
      titulo: 'Confraternização de Associados',
      descricao: 'Evento de confraternização entre associados e suas famílias',
      data: '10 de dezembro de 2025',
      hora: '19:00 - 23:00',
      local: 'Clube do Itamaraty - Brasília',
      categoria: 'Social',
      tags: ['Associados', 'Confraternização'],
      inscricoes: true
    }
  ];

  // Dados de exemplo para eventos passados
  const eventosPassados = [
    {
      id: 1,
      titulo: 'Congresso Nacional de Representação Diplomática',
      descricao: 'Análise do papel do Brasil nas organizações internacionais',
      data: '15 a 18 de setembro de 2025',
      local: 'São Paulo Expo',
      certificado: true
    },
    {
      id: 2,
      titulo: 'Fórum de Comércio Exterior',
      descricao: 'Negociações e acordos comerciais no contexto atual',
      data: '5 a 7 de agosto de 2025',
      local: 'Centro de Convenções da ABDE - Rio de Janeiro',
      certificado: true
    },
    {
      id: 3,
      titulo: 'Ciclo de Palestras sobre Clima e Diplomacia',
      descricao: 'Impacto das mudanças climáticas nas relações internacionais',
      data: '12 a 14 de julho de 2025',
      local: 'Universidade de Brasília',
      certificado: true
    }
  ];

  // Dados de exemplo para categorias de eventos
  const categoriasEventos = [
    { id: 1, nome: 'Todos', total: 18 },
    { id: 2, nome: 'Seminários', total: 6 },
    { id: 3, nome: 'Workshops', total: 5 },
    { id: 4, nome: 'Conferências', total: 4 },
    { id: 5, nome: 'Cursos', total: 3 },
    { id: 6, nome: 'Eventos Sociais', total: 4 }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Eventos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Acompanhe os próximos eventos e atividades promovidas pela ASOF
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Calendário de Eventos</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Seminários, workshops, conferências e eventos sociais para associados e interessados
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sobre os Eventos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A ASOF promove regularmente eventos técnicos, acadêmicos e sociais com o objetivo 
                de fomentar o debate, a troca de conhecimentos e o fortalecimento da comunidade 
                de Oficiais de Chancelaria.
              </p>
              <p className="text-gray-700">
                Nossos eventos abrangem diversos temas relevantes para a carreira e para as 
                relações internacionais do Brasil, contando com a participação de especialistas 
                renomados e autoridades do setor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de próximos eventos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
            <h2 className="text-3xl font-bold text-gray-800">Próximos Eventos</h2>
            
            <div className="flex flex-wrap gap-2">
              {categoriasEventos.map((categoria) => (
                <Button 
                  key={categoria.id} 
                  variant={categoria.id === 1 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {categoria.nome} ({categoria.total})
                </Button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {proximosEventos.map((evento) => (
              <Card key={evento.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      {evento.categoria}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{evento.descricao}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={16} className="mr-2" />
                      <span>{evento.data}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Clock size={16} className="mr-2" />
                      <span>{evento.hora}</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <MapPin size={16} className="mr-2 mt-0.5" />
                      <span>{evento.local}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {evento.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1" asChild>
                      <Link href={`/eventos/${evento.id}`}>Mais Informações</Link>
                    </Button>
                    {evento.inscricoes && (
                      <Button className="flex-1" variant="outline" asChild>
                        <Link href={`/eventos/${evento.id}/inscricao`}>Inscrever-se</Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de agenda */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Agenda Completa</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-3 px-6 text-left text-gray-700">Data</th>
                  <th className="py-3 px-6 text-left text-gray-700">Evento</th>
                  <th className="py-3 px-6 text-left text-gray-700">Local</th>
                  <th className="py-3 px-6 text-left text-gray-700">Categoria</th>
                  <th className="py-3 px-6 text-left text-gray-700">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {proximosEventos.map((evento) => (
                  <tr key={evento.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-gray-500" />
                        {evento.data}
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="font-medium">{evento.titulo}</div>
                      <div className="text-sm text-gray-600">{evento.descricao}</div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-start">
                        <MapPin size={16} className="mr-2 mt-0.5 text-gray-500 flex-shrink-0" />
                        <span>{evento.local}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                        {evento.categoria}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex flex-col gap-2">
                        <Button size="sm" variant="outline" asChild>
                          <Link href={`/eventos/${evento.id}`}>Detalhes</Link>
                        </Button>
                        {evento.inscricoes && (
                          <Button size="sm" asChild>
                            <Link href={`/eventos/${evento.id}/inscricao`}>Inscrever-se</Link>
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Seção de eventos passados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Eventos Anteriores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventosPassados.map((evento) => (
              <Card key={evento.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <CardHeader>
                  <CardTitle className="text-xl">{evento.titulo}</CardTitle>
                  <CardDescription>{evento.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-700">
                      <Calendar size={16} className="mr-2" />
                      <span>{evento.data}</span>
                    </div>
                    <div className="flex items-start text-gray-700">
                      <MapPin size={16} className="mr-2 mt-0.5" />
                      <span>{evento.local}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/eventos/${evento.id}`}>Ver Detalhes</Link>
                    </Button>
                    {evento.certificado && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/eventos/${evento.id}/certificado`}>
                          <Award size={16} className="mr-1" />
                          Certificado
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/eventos/anteriores">Ver Todos os Eventos Anteriores</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de newsletter de eventos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-center">Fique por Dentro dos Eventos</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-700 mb-6">
                Inscreva-se em nossa newsletter para receber informações sobre eventos futuros
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="Endereço de e-mail para newsletter de eventos"
                />
                <Button type="button" className="bg-blue-600 text-white hover:bg-blue-700">
                  Inscrever-se
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Deseja Organizar um Evento?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            A ASOF apoia iniciativas de associados para realização de eventos técnicos e culturais
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contato?assunto=evento">Propor Evento</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/documentos/eventos/guia-realizacao-eventos.pdf" target="_blank">
                <Download size={20} className="mr-2" />
                Guia de Realização
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;