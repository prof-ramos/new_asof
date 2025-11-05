'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, BookOpen, Users, Award } from 'react-feather';

const Estatuto = () => {
  // Dados de exemplo para seções do estatuto
  const secoesEstatuto = [
    {
      id: 1,
      titulo: 'Capítulo I - Da Denominação, Sede e Foro',
      descricao: 'Define a denominação, sede e foro da associação',
      artigos: 3
    },
    {
      id: 2,
      titulo: 'Capítulo II - Dos Objetivos',
      descricao: 'Estabelece os objetivos da associação',
      artigos: 5
    },
    {
      id: 3,
      titulo: 'Capítulo III - Dos Sócios',
      descricao: 'Define as categorias de sócios e seus direitos e deveres',
      artigos: 8
    },
    {
      id: 4,
      titulo: 'Capítulo IV - Do Patrimônio e da Administração',
      descricao: 'Define o patrimônio e as formas de administração da associação',
      artigos: 6
    },
    {
      id: 5,
      titulo: 'Capítulo V - Dos Órgãos da Associação',
      descricao: 'Define os órgãos deliberativos e administrativos da associação',
      artigos: 12
    },
    {
      id: 6,
      titulo: 'Capítulo VI - Das Disposições Gerais',
      descricao: 'Contém disposições gerais e regras finais',
      artigos: 4
    }
  ];

  // Dados de exemplo para documentos complementares
  const documentosComplementares = [
    {
      id: 1,
      titulo: 'Regimento Interno',
      descricao: 'Normas complementares ao estatuto social',
      tipo: 'PDF',
      tamanho: '2.4 MB'
    },
    {
      id: 2,
      titulo: 'Termo de Posse da Diretoria Atual',
      descricao: 'Documento de posse da diretoria em exercício',
      tipo: 'PDF',
      tamanho: '1.1 MB'
    },
    {
      id: 3,
      titulo: 'Ata de Fundação',
      descricao: 'Ata da assembleia de fundação da ASOF',
      tipo: 'PDF',
      tamanho: '3.0 MB'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Estatuto da ASOF</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Documento que define as regras e estrutura da Associação Nacional dos Oficiais de Chancelaria
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Sobre o Estatuto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                O Estatuto Social da ASOF (Associação Nacional dos Oficiais de Chancelaria) é o documento 
                fundamental que estabelece as regras de funcionamento da associação, definindo sua estrutura, 
                objetivos, direitos e deveres dos associados, além dos órgãos diretivos e suas atribuições.
              </p>
              <p className="text-gray-700">
                O estatuto foi aprovado pela assembleia geral fundacional em 1998 e atualizado em 2015 
                para adequação às novas necessidades da associação e à legislação vigente.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FileText size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">Versão Atual</CardTitle>
                  <CardDescription>Atualizado em 2015</CardDescription>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center space-x-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <BookOpen size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">Capítulos</CardTitle>
                  <CardDescription>{secoesEstatuto.length} capítulos</CardDescription>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/documentos/estatuto.pdf" target="_blank">
                <Download size={20} className="mr-2" />
                Baixar Estatuto Completo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de capítulos do estatuto */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Capítulos do Estatuto</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secoesEstatuto.map((secao) => (
              <Card key={secao.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{secao.titulo}</CardTitle>
                    <FileText size={24} className="text-blue-600" />
                  </div>
                  <CardDescription>{secao.descricao}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{secao.artigos} artigos</span>
                    <Button variant="outline" asChild>
                      <Link href={`/documentos/estatuto/capitulo/${secao.id}`}>Ler Capítulo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de documentos complementares */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Documentos Complementares</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Documentos relacionados ao estatuto e funcionamento da associação
          </p>
          
          <div className="space-y-4">
            {documentosComplementares.map((documento) => (
              <Card key={documento.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      {documento.tipo === 'PDF' ? <FileText size={24} /> : <Download size={24} />}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{documento.titulo}</CardTitle>
                      <CardDescription>{documento.descricao}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{documento.tipo} • {documento.tamanho}</p>
                    <Button className="mt-2" variant="outline" asChild>
                      <Link href={`/documentos/${documento.id}`} target="_blank">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de histórico de atualizações */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Histórico de Atualizações</h2>
          
          <div className="space-y-6">
            {[
              { 
                data: '15/03/2015', 
                descricao: 'Revisão geral do estatuto para adequação à legislação vigente e atualização de normas internas',
                alteracoes: 'Artigos 12, 18, 25 e 32'
              },
              { 
                data: '10/07/2010', 
                descricao: 'Inclusão de regras sobre eleições e composição da diretoria',
                alteracoes: 'Artigos 20, 21 e 22'
              },
              { 
                data: '05/11/2005', 
                descricao: 'Inclusão de regras sobre filiação e categorias de associados',
                alteracoes: 'Artigos 8, 9 e 10'
              },
              { 
                data: '20/06/1998', 
                descricao: 'Aprovação do estatuto na assembleia geral fundacional',
                alteracoes: 'Documento original'
              }
            ].map((alteracao, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{alteracao.data}</CardTitle>
                      <CardDescription>{alteracao.descricao}</CardDescription>
                    </div>
                    <div className="text-right text-sm text-gray-600">
                      <span className="font-medium">Alterações:</span> {alteracao.alteracoes}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Dúvidas Sobre o Estatuto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Entre em contato com o nosso setor jurídico para esclarecimentos
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/juridico">Consultar Jurídico</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/ouvidoria">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estatuto;