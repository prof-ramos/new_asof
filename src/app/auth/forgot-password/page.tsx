'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Shield, CheckCircle, AlertCircle } from 'react-feather';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email inválido');
      return;
    }

    // Simulate password reset request
    console.log('Password reset requested for:', email);
    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-10">
            <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Shield className="text-blue-600" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Recuperar Senha</h1>
            <p className="text-gray-600 mt-2">
              Insira seu e-mail para receber instruções de redefinição
            </p>
          </div>

          {submitted ? (
            <Card className="text-center p-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-green-100 text-green-600">
                  <CheckCircle size={48} />
                </div>
              </div>
              <CardTitle className="text-2xl mb-4">Instruções Enviadas</CardTitle>
              <p className="text-gray-700 mb-6">
                Enviamos um link de redefinição de senha para <strong>{email}</strong>. 
                Verifique sua caixa de entrada e siga as instruções.
              </p>
              <Button asChild>
                <Link href="/auth/sign-in">Voltar ao Login</Link>
              </Button>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Esqueceu sua senha?</CardTitle>
                <CardDescription className="text-center">
                  Insira seu e-mail e enviaremos um link para redefinir sua senha
                </CardDescription>
              </CardHeader>
              <CardContent>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg flex items-center">
                    <AlertCircle size={16} className="mr-2" />
                    {error}
                  </div>
                )}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail size={16} className="text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="seu.email@exemplo.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Enviar Instruções
                  </Button>
                </form>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-center text-sm text-gray-600">
                    Lembrou sua senha?{' '}
                    <Link href="/auth/sign-in" className="text-blue-600 hover:underline">
                      Faça login
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              © {new Date().getFullYear()} ASOF - Associação Nacional dos Oficiais de Chancelaria.{' '}
              <Link href="/privacidade" className="text-blue-600 hover:underline">
                Política de Privacidade
              </Link>{' '}
              |{' '}
              <Link href="/termos" className="text-blue-600 hover:underline">
                Termos de Uso
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;