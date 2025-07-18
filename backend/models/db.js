const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.resolve(__dirname, '../data/database.sqlite');
const db = new Database(dbPath);

// Crea la tabla de productos
db.prepare(`
  CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    precio REAL NOT NULL,
    descripcion TEXT,
    imagen TEXT,
    createdAt TEXT DEFAULT CURRENT_TIMESTAMP
  )
`).run();

// crea la tabla de usuarios
db.prepare(`
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    rol TEXT NOT NULL
  )
`).run();

console.log('✅Conectado a SQLite con better-sqlite3 :D');
module.exports = db;