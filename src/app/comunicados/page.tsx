import Link from 'next/link';
import { Calendar, FileText } from 'react-feather';
import { Metadata } from 'next';

import { comunicados } from '@/data/comunicados';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return Number.isNaN(+date) ? 'Data indisponível' : date.toLocaleDateString('pt-BR');
}

export const metadata: Metadata = {
  title: 'Comunicados Oficiais | ASOF',
  description:
    'Comunicados oficiais da Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro.',
};

export default function ComunicadosPage() {
  const orderedComunicados = [...comunicados].sort((a, b) =>
    a.dataPublicacao < b.dataPublicacao ? 1 : -1,
  );

  const destaque = orderedComunicados[0];
  const demais = orderedComunicados.slice(1);

  return (
    <div className="w-full py-8">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comunicados Oficiais</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Notas oficiais, comunicados e notícias relevantes para a carreira de Oficial de Chancelaria
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          {destaque && (
            <Card className="mb-12 border-blue-200">
              <CardHeader>
                <div className="flex justify-between flex-col md:flex-row md:items-start gap-4">
                  <div>
                    <Badge variant="secondary" className="mb-4">
                      {destaque.tipo}
                    </Badge>
                    <CardTitle className="text-2xl md:text-3xl mb-3">{destaque.titulo}</CardTitle>
                    <CardDescription className="text-lg text-gray-700">
                      {destaque.descricao}
                    </CardDescription>
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={18} className="mr-2" />
                    {formatDate(destaque.dataPublicacao)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {destaque.tags?.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm">
                      #{tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild size="lg">
                  <Link href={`/comunicados/${destaque.slug}`}>Ler comunicado completo</Link>
                </Button>
              </CardContent>
            </Card>
          )}

          {demais.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Mais comunicados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {demais.map((comunicado) => (
                  <Card key={comunicado.id} className="h-full flex flex-col">
                    <CardHeader className="space-y-4">
                      <div className="flex justify-between items-start">
                        <Badge variant="secondary">{comunicado.tipo}</Badge>
                        <span className="flex items-center text-gray-500 text-sm">
                          <Calendar size={16} className="mr-1" />
                          {formatDate(comunicado.dataPublicacao)}
                        </span>
                      </div>
                      <CardTitle className="text-xl text-gray-900">{comunicado.titulo}</CardTitle>
                      <CardDescription className="text-gray-700 line-clamp-3">
                        {comunicado.descricao}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {comunicado.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/comunicados/${comunicado.slug}`}>
                          <FileText size={16} className="mr-2" />
                          Acessar comunicado
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Precisa de contato com a equipe de comunicação?</CardTitle>
              <CardDescription>
                Profissionais de imprensa podem entrar em contato com a assessoria dedicada.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="text-gray-700">
                <p>E-mail: imprensa@asof.org.br</p>
                <p>Telefone: (61) 3225-9191</p>
              </div>
              <Button asChild>
                <Link href="/imprensa">Ir para a Sala de Imprensa</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
