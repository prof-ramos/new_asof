'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, FileText, Users, Award, Calendar, Shield, Download, BarChart3, Coins } from 'react-feather';

const Transparencia = () => {
  // Dados de exemplo para relatórios de transparência
  const relatoriosTransparencia = [
    {
      id: 1,
      titulo: 'Relatório de Atividades 2024',
      descricao: 'Relatório anual de atividades da ASOF',
      data: '15/03/2025',
      tipo: 'PDF',
      tamanho: '2.4 MB',
      categoria: 'Relatórios'
    },
    {
      id: 2,
      titulo: 'Prestação de Contas Anual 2024',
      descricao: 'Prestação de contas detalhada do ano de 2024',
      data: '20/03/2025',
      tipo: 'PDF',
      tamanho: '3.1 MB',
      categoria: 'Contas'
    },
    {
      id: 3,
      titulo: 'Relatório de Gestão de Pessoas 2024',
      descricao: 'Relatório sobre a gestão de recursos humanos',
      data: '18/03/2025',
      tipo: 'PDF',
      tamanho: '1.8 MB',
      categoria: 'Gestão'
    }
  ];

  // Dados de exemplo para demonstrativos financeiros
  const demonstrativosFinanceiros = [
    {
      id: 1,
      titulo: 'Balanço Patrimonial 2024',
      descricao: 'Balanço patrimonial do exercício de 2024',
      data: '20/03/2025',
      tipo: 'PDF',
      tamanho: '1.2 MB',
      categoria: 'Balanço'
    },
    {
      id: 2,
      titulo: 'Demonstrativo de Resultado 2024',
      descricao: 'Demonstrativo de resultado do exercício de 2024',
      data: '20/03/2025',
      tipo: 'PDF',
      tamanho: '1.1 MB',
      categoria: 'Resultado'
    },
    {
      id: 3,
      titulo: 'Demonstrativo de Fluxo de Caixa 2024',
      descricao: 'Demonstrativo de fluxo de caixa do exercício de 2024',
      data: '20/03/2025',
      tipo: 'PDF',
      tamanho: '0.9 MB',
      categoria: 'Caixa'
    }
  ];

  // Dados de exemplo para atas
  const atas = [
    {
      id: 1,
      titulo: 'Ata da Assembleia Geral Ordinária 2025',
      descricao: 'Ata da Assembleia Geral Ordinária realizada em 10/02/2025',
      data: '10/02/2025',
      tipo: 'PDF',
      tamanho: '0.8 MB'
    },
    {
      id: 2,
      titulo: 'Ata da Reunião da Diretoria 01/2025',
      descricao: 'Ata da primeira reunião da diretoria em 2025',
      data: '15/01/2025',
      tipo: 'PDF',
      tamanho: '0.6 MB'
    },
    {
      id: 3,
      titulo: 'Ata da Assembleia Geral Extraordinária 2024',
      descricao: 'Ata da Assembleia Geral Extraordinária de 2024',
      data: '05/12/2024',
      tipo: 'PDF',
      tamanho: '0.7 MB'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Transparência e Prestação de Contas</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Acesso a informações sobre a gestão da ASOF, recursos financeiros e decisões institucionais
          </p>
        </div>
      </section>

      {/* Seção de introdução */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Compromisso com a Transparência</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A ASOF reafirma seu compromisso com a transparência na gestão de recursos e na prestação de contas 
              à sociedade, ao Itamaraty e aos associados.
            </p>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Nossa Atuação</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                A transparência é um dos pilares da ASOF. Por isso, disponibilizamos amplamente informações 
                sobre a gestão financeira, decisões institucionais e prestação de contas.
              </p>
              <p className="text-gray-700">
                Todos os documentos estão organizados por categorias para facilitar o acesso e a compreensão 
                das atividades desenvolvidas pela associação.
              </p>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-xl p-8 text-center mb-12">
            <h3 className="text-xl font-bold text-gray-800 mb-4">LGPD - Lei Geral de Proteção de Dados</h3>
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

      {/* Seção de relatórios de transparência */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Relatórios de Transparência</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatoriosTransparencia.map((relatorio) => (
              <Card key={relatorio.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{relatorio.titulo}</CardTitle>
                    <CardDescription>{relatorio.descricao}</CardDescription>
                  </div>
                  <FileText size={24} className="text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">{relatorio.data}</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {relatorio.tipo}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{relatorio.tamanho}</span>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/documentos/relatorios/${relatorio.id}`} target="_blank">
                        <Download size={16} className="mr-1" />
                        Baixar
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de demonstrativos financeiros */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Demonstrativos Financeiros</h2>
          
          <div className="space-y-6">
            {demonstrativosFinanceiros.map((demonstrativo) => (
              <Card key={demonstrativo.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      <Coins size={24} />
                    </div>
                    <div>
                      <CardTitle>{demonstrativo.titulo}</CardTitle>
                      <CardDescription>{demonstrativo.descricao}</CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{demonstrativo.data}</p>
                    <p className="text-sm text-gray-600">{demonstrativo.tamanho}</p>
                    <Button className="mt-2" variant="outline" size="sm" asChild>
                      <Link href={`/documentos/financeiros/${demonstrativo.id}`} target="_blank">
                        <Download size={16} className="mr-1" />
                        Acessar
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de atas */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Atas de Reuniões</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {atas.map((ata) => (
              <Card key={ata.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{ata.titulo}</CardTitle>
                      <CardDescription>{ata.descricao}</CardDescription>
                    </div>
                    <Calendar size={24} className="text-blue-600" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{ata.data}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {ata.tipo}
                      </span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/documentos/atas/${ata.id}`} target="_blank">
                          <Download size={16} className="mr-1" />
                          Baixar
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de indicadores de transparência */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Indicadores de Transparência</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <BarChart3 size={32} className="text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">98%</CardTitle>
              <p className="text-gray-600">Documentos Disponíveis</p>
            </Card>
            
            <Card className="text-center p-6">
              <Eye size={32} className="text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">100%</CardTitle>
              <p className="text-gray-600">Prestação de Contas</p>
            </Card>
            
            <Card className="text-center p-6">
              <Shield size={32} className="text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-2xl">100%</CardTitle>
              <p className="text-gray-600">Conformidade LGPD</p>
            </Card>
          </div>
          
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl">Compromisso com a Transparência</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                A ASOF reafirma seu compromisso contínuo com a transparência ativa, disponibilizando 
                ampla gama de informações sobre sua gestão e atuação. Novos documentos são adicionados 
                regularmente para manter a sociedade informada sobre nossas atividades.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Seção de canais de comunicação */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Canais de Comunicação</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Caso tenha dúvidas ou solicitações de informações adicionais, entre em contato conosco
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="text-blue-600 mr-3" size={24} />
                  Ouvidoria
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Para solicitações de informações, denúncias ou sugestões, utilize o canal de ouvidoria.
                </p>
                <Button asChild>
                  <Link href="/ouvidoria">Acessar Ouvidoria</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Canal DPO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Para questões relacionadas à Lei Geral de Proteção de Dados (LGPD), entre em contato com o DPO.
                </p>
                <Button variant="outline" asChild>
                  <Link href="/dpo">Contatar DPO</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Acompanhe Nossa Gestão</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Acesse regularmente as informações sobre a gestão da ASOF
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/ouvidoria">Ouvidoria</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transparencia;