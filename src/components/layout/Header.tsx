'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { UserButton, useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, X } from 'react-feather';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      title: 'Institucional',
      items: [
        { title: 'Quem Somos', href: '/institucional/quem-somos' },
        { title: 'Diretoria', href: '/institucional/diretoria' },
        { title: 'Estatuto', href: '/institucional/estatuto' },
        { title: 'História', href: '/institucional/historia' },
      ],
    },
    {
      title: 'Carreira',
      items: [
        { title: 'Sobre a Carreira', href: '/carreira' },
        { title: 'Concursos', href: '/concursos' },
        { title: 'Benefícios', href: '/carreira/beneficios' },
        { title: 'Processo Seletivo', href: '/carreira/processo-seletivo' },
      ],
    },
    {
      title: 'Transparência',
      items: [
        { title: 'Prestação de Contas', href: '/transparencia/prestacao-contas' },
        { title: 'Atas', href: '/transparencia/atas' },
        { title: 'Documentos', href: '/transparencia/documentos' },
        { title: 'Licitações', href: '/transparencia/licitacoes' },
      ],
    },
  ];

  const authLinks = isSignedIn 
    ? [{ title: 'Área do Associado', href: '/associado' }]
    : [{ title: 'Filiação', href: '/associado/filiacao' }];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="bg-blue-800 text-white font-bold text-lg p-2 rounded">ASOF</div>
              <span className="text-gray-800 font-semibold hidden sm:block">ASOF - Associação Nacional dos Oficiais de Chancelaria</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {navItems.map((navItem) => (
                <NavigationMenuItem key={navItem.title}>
                  <NavigationMenuTrigger>{navItem.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {navItem.items.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          Acesse informações sobre {item.title.toLowerCase()}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <Link href="/noticias" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Notícias
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contato" legacyBehavior passHref>
                  <NavigationMenuLink className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                    Contato
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth / User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {authLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-gray-700 hover:text-blue-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.title}
              </Link>
            ))}
            {isSignedIn ? (
              <UserButton />
            ) : (
              <Button asChild>
                <Link href="/auth/sign-in">Acessar</Link>
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {isSignedIn ? (
              <div className="mr-2">
                <UserButton />
              </div>
            ) : (
              <Button size="sm" className="mr-2" asChild>
                <Link href="/auth/sign-in">Acessar</Link>
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navItems.map((navItem) => (
                <div key={navItem.title} className="mb-4">
                  <h3 className="text-gray-700 font-semibold px-3 py-2">{navItem.title}</h3>
                  <ul className="pl-4">
                    {navItem.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <Link
                href="/noticias"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Notícias
              </Link>
              <Link
                href="/contato"
                className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              {authLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-800 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default Header;