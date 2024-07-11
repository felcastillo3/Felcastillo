from flask import (
    jsonify,
    request,
)  # ,Flask# del modulo flask importar la clase Flask y los métodos jsonify,request


from app import app, db, ma
from modelos.periodo_modelo import *


class PeriodoSchema(ma.Schema):
    class Meta:
        fields = ("id", "nombre", "mes", "anio")


periodo_schema = (
    PeriodoSchema()
)  # El objeto periodo_schema es para traer un periodo
periodos_schema = PeriodoSchema(
    many=True
)  # El objeto periodos_schema es para traer multiples registros de periodos


# crea los endpoint o rutas (json)
@app.route("/periodos", methods=["GET"])
def get_Periodos():
    all_periodos = Periodo.query.all()  # el metodo query.all() lo hereda de db.Model
    result = periodos_schema.dump(
        all_periodos
    )  # el metodo dump() lo hereda de ma.schema y
    # trae todos los registros de la tabla
    return jsonify(result)  # retorna un JSON de todos los registros de la tabla


@app.route("/periodos/<id>", methods=["GET"])
def get_periodo(id):
    periodo = Periodo.query.get(id)
    return periodo_schema.jsonify(
        periodo
    ) # retorna el JSON de un periodo recibido como parametro


@app.route("/periodos/<id>", methods=["DELETE"])
def delete_periodo(id):
    periodo = Periodo.query.get(id)
    db.session.delete(periodo)
    db.session.commit()
    return periodo_schema.jsonify(
        periodo
    )  # me devuelve un json con el registro eliminado


@app.route("/periodos", methods=["POST"])  # crea ruta o endpoint
def create_periodo():
    # print(request.json)  # request.json contiene el json que envio el cliente
    nombre = request.json["nombre"]
    mes = request.json["mes"]
    anio = request.json["anio"]
    new_periodo = Periodo(nombre, mes, anio)
    db.session.add(new_periodo)
    db.session.commit()
    return periodo_schema.jsonify(new_periodo)


@app.route("/periodos/<id>", methods=["PUT"])
def update_periodo(id):
    periodo = Periodo.query.get(id)

    periodo.nombre = request.json["nombre"]
    periodo.mes = request.json["mes"]
    periodo.anio = request.json["anio"]

    db.session.commit()
    return periodo_schema.jsonify(periodo)


