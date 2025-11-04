'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Award, Calendar, Eye, Shield, BookOpen } from 'react-feather';

const QuemSomos = () => {
  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Quem Somos</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Conheça a Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro
          </p>
        </div>
      </section>

      {/* Seção de Missão */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Missão</h2>
            <p className="text-lg text-gray-600 mb-8">
              Fortalecer a representação da carreira de Oficial de Chancelaria, promover o diálogo institucional 
              e defender os interesses dos oficiais de chancelaria do Serviço Exterior Brasileiro, 
              contribuindo para a excelência do Itamaraty e das relações internacionais do Brasil.
            </p>
            <div className="flex justify-center">
              <div className="p-3 rounded-full bg-blue-100 text-blue-600 inline-block">
                <Award size={48} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4 inline-block">
                  <Eye size={24} />
                </div>
                <CardTitle>Transparência</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compromisso com a transparência na prestação de contas e na gestão de recursos da associação.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4 inline-block">
                  <Shield size={24} />
                </div>
                <CardTitle>Representação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Representar institucionalmente os interesses da carreira de Oficial de Chancelaria.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4 inline-block">
                  <BookOpen size={24} />
                </div>
                <CardTitle>Capacitação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Promover a constante atualização e capacitação dos membros da carreira.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de História */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossa História</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64" />
              </div>
              <div className="md:w-1/2">
                <p className="text-gray-700 mb-4">
                  A Associação Nacional dos Oficiais de Chancelaria (ASOF) foi fundada em 1998 com o objetivo 
                  de representar e defender os interesses dos Oficiais de Chancelaria do Serviço Exterior Brasileiro.
                </p>
                <p className="text-gray-700 mb-4">
                  Desde sua criação, a ASOF tem atuado com empenho na defesa dos direitos e interesses 
                  dos membros da carreira, promovendo a valorização profissional e a melhoria das condições 
                  de trabalho dos diplomatas brasileiros.
                </p>
                <p className="text-gray-700">
                  A associação tem desempenhado papel fundamental na promoção do diálogo entre os associados, 
                  o Itamaraty e os demais órgãos governamentais, contribuindo para a melhoria contínua 
                  do Serviço Exterior Brasileiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Diretoria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Nossa Diretoria</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Conheça os membros da diretoria atual e seu papel na associação
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nome: 'José Silva', cargo: 'Presidente', imagem: 'https://via.placeholder.com/200x200' },
              { nome: 'Maria Oliveira', cargo: 'Vice-Presidente', imagem: 'https://via.placeholder.com/200x200' },
              { nome: 'Carlos Santos', cargo: 'Secretário-Geral', imagem: 'https://via.placeholder.com/200x200' },
              { nome: 'Ana Costa', cargo: 'Tesoureira', imagem: 'https://via.placeholder.com/200x200' },
            ].map((membro, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <CardHeader>
                  <CardTitle className="text-lg">{membro.nome}</CardTitle>
                  <CardDescription>{membro.cargo}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Documentos e Estatuto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Documentos Institucionais</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Acesse os documentos oficiais da associação
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                titulo: 'Estatuto da ASOF', 
                descricao: 'Documento que define as regras e estrutura da associação',
                icone: <FileText size={32} />,
                href: '/documentos/estatuto'
              },
              { 
                titulo: 'Regimento Interno', 
                descricao: 'Normas de funcionamento interno da associação',
                icone: <BookOpen size={32} />,
                href: '/documentos/regimento'
              },
              { 
                titulo: 'Atas de Reunião', 
                descricao: 'Atas das reuniões da diretoria e assembleias',
                icone: <Calendar size={32} />,
                href: '/transparencia/atas'
              }
            ].map((documento, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4 inline-block">
                    {documento.icone}
                  </div>
                  <CardTitle className="text-xl">{documento.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{documento.descricao}</p>
                  <div className="text-center">
                    <Button asChild variant="outline">
                      <Link href={documento.href}>Acessar Documento</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { titulo: 'Ética', descricao: 'Atuação com integridade e transparência nas ações institucionais' },
              { titulo: 'Comprometimento', descricao: 'Dedicação ao aprimoramento contínuo da carreira' },
              { titulo: 'Representatividade', descricao: 'Defesa dos interesses coletivos da categoria' },
              { titulo: 'Profissionalismo', descricao: 'Busca pela excelência nas relações institucionais' },
            ].map((valor, index) => (
              <Card key={index} className="text-center p-6">
                <Users size={32} className="text-blue-600 mx-auto mb-4" />
                <CardTitle className="mb-2">{valor.titulo}</CardTitle>
                <p className="text-gray-600">{valor.descricao}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Junte-se à ASOF</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Seja parte da associação que representa e defende os interesses dos Oficiais de Chancelaria
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

export default QuemSomos;