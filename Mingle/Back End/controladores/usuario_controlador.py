from flask import (
    jsonify,
    request,
)  # ,Flask# del modulo flask importar la clase Flask y los métodos jsonify,request


from app import app, db, ma
from modelos.usuario_modelo import *


class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ("id","user","password","apellido","nombres","fecnac","sexo", "peso", "alturacm", "email", "telefono", "adminis", "fecalta", "estado", "foto")


usuario_schema = (
    UsuarioSchema()
)  # El objeto usuario_schema es para traer un periodo
usuarios_schema = UsuarioSchema(
    many=True
)  # El objeto usuarios_schema es para traer multiples registros de usuarios


# crea los endpoint o rutas (json)
@app.route("/usuarios", methods=["GET"])
def get_Usuarios():
    all_usuarios = Usuario.query.all()  # el metodo query.all() lo hereda de db.Model
    result = usuarios_schema.dump(
        all_usuarios
    )  # el metodo dump() lo hereda de ma.schema y
    # trae todos los registros de la tabla
    return jsonify(result)  # retorna un JSON de todos los registros de la tabla


@app.route("/usuarios/<id>", methods=["GET"])
def get_usuario(id):
    usuario = Usuario.query.get(id)
    return usuario_schema.jsonify(
        usuario
    ) # retorna el JSON de un usuario recibido como parametro


@app.route("/usuarios/<id>", methods=["DELETE"])
def delete_usuario(id):
    usuario = Usuario.query.get(id)
    db.session.delete(usuario)
    db.session.commit()
    return usuario_schema.jsonify(
        usuario
    )  # me devuelve un json con el registro eliminado


@app.route("/usuarios", methods=["POST"])  # crea ruta o endpoint
def create_usuario():
    # print(request.json)  # request.json contiene el json que envio el cliente
    user = request.json["user"]
    password = request.json["password"]
    apellido = request.json["apellido"]
    nombres = request.json["nombres"]
    fecnac = request.json["fecnac"]
    sexo = request.json["sexo"]
    peso = request.json["peso"]
    alturacm = request.json["alturacm"]
    email = request.json["email"]
    telefono = request.json["telefono"]
    adminis = request.json["adminis"]
    fecalta = request.json["fecalta"]
    estado = request.json["estado"]
    foto = request.json["foto"]
    new_usuario = Usuario(user, password, apellido, nombres, fecnac, sexo, peso, alturacm, email, telefono, adminis, fecalta, estado, foto)
    db.session.add(new_usuario)
    db.session.commit()
    return usuario_schema.jsonify(new_usuario)


@app.route("/usuarios/<id>", methods=["PUT"])
def update_usuario(id):
    usuario = Usuario.query.get(id)
    usuario.user = request.json["user"]
    usuario.password = request.json["password"]
    usuario.apellido = request.json["apellido"]
    usuario.nombres = request.json["nombres"]
    usuario.fecnac = request.json["fecnac"]
    usuario.sexo = request.json["sexo"]
    usuario.peso = request.json["peso"]
    usuario.alturacm = request.json["alturacm"]
    usuario.email = request.json["email"]
    usuario.telefono = request.json["telefono"]
    usuario.adminis = request.json["adminis"]
    usuario.fecalta = request.json["fecalta"]
    usuario.estado = request.json["estado"]
    usuario.foto = request.json["foto"]
    db.session.commit()
    return usuario_schema.jsonify(usuario)


@app.route("/")
def bienvenida():
    return "Bienvenidos al backend"
