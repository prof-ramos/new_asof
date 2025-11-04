'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, FileText, Users, Mail, Shield, Eye, BookOpen, Award } from 'react-feather';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Tipos para os dados do portal
type Noticia = {
  id: number;
  titulo: string;
  descricao: string;
  data: string;
  categoria: string;
};

type Servico = {
  id: number;
  titulo: string;
  descricao: string;
  icone: JSX.Element;
  href: string;
};

type Destaque = {
  id: number;
  titulo: string;
  descricao: string;
  href: string;
  icone: JSX.Element;
};

const Home = () => {
  // Dados de exemplo para notícias
  const noticias: Noticia[] = [
    {
      id: 1,
      titulo: 'ASOF participa de evento internacional sobre diplomacia multilateral',
      descricao: 'Representantes da ASOF participaram do Fórum Internacional de Relações Exteriores...',
      data: '15 out 2025',
      categoria: 'Eventos'
    },
    {
      id: 2,
      titulo: 'Novas diretrizes para concursos na carreira外交',
      descricao: 'Publicadas novas diretrizes para os concursos da carreira de Oficial de Chancelaria...',
      data: '10 out 2025',
      categoria: 'Carreira'
    },
    {
      id: 3,
      titulo: 'Campanha de filiação 2025: benefícios exclusivos',
      descricao: 'A ASOF anuncia os benefícios especiais para associados do ano que vem...',
      data: '5 out 2025',
      categoria: 'Associados'
    }
  ];

  // Dados de exemplo para serviços
  const servicos: Servico[] = [
    {
      id: 1,
      titulo: 'Filiação',
      descricao: 'Solicite sua filiação à ASOF',
      icone: <Users size={24} />,
      href: '/associado/filiacao'
    },
    {
      id: 2,
      titulo: 'Área do Associado',
      descricao: 'Acesse documentos e serviços exclusivos',
      icone: <Shield size={24} />,
      href: '/associado'
    },
    {
      id: 3,
      titulo: 'Consulta Jurídica',
      descricao: 'Acesse nossa base de consultas jurídicas',
      icone: <FileText size={24} />,
      href: '/juridico'
    },
    {
      id: 4,
      titulo: 'Calendário de Eventos',
      descricao: 'Veja os próximos eventos e concursos',
      icone: <Calendar size={24} />,
      href: '/eventos'
    }
  ];

  // Dados de exemplo para destaques
  const destaques: Destaque[] = [
    {
      id: 1,
      titulo: 'Transparência',
      descricao: 'Acompanhe nossa prestação de contas e documentos',
      href: '/transparencia',
      icone: <Eye size={24} />
    },
    {
      id: 2,
      titulo: 'Carreira de Chancelaria',
      descricao: 'Tudo sobre a carreira e processos seletivos',
      href: '/carreira',
      icone: <BookOpen size={24} />
    },
    {
      id: 3,
      titulo: 'Premiações',
      descricao: 'Conheça os associados distinguidos',
      href: '/premiacoes',
      icone: <Award size={24} />
    }
  ];

  return (
    <div className="w-full">
      {/* Seção Hero */}
      <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Associação Nacional dos Oficiais de Chancelaria</h1>
            <p className="text-xl mb-8 text-blue-100">Fortalecendo a representação da carreira de Oficial de Chancelaria e promovendo o diálogo institucional.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                <Link href="/associado/filiacao">Tornar-se Associado</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/institucional">Conheça a ASOF</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-0"></div>
      </section>

      {/* Seção Destaques Institucionais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nossos Destaques</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destaques.map((destaque) => (
              <Card key={destaque.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex items-center text-center">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                    {destaque.icone}
                  </div>
                  <CardTitle className="text-xl">{destaque.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{destaque.descricao}</CardDescription>
                  <Button asChild variant="outline">
                    <Link href={destaque.href}>Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Notícias */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Últimas Notícias</h2>
            <Button variant="outline" asChild>
              <Link href="/noticias">Ver todas</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      {noticia.categoria}
                    </span>
                    <span className="text-sm text-gray-500">{noticia.data}</span>
                  </div>
                  <CardTitle className="text-xl">{noticia.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{noticia.descricao}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/noticias/${noticia.id}`}>Ler mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Serviços ao Associado */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Serviços para Associados</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Acesse benefícios exclusivos e serviços especializados disponíveis para membros da ASOF</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicos.map((servico) => (
              <Link 
                key={servico.id} 
                href={servico.href} 
                className="block group"
                aria-label={`Acessar serviço: ${servico.titulo}`}
              >
                <Card className="h-full border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all group-hover:-translate-y-1">
                  <CardHeader className="flex items-center text-center">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
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

      {/* Seção Contato e Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-700 to-blue-500 rounded-xl p-8 text-center text-white">
            <Mail size={48} className="mx-auto mb-6 text-blue-200" />
            <h2 className="text-3xl font-bold mb-4">Fique por dentro</h2>
            <p className="text-xl mb-8 text-blue-100">Assine nossa newsletter e receba as últimas notícias e informações sobre a carreira</p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-grow px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Endereço de e-mail"
              />
              <Button type="button" className="bg-white text-blue-700 hover:bg-blue-50 px-6">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;