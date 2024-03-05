const Database = require('better-sqlite3');
const db = new Database('foobar.db', { verbose: console.log });

db.prepare('CREATE TABLE IF NOT EXISTS foo (id INTEGER PRIMARY KEY, name TEXT)').run();

const insert = db.prepare('INSERT INTO foo (name) VALUES (@name)');
insert.run({ name: 'foobar' });

const rows = db.prepare('SELECT * FROM foo').all();
console.log(rows);


// list all tables
const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
console.log(tables);