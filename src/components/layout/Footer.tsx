import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Globe, Shield, Users, Linkedin } from 'react-feather';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const institucionalLinks = [
    { name: 'Quem Somos', href: '/institucional/quem-somos' },
    { name: 'Diretoria', href: '/institucional/diretoria' },
    { name: 'Estatuto', href: '/institucional/estatuto' },
    { name: 'História', href: '/institucional/historia' },
  ];

  const recursosLinks = [
    { name: 'Carreira', href: '/carreira' },
    { name: 'Concursos', href: '/concursos' },
    { name: 'Notícias', href: '/noticias' },
    { name: 'Publicações', href: '/publicacoes' },
  ];

  const servicosLinks = [
    { name: 'Filiação', href: '/associado/filiacao' },
    { name: 'Área do Associado', href: '/associado' },
    { name: 'Jurídico', href: '/juridico' },
    { name: 'Ouvidoria', href: '/ouvidoria' },
  ];

  const transparenciaLinks = [
    { name: 'Prestação de Contas', href: '/transparencia/prestacao-contas' },
    { name: 'Atas', href: '/transparencia/atas' },
    { name: 'Documentos', href: '/transparencia/documentos' },
    { name: 'Licitações', href: '/transparencia/licitacoes' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Sobre a ASOF */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white font-bold text-xl p-2 rounded mr-2">ASOF</div>
              <h3 className="text-xl font-bold">ASOF</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro,
              representando os interesses da carreira de Oficial de Chancelaria.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Links Institucionais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Institucional</h4>
            <ul className="space-y-2">
              {institucionalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links de Recursos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2">
              {recursosLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links de Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              {servicosLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contato e Transparência */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contato */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <span>contato@asof.org.br</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <span>(61) 3225-9191</span>
                </div>
                <div className="flex items-start">
                  <MapPin size={16} className="mr-2 mt-1" />
                  <span>Safra Wing Plaza, 2º Andar, Torre A, Sala 230, Asa Norte, Brasília - DF, 70070-910</span>
                </div>
              </div>
            </div>

            {/* Transparência */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Transparência e LGPD</h4>
              <ul className="space-y-2">
                {transparenciaLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    href="/lgpd" 
                    className="text-gray-400 hover:text-white transition-colors inline-block"
                  >
                    Política de Privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Direitos */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>© {currentYear} ASOF - Associação Nacional dos Oficiais de Chancelaria. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com conformidade LGPD e acessibilidade WCAG 2.1 AA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;