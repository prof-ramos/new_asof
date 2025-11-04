'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Mail, FileText, User, Calendar, Download } from 'react-feather';

const DPO = () => {
  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Canal DPO</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Encarregado de Proteção de Dados da ASOF - Em conformidade com a LGPD
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Encarregado de Proteção de Dados</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              O Canal DPO da ASOF é o canal oficial para questões relacionadas à Lei Geral de Proteção de Dados (LGPD)
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Shield className="text-blue-600 mr-3" size={24} />
                Sobre o DPO
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                O Encarregado de Proteção de Dados (DPO) da ASOF é responsável por atuar como canal de comunicação 
                entre a associação e os titulares de dados pessoais, bem como supervisionar o tratamento de dados 
                pessoais realizado pela associação em conformidade com a Lei Geral de Proteção de Dados (LGPD).
              </p>
              <p className="text-gray-700">
                O DPO também atua na orientação da associação sobre as práticas de proteção de dados e garante 
                que as atividades de tratamento de dados sejam realizadas conforme a legislação vigente.
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Conformidade LGPD</h3>
            <p className="text-gray-700 mb-4 max-w-2xl mx-auto">
              A ASOF está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e garante a proteção 
              de todas as informações pessoais coletadas, armazenadas e processadas.
            </p>
            <Button asChild variant="outline">
              <Link href="/lgpd">Política de Privacidade</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Seção de informações do DPO */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Informações do DPO</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="text-blue-600 mr-3" size={24} />
                  Dados do DPO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-700">Nome:</h4>
                    <p className="text-gray-900">Dr. Carlos Eduardo Mendes</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Cargo:</h4>
                    <p className="text-gray-900">Encarregado de Proteção de Dados</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Formação:</h4>
                    <p className="text-gray-900">Doutor em Direito pela USP, especialista em Direito Digital</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="text-blue-600 mr-3" size={24} />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-700">E-mail:</h4>
                    <p className="text-gray-900">dpo@asof.org.br</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Telefone:</h4>
                    <p className="text-gray-900">(61) 3225-9191</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-700">Horário de Atendimento:</h4>
                    <p className="text-gray-900">Segunda a Sexta, 9h às 17h</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="text-center">
            <CardHeader>
              <CardTitle>Como Contatar o DPO</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Você pode contatar o DPO da ASOF diretamente através do e-mail dpo@asof.org.br ou 
                utilizando o formulário abaixo para questões específicas relacionadas à LGPD.
              </p>
              <Button asChild>
                <Link href="/contato?canal=dpo">Enviar Mensagem ao DPO</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de direitos do titular */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Direitos do Titular de Dados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { 
                titulo: 'Confirmação de Existência', 
                descricao: 'Direito de confirmar se seus dados pessoais estão sendo tratados' 
              },
              { 
                titulo: 'Acesso aos Dados', 
                descricao: 'Direito de acessar os dados pessoais que estão sendo tratados' 
              },
              { 
                titulo: 'Correção de Dados', 
                descricao: 'Direito de corrigir dados incompletos, inexatos ou desatualizados' 
              },
              { 
                titulo: 'Anonimização, Bloqueio ou Eliminação', 
                descricao: 'Direito de solicitar a anonimização ou eliminação de dados desnecessários' 
              },
              { 
                titulo: 'Portabilidade', 
                descricao: 'Direito de solicitar a portabilidade dos dados a outro fornecedor' 
              },
              { 
                titulo: 'Eliminação de Dados', 
                descricao: 'Direito de solicitar a eliminação dos dados tratados com consentimento' 
              }
            ].map((direito, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{direito.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{direito.descricao}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Exercer Seus Direitos</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Para exercer qualquer um dos direitos previstos na LGPD, você pode contatar diretamente 
                o DPO da ASOF através do canal de comunicação oficial.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild>
                  <Link href="/contato?canal=dpo">Solicitar Exercício de Direitos</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/documentos/lgpd/guia-direitos-titular.pdf" target="_blank">
                    <Download size={16} className="mr-2" />
                    Guia de Direitos
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de documentos relacionados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Documentos Relacionados</h2>
          
          <div className="space-y-6">
            {[
              { 
                titulo: 'Política de Privacidade da ASOF', 
                descricao: 'Política de privacidade e proteção de dados da associação',
                data: '15/03/2025'
              },
              { 
                titulo: 'Termo de Consentimento para Tratamento de Dados', 
                descricao: 'Termo padrão de consentimento para tratamento de dados pessoais',
                data: '15/03/2025'
              },
              { 
                titulo: 'Relatório de Impacto à Proteção de Dados', 
                descricao: 'Relatório de impacto referente às atividades de tratamento de dados',
                data: '20/03/2025'
              }
            ].map((documento, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                      <FileText size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{documento.titulo}</CardTitle>
                      <CardDescription>{documento.descricao}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{documento.data}</p>
                    <Button className="mt-2" variant="outline" size="sm" asChild>
                      <Link href={`/documentos/lgpd/${index + 1}`} target="_blank">
                        <Download size={16} className="mr-1" />
                        Baixar
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de LGPD */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Lei Geral de Proteção de Dados (LGPD)</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Lei nº 13.709/2018 - Regulamenta a proteção de dados pessoais no Brasil
          </p>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Sobre a LGPD</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A Lei Geral de Proteção de Dados (LGPD) estabelece regras sobre coleta, armazenamento, 
                tratamento e compartilhamento de dados pessoais, regulamentando a Lei 12.965/2014.
              </p>
              <p className="text-gray-700">
                A ASOF está em conformidade com todos os requisitos da LGPD e garante a proteção dos 
                dados de associados, candidatos e demais interessados que interagem com a associação.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Dúvidas sobre Proteção de Dados?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Entre em contato com o nosso Encarregado de Proteção de Dados
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contato?canal=dpo">Contatar DPO</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/lgpd">Conhecer a LGPD</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DPO;