import { createClient } from '@/utils/supabase/server';
import { Associado } from '@/types/associado';
import { formatarCPF, formatarTelefone, calcularIdade } from '@/types/associado';

export default async function AssociadosAdmin() {
  const supabase = await createClient();

  // Buscar todos os associados
  const { data: associados, error } = await supabase
    .from('associados')
    .select('*')
    .order('nome', { ascending: true });

  // Buscar estatísticas
  const { data: stats } = await supabase
    .from('estatisticas_associados')
    .select('*')
    .single();

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p className="font-bold">Erro ao carregar associados</p>
          <p>{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gestão de Associados</h1>
        <p className="text-gray-600">
          Sistema de gerenciamento dos associados da ASOF
        </p>
      </div>

      {/* Estatísticas */}
      {stats && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-sm text-blue-600 font-semibold">Total</div>
            <div className="text-2xl font-bold text-blue-900">
              {stats.total_associados}
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-sm text-green-600 font-semibold">Ativos</div>
            <div className="text-2xl font-bold text-green-900">
              {stats.associados_ativos}
            </div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="text-sm text-orange-600 font-semibold">Inativos</div>
            <div className="text-2xl font-bold text-orange-900">
              {stats.associados_inativos}
            </div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="text-sm text-purple-600 font-semibold">Lotações</div>
            <div className="text-2xl font-bold text-purple-900">
              {stats.total_lotacoes}
            </div>
          </div>
        </div>
      )}

      {/* Tabela de Associados */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CPF
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  E-mail
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Celular
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lotação
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {associados && associados.length > 0 ? (
                associados.map((associado: Associado) => (
                  <tr key={associado.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {associado.nome}
                      </div>
                      {associado.matricula_siape && (
                        <div className="text-sm text-gray-500">
                          SIAPE: {associado.matricula_siape}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {associado.cpf ? formatarCPF(associado.cpf) : '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {associado.email || '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {associado.celular
                          ? formatarTelefone(associado.celular)
                          : '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        {associado.lotacao || '-'}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {associado.associado && !associado.data_cancelamento ? (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Ativo
                        </span>
                      ) : (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Inativo
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    Nenhum associado cadastrado
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">
          📋 Instruções de Importação
        </h3>
        <p className="text-sm text-blue-800">
          Para importar dados da planilha, execute o SQL do arquivo{' '}
          <code className="bg-blue-100 px-1 py-0.5 rounded">
            supabase-associados.sql
          </code>{' '}
          no SQL Editor do Supabase.
        </p>
      </div>
    </div>
  );
}
