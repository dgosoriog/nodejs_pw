  const { argv } = require('./config/yargs')
  const colors = require('colors')
  const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicar');

  let comando = argv._[0]

  switch (comando) {
      case 'crear':
          crearArchivo(argv.base, argv.limite)
              .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
              .catch(e => console.log(e.red));
          break;
      case 'listar':
          listarTabla(argv.base, argv.limite);
          break;
      default:
          console.log("Comando no válido!");
  }
  //npm install --save yargs
  //config->yargs.js
  // let opt = {
  //     base: {
  //         demand: true,
  //         alias: 'b',
  //         description: 'La base de la tabla de multiplicar'
  //     },
  //     limite: {
  //         alias: 'l',
  //         default: 10,
  //         description: 'El límite de la tabla de multiplicar'
  //     }
  // };

  // const argv = require('yargs')
  //     .command('crear', 'Crea un archivo con la tabla de multiplicar', opt)
  //     .command('listar', 'Lista una tabla de multiplicar', opt)
  //     .help()
  //     .argv;

  // module.exports = {
  //     argv
  // };