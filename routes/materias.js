var express = require("express");
var router = express.Router();
var models = require("../models");

router.get("/", (req, res) => {
console.log("Esto es un mensaje para ver en consola");
models.materia
    .findAll({
        attributes: ["id", "nombre","cuatrimestral","anio","carreraId"],
        include:[
            {as:'carrera_relacionada',model:models.carrera,attributes:["id","nombre","grado","universidad"]}
        ]
    })
    .then(materias => res.send(materias))
    .catch(err => {
        console.error('Error en la consulta findAll:', err);
        res.sendStatus(500)});
});

router.post("/", (req, res) => {
models.materia
    .create({ nombre: req.body.nombre,carreraId: req.body.carreraId })
    .then(materia => res.status(201).send({ id: materia.id }))
    .catch(error => {
    if (error == "SequelizeUniqueConstraintError: Validation error") {
        res.status(400).send('Bad request: existe otra materia con el mismo nombre')
    }
    else {
        console.log(`Error al intentar insertar en la base de datos: ${error}`)
        res.sendStatus(500)
    }
    });
});

const findMateria = (id, { onSuccess, onNotFound, onError }) => {
models.materia
    .findOne({
        attributes: ["id", "nombre","cuatrimestral","anio","carreraId"],
        where: { id }
    })
    .then(materia => (materia ? onSuccess(materia) : onNotFound()))
    .catch(() => onError());
};

router.get("/:id", (req, res) => {
findMateria(req.params.id, {
    onSuccess: materia => res.send(materia),
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
});
});

router.put("/:id", (req, res) => { 
    const onSuccess = materia =>
    materia
    .update({ nombre: req.body.nombre,carreraId: req.body.carreraId }, { fields: ["id", "nombre","cuatrimestral","anio","carreraId"] })
    .then(() => res.sendStatus(200))
    .catch(error => {
        if (error == "SequelizeUniqueConstraintError: Validation error") {
            res.status(400).send('Bad request: existe otra materia con el mismo nombre')
        }
        else {
            console.log(`Error al intentar actualizar la base de datos: ${error}`)
            res.sendStatus(500)
        }
    });
    findMateria(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
});
});

router.delete("/:id", (req, res) => {
const onSuccess = materia => 
    materia
        .destroy()
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500));
    findMateria(req.params.id, {
    onSuccess,
    onNotFound: () => res.sendStatus(404),
    onError: () => res.sendStatus(500)
    });
});

module.exports = router;