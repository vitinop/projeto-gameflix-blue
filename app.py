from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://sgzluegb:WFyHBC5SHUHkHzJfnd02fZtoSdwHJnCv@kesavan.db.elephantsql.com/sgzluegb'
db = SQLAlchemy(app)

class Projeto(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name_game = db.Column(db.String, nullable=False)
    game_description = db.Column(db.String, nullable=False)
    game_grade = db.Column(db.Float, nullable=False)
    game_parental_rating = db.Column(db.Integer, nullable=False)
    game_type = db.Column(db.String, nullable=False)
    game_release = db.Column(db.Integer, nullable=False)
    game_trailer = db.Column(db.String, nullable=False)
    #Falta colocar o upload de imagens
    def __init__(self, name_game, game_description, game_grade, game_parental_rating, game_type, game_release, game_trailer):
        self.name_game = name_game
        self.game_description = game_description
        self.game_grade = game_grade
        self.game_parental_rating = game_parental_rating
        self.game_type = game_type
        self.game_release = game_release
        self.game_trailer = game_trailer


@app.route('/')
def index():
    projetos = Projeto.query.all()
    return render_template('index.html', projetos=projetos)

@app.route('admin-adicionar-titulos')
def admin_adicionar_titulos():
    projetos = Projeto.query.all() # Busca todos os projetos no banco e coloca na veriável projetos, que se transforma em uma lista.
    return render_template('admin-adicionar-titulos.html', projetos=projetos)

@app.route('/new', methods=['POST', 'GET'])
def new():
   if request.method == 'POST':
      projeto = Projeto(
         request.form['name_game'],
         request.form['game_description'],
         request.form['game_grade'],
         request.form['game_parental_rating'],
         request.form['game_type'],
         request.form['game_release'],
         request.form['game_trailer']
      )
      db.session.add(projeto) #sintaxe do sqlalchemy ele prepara o objeto para o banco de dados
      db.session.commit()
      return redirect('/adm')



if __name__ == '__main__':
    app.run(debug=True)