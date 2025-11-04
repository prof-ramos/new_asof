import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { Button } from '@/components/ui/button';

const InstitucionalLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-gray-700 hover:text-blue-600 inline-flex items-center">
                  Início
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link href="/institucional" className="text-gray-700 hover:text-blue-600 ml-1 md:ml-2">
                    Institucional
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      
      <main>
        {children}
      </main>
    </div>
  );
};

export default InstitucionalLayout;