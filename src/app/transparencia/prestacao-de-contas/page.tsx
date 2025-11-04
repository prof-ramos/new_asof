import Link from 'next/link';
import { Calendar, CheckCircle, Download, FileText, Layers } from 'react-feather';

import { demonstrativosFinanceiros, relatoriosTransparencia } from '@/data/transparencia';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const formatarData = (dataISO: string) =>
  new Date(dataISO).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

export default function PrestacaoDeContasPage() {
  return (
    <div className="w-full py-8">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Prestação de Contas</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Demonstrativos financeiros, relatórios de atividades e notas explicativas da ASOF, publicados com
            periodicidade anual.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <Card>
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileText size={22} className="text-blue-600" />
                  Prestação de Contas 2024
                </CardTitle>
                <CardDescription>
                  Documentos aprovados pela Assembleia Geral Ordinária em fevereiro de 2025.
                </CardDescription>
              </div>
              <Badge variant="secondary">Atualizado em 20/03/2025</Badge>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-gray-600">
              <p>
                A prestação de contas da ASOF segue o disposto no estatuto social e nas normas internas de
                governança. Todos os demonstrativos são elaborados com base no regime de competência e auditados
                por conselho fiscal independente.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline">Demonstrações contábeis</Badge>
                <Badge variant="outline">Notas explicativas</Badge>
                <Badge variant="outline">Relatórios de atividades</Badge>
              </div>
              <Button asChild variant="outline">
                <Link href="/documentos/transparencia/pacote-prestacao-contas-2024.zip" target="_blank">
                  Baixar pacote completo (ZIP)
                </Link>
              </Button>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {demonstrativosFinanceiros.map((demonstrativo) => (
              <Card key={demonstrativo.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{demonstrativo.titulo}</CardTitle>
                      <CardDescription>{demonstrativo.descricao}</CardDescription>
                    </div>
                    <Badge variant="secondary">{demonstrativo.categoria}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} />
                      Publicado em {formatarData(demonstrativo.data)}
                    </span>
                    <span>{demonstrativo.tipo} • {demonstrativo.tamanho}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={demonstrativo.link} target="_blank">
                      <Download size={16} className="mr-2" />
                      Baixar demonstrativo
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
                <Layers size={18} />
                Relatórios analíticos
              </CardTitle>
              <CardDescription className="text-blue-700">
                Documentos complementares com explicações sobre indicadores de gestão e execução orçamentária.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatoriosTransparencia.map((relatorio) => (
                <Card key={relatorio.id} className="border-blue-100">
                  <CardHeader>
                    <CardTitle className="text-base">{relatorio.titulo}</CardTitle>
                    <CardDescription>{relatorio.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-blue-600" />
                      {relatorio.categoria ?? 'Relatório'}
                    </div>
                    <div className="text-xs text-gray-500">
                      Publicado em {formatarData(relatorio.data)} • {relatorio.tamanho}
                    </div>
                    <Button asChild size="sm" variant="outline">
                      <Link href={relatorio.link} target="_blank">
                        <Download size={14} className="mr-1" />
                        Baixar relatório
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
