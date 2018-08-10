const fs = require('fs');

let listadoPorHacer = [];

const guardarData = () => {
    let data = JSON.stringify(listadoPorHacer)
    fs.writeFile('data/data.json', data, (err) => {
        if (err) console.log(err);
        else console.log(`tarea almacenada`);
    })
}
const cargarData = () => {
    try {
        listadoPorHacer = require('../data/data.json')
    } catch (error) {
        listadoPorHacer = []
    }


}
const crear = (theDescripcion) => {
    cargarData()
    let porHacer = {
        descripcion: theDescripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarData()
    return porHacer;
}

const getListado = (theCompletado) => {
    console.log(theCompletado);
    cargarData();
    return listadoPorHacer;
}

const actualizar = (theDescripcion, theEstado = true) => {
    cargarData();
    let indice = listadoPorHacer.findIndex((tarea) => tarea.descripcion === theDescripcion);
    if (indice >= 0) {
        listadoPorHacer[indice].completado = theEstado;
        guardarData()
        return true;
    } else { return false }
}

const borrar = (theDescripcion) => {
    cargarData();
    let nuevoListado = listadoPorHacer.filter((tarea) => tarea.descripcion !== theDescripcion)
    if (nuevoListado.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarData();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}