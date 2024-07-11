from sqlalchemy import Column, ForeignKey, Integer, Table
from sqlalchemy.orm import declarative_base, relationship
from app import app, db  # ,ma


# defino las tablas
class Tipo_Actividad(db.Model):  # la clase Tipo_Actividad hereda de db.Model
    id = db.Column(db.Integer, primary_key=True)  # define los campos de la tabla
    descripcion = db.Column(db.String(100))
 
    def __init__(
        self, descripcion
    ):  # crea el  constructor de la clase
        self.descripcion = descripcion  # no hace falta el id porque lo crea sola mysql por ser auto_incremento


with app.app_context():
    db.create_all()  # aqui crea todas las tablas
#  ************************************************************
