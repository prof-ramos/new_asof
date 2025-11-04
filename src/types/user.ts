export interface User {
  id: number;
  email: string;
  fullName: string;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession {
  id: number;
  userId: number;
  token: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface Protocolo {
  id: number;
  userId: number;
  numeroProtocolo: string;
  tipoDocumento: string;
  assunto: string;
  descricao?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Juridico {
  id: number;
  userId: number;
  titulo: string;
  conteudo: string;
  categoria?: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Financeiro {
  id: number;
  userId: number;
  descricao: string;
  valor: number;
  dataVencimento?: Date;
  dataPagamento?: Date;
  status: string;
  createdAt: Date;
}

export interface Associado {
  id: number;
  userId: number;
  cargo?: string;
  postoGraduacao?: string;
  dataIngresso?: Date;
  areaAtuacao?: string;
  contatoEmergencia?: string;
}