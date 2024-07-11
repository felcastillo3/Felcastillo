from flask import (
    jsonify,
    request,
)  # ,Flask# del modulo flask importar la clase Flask y los métodos jsonify,request


from app import app, db, ma
from modelos.tipoactividad_modelo import *


class TipoActividadSchema(ma.Schema):
    class Meta:
        fields = ("id", "descripcion")


tipoactividad_schema = (
    TipoActividadSchema()
)  # El objeto tipoactividad_schema es para traer un periodo
tiposactividad_schema = TipoActividadSchema(
    many=True
)  # El objeto tiposactividad_schema es para traer multiples registros de tipos de actividad


# crea los endpoint o rutas (json)
@app.route("/tiposactividad", methods=["GET"])
def get_TiposActividad():
    all_tiposactividad = Tipo_Actividad.query.all()  # el metodo query.all() lo hereda de db.Model
    result = tiposactividad_schema.dump(
        all_tiposactividad
    )  # el metodo dump() lo hereda de ma.schema y
    # trae todos los registros de la tabla
    return jsonify(result)  # retorna un JSON de todos los registros de la tabla


@app.route("/tiposactividad/<id>", methods=["GET"])
def get_tiposactividad(id):
    tipoactividad = Tipo_Actividad.query.get(id)
    return tipoactividad_schema.jsonify(
        tipoactividad
    )  # retorna el JSON de un tipo_actividad recibido como parametro


@app.route("/tiposactividad/<id>", methods=["DELETE"])
def delete_tiposactividad(id):
    tipoactividad = Tipo_Actividad.query.get(id)
    db.session.delete(tipoactividad)
    db.session.commit()
    return tipoactividad_schema.jsonify(
        tipoactividad
    )  # me devuelve un json con el registro eliminado


@app.route("/tiposactividad", methods=["POST"])  # crea ruta o endpoint
def create_tiposactividad():
    # print(request.json)  # request.json contiene el json que envio el cliente
    descripcion = request.json["descripcion"]
    new_tipoactividad = Tipo_Actividad(descripcion)
    db.session.add(new_tipoactividad)
    db.session.commit()
    return tipoactividad_schema.jsonify(new_tipoactividad)


@app.route("/tiposactividad/<id>", methods=["PUT"])
def update_tiposactividad(id):
    tipoactividad = Tipo_Actividad.query.get(id)

    tipoactividad.descripcion = request.json["descripcion"]

    db.session.commit()
    return tipoactividad_schema.jsonify(tipoactividad)
