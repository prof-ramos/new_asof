import Link from 'next/link';
import {
  BarChart2,
  Calendar,
  DollarSign,
  Download,
  Eye,
  FileText,
  Shield,
  Users,
} from 'react-feather';

import {
  atasTransparencia,
  demonstrativosFinanceiros,
  documentosTransparencia,
  relatoriosTransparencia,
} from '@/data/transparencia';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const formatarData = (dataISO: string) =>
  new Date(dataISO).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const Transparencia = () => {
  return (
    <div className="w-full py-8">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparência e Prestação de Contas</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Informações organizadas sobre governança, finanças e documentos oficiais da ASOF
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="border-blue-100">
              <CardHeader className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <Eye size={22} />
                </div>
                <CardTitle className="text-lg">Prestação de contas contínua</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-sm">
                Relatórios periódicos e demonstrativos financeiros publicados conforme boas práticas de
                governança.
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardHeader className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <Shield size={22} />
                </div>
                <CardTitle className="text-lg">Conformidade LGPD</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-sm">
                Tratamento de dados pessoais alinhado à Lei Geral de Proteção de Dados com canal dedicado ao
                titular.
              </CardContent>
            </Card>
            <Card className="border-blue-100">
              <CardHeader className="flex items-center gap-3">
                <div className="rounded-full bg-blue-100 p-3 text-blue-600">
                  <Users size={22} />
                </div>
                <CardTitle className="text-lg">Comunicação ativa</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-sm">
                Disponibilização estruturada das atas e decisões colegiadas para consulta dos associados.
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <BarChart2 size={26} className="text-blue-600" />
                Como organizamos a transparência
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700 space-y-4">
              <p>
                A ASOF segue um calendário anual de publicação de informações financeiras, atas e documentos
                normativos. Cada publicação é acompanhada de notas explicativas e indicadores que facilitam a
                compreensão das ações da associação.
              </p>
              <p>
                Os documentos ficam disponíveis para consulta pública e são atualizados sempre que novas
                deliberações ou prestações de contas são aprovadas pelos órgãos de governança.
              </p>
              <Button asChild variant="outline" className="mt-4">
                <Link href="/transparencia/prestacao-de-contas">Acessar prestação de contas completa</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Destaques recentes de transparência
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {relatoriosTransparencia.slice(0, 2).map((relatorio) => (
              <Card key={relatorio.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{relatorio.titulo}</CardTitle>
                    <CardDescription>{relatorio.descricao}</CardDescription>
                  </div>
                  <Badge variant="secondary">{relatorio.categoria ?? relatorio.tipo}</Badge>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} /> {formatarData(relatorio.data)}
                  </span>
                  <span>{relatorio.tamanho}</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href={relatorio.link} target="_blank">
                      <Download size={14} className="mr-1" />
                      Baixar
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/transparencia/documentos">Ver todos os documentos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Demonstrativos financeiros</h2>
          <div className="space-y-6">
            {demonstrativosFinanceiros.map((demonstrativo) => (
              <Card key={demonstrativo.id}>
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 text-green-600 p-3">
                      <DollarSign size={20} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{demonstrativo.titulo}</CardTitle>
                      <CardDescription>{demonstrativo.descricao}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline">{demonstrativo.categoria}</Badge>
                </CardHeader>
                <CardContent className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
                  <span>Publicado em {formatarData(demonstrativo.data)}</span>
                  <span>{demonstrativo.tamanho}</span>
                  <Button asChild variant="outline" size="sm">
                    <Link href={demonstrativo.link} target="_blank">
                      <Download size={14} className="mr-1" />
                      Baixar documento
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-3">Conformidade com boas práticas</h2>
              <p className="text-gray-300 max-w-3xl">
                Mantemos a documentação organizada e auditável, com registro cronológico das deliberações. As atas
                ficam disponíveis para os associados no mesmo dia da publicação e podem ser solicitadas em formato
                acessível.
              </p>
            </div>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <Link href="/transparencia/atas">Consultar atas publicadas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card>
            <CardHeader>
              <CardTitle>Precisa de documentos adicionais?</CardTitle>
              <CardDescription>
                Disponibilizamos canais específicos para solicitações de transparência e informações complementares.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-gray-700">
              <div>
                <p>E-mail institucional: transparencia@asof.org.br</p>
                <p>Prazo de resposta: até 7 dias úteis conforme regulamento interno.</p>
              </div>
              <Button asChild>
                <Link href="/contato?assunto=transparencia">Solicitar informação</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Transparencia;
