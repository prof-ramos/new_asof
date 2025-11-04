'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Plus, Search, Filter, Download, Eye, Shield, Clock, CheckCircle, XCircle } from 'react-feather';
import db from '@/lib/db';

const Protocolos = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [protocolos, setProtocolos] = useState<any[]>([]);
  const [loadingProtocolos, setLoadingProtocolos] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
    } else if (user) {
      fetchProtocolos();
    }
  }, [user, loading, router]);

  const fetchProtocolos = async () => {
    if (!user) return;
    
    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate with example data
      const mockProtocolos = [
        {
          id: 1,
          numeroProtocolo: 'ASOF-2025-001',
          tipoDocumento: 'Ofício',
          assunto: 'Solicitação de informações sobre progressão na carreira',
          descricao: 'Solicitação de informações detalhadas sobre os requisitos para progressão na carreira de Oficial de Chancelaria.',
          status: 'em_analise',
          createdAt: new Date('2025-01-15'),
        },
        {
          id: 2,
          numeroProtocolo: 'ASOF-2025-002',
          tipoDocumento: 'Requerimento',
          assunto: 'Solicitação de segunda via de carteira funcional',
          descricao: 'Requerimento para emissão de segunda via da carteira funcional perdida.',
          status: 'concluido',
          createdAt: new Date('2025-01-10'),
        },
        {
          id: 3,
          numeroProtocolo: 'ASOF-2025-003',
          tipoDocumento: 'Memorando',
          assunto: 'Solicitação de apoio para evento de capacitação',
          descricao: 'Solicitação de apoio institucional para participação em evento de capacitação no exterior.',
          status: 'recebido',
          createdAt: new Date('2025-01-05'),
        }
      ];
      
      setProtocolos(mockProtocolos);
    } catch (error) {
      console.error('Error fetching protocolos:', error);
    } finally {
      setLoadingProtocolos(false);
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

  // Filter protocolos based on search and status
  const filteredProtocolos = protocolos.filter(protocolo => {
    const matchesSearch = protocolo.assunto.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          protocolo.numeroProtocolo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || protocolo.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Get status display information
  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'recebido':
        return { text: 'Recebido', icon: <Clock size={16} className="text-yellow-600" />, color: 'bg-yellow-100 text-yellow-800' };
      case 'em_analise':
        return { text: 'Em Análise', icon: <Eye size={16} className="text-blue-600" />, color: 'bg-blue-100 text-blue-800' };
      case 'concluido':
        return { text: 'Concluído', icon: <CheckCircle size={16} className="text-green-600" />, color: 'bg-green-100 text-green-800' };
      case 'arquivado':
        return { text: 'Arquivado', icon: <XCircle size={16} className="text-gray-600" />, color: 'bg-gray-100 text-gray-800' };
      default:
        return { text: status, icon: <FileText size={16} />, color: 'bg-gray-100 text-gray-800' };
    }
  };

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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Protocolos e Requerimentos</h1>
              <p className="text-blue-100 text-lg">
                Acompanhe o status dos seus documentos protocolados
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
            <span className="text-gray-800 ml-6">Protocolos</span>
          </nav>
        </div>
      </section>

      {/* Seção principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Meus Protocolos</h2>
              <p className="text-gray-600">Acompanhe o status dos seus documentos e requerimentos</p>
            </div>
            <Button asChild className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/associado/protocolos/novo">
                <Plus size={16} className="mr-2" />
                Novo Protocolo
              </Link>
            </Button>
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
                      placeholder="Buscar por assunto ou número..."
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Filter size={16} className="text-gray-400" />
                    </div>
                    <select
                      id="status"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    >
                      <option value="todos">Todos os status</option>
                      <option value="recebido">Recebido</option>
                      <option value="em_analise">Em Análise</option>
                      <option value="concluido">Concluído</option>
                      <option value="arquivado">Arquivado</option>
                    </select>
                  </div>
                </div>
                
                <div className="flex items-end">
                  <Button variant="outline" className="w-full">
                    <Download size={16} className="mr-2" />
                    Exportar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Lista de protocolos */}
          {loadingProtocolos ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredProtocolos.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <FileText size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum protocolo encontrado</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter !== 'todos' 
                    ? 'Nenhum protocolo corresponde aos filtros aplicados.' 
                    : 'Você ainda não protocolou nenhum documento.'}
                </p>
                <Button asChild>
                  <Link href="/associado/protocolos/novo">
                    <Plus size={16} className="mr-2" />
                    Protocolar Novo Documento
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredProtocolos.map((protocolo) => {
                const statusInfo = getStatusInfo(protocolo.status);
                return (
                  <Card key={protocolo.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="sm:items-start sm:space-y-0 sm:grid sm:grid-cols-12 sm:gap-4">
                      <div className="sm:col-span-5">
                        <CardTitle className="text-lg">{protocolo.assunto}</CardTitle>
                        <p className="text-sm text-gray-500 mt-1">#{protocolo.numeroProtocolo}</p>
                      </div>
                      
                      <div className="sm:col-span-4 mt-2 sm:mt-0">
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Tipo:</span> {protocolo.tipoDocumento}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">Data:</span> {protocolo.createdAt.toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                      
                      <div className="sm:col-span-3 mt-2 sm:mt-0 flex sm:justify-end">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${statusInfo.color}`}>
                          {statusInfo.icon}
                          <span className="ml-1.5">{statusInfo.text}</span>
                        </span>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-gray-700 mb-4">{protocolo.descricao}</p>
                      <div className="flex justify-end space-x-3">
                        <Button variant="outline" size="sm">
                          <Eye size={16} className="mr-2" />
                          Visualizar
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download size={16} className="mr-2" />
                          Baixar
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Paginação */}
          {filteredProtocolos.length > 0 && (
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre o Sistema de Protocolos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Segurança
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Todos os documentos protocolados são armazenados com segurança e criptografia, 
                  garantindo a confidencialidade das informações.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="text-blue-600 mr-3" size={24} />
                  Acompanhamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Acompanhe em tempo real o status dos seus documentos e receba notificações 
                  sobre atualizações no processo.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  Documentação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Acesse modelos de documentos, manuais e orientações para facilitar 
                  a elaboração dos seus requerimentos.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Protocolos;