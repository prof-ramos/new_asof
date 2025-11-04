'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Mail, Phone, MapPin, Calendar, Award } from 'react-feather';

const Diretoria = () => {
  // Dados de exemplo para membros da diretoria
  const membrosDiretoria = [
    {
      id: 1,
      nome: 'José Silva',
      cargo: 'Presidente',
      periodo: '2023-2025',
      biografia: 'Oficial de Chancelaria com mais de 20 anos de experiência no Itamaraty. Atuou em diversas representações diplomáticas.',
      foto: 'https://via.placeholder.com/300x300',
      email: 'presidente@asof.org.br',
      telefone: '+55 61 99999-9999'
    },
    {
      id: 2,
      nome: 'Maria Oliveira',
      cargo: 'Vice-Presidente',
      periodo: '2023-2025',
      biografia: 'Especialista em relações internacionais com ênfase em comércio exterior. Participou de importantes negociações comerciais.',
      foto: 'https://via.placeholder.com/300x300',
      email: 'vice@asof.org.br',
      telefone: '+55 61 99999-9998'
    },
    {
      id: 3,
      nome: 'Carlos Santos',
      cargo: 'Secretário-Geral',
      periodo: '2023-2025',
      biografia: 'Responsável por coordenações setoriais no Itamaraty. Especialista em direito internacional.',
      foto: 'https://via.placeholder.com/300x300',
      email: 'secretario@asof.org.br',
      telefone: '+55 61 99999-9997'
    },
    {
      id: 4,
      nome: 'Ana Costa',
      cargo: 'Tesoureira',
      periodo: '2023-2025',
      biografia: 'Experiente na gestão financeira de organizações internacionais. Atuou em missões de paz da ONU.',
      foto: 'https://via.placeholder.com/300x300',
      email: 'tesoureira@asof.org.br',
      telefone: '+55 61 99999-9996'
    },
    {
      id: 5,
      nome: 'Roberto Almeida',
      cargo: 'Diretor de Assuntos Jurídicos',
      periodo: '2023-2025',
      biografia: 'Especialista em direito internacional público e diplomático em diversos países.',
      foto: 'https://via.placeholder.com/300x300',
      email: 'juridico@asof.org.br',
      telefone: '+55 61 99999-9995'
    },
    {
      id: 6,
      nome: 'Fernanda Lima',
      cargo: 'Diretora de Relações Institucionais',
      periodo: '2023-2025',
      biografia: 'Com extensa experiência em relações com governos e organizações internacionais.',
      foto: 'https://via.placeholder.com/300x300',
      email: 'relacoes@asof.org.br',
      telefone: '+55 61 99999-9994'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossa Diretoria</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Conheça os membros da diretoria atual e sua atuação na ASOF
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Gestão 2023-2025</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A diretoria atual está comprometida com a representação eficaz dos interesses dos Oficiais de Chancelaria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membrosDiretoria.map((membro) => (
              <Card key={membro.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 border-2 border-dashed w-full h-64" />
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{membro.nome}</CardTitle>
                  <CardDescription className="font-semibold text-blue-700">{membro.cargo}</CardDescription>
                  <p className="text-sm text-gray-500">Gestão: {membro.periodo}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700 mb-4 text-sm">{membro.biografia}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-gray-600">
                      <Mail size={16} className="mr-2" />
                      <span className="text-sm">{membro.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Phone size={16} className="mr-2" />
                      <span className="text-sm">{membro.telefone}</span>
                    </div>
                  </div>
                  
                  <Button 
                    asChild 
                    variant="outline" 
                    className="mt-4 w-full"
                    aria-label={`Contatar ${membro.nome}`}
                  >
                    <Link href={`mailto:${membro.email}`}>Contatar</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Conquistas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Principais Conquistas da Gestão</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                titulo: 'Modernização do Portal', 
                descricao: 'Implementação do novo portal institucional com recursos avançados para associados',
                icone: <Award size={32} className="text-blue-600" />
              },
              { 
                titulo: 'Defesa de Direitos', 
                descricao: 'Atuação efetiva na defesa dos direitos e interesses dos Oficiais de Chancelaria',
                icone: <Shield size={32} className="text-blue-600" />
              },
              { 
                titulo: 'Eventos Técnicos', 
                descricao: 'Realização de eventos técnicos e seminários sobre temas relevantes para a carreira',
                icone: <Calendar size={32} className="text-blue-600" />
              },
              { 
                titulo: 'Relações Institucionais', 
                descricao: 'Fortalecimento das relações com o Itamaraty e outros órgãos governamentais',
                icone: <Users size={32} className="text-blue-600" />
              }
            ].map((conquista, index) => (
              <Card key={index} className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">
                    {conquista.icone}
                  </div>
                  <CardTitle className="text-lg mb-2">{conquista.titulo}</CardTitle>
                  <p className="text-gray-600">{conquista.descricao}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Mandato e Atuação */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nossa Atuação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { titulo: 'Representação', descricao: 'Atuação como porta-voz dos Oficiais de Chancelaria' },
              { titulo: 'Defesa', descricao: 'Defesa dos direitos e interesses da categoria' },
              { titulo: 'Capacitação', descricao: 'Promoção de eventos de capacitação e atualização' }
            ].map((atividade, index) => (
              <Card key={index} className="text-center p-6">
                <Users size={32} className="text-blue-600 mx-auto mb-4" />
                <CardTitle className="mb-2">{atividade.titulo}</CardTitle>
                <p className="text-gray-600">{atividade.descricao}</p>
              </Card>
            ))}
          </div>
          
          <div className="bg-blue-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Composição da Diretoria</h3>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              A diretoria da ASOF é composta por Oficiais de Chancelaria experientes e comprometidos 
              com a representação eficaz dos interesses da categoria.
            </p>
            <Button asChild>
              <Link href="/documentos/estatuto">Ver Composição Completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contate a Diretoria</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Entre em contato com os membros da diretoria para assuntos relevantes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contato">Fale Conosco</Link>
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

export default Diretoria;