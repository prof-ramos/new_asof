import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carteira Digital | Área do Associado ASOF',
  description: 'Carteira digital do associado ASOF.',
}

export default function CarteiraDigitalPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Carteira Digital do Associado</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4">
          Acesse sua carteira digital da ASOF.
        </p>
        {/* @TODO: Implementar carteira digital */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-4">
          <p className="text-yellow-700">
            Em breve, você poderá acessar sua carteira digital da ASOF nesta página.
          </p>
        </div>
      </div>
    </main>
  )
}