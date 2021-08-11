from enum import unique
from flask import Flask, render_template, request, redirect, session, flash
import flask
from flask_mail import Mail, Message
from flask_sqlalchemy import SQLAlchemy
import sqlalchemy
app = Flask(__name__)
app.secret_key = 'bluedtech'

#configuração do SQLAlchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://lvuqxbop:NdMagrrxBtguNA5R0ymG2Igafdj6nWPK@tuffi.db.elephantsql.com/lvuqxbop'
#instanciamento do banco de dados
db = SQLAlchemy(app)



#criação da classe e criação das colunas do banco de dados
class Info_jogos(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    nomeJogo = db.Column(db.String(50),nullable=False, unique= True)
    descricao = db.Column(db.Text,nullable=False)
    imagemLink = db.Column(db.String(500), nullable=False)
    notaMetric = db.Column(db.Integer,nullable=False)
    classificacao = db.Column(db.Integer,nullable=False)
    genero = db.Column(db.String(100),nullable=False)
    dataLancamento = db.Column(db.Integer,nullable=False)
    produtora = db.Column(db.String(100),nullable=False)
    trailler = db.Column(db.String(500),nullable=False)
    logoLink = db.Column(db.String(500),nullable=False)

    

    #método construtor com o parâmetros a serem utilizados
    def __init__(self, nomeJogo,descricao, imagemLink, notaMetric, classificacao, genero, dataLancamento, produtora, trailler, logoLink):
        self.nomeJogo= nomeJogo
        self.descricao = descricao
        self.imagemLink = imagemLink
        self.notaMetric = notaMetric
        self.classificacao = classificacao
        self.genero = genero
        self.dataLancamento = dataLancamento
        self.produtora = produtora
        self.trailler = trailler
        self.logoLink = logoLink 

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement = True)
    userName = db.Column(db.String(80), unique=True, nullable=False)
    userPassword = db.Column(db.String(120), unique=True, nullable=False)
    cpfUser = db.Column(db.Integer, unique=True, nullable=False)
    userEmail = db.Column(db.String(120), unique=True, nullable=False)
    userCellphone = db.Column(db.Integer, unique=True, nullable=False)
    birthUser = db.Column(db.Date, unique=True, nullable=False)

    def __init__(self, userName, userPassword,cpfUser,userEmail,userCellphone,birthUser):
        self.userName = userName
        self.userPassword = userPassword
        self.cpfUser = cpfUser
        self.userEmail = userEmail
        self.userCellphone = userCellphone
        self.birthUser = birthUser
        
# criação da rota para inclusão das informações no BD         
@app.route('/new', methods = ['GET', 'POST'])
def new():
    if request.method == 'POST':
        jogo = Info_jogos(
            request.form['nomeJogo'],
            request.form['descricao'],
            request.form['imagemLink'],
            request.form['notaMetric'],
            request.form['classificacao'],
            request.form['genero'],
            request.form['dataLancamento'],
            request.form['produtora'],
            request.form['trailler'],
            request.form['logoLink']
        )    
        db.session.add(jogo)
        db.session.commit()
        return redirect('/cadastro-jogos')

#criação da rota da página index 
@app.route('/')
def index():
    session['usuario_logado'] = None
    jogos = Info_jogos.query.all()
    return render_template('/index.html', jogos = jogos)


@app.route('/login')
def login():
    return render_template('/login.html')


@app.route('/cadastro')
def cadastro():
    return render_template('/cadastro-user.html')


@app.route('/newUser', methods = ['GET','POST'])
def newUser():
    if request.method == 'POST':
        user = User(
            request.form['userName'],
            request.form['userPassword'],
            request.form['cpfUser'],
            request.form['userEmail'],
            request.form['userCellphone'],
            request.form['birthUser']
        )
    db.session.add(user)
    db.session.commit()
    return redirect('/login')


@app.route('/auth', methods = ['POST','GET'])
def auth():
    user = User.query.all()
    if request.method == 'POST':
        if User.query.filter_by(userName = request.form['userName']).first() and User.query.filter_by(userPassword = request.form['userPassword']).first():
            session['usuario_logado'] = True
            return redirect ('/gerenciar-jogos') 
        else:    
            flash('Você não esta logado')
        return redirect ('/login')


@app.route('/about')
def about():
    session['usuario_logado'] = None
    return render_template('/about.html')


@app.route('/cadastro-jogos')
def adm_titulos():
    if session['usuario_logado'] == None or 'usuario_logado' not in session:
        flash('Você não esta logado')
        return redirect ('/login')
    return render_template('/cadastro-jogos.html')


@app.route('/gerenciar-jogos')
def adm_gerenciar_jogos():
    if session['usuario_logado'] == None or 'usuario_logado' not in session:
        flash('Você não esta logado')
        return redirect ('/login')
    jogos = Info_jogos.query.all()
    return render_template('/gerenciar-jogos.html', jogos = jogos)


@app.route('/delete/<id>') 
def delete(id):
    if session['usuario_logado'] == None or 'usuario_logado' not in session:
        flash('Você não esta logado')
        return redirect ('/login')
    jogos = Info_jogos.query.get(id)
    db.session.delete(jogos)
    db.session.commit()
    return redirect('/gerenciar-jogos.html')



#criação da rota para edição dos dados dentro do banco
@app.route('/edit/<id>', methods = ['POST', 'GET'])
def edit(id):
    jogosEdit = Info_jogos.query.get(id)
    if request.method == 'POST':
        jogosEdit.nomeJogo = request.form['nomeJogo']
        jogosEdit.descricao = request.form['descricao']
        jogosEdit.imagemLink = request.form['imagemLink']
        jogosEdit.notaMetric = request.form['notaMetric']
        jogosEdit.classificacao = request.form['classificacao']
        jogosEdit.genero = request.form['genero']
        jogosEdit.dataLancamento = request.form['dataLancamento']
        jogosEdit.produtora = request.form['produtora']
        jogosEdit.trailler = request.form['trailler']
        jogosEdit.logoLink = request.form['logoLink']
        db.session.commit()
        return redirect('/gerenciar-jogos')
    
    return render_template('/gerenciar-jogos.html', jogosEdit=jogosEdit)




#rota de exibição dos jogos cadastrados
@app.route('/todos-jogos')
def todos_jogos():
    jogos = Info_jogos.query.all()
    return render_template('/todos-jogos.html', jogos=jogos)


if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)

