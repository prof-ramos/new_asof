'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, BookOpen, Award, MapPin, Globe, FileText, Calendar } from 'react-feather';

const Carreira = () => {
  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Carreira de Oficial de Chancelaria</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conheça a carreira que representa o Brasil nas relações internacionais
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">A Carreira de Oficial de Chancelaria</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A carreira de Oficial de Chancelaria é uma das mais importantes e prestigiadas do Serviço Exterior Brasileiro, 
              responsável pela representação do Brasil em todo o mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4 inline-block">
                  <Users size={32} />
                </div>
                <CardTitle>Número de Agentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-700">+1.200</p>
                <p className="text-gray-600 mt-2">Oficiais de Chancelaria atuando em todo o mundo</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4 inline-block">
                  <Globe size={32} />
                </div>
                <CardTitle>Presença Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-700">+160</p>
                <p className="text-gray-600 mt-2">Representações diplomáticas em todo o mundo</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="p-4 rounded-full bg-blue-100 text-blue-600 mb-4 inline-block">
                  <Award size={32} />
                </div>
                <CardTitle>Tradição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-blue-700">+200</p>
                <p className="text-gray-600 mt-2">Anos de tradição diplomática brasileira</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">O Que Faz um Oficial de Chancelaria?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                O Oficial de Chancelaria é o profissional responsável pela condução da política exterior do Brasil, 
                pela representação do país em negociações internacionais e pela prestação de serviços consulares 
                aos cidadãos brasileiros no exterior.
              </p>
              <p className="text-gray-700">
                Os Oficiais de Chancelaria atuam em diversas áreas, como:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Relações Bilaterais e Multilaterais</li>
                <li>Comércio Exterior e Negociações Comerciais</li>
                <li>Assuntos Consulares</li>
                <li>Questões Jurídicas Internacionais</li>
                <li>Promoção Comercial e Cultural</li>
                <li>Coordenação de Ações Humanitárias</li>
              </ul>
            </CardContent>
          </Card>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/carreira/processo-seletivo">Conheça o Processo Seletivo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de áreas de atuação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Áreas de Atuação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                titulo: 'Relações Bilaterais', 
                descricao: 'Atuação nas relações diplomáticas entre o Brasil e outros países',
                icone: <Globe size={24} />
              },
              { 
                titulo: 'Comércio Exterior', 
                descricao: 'Negociação de acordos comerciais e promoção de negócios internacionais',
                icone: <Briefcase size={24} />
              },
              { 
                titulo: 'Assuntos Consulares', 
                descricao: 'Atendimento a cidadãos brasileiros e estrangeiros em assuntos consulares',
                icone: <Users size={24} />
              },
              { 
                titulo: 'Questões Multilaterais', 
                descricao: 'Participação em organizações internacionais e fóruns multilaterais',
                icone: <Globe size={24} />
              }
            ].map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                    {area.icone}
                  </div>
                  <CardTitle>{area.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{area.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefícios da Carreira</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={24} />
                  Reconhecimento Internacional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Os Oficiais de Chancelaria representam o Brasil em mais de 160 representações diplomáticas, 
                  tendo papel fundamental nas relações internacionais do país e no fortalecimento da imagem 
                  do Brasil no exterior.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="text-blue-600 mr-3" size={24} />
                  Oportunidade de Vivência Internacional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A carreira oferece a oportunidade de vivência em diferentes países e culturas, 
                  enriquecendo a formação profissional e pessoal dos diplomatas brasileiros.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  Participação em Negociações Importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Os Oficiais de Chancelaria participam de negociações comerciais, tratados internacionais 
                  e acordos bilaterais e multilaterais de grande relevância para os interesses do Brasil.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="text-blue-600 mr-3" size={24} />
                  Atuação em Temas Estratégicos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A carreira permite atuação em temas estratégicos como clima, comércio, direitos humanos, 
                  segurança internacional e desenvolvimento sustentável.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de formação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Formação e Desenvolvimento</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A carreira oferece contínua atualização e capacitação profissional
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { titulo: 'Instituto Rio Branco', descricao: 'Formação inicial dos Oficiais de Chancelaria' },
              { titulo: 'Capacitações Contínuas', descricao: 'Programas de atualização e especialização' },
              { titulo: 'Intercâmbios', descricao: 'Oportunidades de intercâmbio com instituições internacionais' }
            ].map((formacao, index) => (
              <Card key={index} className="text-center p-6">
                <BookOpen size={32} className="text-blue-600 mx-auto mb-4" />
                <CardTitle className="mb-2">{formacao.titulo}</CardTitle>
                <p className="text-gray-600">{formacao.descricao}</p>
              </Card>
            ))}
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Programa de Desenvolvimento</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A carreira de Oficial de Chancelaria oferece um programa de desenvolvimento contínuo 
                que inclui treinamentos especializados, participação em eventos internacionais e 
                oportunidades de aprimoramento técnico e cultural.
              </p>
              <Button variant="outline" asChild>
                <Link href="/carreira/formacao">Conheça o Programa</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de depoimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Depoimentos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                nome: 'Ana Silva', 
                cargo: 'Oficial de Chancelaria Sênior',
                local: 'Embaixada do Brasil em Paris',
                texto: 'A carreira de Oficial de Chancelaria me proporcionou a oportunidade de representar o Brasil em importantes negociações internacionais e de viver experiências únicas em diferentes culturas.'
              },
              { 
                nome: 'Roberto Santos', 
                cargo: 'Cônsul-Geral',
                local: 'Consulado do Brasil em Miami',
                texto: 'A carreira oferece constante desafio intelectual e a oportunidade de contribuir para o fortalecimento das relações do Brasil com outros países.'
              }
            ].map((depoimento, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div className="ml-4">
                    <CardTitle className="text-lg">{depoimento.nome}</CardTitle>
                    <p className="text-gray-600">{depoimento.cargo}</p>
                    <p className="text-sm text-gray-500">{depoimento.local}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{depoimento.texto}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Torne-se um Oficial de Chancelaria</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Participe do concurso e faça parte da carreira que representa o Brasil no mundo
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/carreira/processo-seletivo">Concurso Público</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/carreira/beneficios">Benefícios</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carreira;