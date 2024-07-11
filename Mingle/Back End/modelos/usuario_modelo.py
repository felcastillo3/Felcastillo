from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship
from app import app, db  # ,ma


# defino las tablas
class Usuario(db.Model):  # la clase Usuario hereda de db.Model
    id = db.Column(db.Integer, primary_key=True)  # define los campos de la tabla
    user = db.Column(db.String(20))
    password = db.Column(db.String(20))
    apellido = db.Column(db.String(40))
    nombres = db.Column(db.String(100))
    fecnac = db.Column(db.String(10))
    sexo = db.Column(db.String(1))
    peso = db.Column(db.Integer)
    alturacm = db.Column(db.Integer)
    email = db.Column(db.String(100))
    telefono = db.Column(db.String(50))
    adminis = db.Column(db.String(1))
    fecalta = db.Column(db.String(10))
    estado = db.Column(db.String(1))
    foto = db.Column(db.String(200))

    def __init__(
        self, user, password, apellido, nombres, fecnac, sexo, peso, alturacm, email, telefono, adminis, fecalta, estado, foto):  # crea el  constructor de la clase
        self.user = user  # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.password = password
        self.apellido = apellido
        self.nombres = nombres
        self.fecnac = fecnac
        self.sexo = sexo
        self.peso = peso
        self.alturacm = alturacm
        self.email = email
        self.telefono = telefono
        self.adminis = adminis
        self.fecalta = fecalta
        self.estado = estado
        self.foto = foto
        



with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
