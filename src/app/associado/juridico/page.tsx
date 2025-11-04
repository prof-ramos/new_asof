'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Search, Filter, BookOpen, Users, Calendar, MessageSquare, FileText } from 'react-feather';

const Juridico = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [consultas, setConsultas] = useState<any[]>([]);
  const [loadingConsultas, setLoadingConsultas] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaFilter, setCategoriaFilter] = useState('todas');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
    } else if (user) {
      fetchConsultas();
    }
  }, [user, loading, router]);

  const fetchConsultas = async () => {
    if (!user) return;
    
    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate with example data
      const mockConsultas = [
        {
          id: 1,
          titulo: 'Direito de greve para servidores públicos',
          conteudo: 'O direito de greve é garantido pela Constituição Federal, artigo 37, VII, aos servidores públicos. No entanto, deve ser exercido com responsabilidade...',
          categoria: 'Direito do Trabalho',
          status: 'ativa',
          createdAt: new Date('2024-11-15'),
          autor: 'Dr. Ana Silva'
        },
        {
          id: 2,
          titulo: 'Promoções na carreira de Oficial de Chancelaria',
          conteudo: 'As promoções na carreira de Oficial de Chancelaria ocorrem conforme o Regime Jurídico Único (RJU) e regulamentos específicos...',
          categoria: 'Direito Administrativo',
          status: 'ativa',
          createdAt: new Date('2024-10-20'),
          autor: 'Dr. Carlos Oliveira'
        },
        {
          id: 3,
          titulo: 'Direitos dos associados da ASOF',
          conteudo: 'Os associados da ASOF têm direitos garantidos estatutariamente, incluindo representação judicial e extrajudicial...',
          categoria: 'Direito Associativo',
          status: 'ativa',
          createdAt: new Date('2024-09-05'),
          autor: 'Dr. Maria Souza'
        },
        {
          id: 4,
          titulo: 'Benefícios previdenciários para diplomatas',
          conteudo: 'Os Oficiais de Chancelaria têm direito a benefícios previdenciários específicos de acordo com o regime próprio...',
          categoria: 'Direito Previdenciário',
          status: 'ativa',
          createdAt: new Date('2024-08-12'),
          autor: 'Dr. João Santos'
        }
      ];
      
      setConsultas(mockConsultas);
    } catch (error) {
      console.error('Error fetching juridico data:', error);
    } finally {
      setLoadingConsultas(false);
    }
  };

  // Show loading state while checking auth
  if (loading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Verificando autenticação...</p>
          </div>
        </div>
      </div>
    );
  }

  // Redirect if not authenticated
  if (!user) {
    return null; // Redirect effect will handle this
  }

  // Filter consultas based on search and category
  const filteredConsultas = consultas.filter(consulta => {
    const matchesSearch = consulta.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          consulta.conteudo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria = categoriaFilter === 'todas' || consulta.categoria === categoriaFilter;
    return matchesSearch && matchesCategoria;
  });

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-blue-900 p-4 rounded-full mr-6">
              <Award className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Consultoria Jurídica</h1>
              <p className="text-blue-100 text-lg">
                Acesse nossa base de orientações jurídicas para associados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de navegação */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex">
            <Link href="/associado" className="text-blue-600 hover:underline mr-6">Área do Associado</Link>
            <span className="text-gray-500">/</span>
            <Link href="/associado/restrito" className="text-blue-600 hover:underline mx-6">Área Restrita</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-800 ml-6">Consultoria Jurídica</span>
          </nav>
        </div>
      </section>

      {/* Seção principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Base de Orientações Jurídicas</h2>
            <p className="text-gray-600">Acesse consultas jurídicas específicas para a carreira de Oficial de Chancelaria</p>
          </div>

          {/* Filtros */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Buscar</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search size={16} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="search"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Buscar por título ou conteúdo..."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="categoria" className="block text-sm font-medium text-gray-700 mb-1">Categoria</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter size={16} className="text-gray-400" />
                    </div>
                    <select
                      id="categoria"
                      value={categoriaFilter}
                      onChange={(e) => setCategoriaFilter(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      <option value="todas">Todas as categorias</option>
                      <option value="Direito do Trabalho">Direito do Trabalho</option>
                      <option value="Direito Administrativo">Direito Administrativo</option>
                      <option value="Direito Associativo">Direito Associativo</option>
                      <option value="Direito Previdenciário">Direito Previdenciário</option>
                    </select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de consultas jurídicas */}
          {loadingConsultas ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredConsultas.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Award size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhuma consulta encontrada</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || categoriaFilter !== 'todas' 
                    ? 'Nenhuma consulta jurídica corresponde aos filtros aplicados.' 
                    : 'A base de orientações jurídicas está vazia no momento.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredConsultas.map((consulta) => (
                <Card key={consulta.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl text-gray-800">{consulta.titulo}</CardTitle>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {consulta.categoria}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <Calendar size={14} className="mr-1" />
                      <span className="mr-4">{consulta.createdAt.toLocaleDateString('pt-BR')}</span>
                      <Users size={14} className="mr-1" />
                      <span>{consulta.autor}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-700 mb-4 line-clamp-3">{consulta.conteudo}</p>
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/associado/juridico/${consulta.id}`}>
                          <FileText size={16} className="mr-2" />
                          Ler Mais
                        </Link>
                      </Button>
                      <div className="flex items-center text-sm text-gray-500">
                        <MessageSquare size={16} className="mr-1" />
                        <span>24 consultas</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Paginação */}
          {filteredConsultas.length > 0 && (
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" className="bg-blue-600 text-white">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Próxima
                </Button>
              </nav>
            </div>
          )}
        </div>
      </section>

      {/* Seção de informações */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre a Consultoria Jurídica</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="text-blue-600 mr-3" size={24} />
                  Orientação Especializada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A consultoria jurídica da ASOF oferece orientações especializadas 
                  voltadas especificamente para a carreira de Oficial de Chancelaria.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="text-blue-600 mr-3" size={24} />
                  Equipe Qualificada
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nossa equipe é composta por advogados especializados em Direito 
                  Público, com experiência específica no serviço exterior brasileiro.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="text-blue-600 mr-3" size={24} />
                  Atualização Constante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A base de orientações é constantemente atualizada com novos 
                  pareceres e atualizações legislativas relevantes para a carreira.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Dúvidas Jurídicas Específicas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Além da base de orientações, você pode solicitar consultoria jurídica personalizada
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/associado/juridico/solicitar">Solicitar Consultoria</Link>
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

export default Juridico;