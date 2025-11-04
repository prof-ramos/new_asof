'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, FileText, Calendar, Mail, Download, Award, Globe, Newspaper } from 'react-feather';

const Imprensa = () => {
  // Dados de exemplo para comunicados oficiais
  const comunicadosOficiais = [
    {
      id: 1,
      titulo: 'ASOF se posiciona sobre reformas no Serviço Exterior',
      descricao: 'A Associação Nacional dos Oficiais de Chancelaria emitiu nota oficial sobre as propostas de reforma no Serviço Exterior Brasileiro.',
      data: '15 out 2025',
      tipo: 'Nota Oficial',
      tags: ['Reforma', 'Serviço Exterior', 'Política']
    },
    {
      id: 2,
      titulo: 'Resultados do Prêmio ASOF de Excelência 2025',
      descricao: 'A ASOF anuncia os vencedores do Prêmio ASOF de Excelência, que reconhece o trabalho de Oficiais de Chancelaria em diferentes áreas de atuação.',
      data: '10 out 2025',
      tipo: 'Comunicado',
      tags: ['Prêmio', 'Excelência', 'Reconhecimento']
    },
    {
      id: 3,
      titulo: 'ASOF participa de fórum internacional em Genebra',
      descricao: 'Representantes da ASOF participam do Fórum Internacional de Relações Exteriores, discutindo cooperação multilateral.',
      data: '5 out 2025',
      tipo: 'Notícia',
      tags: ['Fórum', 'Internacional', 'Cooperação']
    }
  ];

  // Dados de exemplo para documentos oficiais
  const documentosOficiais = [
    {
      id: 1,
      titulo: 'Nota Oficial sobre Reformas no Serviço Exterior',
      descricao: 'Posicionamento oficial da ASOF sobre propostas de reforma',
      data: '15 out 2025',
      tipo: 'PDF',
      tamanho: '1.2 MB'
    },
    {
      id: 2,
      titulo: 'Relatório Anual de Atividades 2024',
      descricao: 'Relatório completo das atividades da ASOF em 2024',
      data: '15 mar 2025',
      tipo: 'PDF',
      tamanho: '2.4 MB'
    },
    {
      id: 3,
      titulo: 'Comunicado sobre Eleições da Diretoria',
      descricao: 'Comunicado oficial sobre o processo eleitoral da diretoria',
      data: '20 jan 2025',
      tipo: 'PDF',
      tamanho: '0.8 MB'
    }
  ];

  // Dados de exemplo para contatos da imprensa
  const contatosImprensa = [
    {
      id: 1,
      nome: 'Ana Silva',
      cargo: 'Coordenadora de Comunicação',
      email: 'imprensa@asof.org.br',
      telefone: '(61) 3225-9191',
      foto: 'https://via.placeholder.com/100x100'
    },
    {
      id: 2,
      nome: 'Roberto Almeida',
      cargo: 'Assessor de Imprensa',
      email: 'roberto.almeida@asof.org.br',
      telefone: '(61) 3225-9192',
      foto: 'https://via.placeholder.com/100x100'
    }
  ];

  // Dados de exemplo para galeria de imagens
  const galeriaImagens = [
    { id: 1, titulo: 'Solenidade de Premiação', descricao: 'Entrega do Prêmio ASOF de Excelência', url: 'https://via.placeholder.com/400x300' },
    { id: 2, titulo: 'Fórum Internacional', descricao: 'Representantes da ASOF em evento internacional', url: 'https://via.placeholder.com/400x300' },
    { id: 3, titulo: 'Reunião da Diretoria', descricao: 'Reunião ordinária da diretoria executiva', url: 'https://via.placeholder.com/400x300' },
    { id: 4, titulo: 'Evento de Associados', descricao: 'Confraternização de fim de ano', url: 'https://via.placeholder.com/400x300' }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sala de Imprensa</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comunicados oficiais, documentos e informações para profissionais da mídia
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Comunicação Oficial da ASOF</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Acesse comunicados, notas oficiais, imagens e contatos da equipe de comunicação
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sobre a Sala de Imprensa</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A Sala de Imprensa da ASOF (Associação Nacional dos Oficiais de Chancelaria) é o canal 
                oficial de comunicação com os meios de comunicação e a sociedade em geral. Aqui você 
                encontra os comunicados oficiais, documentos institucionais e materiais para imprensa.
              </p>
              <p className="text-gray-700">
                A ASOF mantém compromisso com a transparência e disponibiliza todas as informações 
                oficiais de forma acessível e organizada.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de comunicados oficiais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Comunicados Oficiais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comunicadosOficiais.map((comunicado) => (
              <Card key={comunicado.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      {comunicado.tipo}
                    </span>
                    <span className="text-sm text-gray-500">{comunicado.data}</span>
                  </div>
                  <CardTitle className="text-lg">{comunicado.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{comunicado.descricao}</p>
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/imprensa/comunicados/${comunicado.id}`}>Ler mais</Link>
                    </Button>
                    <div className="flex flex-wrap gap-2">
                      {comunicado.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/imprensa/comunicados">Ver todos os comunicados</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de documentos oficiais */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Documentos Oficiais</h2>
          
          <div className="space-y-6">
            {documentosOficiais.map((documento) => (
              <Card key={documento.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{documento.titulo}</CardTitle>
                      <CardDescription>{documento.descricao}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{documento.data}</p>
                    <p className="text-sm text-gray-600">{documento.tipo} • {documento.tamanho}</p>
                    <Button className="mt-2" variant="outline" size="sm" asChild>
                      <Link href={`/documentos/imprensa/${documento.id}`} target="_blank">
                        <Download size={16} className="mr-2" />
                        Baixar
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/documentos/imprensa">Acessar biblioteca completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de contatos para imprensa */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contatos para Imprensa</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contatosImprensa.map((contato) => (
              <Card key={contato.id} className="text-center p-6">
                <div className="flex flex-col items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
                  <CardTitle className="text-lg">{contato.nome}</CardTitle>
                  <p className="text-blue-600 mb-2">{contato.cargo}</p>
                  <div className="space-y-2 w-full max-w-xs">
                    <div className="flex items-center justify-center text-gray-600">
                      <Mail size={16} className="mr-2" />
                      <span className="text-sm">{contato.email}</span>
                    </div>
                    <div className="flex items-center justify-center text-gray-600">
                      <Globe size={16} className="mr-2" />
                      <span className="text-sm">{contato.telefone}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`mailto:${contato.email}`}>Enviar e-mail</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Solicitação de Entrevista</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Para solicitar uma entrevista com membros da diretoria da ASOF, entre em contato 
                conosco com antecedência mínima de 48 horas.
              </p>
              <Button asChild>
                <Link href="/contato?assunto=entrevista">Solicitar Entrevista</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de galeria de imagens */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Galeria de Imagens</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galeriaImagens.map((imagem) => (
              <Card key={imagem.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                <CardHeader>
                  <CardTitle className="text-sm">{imagem.titulo}</CardTitle>
                  <CardDescription className="text-xs">{imagem.descricao}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" asChild>
              <Link href="/imprensa/galeria">Ver galeria completa</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de últimas notícias */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Na Mídia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                titulo: 'ASOF comenta sobre comércio exterior em entrevista à Rádio Nacional', 
                descricao: 'O presidente da ASOF concedeu entrevista sobre os desafios do comércio exterior brasileiro...',
                veiculo: 'Rádio Nacional',
                data: '12 out 2025'
              },
              { 
                titulo: 'Oficiais de Chancelaria: desafios e perspectivas para a carreira', 
                descricao: 'Reportagem especial sobre as perspectivas da carreira de Oficial de Chancelaria...',
                veiculo: 'Jornal do Comércio Exterior',
                data: '8 out 2025'
              },
              { 
                titulo: 'ASOF participa de painel sobre diplomacia multilateral na ONU', 
                descricao: 'Representante da ASOF participa de importante painel sobre diplomacia multilateral...',
                veiculo: 'Revista Relações Internacionais',
                data: '3 out 2025'
              }
            ].map((noticia, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{noticia.titulo}</CardTitle>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>{noticia.veiculo}</span>
                    <span>{noticia.data}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{noticia.descricao}</p>
                  <Button variant="outline" size="sm">
                    <Globe size={16} className="mr-2" />
                    Ler matéria
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de newsletter para imprensa */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="bg-gradient-to-r from-blue-700 to-blue-500 text-white">
            <CardHeader>
              <CardTitle className="text-xl text-center">Newsletter para Imprensa</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6 max-w-2xl mx-auto">
                Inscreva-se para receber comunicados oficiais, pautas e informações relevantes 
                sobre a carreira de Oficial de Chancelaria diretamente em seu e-mail.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Seu e-mail profissional" 
                  className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  aria-label="E-mail para newsletter de imprensa"
                />
                <Button type="button" className="bg-white text-blue-700 hover:bg-blue-50 px-6">
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
          <h2 className="text-3xl font-bold mb-4">Outras Informações</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Acesse outros recursos e informações da ASOF
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/noticias">Notícias</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/eventos">Eventos</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/transparencia">Transparência</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/documentos">Documentos</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imprensa;