'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Download, Search, Filter, Folder, Calendar, Shield, Eye } from 'react-feather';

const Documentos = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [documentos, setDocumentos] = useState<any[]>([]);
  const [loadingDocumentos, setLoadingDocumentos] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoriaFilter, setCategoriaFilter] = useState('todas');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
    } else if (user) {
      fetchDocumentos();
    }
  }, [user, loading, router]);

  const fetchDocumentos = async () => {
    if (!user) return;
    
    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate with example data
      const mockDocumentos = [
        {
          id: 1,
          titulo: 'Estatuto da ASOF Atualizado',
          descricao: 'Versão atualizada do estatuto da Associação Nacional dos Oficiais de Chancelaria',
          categoria: 'Estatuto',
          dataPublicacao: new Date('2024-09-15'),
          tamanho: '2.4 MB',
          tipo: 'PDF',
          nivelAcesso: 'associado'
        },
        {
          id: 2,
          titulo: 'Regimento Interno',
          descricao: 'Regimento interno com normas de funcionamento da ASOF',
          categoria: 'Regimento',
          dataPublicacao: new Date('2024-06-20'),
          tamanho: '1.8 MB',
          tipo: 'PDF',
          nivelAcesso: 'associado'
        },
        {
          id: 3,
          titulo: 'Relatório Anual 2023',
          descricao: 'Relatório anual de atividades e finanças da ASOF',
          categoria: 'Relatórios',
          dataPublicacao: new Date('2024-04-10'),
          tamanho: '3.2 MB',
          tipo: 'PDF',
          nivelAcesso: 'associado'
        },
        {
          id: 4,
          titulo: 'Diretrizes para Participação em Eventos',
          descricao: 'Orientações para participação de associados em eventos oficiais',
          categoria: 'Eventos',
          dataPublicacao: new Date('2024-07-05'),
          tamanho: '1.1 MB',
          tipo: 'PDF',
          nivelAcesso: 'associado'
        },
        {
          id: 5,
          titulo: 'Parecer Jurídico - Progressão na Carreira',
          descricao: 'Análise jurídica sobre os requisitos para progressão funcional',
          categoria: 'Jurídico',
          dataPublicacao: new Date('2024-08-12'),
          tamanho: '0.9 MB',
          tipo: 'PDF',
          nivelAcesso: 'associado'
        },
        {
          id: 6,
          titulo: 'Convênios com Instituições de Ensino',
          descricao: 'Relação de convênios disponíveis para associados e familiares',
          categoria: 'Convênios',
          dataPublicacao: new Date('2024-10-01'),
          tamanho: '1.5 MB',
          tipo: 'PDF',
          nivelAcesso: 'associado'
        }
      ];
      
      setDocumentos(mockDocumentos);
    } catch (error) {
      console.error('Error fetching documentos:', error);
    } finally {
      setLoadingDocumentos(false);
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

  // Filter documentos based on search and category
  const filteredDocumentos = documentos.filter(documento => {
    const matchesSearch = documento.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          documento.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategoria = categoriaFilter === 'todas' || documento.categoria === categoriaFilter;
    return matchesSearch && matchesCategoria;
  });

  // Get unique categories for filter
  const categorias = ['todas', ...new Set(documentos.map(doc => doc.categoria))];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-blue-900 p-4 rounded-full mr-6">
              <FileText className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Documentos Exclusivos</h1>
              <p className="text-blue-100 text-lg">
                Acesse documentos reservados para associados da ASOF
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
            <span className="text-gray-800 ml-6">Documentos</span>
          </nav>
        </div>
      </section>

      {/* Seção principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Biblioteca de Documentos</h2>
            <p className="text-gray-600">Acesse documentos exclusivos para associados da ASOF</p>
          </div>

          {/* Filtros */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                      placeholder="Buscar por título ou descrição..."
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
                      {categorias.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat === 'todas' ? 'Todas as categorias' : cat}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    <Download size={16} className="mr-2" />
                    Exportar Lista
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de documentos */}
          {loadingDocumentos ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredDocumentos.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum documento encontrado</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || categoriaFilter !== 'todas' 
                    ? 'Nenhum documento corresponde aos filtros aplicados.' 
                    : 'A biblioteca de documentos está vazia no momento.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocumentos.map((documento) => (
                <Card key={documento.id} className="hover:shadow-md transition-shadow flex flex-col h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <FileText size={24} className="text-blue-600" />
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        {documento.tipo}
                      </span>
                    </div>
                    <CardTitle className="text-lg mt-2">{documento.titulo}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex-grow">
                    <p className="text-gray-700 text-sm mb-4">{documento.descricao}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-xs text-gray-500">
                        <Folder size={14} className="mr-1" />
                        <span>{documento.categoria}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        <span>{documento.dataPublicacao.toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <Download size={14} className="mr-1" />
                        <span>{documento.tamanho}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye size={14} className="mr-1" />
                        Visualizar
                      </Button>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Download size={14} className="mr-1" />
                        Baixar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Paginação */}
          {filteredDocumentos.length > 0 && (
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre os Documentos Exclusivos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Acesso Restrito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Os documentos exclusivos estão disponíveis apenas para associados 
                  com status ativo e devidamente autenticados no sistema.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  Atualização Constante
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A biblioteca de documentos é constantemente atualizada com novos 
                  materiais relevantes para a carreira e atuação dos associados.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="text-blue-600 mr-3" size={24} />
                  Formatos Variados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Os documentos estão disponíveis em diversos formatos para facilitar 
                  o acesso e uso por parte dos associados em diferentes dispositivos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentos;