'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/authContext';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, AlertCircle, CheckCircle, Mail, Edit, Calendar } from 'react-feather';

const NovoProtocolo = () => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [formData, setFormData] = useState({
    tipoDocumento: '',
    assunto: '',
    descricao: '',
    prioridade: 'normal'
  });
  const [message, setMessage] = useState<{type: string, text: string} | null>(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
    }
  }, [user, loading, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoadingSubmit(true);

    try {
      // In a real implementation, this would be an API call to create a protocol
      console.log('Submitting protocol:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage({ type: 'success', text: 'Protocolo criado com sucesso! Seu número de protocolo é ASOF-2025-004.' });
      
      // Reset form after successful submission
      setFormData({
        tipoDocumento: '',
        assunto: '',
        descricao: '',
        prioridade: 'normal'
      });
    } catch (error) {
      console.error("Failed to create protocol:", error);
      setMessage({ type: 'error', text: 'Erro ao criar protocolo. Tente novamente.' });
    } finally {
      setLoadingSubmit(false);
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

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="bg-blue-900 p-4 rounded-full mr-6">
              <Plus className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Novo Protocolo</h1>
              <p className="text-blue-100 text-lg">
                Protocolize documentos e requerimentos na ASOF
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
            <Link href="/associado/protocolos" className="text-blue-600 hover:underline mx-6">Protocolos</Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-800 ml-6">Novo</span>
          </nav>
        </div>
      </section>

      {/* Seção principal */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Mensagem de feedback */}
          {message && (
            <div className={`mb-6 p-4 rounded-lg flex items-center ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {message.type === 'success' ? (
                <CheckCircle size={20} className="mr-2" />
              ) : (
                <AlertCircle size={20} className="mr-2" />
              )}
              {message.text}
            </div>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Informações do Documento</CardTitle>
              <CardDescription>
                Preencha os campos abaixo para protocolizar seu documento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="tipoDocumento" className="block text-sm font-medium text-gray-700 mb-1">
                      Tipo de Documento <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="tipoDocumento"
                      name="tipoDocumento"
                      value={formData.tipoDocumento}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Selecione o tipo de documento</option>
                      <option value="oficio">Ofício</option>
                      <option value="requerimento">Requerimento</option>
                      <option value="memorando">Memorando</option>
                      <option value="email">E-mail</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 mb-1">
                      Assunto <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Assunto do documento"
                    />
                  </div>

                  <div>
                    <label htmlFor="descricao" className="block text-sm font-medium text-gray-700 mb-1">
                      Descrição <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="descricao"
                      name="descricao"
                      value={formData.descricao}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Descreva detalhadamente o conteúdo do documento e o motivo do protocolo"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="prioridade" className="block text-sm font-medium text-gray-700 mb-1">
                      Prioridade
                    </label>
                    <select
                      id="prioridade"
                      name="prioridade"
                      value={formData.prioridade}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="normal">Normal</option>
                      <option value="alta">Alta</option>
                      <option value="urgente">Urgente</option>
                    </select>
                  </div>

                  <div className="pt-4 flex justify-end space-x-4">
                    <Button type="button" variant="outline" asChild>
                      <Link href="/associado/protocolos">Cancelar</Link>
                    </Button>
                    <Button type="submit" disabled={loadingSubmit}>
                      {loadingSubmit ? 'Enviando...' : 'Protocolar Documento'}
                    </Button>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Informações sobre protocolo */}
          <div className="mt-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Sobre o Sistema de Protocolos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <Edit size={40} className="text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-1">Autenticação</h3>
                    <p className="text-sm text-gray-600">Todos os protocolos são autenticados com sua identidade de associado</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Calendar size={40} className="text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-1">Acompanhamento</h3>
                    <p className="text-sm text-gray-600">Acompanhe o status do seu protocolo em tempo real</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <Mail size={40} className="text-blue-600 mb-3" />
                    <h3 className="font-semibold mb-1">Notificações</h3>
                    <p className="text-sm text-gray-600">Receba notificações sobre atualizações no seu protocolo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NovoProtocolo;