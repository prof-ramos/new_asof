'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Calendar, DollarSign, Eye, Filter, Search, CreditCard, FileText } from 'react-feather';

const Financeiro = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [financeiros, setFinanceiros] = useState<any[]>([]);
  const [loadingFinanceiros, setLoadingFinanceiros] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
    } else if (user) {
      fetchFinanceiros();
    }
  }, [user, loading, router]);

  const fetchFinanceiros = async () => {
    if (!user) return;
    
    try {
      // In a real implementation, this would be an API call
      // For now, we'll simulate with example data
      const mockFinanceiros = [
        {
          id: 1,
          descricao: 'Anuidade 2025',
          valor: 450.00,
          dataVencimento: new Date('2025-03-31'),
          dataPagamento: null,
          status: 'pendente',
          createdAt: new Date('2025-01-15'),
        },
        {
          id: 2,
          descricao: 'Taxa de Evento - Seminário de Diplomacia',
          valor: 120.00,
          dataVencimento: new Date('2024-11-20'),
          dataPagamento: new Date('2024-11-15'),
          status: 'pago',
          createdAt: new Date('2024-10-10'),
        },
        {
          id: 3,
          descricao: 'Mensalidade - Plano de Saúde ASOF',
          valor: 285.50,
          dataVencimento: new Date('2024-12-10'),
          dataPagamento: null,
          status: 'pendente',
          createdAt: new Date('2024-11-01'),
        },
        {
          id: 4,
          descricao: 'Anuidade 2024',
          valor: 450.00,
          dataVencimento: new Date('2024-03-31'),
          dataPagamento: new Date('2024-03-15'),
          status: 'pago',
          createdAt: new Date('2024-01-10'),
        }
      ];
      
      setFinanceiros(mockFinanceiros);
    } catch (error) {
      console.error('Error fetching financeiros:', error);
    } finally {
      setLoadingFinanceiros(false);
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

  // Filter financeiros based on search and status
  const filteredFinanceiros = financeiros.filter(financeiro => {
    const matchesSearch = financeiro.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || financeiro.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Calculate totals
  const totalPendente = filteredFinanceiros
    .filter(f => f.status === 'pendente')
    .reduce((sum, f) => sum + f.valor, 0);
  
  const totalPago = filteredFinanceiros
    .filter(f => f.status === 'pago')
    .reduce((sum, f) => sum + f.valor, 0);

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-blue-900 p-4 rounded-full mr-6">
              <DollarSign className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Área Financeira</h1>
              <p className="text-blue-100 text-lg">
                Acesse seu histórico financeiro e gere boletos
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
            <span className="text-gray-800 ml-6">Financeiro</span>
          </nav>
        </div>
      </section>

      {/* Seção principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Histórico Financeiro</h2>
            <p className="text-gray-600">Acompanhe suas obrigações e pagamentos com a ASOF</p>
          </div>

          {/* Resumo financeiro */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <DollarSign size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">R$ {totalPendente.toFixed(2)}</p>
                    <p className="text-gray-600">Total Pendente</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <CreditCard size={24} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">R$ {totalPago.toFixed(2)}</p>
                    <p className="text-gray-600">Total Pago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="bg-gray-100 p-3 rounded-lg mr-4">
                    <FileText size={24} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-800">{filteredFinanceiros.length}</p>
                    <p className="text-gray-600">Itens</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                      placeholder="Buscar por descrição..."
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
                      <option value="pendente">Pendente</option>
                      <option value="pago">Pago</option>
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

          {/* Lista de itens financeiros */}
          {loadingFinanceiros ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : filteredFinanceiros.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <DollarSign size={48} className="text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Nenhum item encontrado</h3>
                <p className="text-gray-600 mb-6">
                  {searchTerm || statusFilter !== 'todos' 
                    ? 'Nenhum item financeiro corresponde aos filtros aplicados.' 
                    : 'Você não tem itens financeiros registrados no momento.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-6">
              {filteredFinanceiros.map((financeiro) => (
                <Card key={financeiro.id} className="hover:shadow-md transition-shadow">
                  <CardHeader className="sm:items-start sm:space-y-0 sm:grid sm:grid-cols-12 sm:gap-4">
                    <div className="sm:col-span-5">
                      <CardTitle className="text-lg">{financeiro.descricao}</CardTitle>
                      <p className="text-sm text-gray-500 mt-1">ID: #{financeiro.id}</p>
                    </div>
                    
                    <div className="sm:col-span-3 mt-2 sm:mt-0">
                      <p className="text-lg font-semibold text-gray-800">R$ {financeiro.valor.toFixed(2)}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Vencimento: {financeiro.dataVencimento.toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                    
                    <div className="sm:col-span-2 mt-2 sm:mt-0">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Emissão:</span> {financeiro.createdAt.toLocaleDateString('pt-BR')}
                      </p>
                      {financeiro.dataPagamento && (
                        <p className="text-sm text-gray-600">
                          <span className="font-medium">Pagamento:</span> {financeiro.dataPagamento.toLocaleDateString('pt-BR')}
                        </p>
                      )}
                    </div>
                    
                    <div className="sm:col-span-2 mt-2 sm:mt-0 flex sm:justify-end">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        financeiro.status === 'pago' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {financeiro.status === 'pago' ? 'Pago' : 'Pendente'}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex justify-end space-x-3">
                      {financeiro.status === 'pendente' ? (
                        <Button variant="outline" size="sm">
                          <Download size={16} className="mr-2" />
                          Gerar Boleto
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm">
                          <Eye size={16} className="mr-2" />
                          Comprovante
                        </Button>
                      )}
                      <Button variant="outline" size="sm">
                        <FileText size={16} className="mr-2" />
                        Detalhes
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Paginação */}
          {filteredFinanceiros.length > 0 && (
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre a Área Financeira</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="text-blue-600 mr-3" size={24} />
                  Boletos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Gere boletos para pagamentos pendentes diretamente na plataforma. 
                  O boleto é atualizado em tempo real com juros e multas, se aplicável.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="text-blue-600 mr-3" size={24} />
                  Comprovantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Acesse e baixe comprovantes de pagamentos realizados. 
                  Todos os documentos estão disponíveis para consulta e impressão.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="text-blue-600 mr-3" size={24} />
                  Controle de Vencimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Acompanhe datas de vencimento e mantenha sua situação 
                  financeira com a ASOF sempre em dia para evitar suspensão de benefícios.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financeiro;