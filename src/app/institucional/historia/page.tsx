'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Award, Calendar, Shield } from 'react-feather';

const Historia = () => {
  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Nossa História</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            A trajetória da Associação Nacional dos Oficiais de Chancelaria desde a sua fundação
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              A Associação Nacional dos Oficiais de Chancelaria (ASOF) foi fundada em 1998 com o objetivo 
              de representar e defender os interesses dos Oficiais de Chancelaria do Serviço Exterior Brasileiro. 
              Desde sua criação, a ASOF tem atuado com empenho na defesa dos direitos e interesses dos membros da carreira, 
              promovendo a valorização profissional e a melhoria das condições de trabalho dos diplomatas brasileiros.
            </p>
            
            <p className="mb-6">
              A associação tem desempenhado papel fundamental na promoção do diálogo entre os associados, 
              o Itamaraty e os demais órgãos governamentais, contribuindo para a melhoria contínua 
              do Serviço Exterior Brasileiro.
            </p>
          </div>
        </div>
      </section>

      {/* Seção de marcos históricos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Marcos Históricos</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* Linha do tempo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { ano: '1998', titulo: 'Fundação da ASOF', descricao: 'A ASOF foi oficialmente fundada com o objetivo de representar os interesses dos Oficiais de Chancelaria' },
                { ano: '2005', titulo: 'Primeira Convenção', descricao: 'Realização da primeira convenção nacional da ASOF, com participação de associados de todo o Brasil' },
                { ano: '2010', titulo: 'Expansão Nacional', descricao: 'A associação alcançou representatividade em todos os estados brasileiros' },
                { ano: '2015', titulo: 'Modernização', descricao: 'Implantação de plataforma digital para melhor atendimento aos associados' },
                { ano: '2020', titulo: 'Nova Gestão', descricao: 'Eleição de nova diretoria com foco em inovação e representatividade' },
                { ano: '2025', titulo: 'Portal Digital', descricao: 'Lançamento do novo portal institucional da ASOF com recursos avançados para associados' },
              ].map((marco, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12 text-left'}`}>
                    <Card className="border-blue-200 border-2 hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-blue-700">{marco.ano}</CardTitle>
                        <CardDescription className="text-lg">{marco.titulo}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{marco.descricao}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold border-4 border-white shadow-lg z-10">
                      {marco.ano}
                    </div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 text-right'}`}>
                    {index % 2 === 0 ? (
                      <div className="hidden md:block">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                      </div>
                    ) : (
                      <div className="hidden md:block">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção sobre a importância */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">A Importância da ASOF</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-2" size={24} />
                  Representação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A ASOF atua como porta-voz dos Oficiais de Chancelaria nas discussões sobre políticas públicas, 
                  direitos trabalhistas e desenvolvimento institucional.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="text-blue-600 mr-2" size={24} />
                  Valorização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A associação promove iniciativas que valorizam a carreira de Oficial de Chancelaria e 
                  reconhecem o papel fundamental dos diplomatas brasileiros.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Ao longo de mais de duas décadas, a ASOF tem sido uma voz ativa na defesa dos interesses 
              dos Oficiais de Chancelaria, contribuindo para a manutenção da excelência do Serviço Exterior Brasileiro.
            </p>
            
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/institucional/quem-somos">Conheça Mais</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Faça Parte da Nossa História</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Junte-se à ASOF e contribua para o fortalecimento da carreira de Oficial de Chancelaria
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

export default Historia;