'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, Calendar, Briefcase, Shield, MapPin, Phone, Globe, Edit3, Save, X, Check, AlertCircle } from 'react-feather';

const Perfil = () => {
  const { user: currentUser, loading, logout } = useAuth();
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cargo: '',
    postoGraduacao: '',
    dataIngresso: '',
    areaAtuacao: '',
    contatoEmergencia: '',
    telefone: '',
    endereco: ''
  });
  const [message, setMessage] = useState<{type: string, text: string} | null>(null);

  useEffect(() => {
    if (!loading && !currentUser) {
      router.push('/auth/sign-in');
    } else if (currentUser) {
      // In a real implementation, this would be an API call to get full user details
      // For now, we'll use mock data based on the current user
      const mockUser = {
        ...currentUser,
        cargo: 'Terceiro Secretário',
        postoGraduacao: 'Capitão Diplomático',
        dataIngresso: '2018-05-15',
        areaAtuacao: 'Assuntos Consulares',
        contatoEmergencia: 'Maria Silva - (11) 98765-4321',
        telefone: '(11) 91234-5678',
        endereco: 'Av. Brigadeiro Faria Lima, 1234, São Paulo/SP'
      };
      setUser(mockUser);
      setFormData({
        fullName: mockUser.fullName || '',
        email: mockUser.email || '',
        cargo: mockUser.cargo || '',
        postoGraduacao: mockUser.postoGraduacao || '',
        dataIngresso: mockUser.dataIngresso || '',
        areaAtuacao: mockUser.areaAtuacao || '',
        contatoEmergencia: mockUser.contatoEmergencia || '',
        telefone: mockUser.telefone || '',
        endereco: mockUser.endereco || ''
      });
    }
  }, [currentUser, loading, router]);

  const handleEditToggle = () => {
    if (isEditing) {
      // Save changes
      handleSave();
    } else {
      setIsEditing(true);
    }
  };

  const handleSave = async () => {
    try {
      // In a real implementation, this would be an API call to update user data
      console.log('Saving user data:', formData);
      
      // Update local user data
      if (user) {
        setUser({
          ...user,
          ...formData
        });
      }
      
      setMessage({ type: 'success', text: 'Perfil atualizado com sucesso!' });
      setIsEditing(false);
      
      // Clear message after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Erro ao atualizar perfil. Tente novamente.' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
  if (!currentUser) {
    return null; // Redirect effect will handle this
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-blue-900 p-4 rounded-full mr-6">
              <User className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Meu Perfil</h1>
              <p className="text-blue-100 text-lg">
                Gerencie suas informações pessoais e de associado
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
            <span className="text-gray-800 ml-6">Meu Perfil</span>
          </nav>
        </div>
      </section>

      {/* Seção principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Mensagem de feedback */}
          {message && (
            <div className={`mb-6 p-4 rounded-lg flex items-center ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {message.type === 'success' ? (
                <Check size={20} className="mr-2" />
              ) : (
                <AlertCircle size={20} className="mr-2" />
              )}
              {message.text}
            </div>
          )}

          {/* Informações do perfil */}
          <Card className="mb-8">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-2xl">Informações do Perfil</CardTitle>
              <div className="flex space-x-3">
                <Button variant="outline" onClick={handleEditToggle}>
                  {isEditing ? (
                    <>
                      <X size={16} className="mr-2" />
                      Cancelar
                    </>
                  ) : (
                    <>
                      <Edit3 size={16} className="mr-2" />
                      Editar Perfil
                    </>
                  )}
                </Button>
                {isEditing && (
                  <Button onClick={handleEditToggle}>
                    <Save size={16} className="mr-2" />
                    Salvar
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Foto do perfil - mock */}
                <div className="md:col-span-2 flex flex-col items-center mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 mb-4" />
                  {isEditing && (
                    <Button variant="outline" size="sm">
                      Alterar Foto
                    </Button>
                  )}
                </div>

                {/* Nome completo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.email}</p>
                  )}
                </div>

                {/* Cargo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cargo</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="cargo"
                      value={formData.cargo}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.cargo}</p>
                  )}
                </div>

                {/* Posto/Graduação */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Posto/Graduação</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="postoGraduacao"
                      value={formData.postoGraduacao}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.postoGraduacao}</p>
                  )}
                </div>

                {/* Data de Ingresso */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Data de Ingresso</label>
                  {isEditing ? (
                    <input
                      type="date"
                      name="dataIngresso"
                      value={formData.dataIngresso}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{formatDate(user?.dataIngresso)}</p>
                  )}
                </div>

                {/* Área de Atuação */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Área de Atuação</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="areaAtuacao"
                      value={formData.areaAtuacao}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.areaAtuacao}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="(00) 00000-0000"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.telefone}</p>
                  )}
                </div>

                {/* Endereço */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Endereço</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="endereco"
                      value={formData.endereco}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.endereco}</p>
                  )}
                </div>

                {/* Contato de Emergência */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contato de Emergência</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name="contatoEmergencia"
                      value={formData.contatoEmergencia}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Nome e telefone"
                    />
                  ) : (
                    <p className="text-gray-900">{user?.contatoEmergencia}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Informações de associação */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Informações de Associação</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-500">Status de Associado</p>
                  <p className="font-medium text-green-600">Ativo</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Desde</p>
                  <p className="font-medium">15 de março de 2023</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Última Anuidade</p>
                  <p className="font-medium">Paga - Vence em 31/03/2025</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Próximos Eventos</p>
                  <p className="font-medium">Seminário de Diplomacia (15/12/2024)</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Segurança da conta */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Segurança da Conta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Senha</p>
                    <p className="text-sm text-gray-500">Última alteração: 15 de outubro de 2024</p>
                  </div>
                  <Button variant="outline">
                    Alterar Senha
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Autenticação de Dois Fatores</p>
                    <p className="text-sm text-gray-500">Aumente a segurança da sua conta</p>
                  </div>
                  <Button variant="outline">
                    Configurar
                  </Button>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <Button variant="destructive" onClick={() => logout()}>
                    Sair da Conta
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de informações */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Sobre o Perfil de Associado</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Informações Seguras
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Suas informações pessoais são armazenadas com segurança e utilizadas 
                  apenas para fins de representação e comunicação institucional.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Edit3 className="text-blue-600 mr-3" size={24} />
                  Atualização Fácil
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Mantenha seus dados sempre atualizados para garantir o recebimento 
                  de informações importantes e o acesso a todos os serviços.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="text-blue-600 mr-3" size={24} />
                  Representação Diplomática
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  As informações fornecidas ajudam a ASOF a representar melhor os 
                  interesses da carreira de Oficial de Chancelaria junto aos órgãos competentes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Perfil;