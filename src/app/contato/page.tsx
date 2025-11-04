'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Users, FileText, MessageSquare, Shield, Calendar } from 'react-feather';

const Contato = () => {
  // Dados de exemplo para contatos institucionais
  const contatosInstitucionais = [
    {
      id: 1,
      nome: 'Secretaria Executiva',
      cargo: 'Contato Geral',
      email: 'secretaria@asof.org.br',
      telefone: '(61) 3225-9191',
      descricao: 'Contato para assuntos administrativos e institucionais'
    },
    {
      id: 2,
      nome: 'Diretoria',
      cargo: 'Gestão 2023-2025',
      email: 'diretoria@asof.org.br',
      telefone: '(61) 3225-9192',
      descricao: 'Contato para assuntos de gestão e representação'
    },
    {
      id: 3,
      nome: 'Assuntos Jurídicos',
      cargo: 'Departamento Jurídico',
      email: 'juridico@asof.org.br',
      telefone: '(61) 3225-9193',
      descricao: 'Contato para assuntos jurídicos e consultoria'
    },
    {
      id: 4,
      nome: 'Relações Institucionais',
      cargo: 'Departamento de Relações',
      email: 'relacoes@asof.org.br',
      telefone: '(61) 3225-9194',
      descricao: 'Contato para assuntos institucionais e parcerias'
    }
  ];

  // Dados de exemplo para canais de comunicação
  const canaisComunicacao = [
    {
      id: 1,
      titulo: 'Sala de Imprensa',
      descricao: 'Para jornalistas e profissionais da mídia',
      icone: <Users size={24} />,
      href: '/imprensa',
      cor: 'blue'
    },
    {
      id: 2,
      titulo: 'Ouvidoria',
      descricao: 'Para sugestões, elogios e reclamações',
      icone: <MessageSquare size={24} />,
      href: '/ouvidoria',
      cor: 'green'
    },
    {
      id: 3,
      titulo: 'DPO - Encarregado de Dados',
      descricao: 'Para assuntos relacionados à LGPD',
      icone: <Shield size={24} />,
      href: '/dpo',
      cor: 'purple'
    },
    {
      id: 4,
      titulo: 'Eventos',
      descricao: 'Informações sobre próximos eventos',
      icone: <Calendar size={24} />,
      href: '/eventos',
      cor: 'yellow'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Fale Conosco</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Entre em contato com a ASOF e nossa diretoria para esclarecer dúvidas e obter informações
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossos Canais de Comunicação</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A ASOF disponibiliza diversos canais de comunicação para atender associados, 
              interessados e órgãos parceiros.
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Como nos Contatar</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A Associação Nacional dos Oficiais de Chancelaria (ASOF) está à disposição para 
                atender dúvidas, sugestões, elogios e reclamações de associados, candidatos a 
                concursos, órgãos governamentais e sociedade em geral.
              </p>
              <p className="text-gray-700">
                Utilize os canais mais adequados conforme sua necessidade específica.
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Horário de Atendimento</h3>
            <p className="text-gray-700 mb-4">
              Segunda a Sexta, das 9h às 17h
            </p>
            <p className="text-gray-600">
              (Exceto em feriados nacionais)
            </p>
          </div>
        </div>
      </section>

      {/* Seção de contatos institucionais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contatos Institucionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contatosInstitucionais.map((contato) => (
              <Card key={contato.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <CardTitle>{contato.nome}</CardTitle>
                    <CardDescription>{contato.cargo}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Mail size={16} className="mr-2" />
                      <span>{contato.email}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Phone size={16} className="mr-2" />
                      <span>{contato.telefone}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-3">{contato.descricao}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de endereço */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossa Sede</h2>
          
          <Card className="text-center p-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-blue-100 text-blue-600">
                <MapPin size={48} />
              </div>
            </div>
            <CardTitle className="text-2xl mb-4">Endereço</CardTitle>
            <p className="text-lg text-gray-700 mb-2">
              Safra Wing Plaza, 2º Andar, Torre A, Sala 230
            </p>
            <p className="text-gray-600 mb-6">
              Asa Norte, Brasília - DF, 70070-910
            </p>
            
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 mx-auto" />
          </Card>
        </div>
      </section>

      {/* Seção de canais de comunicação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Canais Específicos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {canaisComunicacao.map((canal) => (
              <Link 
                key={canal.id} 
                href={canal.href} 
                className="block group"
                aria-label={`Acessar ${canal.titulo}`}
              >
                <Card className="h-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group-hover:-translate-y-1">
                  <CardHeader className="flex items-center text-center">
                    <div className={`p-4 rounded-full bg-${canal.cor}-100 text-${canal.cor}-600 mb-4 group-hover:bg-${canal.cor}-200 transition-colors`}>
                      {canal.icone}
                    </div>
                    <CardTitle className="text-lg">{canal.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{canal.descricao}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de formulário de contato */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Formulário de Contato</h2>
          
          <Card>
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 48 horas úteis
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
                  <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Assunto da mensagem"
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
                    <option>Associado</option>
                    <option>Candidato a Concurso</option>
                    <option>Imprensa</option>
                    <option>Órgão Público</option>
                    <option>Outros</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Sua mensagem"
                  ></textarea>
                </div>
                
                <div>
                  <Button className="w-full" type="submit">
                    Enviar Mensagem
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de ouvidoria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Ouvidoria</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Canal independente para sugestões, elogios, reclamações e denúncias
          </p>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Sobre a Ouvidoria</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A Ouvidoria da ASOF é um canal independente que atua como interface entre a associação 
                e os cidadãos, visando à melhoria contínua dos serviços prestados e à transparência 
                institucional.
              </p>
              <p className="text-gray-700 mb-6">
                A Ouvidoria é responsável por receber, analisar e encaminhar as manifestações dos 
                cidadãos, bem como por acompanhar as respostas fornecidas pelos órgãos e entidades 
                responsáveis.
              </p>
              <div className="flex justify-center">
                <Button asChild>
                  <Link href="/ouvidoria">Acessar Ouvidoria</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Outros Canais de Comunicação</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Acesse nossos perfis nas redes sociais
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="https://facebook.com/asofbrasil">Facebook</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="https://twitter.com/asofbrasil">Twitter</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="https://instagram.com/asofbrasil">Instagram</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;