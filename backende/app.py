from flask import Flask
from flask_cors import CORS 
import pymysql
from flask import request

def conectar():
    return pymysql.connect(
        host="localhost",
        user="root",
        password="",
        database="catalogo",
        cursorclass=pymysql.cursors.DictCursor
    )

app = Flask (__name__)
CORS(app)

@app.route("/")
def home():
    return "API funcionando"

 # app.run(debug=True)

@app.route("/filmes")
def listar_filmes():
    conexao = conectar()
    cursor = conexao.cursor()

    cursor.execute(
        "SELECT * FROM filmes"
    )

    filmes = cursor.fetchall()
    conexao.close()
    return filmes

app.route("/filmes", methods=[POST])
def cadastrar_filmes():
    dados = request.json
    conexao = conectar()
    cursor = conexao.cursor()
    sql = """INSERT INTO filmes (título, imagem, descricao)
    values (%s, %s, %s,)"""

    cursor.execute(
        sql, (dados["título"], dados["imagem"], dados["descricao"])
    )
    conexao.commit()
    conexao.close()
    return {"mensagem":"filme cadastrado"}
app.run()