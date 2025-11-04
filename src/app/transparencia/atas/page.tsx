import Link from 'next/link';
import { Calendar, Download, MapPin, Users } from 'react-feather';

import { atasTransparencia } from '@/data/transparencia';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const formatarDataExtensa = (dataISO: string) =>
  new Date(dataISO).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

export default function AtasTransparenciaPage() {
  const atasOrdenadas = [...atasTransparencia].sort((a, b) =>
    a.data < b.data ? 1 : -1,
  );

  return (
    <div className="w-full py-8">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Atas e Deliberações</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Registros das assembleias e reuniões deliberativas da associação, publicados em até 48 horas após a
            aprovação.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <Card className="border-blue-100">
            <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-xl flex items-center gap-3">
                  <Users size={22} className="text-blue-600" />
                  Procedimentos de publicação
                </CardTitle>
                <CardDescription>
                  As atas são lavradas pela secretaria executiva, revisadas pelo conselho fiscal e assinadas
                  digitalmente pelos participantes.
                </CardDescription>
              </div>
              <Badge variant="secondary">Versão digital com assinatura ICP-Brasil</Badge>
            </CardHeader>
            <CardContent className="text-sm text-gray-600 space-y-3">
              <p>
                Os documentos abaixo contêm registro completo das deliberações, incluindo lista de presença, pauta
                discutida e encaminhamentos oficiais. Para atas de anos anteriores, solicite pelo canal de
                transparência.
              </p>
              <Button asChild variant="outline">
                <Link href="/contato?assunto=atas">Solicitar atas históricas</Link>
              </Button>
            </CardContent>
          </Card>

          <div className="space-y-8">
            {atasOrdenadas.map((ata) => (
              <Card key={ata.id}>
                <CardHeader className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <Badge variant="secondary">Publicada em {formatarDataExtensa(ata.data)}</Badge>
                    <CardTitle className="text-lg">{ata.titulo}</CardTitle>
                    <CardDescription>{ata.descricao}</CardDescription>
                  </div>
                  <Badge variant="outline">{ata.tipo}</Badge>
                </CardHeader>
                <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    Sessão realizada em {formatarDataExtensa(ata.data)}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    Brasília/DF • Formato híbrido
                  </div>
                  <div>
                    {ata.tamanho}
                  </div>
                  <Button asChild variant="outline">
                    <Link href={ata.link} target="_blank">
                      <Download size={16} className="mr-2" />
                      Baixar ata assinada
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
