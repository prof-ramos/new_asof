import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';
import { hashPassword } from '@/lib/auth';

// Initialize database
const dbPath = process.env.NODE_ENV === 'production'
  ? path.resolve(process.cwd(), 'data/database.sqlite')
  : path.resolve(process.cwd(), 'data/database.dev.sqlite');

// Create data directory if it doesn't exist
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const db = new Database(dbPath);

// Create tables if they don't exist
function initializeDatabase() {
  // Create users table
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      full_name TEXT NOT NULL,
      role TEXT DEFAULT 'associado',
      status TEXT DEFAULT 'ativo',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Create sessions table for handling authentication
  db.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      token TEXT UNIQUE NOT NULL,
      expires_at DATETIME NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);

  // Create protocolos table
  db.exec(`
    CREATE TABLE IF NOT EXISTS protocolos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      numero_protocolo TEXT UNIQUE NOT NULL,
      tipo_documento TEXT NOT NULL,
      assunto TEXT NOT NULL,
      descricao TEXT,
      status TEXT DEFAULT 'recebido',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);

  // Create juridico table
  db.exec(`
    CREATE TABLE IF NOT EXISTS juridico (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      titulo TEXT NOT NULL,
      conteudo TEXT NOT NULL,
      categoria TEXT,
      status TEXT DEFAULT 'ativa',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);

  // Create financeiro table
  db.exec(`
    CREATE TABLE IF NOT EXISTS financeiro (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL,
      descricao TEXT NOT NULL,
      valor REAL NOT NULL,
      data_vencimento DATETIME,
      data_pagamento DATETIME,
      status TEXT DEFAULT 'pendente',
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);

  // Create associados table (for additional member info)
  db.exec(`
    CREATE TABLE IF NOT EXISTS associados (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER NOT NULL UNIQUE,
      cargo TEXT,
      posto_graduacao TEXT,
      data_ingresso DATE,
      area_atuacao TEXT,
      contato_emergencia TEXT,
      FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    )
  `);

  // Create admin user if doesn't exist
  try {
    const adminExists = db.prepare('SELECT id FROM users WHERE email = ?').get('admin@asof.org.br');
    if (!adminExists) {
      const adminPasswordHash = hashPassword('admin123'); // Default password for development
      db.prepare(`
        INSERT INTO users (email, password_hash, full_name, role)
        VALUES (?, ?, ?, ?)
      `).run('admin@asof.org.br', adminPasswordHash, 'Administrador ASOF', 'admin');
    }
  } catch (error) {
    if (!error.message.includes('UNIQUE constraint failed')) {
      console.error('Error initializing admin user:', error);
    }
    // Ignore duplicate errors
  }

  // Create a test user if doesn't exist
  try {
    const testUserExists = db.prepare('SELECT COUNT(*) FROM users WHERE email = ?').get('associado@asof.org.br') as { 'COUNT(*)': number };
    if (testUserExists['COUNT(*)'] === 0) {
      const testPasswordHash = hashPassword('associado123');
      db.prepare(`
        INSERT INTO users (email, password_hash, full_name, role)
        VALUES (?, ?, ?, ?)
      `).run('associado@asof.org.br', testPasswordHash, 'Associado Teste', 'associado');
    }
  } catch (error) {
    if (!error.message.includes('UNIQUE constraint failed')) {
      console.error('Error initializing test user:', error);
    }
    // Ignore duplicate errors
  }
}

// Only initialize database if not in build mode
if (process.env.NEXT_PHASE !== 'phase-production-build') {
  initializeDatabase();
}

export default db;