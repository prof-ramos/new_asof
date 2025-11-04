'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle, Mail, Users } from 'react-feather';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type NewsletterFormState = 'idle' | 'submitting' | 'success' | 'error';

type ApiError = {
  message?: string;
};

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [areasInteresse, setAreasInteresse] = useState<string[]>([]);
  const [estado, setEstado] = useState<NewsletterFormState>('idle');
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  const segmentos = [
    { id: 'institucional', label: 'Institucional e governança' },
    { id: 'concursos', label: 'Concursos e carreira' },
    { id: 'associados', label: 'Serviços ao associado' },
    { id: 'imprensa', label: 'Sala de imprensa' },
    { id: 'eventos', label: 'Eventos e capacitações' },
  ];

  const handleToggleSegmento = (segmento: string) => {
    setAreasInteresse((prev) =>
      prev.includes(segmento) ? prev.filter((item) => item !== segmento) : [...prev, segmento],
    );
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEstado('submitting');
    setMensagemErro(null);

    try {
      const resposta = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          segmentos: areasInteresse,
          consentLgpd: true,
          origem: 'pagina-newsletter',
        }),
      });

      if (!resposta.ok) {
        const detalhe = (await resposta.json().catch(() => null)) as ApiError | null;
        throw new Error(
          detalhe?.message ??
            'Não foi possível registrar sua inscrição no momento. Tente novamente em instantes.',
        );
      }

      setEstado('success');
      setEmail('');
      setAreasInteresse([]);
    } catch (error) {
      console.error(error);
      setEstado('error');
      setMensagemErro(
        error instanceof Error
          ? error.message
          : 'Falha inesperada. Por favor, verifique os dados e tente novamente.',
      );
    }
  };

  return (
    <div className="w-full py-8">
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Newsletter ASOF</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Receba notícias, comunicados oficiais, pautas de imprensa e convites para eventos da associação
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Inscreva-se para receber atualizações</CardTitle>
                <CardDescription>
                  Escolha os temas de interesse e fique por dentro das novidades da carreira de Oficial de
                  Chancelaria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Formulário de inscrição">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Endereço de e-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                      <input
                        id="email"
                        type="email"
                        required
                        placeholder="seunome@dominio.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className="w-full rounded-lg border border-gray-300 pl-10 pr-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <fieldset className="space-y-3">
                    <legend className="text-sm font-medium text-gray-700">
                      Selecione os temas do seu interesse
                    </legend>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {segmentos.map((segmento) => (
                        <label
                          key={segmento.id}
                          className="flex items-start space-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-700 hover:border-blue-300"
                        >
                          <input
                            type="checkbox"
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            checked={areasInteresse.includes(segmento.id)}
                            onChange={() => handleToggleSegmento(segmento.id)}
                          />
                          <span>{segmento.label}</span>
                        </label>
                      ))}
                    </div>
                  </fieldset>

                  <div className="text-xs text-gray-500">
                    Ao se inscrever, você concorda em receber comunicações da ASOF. Você pode cancelar sua inscrição
                    a qualquer momento através do link nos e-mails recebidos.
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={estado === 'submitting' || !email}
                  >
                    {estado === 'submitting' ? 'Enviando...' : 'Quero receber novidades'}
                  </Button>
                  {estado === 'success' && (
                    <div
                      role="status"
                      className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                    >
                      <CheckCircle size={18} />
                      Inscrição registrada com sucesso! Verifique seu e-mail para confirmar o cadastro.
                    </div>
                  )}

                  {estado === 'error' && (
                    <div
                      role="status"
                      className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                    >
                      {mensagemErro}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <Users size={22} className="text-blue-600" />
                    Segmentos disponíveis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-700">
                  <p>
                    Personalizamos as comunicações de acordo com o seu interesse. Escolha entre conteúdos institucionais
                    e atualizações voltadas a associados, imprensa ou candidatos à carreira.
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Resumo semanal com os principais comunicados e notícias.</li>
                    <li>Alertas sobre abertura de editais e eventos da carreira.</li>
                    <li>Convites exclusivos para webinars, workshops e campanhas.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-3">
                    <CheckCircle size={22} className="text-blue-600" />
                    Política de privacidade
                  </CardTitle>
                  <CardDescription>
                    Tratamos seus dados em conformidade com a LGPD e a política de privacidade da ASOF.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-gray-700">
                  <p>
                    Utilizamos seus dados exclusivamente para o envio de comunicações institucionais e serviços
                    solicitados. A gestão de consentimentos é centralizada e pode ser revogada a qualquer momento.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/lgpd">Conheça nossa Política de Privacidade</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
