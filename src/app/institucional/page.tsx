'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Award, FileText, Calendar, Shield, Mail } from 'react-feather';

const Institucional = () => {
  const institucionalItems = [
    {
      id: 1,
      titulo: 'Quem Somos',
      descricao: 'Conheça a ASOF, sua história, missão e valores',
      icone: <Users size={32} />,
      href: '/institucional/quem-somos',
      cor: 'blue'
    },
    {
      id: 2,
      titulo: 'História',
      descricao: 'A trajetória da ASOF desde sua fundação até os dias atuais',
      icone: <Award size={32} />,
      href: '/institucional/historia',
      cor: 'indigo'
    },
    {
      id: 3,
      titulo: 'Diretoria',
      descricao: 'Conheça os membros da diretoria atual e sua atuação',
      icone: <Shield size={32} />,
      href: '/institucional/diretoria',
      cor: 'green'
    },
    {
      id: 4,
      titulo: 'Estatuto',
      descricao: 'Documento que define as regras e estrutura da associação',
      icone: <BookOpen size={32} />,
      href: '/institucional/estatuto',
      cor: 'purple'
    },
    {
      id: 5,
      titulo: 'Transparência',
      descricao: 'Acompanhe a prestação de contas e documentos oficiais',
      icone: <Eye size={32} />,
      href: '/transparencia',
      cor: 'yellow'
    },
    {
      id: 6,
      titulo: 'Contato',
      descricao: 'Entre em contato com a ASOF e nossa diretoria',
      icone: <Mail size={32} />,
      href: '/contato',
      cor: 'red'
    }
  ];

  return (
    <div className="w-full py-8">
      {/* Seção de cabeçalho */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Área Institucional</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Conheça a ASOF, sua estrutura, história e como atuamos em defesa da carreira de Oficial de Chancelaria
          </p>
        </div>
      </section>

      {/* Seção de apresentação */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nossa Institucionalidade</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              A ASOF representa e defende os interesses dos Oficiais de Chancelaria do Serviço Exterior Brasileiro, 
              atuando com transparência, ética e comprometimento com a excelência da diplomacia brasileira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {institucionalItems.map((item) => (
              <Link 
                key={item.id} 
                href={item.href} 
                className="block group"
                aria-label={`Acessar ${item.titulo}`}
              >
                <Card className="h-full border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group-hover:-translate-y-1">
                  <CardHeader className="flex flex-col items-center text-center">
                    <div className={`p-4 rounded-full bg-${item.cor}-100 text-${item.cor}-600 mb-4 group-hover:bg-${item.cor}-200 transition-colors`}>
                      {item.icone}
                    </div>
                    <CardTitle className="text-xl">{item.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600">{item.descricao}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de valores institucionais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Valores</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="text-blue-600 mr-3" size={24} />
                  Ética e Transparência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Atuamos com integral transparência e ética, seguindo os mais altos padrões de conduta 
                  institucional e respeitando a legislação vigente e os princípios da administração pública.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="text-blue-600 mr-3" size={24} />
                  Representatividade
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Representamos com zelo e dedicação os interesses da categoria dos Oficiais de Chancelaria, 
                  atuando como intermediários eficazes entre os associados e os órgãos governamentais.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="text-blue-600 mr-3" size={24} />
                  Excelência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Comprometidos com a excelência na representação da carreira e na promoção de iniciativas 
                  que valorizem a atuação dos Oficiais de Chancelaria em todo o mundo.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="text-blue-600 mr-3" size={24} />
                  Transparência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Garantimos total transparência nas ações da associação, com prestação de contas clara 
                  e acesso facilitado a todos os documentos institucionais.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de últimas notícias institucionais */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Notícias Institucionais</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                titulo: 'ASOF participa de conferência internacional', 
                descricao: 'Representantes da ASOF participaram da Conferência Mundial de Relações Exteriores...',
                data: '15 out 2025',
                categoria: 'Eventos'
              },
              { 
                titulo: 'Atualização de diretrizes para associados', 
                descricao: 'A diretoria da ASOF publicou novas diretrizes para o processo de filiação...',
                data: '10 out 2025',
                categoria: 'Institucional'
              },
              { 
                titulo: 'Eleição da nova diretoria definida', 
                descricao: 'A ASOF definiu as datas para a próxima eleição da diretoria executiva...',
                data: '5 out 2025',
                categoria: 'Gestão'
              }
            ].map((noticia, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <span className="inline-block px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                      {noticia.categoria}
                    </span>
                    <span className="text-sm text-gray-500">{noticia.data}</span>
                  </div>
                  <CardTitle className="text-lg">{noticia.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{noticia.descricao}</p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href={`/noticias/${index + 1}`}>Ler mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Conheça Mais a ASOF</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Junte-se à associação que representa e defende os interesses dos Oficiais de Chancelaria
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              <Link href="/associado/filiacao">Tornar-se Associado</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Institucional;