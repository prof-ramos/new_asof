'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/authContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, FileText, Users, Award, Calendar, Mail, Download, Eye, Briefcase, BookOpen, DollarSign } from 'react-feather';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AreaRestrita = () => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth/sign-in');
    }
  }, [user, loading, router]);

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

  // Services available based on user role
  const servicosExclusivos = [
    {
      id: 1,
      titulo: 'Protocolos e Requerimentos',
      descricao: 'Sistema para protocolar documentos e requerimentos',
      icone: <FileText size={24} />,
      href: '/associado/protocolos',
      cor: 'green',
      tipo: 'servico'
    },
    {
      id: 2,
      titulo: 'Consulta Jurídica',
      descricao: 'Acesse nossa base de orientações jurídicas',
      icone: <Award size={24} />,
      href: '/associado/juridico',
      cor: 'purple',
      tipo: 'servico'
    },
    {
      id: 3,
      titulo: 'Área Financeira',
      descricao: 'Segunda via de boletos e histórico financeiro',
      icone: <DollarSign size={24} />,
      href: '/associado/financeiro',
      cor: 'yellow',
      tipo: 'servico'
    },
    {
      id: 4,
      titulo: 'Informações do Perfil',
      descricao: 'Consulte e atualize suas informações pessoais',
      icone: <Users size={24} />,
      href: '/associado/perfil',
      cor: 'blue',
      tipo: 'acesso'
    },
    {
      id: 5,
      titulo: 'Documentos Exclusivos',
      descricao: 'Acesso a documentos reservados para associados',
      icone: <Shield size={24} />,
      href: '/associado/documentos',
      cor: 'red',
      tipo: 'acesso'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Área Restrita</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Acesse os serviços exclusivos disponíveis apenas para associados da ASOF
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Bem-vindo à Área Restrita</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Aqui você encontra todos os serviços e informações exclusivas para membros da ASOF
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Sua Conta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{user?.fullName}</h3>
                  <p className="text-gray-600">Email: {user?.email}</p>
                  <p className="text-gray-600">Cargo: Associado Ativo</p>
                  <p className="text-gray-600">Status: {user?.status}</p>
                </div>
                <div className="flex items-center">
                  <Button asChild>
                    <Link href="/associado/perfil">Editar Perfil</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Nossos Serviços Exclusivos</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Acesse os serviços exclusivos disponíveis para associados da ASOF
            </p>
          </div>
        </div>
      </section>

      {/* Seção de serviços exclusivos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicosExclusivos.map((servico) => (
              <Link 
                key={servico.id} 
                href={servico.href} 
                className="block group"
                aria-label={`Acessar ${servico.titulo}`}
              >
                <Card className="h-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group-hover:-translate-y-1">
                  <CardHeader className="flex items-center text-center">
                    <div className={`p-4 rounded-full bg-${servico.cor}-100 text-${servico.cor}-600 mb-4 group-hover:bg-${servico.cor}-200 transition-colors`}>
                      {servico.icone}
                    </div>
                    <CardTitle className="text-lg">{servico.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{servico.descricao}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de benefícios para associados */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefícios Exclusivos</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={24} />
                  Consultoria Jurídica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Acesso à base de orientações jurídicas com precedentes e pareceres 
                  específicos para a carreira de Oficial de Chancelaria.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Representação Institucional
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  A ASOF atua como representante dos interesses da categoria nos órgãos 
                  competentes, defendendo os direitos e promovendo a valorização da carreira.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Download className="text-blue-600 mr-3" size={24} />
                  Documentos Exclusivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Acesso a documentos internos, atas de reuniões, informações privilegiadas 
                  e materiais exclusivos para associados.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="text-blue-600 mr-3" size={24} />
                  Eventos Exclusivos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Participação em eventos, seminários e formações exclusivos para associados, 
                  com temas relevantes para a carreira e desenvolvimento profissional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Dúvidas?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Nossa equipe está disponível para ajudar você a utilizar os serviços exclusivos
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/faq">Consulte o FAQ</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AreaRestrita;