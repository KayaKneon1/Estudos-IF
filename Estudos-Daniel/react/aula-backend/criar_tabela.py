import sqlite3
from contextlib import closing

def conectar():
    conexao = sqlite3.connect('usuarios.db')
    conexao.row_factory = sqlite3.Row
    
def criarTabela():
    with closing(conectar()) as conexao, conexao:
        conexao.execute('''       
                CREATE TABLE IF NOT EXIST usuarios(
                id INTEGER PRIMARY KEY AUTOINCREMENT    
                nome TEXT NOT NULL
                email TEXT NOT NULL UNIQUE
                )    
                ''')
        
        