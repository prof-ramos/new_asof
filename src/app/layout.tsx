import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { AuthProvider } from '@/contexts/authContext';

export const metadata: Metadata = {
  title: 'ASOF - Associação Nacional dos Oficiais de Chancelaria',
  description: 'Portal Institucional da Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro',
  keywords: 'ASOF, Oficiais de Chancelaria, Serviço Exterior, Associação, Diplomacia, Brasil',
  authors: [{ name: 'ASOF - Associação Nacional dos Oficiais de Chancelaria' }],
  creator: 'ASOF',
  publisher: 'ASOF',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    title: 'ASOF - Associação Nacional dos Oficiais de Chancelaria',
    description: 'Portal Institucional da Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro',
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.asof.org.br',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ASOF - Associação Nacional dos Oficiais de Chancelaria',
    description: 'Portal Institucional da Associação Nacional dos Oficiais de Chancelaria do Serviço Exterior Brasileiro',
  },
  metadataBase: new URL('https://www.asof.org.br'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans" suppressHydrationWarning={true}>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
