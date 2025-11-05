'use client';

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
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(var(--primary))] via-[#0C7489] to-[hsl(var(--accent))] py-20 text-white">
        <div aria-hidden="true" className="absolute -right-32 top-16 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Associação Nacional dos Oficiais de Chancelaria</h1>
            <p className="text-xl mb-8 text-white/80">Fortalecendo a representação da carreira de Oficial de Chancelaria e promovendo o diálogo institucional.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-white/90">
                <Link href="/associado/filiacao">Tornar-se Associado</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/70 text-white hover:bg-white/10 focus-visible:ring-offset-0"
              >
                <Link href="/institucional">Conheça a ASOF</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Destaques Institucionais */}
      <section className="py-16 bg-[hsl(var(--muted))]">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold text-foreground">Nossos Destaques</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {destaques.map((destaque) => (
              <Card
                key={destaque.id}
                className="border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))]">
                    {destaque.icone}
                  </div>
                  <CardTitle className="text-xl text-foreground">{destaque.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-6 text-muted-foreground">{destaque.descricao}</CardDescription>
                  <Button
                    asChild
                    className="bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:brightness-110"
                  >
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
          <div className="mb-12 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-foreground">Últimas Notícias</h2>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-[hsl(var(--muted))]">
              <Link href="/noticias">Ver todas</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {noticias.map((noticia) => (
              <Card key={noticia.id} className="overflow-hidden border border-border transition-all hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <div className="mb-3 flex items-start justify-between">
                    <span className="inline-block rounded-full bg-secondary/20 px-3 py-1 text-sm font-medium text-secondary-foreground">
                      {noticia.categoria}
                    </span>
                    <span className="text-sm text-muted-foreground">{noticia.data}</span>
                  </div>
                  <CardTitle className="text-xl text-foreground">{noticia.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{noticia.descricao}</p>
                  <Button variant="link" className="h-auto p-0 text-[hsl(var(--primary))]" asChild>
                    <Link href={`/noticias/${noticia.id}`}>Ler mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Serviços ao Associado */}
      <section className="bg-gradient-to-br from-white via-[hsl(var(--muted))] to-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-semibold text-foreground">Serviços para Associados</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">Acesse benefícios exclusivos e serviços especializados disponíveis para membros da ASOF</p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {servicos.map((servico) => (
              <Link 
                key={servico.id} 
                href={servico.href} 
                className="group block"
                aria-label={`Acessar serviço: ${servico.titulo}`}
              >
                <Card className="h-full border border-border transition-all group-hover:-translate-y-1 group-hover:border-[hsl(var(--accent))] group-hover:shadow-lg">
                  <CardHeader className="flex flex-col items-center gap-4 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-[hsl(var(--primary-foreground))] transition-transform group-hover:scale-105">
                      {servico.icone}
                    </div>
                    <CardTitle className="text-lg text-foreground">{servico.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-muted-foreground">{servico.descricao}</p>
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
          <div className="mx-auto max-w-4xl rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-8 text-center text-white shadow-lg">
            <Mail size={48} className="mx-auto mb-6 text-white/80" aria-hidden="true" />
            <h2 className="mb-4 text-3xl font-semibold">Fique por dentro</h2>
            <p className="mb-8 text-xl text-white/80">Assine nossa newsletter e receba as últimas notícias e informações sobre a carreira</p>
            
            <div className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="w-full flex-grow rounded-lg border border-transparent bg-white px-4 py-3 text-[hsl(var(--foreground))] shadow-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--secondary))] focus:ring-offset-2 focus:ring-offset-transparent"
                aria-label="Endereço de e-mail"
              />
              <Button type="button" className="bg-white px-6 text-[hsl(var(--primary))] hover:bg-white/90">
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
