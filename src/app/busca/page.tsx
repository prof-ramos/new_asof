'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, FileText, Users, Globe, Award, Calendar, Tag, Filter, Sliders, TrendingUp } from 'react-feather';

const BuscaInteligente = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  // Dados de exemplo para tipos de conteúdo
  const tiposConteudo = [
    { id: 'noticias', nome: 'Notícias', total: 142 },
    { id: 'documentos', nome: 'Documentos', total: 87 },
    { id: 'eventos', nome: 'Eventos', total: 36 },
    { id: 'associados', nome: 'Associados', total: 1245 },
    { id: 'concursos', nome: 'Concursos', total: 12 },
    { id: 'institucional', nome: 'Institucional', total: 42 }
  ];

  // Dados de exemplo para resultados da busca
  const resultadosBusca = [
    {
      id: 1,
      titulo: 'Novas diretrizes para concursos na carreira外交',
      descricao: 'Publicadas novas diretrizes para os concursos da carreira de Oficial de Chancelaria...',
      tipo: 'Notícias',
      data: '10 out 2025',
      relevancia: 95
    },
    {
      id: 2,
      titulo: 'Estatuto Social da ASOF - Atualizado em 2025',
      descricao: 'Documento que define as regras e estrutura da Associação Nacional dos Oficiais de Chancelaria...',
      tipo: 'Documentos',
      data: '15 mar 2025',
      relevancia: 92
    },
    {
      id: 3,
      titulo: 'Seminário Internacional de Relações Exteriores',
      descricao: 'Análise das tendências atuais e desafios da diplomacia no cenário global...',
      tipo: 'Eventos',
      data: '15 nov 2025',
      relevancia: 88
    },
    {
      id: 4,
      titulo: 'Diretoria Gestão 2023-2025',
      descricao: 'Membros da diretoria atual e suas respectivas atribuições...',
      tipo: 'Institucional',
      data: 'Atual',
      relevancia: 85
    },
    {
      id: 5,
      titulo: 'Concurso para Oficial de Chancelaria 2025',
      descricao: 'Informações sobre o concurso para ingresso na carreira de Oficial de Chancelaria...',
      tipo: 'Concursos',
      data: 'Aberto',
      relevancia: 82
    }
  ];

  // Dados de exemplo para filtros
  const filtrosDisponiveis = [
    { id: 'categoria', nome: 'Categoria', opcoes: ['Institucional', 'Notícias', 'Eventos', 'Associados', 'Concursos'] },
    { id: 'data', nome: 'Período', opcoes: ['Últimas 24h', 'Última semana', 'Último mês', 'Últimos 6 meses', 'Último ano'] },
    { id: 'autor', nome: 'Autor', opcoes: ['ASOF', 'Diretoria', 'Imprensa', 'Associados'] }
  ];

  // Dados de exemplo para busca por categorias
  const buscaPorCategorias = [
    { 
      titulo: 'Área do Associado', 
      descricao: 'Acesse informações exclusivas para associados da ASOF',
      icone: <Users size={24} className="text-blue-600" />,
      link: '/associado',
      cor: 'blue'
    },
    { 
      titulo: 'Concursos e Seleções', 
      descricao: 'Informações sobre concursos para Oficial de Chancelaria',
      icone: <Award size={24} className="text-green-600" />,
      link: '/concursos',
      cor: 'green'
    },
    { 
      titulo: 'Transparência', 
      descricao: 'Prestação de contas e documentos institucionais',
      icone: <FileText size={24} className="text-purple-600" />,
      link: '/transparencia',
      cor: 'purple'
    },
    { 
      titulo: 'Carreira Diplomática', 
      descricao: 'Informações sobre a carreira de Oficial de Chancelaria',
      icone: <Globe size={24} className="text-yellow-600" />,
      link: '/carreira',
      cor: 'yellow'
    }
  ];

  // Função para lidar com a busca
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui iria a lógica de busca real
    console.log('Buscando por:', searchQuery, 'com filtros:', selectedFilters);
  };

  // Função para alternar filtros
  const toggleFilter = (filter: string) => {
    setSelectedFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter) 
        : [...prev, filter]
    );
  };

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Busca Inteligente</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Encontre rapidamente informações, documentos, notícias e serviços da ASOF
          </p>
        </div>
      </section>

      {/* Seção de busca */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Encontre o que procura</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Digite sua consulta ou navegue pelas categorias para encontrar informações, documentos e serviços
            </p>
          </div>

          <form onSubmit={handleSearch} className="mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="O que você está buscando?"
                  className="w-full px-4 py-4 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  aria-label="Campo de busca"
                />
                <Search size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Search size={20} className="mr-2" />
                Buscar
              </Button>
            </div>
          </form>

          {/* Filtros rápidos */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Tipos de Conteúdo</h3>
            <div className="flex flex-wrap gap-3">
              {tiposConteudo.map((tipo) => (
                <Button
                  key={tipo.id}
                  variant="outline"
                  className={`rounded-full ${
                    selectedFilters.includes(tipo.id) 
                      ? 'bg-blue-100 text-blue-800 border-blue-500' 
                      : ''
                  }`}
                  onClick={() => toggleFilter(tipo.id)}
                >
                  {tipo.nome} ({tipo.total})
                </Button>
              ))}
            </div>
          </div>

          {/* Navegação por categorias */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Navegar por Categorias</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {buscaPorCategorias.map((categoria, index) => (
                <Link 
                  key={index} 
                  href={categoria.link} 
                  className="block group"
                  aria-label={`Acessar ${categoria.titulo}`}
                >
                  <Card className="h-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group-hover:-translate-y-1">
                    <CardHeader className="flex items-center text-center">
                      <div className={`p-4 rounded-full bg-${categoria.cor}-100 text-${categoria.cor}-600 mb-4 group-hover:bg-${categoria.cor}-200 transition-colors`}>
                        {categoria.icone}
                      </div>
                      <CardTitle className="text-lg">{categoria.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{categoria.descricao}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seção de resultados da busca */}
      {searchQuery && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Resultados para: "<span className="text-blue-600">{searchQuery}</span>"
              </h2>
              <div className="text-gray-600">
                {resultadosBusca.length} resultados encontrados
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filtros avançados */}
              <div className="lg:w-1/4">
                <Card className="sticky top-4">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Sliders size={20} className="mr-2" />
                      Filtros
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {filtrosDisponiveis.map((filtro) => (
                        <div key={filtro.id}>
                          <h4 className="font-medium text-gray-800 mb-3">{filtro.nome}</h4>
                          <div className="space-y-2">
                            {filtro.opcoes.map((opcao) => (
                              <div key={opcao} className="flex items-center">
                                <input
                                  type="checkbox"
                                  id={`${filtro.id}-${opcao}`}
                                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                  checked={selectedFilters.includes(`${filtro.id}-${opcao}`)}
                                  onChange={() => toggleFilter(`${filtro.id}-${opcao}`)}
                                />
                                <label 
                                  htmlFor={`${filtro.id}-${opcao}`} 
                                  className="ml-2 text-sm text-gray-700"
                                >
                                  {opcao}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Resultados */}
              <div className="lg:w-3/4">
                <div className="space-y-6">
                  {resultadosBusca.map((resultado) => (
                    <Card key={resultado.id} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded mr-3">
                                {resultado.tipo}
                              </span>
                              <span className="text-sm text-gray-500">{resultado.data}</span>
                            </div>
                            <CardTitle className="text-xl">
                              <Link href={`/resultados/${resultado.id}`} className="hover:text-blue-600">
                                {resultado.titulo}
                              </Link>
                            </CardTitle>
                          </div>
                          <div className="flex items-center">
                            <TrendingUp size={16} className="text-green-500 mr-1" />
                            <span className="text-sm text-gray-500">{resultado.relevancia}%</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{resultado.descricao}</p>
                        <div className="flex flex-wrap gap-2">
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            ASOF
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                            Oficial de Chancelaria
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Paginação */}
                <div className="mt-12 flex justify-center">
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
            </div>
          </div>
        </section>
      )}

      {/* Seção de destaques */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Conteúdo em Destaque</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                titulo: 'Estatuto da ASOF', 
                descricao: 'Documento fundamental da associação',
                tipo: 'Documento',
                data: 'Atualizado em 2025'
              },
              { 
                titulo: 'Calendário de Eventos', 
                descricao: 'Próximos eventos promovidos pela ASOF',
                tipo: 'Eventos',
                data: 'Confira os próximos meses'
              },
              { 
                titulo: 'Processo Seletivo 2025', 
                descricao: 'Informações sobre o concurso para Oficial de Chancelaria',
                tipo: 'Concursos',
                data: 'Inscrições abertas'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      {item.tipo}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{item.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{item.descricao}</p>
                  <p className="text-sm text-gray-500">{item.data}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de dicas de busca */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dicas para sua Busca</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Busca Avançada</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Use aspas para pesquisar frases exatas</li>
                  <li>Use AND, OR, NOT para combinar termos</li>
                  <li>Use * como caractere curinga</li>
                  <li>Use filtros para restringir resultados</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Perguntas Frequentes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li>
                    <Link href="/faq" className="text-blue-600 hover:underline">
                      Como faço para me filiar?
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-blue-600 hover:underline">
                      Quais são os benefícios da filiação?
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-blue-600 hover:underline">
                      Quando será o próximo concurso?
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-blue-600 hover:underline">
                      Como acesso a área restrita?
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Não Encontrou o que Procura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Acesse outros canais de comunicação para obter assistência personalizada
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

export default BuscaInteligente;