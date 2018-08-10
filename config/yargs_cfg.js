const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca la tarea como completada o pendiente'
}

const argv = require('yargs')
    .command("actualizar", "Actualiza la lista de tareas por hacer", {
        descripcion,
        completado
    })
    .command("crear", "Crea una tarea por hacer", {
        descripcion
    })
    .command("borrar", "elimina una tarea por hacer", {
        descripcion
    })
    .command("listar", "lista las tareas por hacer", {
        completado
    })
    .help()
    .argv

module.exports = { argv };