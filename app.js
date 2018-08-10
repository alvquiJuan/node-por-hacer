const argv = require('./config/yargs_cfg').argv
const colors = require('colors/safe')
const logica = require('./logica/por-hacer')


let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = logica.crear(argv.d)
        console.log(tarea);
        break;
    case "listar":
        let listado = logica.getListado(argv.c)
        for (let tarea of listado) {
            console.log(colors.green("===== Por Hacer ====="));
            console.log(tarea.descripcion);
            console.log("¿terminado?", tarea.completado);
            console.log(colors.green("====================="));
        }
        break;
    case "actualizar":
        if (logica.actualizar(argv.d, argv.c)) {
            console.log(`Tarea ${colors.green(argv.d)} actualizada. Estado ${colors.yellow(argv.completado)}`);
        } else {
            console.log(colors.red(`no se pudo actualizar la tarea ${colors.green(argv.d)}`));
        }


        break;
    case "borrar":
        let borrado = logica.borrar(argv.d);
        console.log(borrado);
        break;
    default:
        console.log(`el comando ${comando.gray} no es reconocido utilice la opción --help para ayuda`);
        break;
}