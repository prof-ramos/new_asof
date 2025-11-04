import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Calendar, Download, Tag } from 'react-feather';

import { comunicados } from '@/data/comunicados';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type ComunicadoPageProps = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: ComunicadoPageProps): Metadata {
  const comunicado = comunicados.find((item) => item.slug === params.slug);

  if (!comunicado) {
    return {
      title: 'Comunicado não encontrado | ASOF',
    };
  }

  return {
    title: `${comunicado.titulo} | ASOF`,
    description: comunicado.descricao,
  };
}

export default function ComunicadoDetalhePage({ params }: ComunicadoPageProps) {
  const comunicado = comunicados.find((item) => item.slug === params.slug);

  if (!comunicado) {
    notFound();
  }

  return (
    <div className="w-full py-8">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <Badge variant="secondary" className="mb-6">
            {comunicado.tipo}
          </Badge>
          <h1 className="text-4xl font-bold mb-4 max-w-4xl">{comunicado.titulo}</h1>
          <p className="text-xl text-blue-100 max-w-3xl">{comunicado.descricao}</p>
          <div className="flex items-center text-blue-100 mt-6">
            <Calendar size={18} className="mr-2" />
            {new Date(comunicado.dataPublicacao).toLocaleDateString('pt-BR')}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl space-y-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-gray-800">Tags relacionadas</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {comunicado.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  <Tag size={14} className="mr-1" />
                  {tag}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <article className="prose prose-lg max-w-none text-gray-800">
            {comunicado.conteudo.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </article>

          {comunicado.anexos && comunicado.anexos.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Documentos relacionados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {comunicado.anexos.map((anexo) => (
                  <div
                    key={anexo.link}
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border rounded-lg px-4 py-3 bg-white"
                  >
                    <div>
                      <p className="font-semibold text-gray-900">{anexo.titulo}</p>
                      <p className="text-sm text-gray-500">
                        {anexo.tipo} • {anexo.tamanho}
                      </p>
                    </div>
                    <Button asChild variant="outline">
                      <Link href={anexo.link} target="_blank" rel="noreferrer">
                        <Download size={16} className="mr-2" />
                        Baixar arquivo
                      </Link>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Button asChild variant="outline">
              <Link href="/comunicados">Voltar para comunicados</Link>
            </Button>
            <Button asChild>
              <Link href="/imprensa">Ir para a Sala de Imprensa</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
