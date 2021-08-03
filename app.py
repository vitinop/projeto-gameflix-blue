from flask import Flask, render_template, request, redirect, session, flash
import flask
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
app = Flask(__name__)
app.secret_key = 'bluedtech'

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://lvuqxbop:NdMagrrxBtguNA5R0ymG2Igafdj6nWPK@tuffi.db.elephantsql.com/lvuqxbop'
db = SQLAlchemy(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin-adicionar-titulos.html')
def adm_titulos():
    return render_template('admin-adicionar-titulos.html')

class info_jogos(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    nomeJogo = db.Column(db.String(50),nullable=True)
    imagemLink = db.Column(db.String(500), nullable=False)
    notaMetric = db.Column(db.Integer,nullable=False)
    classificacao = db.Column(db.Integer,nullable=False)
    genero = db.Column(db.String(100),nullable=False)
    dataLancamento = db.Column(db.Integer,nullable=False)
    produtora = db.Column(db.String(100),nullable=False)
    trailler = db.Column(db.String(500),nullable=False)
    logoLink = db.Column(db.String(500),nullable=False)


    def __init__(self, nomeJogo, imagemLink, notaMetric, classificacao, genero, dataLancamento, produtora, trailler, logoLink):
        self.nome= nomeJogo
        self.imagemLink = imagemLink
        self.notaMetric = notaMetric
        self.classificacao = classificacao
        self.classificacao = classificacao
        self.genero = genero
        self.dataLancamento = dataLancamento
        self.produtora = produtora
        self.trailler = trailler
        self.logoLink = logoLink 
        

 

if __name__ == '__main__':
    app.run(debug=True)

