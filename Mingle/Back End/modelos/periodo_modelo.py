from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship
from app import app, db  # ,ma


# defino las tablas
class Periodo(db.Model):  # la clase Periodo hereda de db.Model
    id = db.Column(db.Integer, primary_key=True)  # define los campos de la tabla
    nombre = db.Column(db.String(100))
    mes = db.Column(db.Integer)
    anio = db.Column(db.Integer)

    def __init__(
        self, nombre, mes, anio
    ):  # crea el  constructor de la clase
        self.nombre = nombre  # no hace falta el id porque lo crea sola mysql por ser auto_incremento
        self.mes = mes
        self.anio = anio


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
