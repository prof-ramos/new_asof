import Link from 'next/link';
import { Download, FileText, Filter } from 'react-feather';

import { documentosTransparencia } from '@/data/transparencia';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const formatarData = (dataISO: string) =>
  new Date(dataISO).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

const categorias = Array.from(
  new Set(documentosTransparencia.map((documento) => documento.categoria ?? 'Documentos')),
).sort();

export default function DocumentosTransparenciaPage() {
  return (
    <div className="w-full py-8">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Documentos Oficiais</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Acesse os normativos, políticas e planos que regem a atuação da Associação Nacional dos Oficiais de
            Chancelaria.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <Card className="border-blue-100">
            <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle className="text-xl flex items-center gap-3">
                  <FileText size={22} className="text-blue-600" />
                  Biblioteca de Documentos
                </CardTitle>
                <CardDescription>
                  Documentos oficiais são publicados em formato acessível (PDF/A) e atualizados sempre que novas
                  versões são aprovadas pela diretoria ou assembleia.
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                {categorias.map((categoria) => (
                  <Badge key={categoria} variant="outline">
                    <Filter size={14} className="mr-1" />
                    {categoria}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Para solicitações específicas, entre em contato pelo e-mail{' '}
              <a href="mailto:documentos@asof.org.br" className="text-blue-600 underline">
                documentos@asof.org.br
              </a>
              .
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {documentosTransparencia.map((documento) => (
              <Card key={documento.id} className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-lg">{documento.titulo}</CardTitle>
                      <CardDescription>{documento.descricao}</CardDescription>
                    </div>
                    <Badge variant="secondary">{documento.categoria ?? documento.tipo}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="mt-auto space-y-4 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Publicado em {formatarData(documento.data)}</span>
                    <span>{documento.tipo} • {documento.tamanho}</span>
                  </div>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={documento.link} target="_blank" rel="noreferrer">
                      <Download size={16} className="mr-2" />
                      Baixar documento
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
