'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Tag, Search, Filter, FileText, Users, Globe, Award } from 'react-feather';

const Noticias = () => {
  // Dados de exemplo para notícias
  const noticias = [
    {
      id: 1,
      titulo: 'ASOF participa de evento internacional sobre diplomacia multilateral',
      descricao: 'Representantes da ASOF participaram do Fórum Internacional de Relações Exteriores, realizado em Genebra, onde discutiram temas como cooperação internacional e comércio exterior.',
      data: '15 out 2025',
      autor: 'ASOF Comunicação',
      categoria: 'Eventos',
      tags: ['Diplomacia', 'Cooperação', 'Internacional'],
      imagem: 'https://via.placeholder.com/600x300'
    },
    {
      id: 2,
      titulo: 'Novas diretrizes para concursos na carreira外交',
      descricao: 'Publicadas novas diretrizes para os concursos da carreira de Oficial de Chancelaria, com mudanças nas fases do processo seletivo e novos critérios de avaliação.',
      data: '10 out 2025',
      autor: 'ASOF Comunicação',
      categoria: 'Concursos',
      tags: ['Concursos', 'Carreira', 'Edital'],
      imagem: 'https://via.placeholder.com/600x300'
    },
    {
      id: 3,
      titulo: 'Campanha de filiação 2025: benefícios exclusivos',
      descricao: 'A ASOF anuncia os benefícios especiais para associados do ano que vem, incluindo convênios com instituições de ensino e descontos em eventos profissionais.',
      data: '5 out 2025',
      autor: 'ASOF Comunicação',
      categoria: 'Associados',
      tags: ['Filiação', 'Benefícios', 'Convênios'],
      imagem: 'https://via.placeholder.com/600x300'
    },
    {
      id: 4,
      titulo: 'ASOF lança nova plataforma digital para associados',
      descricao: 'A associação disponibiliza nova plataforma com recursos avançados para gerenciamento de documentos, protocolos e comunicação institucional.',
      data: '1 out 2025',
      autor: 'ASOF Comunicação',
      categoria: 'Tecnologia',
      tags: ['Plataforma', 'Digital', 'Inovação'],
      imagem: 'https://via.placeholder.com/600x300'
    },
    {
      id: 5,
      titulo: 'Entrevista com presidente da ASOF sobre carreira diplomática',
      descricao: 'Em entrevista exclusiva, o presidente da ASOF comenta sobre os desafios e oportunidades da carreira diplomática no contexto atual.',
      data: '28 set 2025',
      autor: 'Jornal do Serviço Exterior',
      categoria: 'Entrevistas',
      tags: ['Entrevista', 'Presidente', 'Carreira'],
      imagem: 'https://via.placeholder.com/600x300'
    },
    {
      id: 6,
      titulo: 'Prêmio ASOF de Excelência será entregue em novembro',
      descricao: 'A ASOF anuncia os finalistas do Prêmio de Excelência, que reconhece o trabalho de Oficiais de Chancelaria em diferentes áreas de atuação.',
      data: '25 set 2025',
      autor: 'ASOF Comunicação',
      categoria: 'Premiações',
      tags: ['Prêmio', 'Excellência', 'Reconhecimento'],
      imagem: 'https://via.placeholder.com/600x300'
    }
  ];

  // Dados de exemplo para categorias
  const categorias = [
    { id: 1, nome: 'Todas', total: 24 },
    { id: 2, nome: 'Institucional', total: 8 },
    { id: 3, nome: 'Eventos', total: 6 },
    { id: 4, nome: 'Associados', total: 7 },
    { id: 5, nome: 'Concursos', total: 5 },
    { id: 6, nome: 'Carreira', total: 9 },
    { id: 7, nome: 'Premiações', total: 4 }
  ];

  // Dados de exemplo para notícias em destaque
  const noticiasDestaque = noticias.slice(0, 3);

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Notícias</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Acompanhe as últimas notícias e informações sobre a carreira de Oficial de Chancelaria
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Últimas Notícias</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Informações atualizadas sobre a ASOF, concursos, carreira e eventos
            </p>
          </div>

          {/* Notícias em destaque */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Em Destaque</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {noticiasDestaque.map((noticia) => (
                <Link 
                  key={noticia.id} 
                  href={`/noticias/${noticia.id}`} 
                  className="block group"
                  aria-label={`Ler notícia: ${noticia.titulo}`}
                >
                  <Card className="h-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group-hover:-translate-y-1 overflow-hidden">
                    <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                          {noticia.categoria}
                        </span>
                        <span className="text-sm text-gray-500">{noticia.data}</span>
                      </div>
                      <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                        {noticia.titulo}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4 line-clamp-3">{noticia.descricao}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <User size={14} className="mr-1" />
                        <span className="mr-4">{noticia.autor}</span>
                        <Calendar size={14} className="mr-1" />
                        <span>{noticia.data}</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {categorias.map((categoria) => (
                <Button 
                  key={categoria.id} 
                  variant={categoria.id === 1 ? "default" : "outline"}
                  className="rounded-full"
                >
                  {categoria.nome} ({categoria.total})
                </Button>
              ))}
            </div>
            
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-grow md:flex-grow-0">
                <input
                  type="text"
                  placeholder="Buscar notícias..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
              </div>
              <Button variant="outline">
                <Filter size={20} className="mr-2" />
                Filtros
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de todas as notícias */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <Link 
                key={noticia.id} 
                href={`/noticias/${noticia.id}`} 
                className="block group"
                aria-label={`Ler notícia: ${noticia.titulo}`}
              >
                <Card className="h-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all overflow-hidden">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-48" />
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                        {noticia.categoria}
                      </span>
                      <span className="text-sm text-gray-500">{noticia.data}</span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                      {noticia.titulo}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{noticia.descricao}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User size={14} className="mr-1" />
                      <span className="mr-4">{noticia.autor}</span>
                      <Calendar size={14} className="mr-1" />
                      <span>{noticia.data}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {noticia.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de paginação */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" className="px-3 py-2">
                Anterior
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                1
              </Button>
              <Button className="w-10 h-10 p-0 bg-blue-600 text-white">
                2
              </Button>
              <Button variant="outline" className="w-10 h-10 p-0">
                3
              </Button>
              <Button variant="outline" className="px-3 py-2">
                Próxima
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Seção de newsletter */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Receba Nossas Notícias</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Inscreva-se em nossa newsletter e fique por dentro das últimas notícias sobre a carreira
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Endereço de e-mail para newsletter"
            />
            <Button type="button" className="bg-white text-blue-700 hover:bg-blue-50 px-6">
              Inscrever-se
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Noticias;