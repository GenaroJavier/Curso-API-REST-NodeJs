/**
 * Vamos a tener dos middlewares para el manejo de los errores:
 * Uno que capture el error
 * y otro que finalice la petición
 */

function capturarErrores(err, req, res, next) {
  next(err); //Si nosotros le devolvemos el error, podriamos decir que el middlelware es de tipo error
}

function mostrarErrores(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

/**
 * Al crear middlewares siempre debemos poner la función next,
 * por que de esa manera, nodejs detecta que estamos trabajando con middlewares
 *
 * Los middlewares de tipo error se deben definir despues de hacer el routing,
 * es muy importente por que es otro de los errores comunes
 *
 * Debemos de capturar el error de manera explicita y luego ejecutar el middleware del error
 *
 * Como programadores dentro de lo que cabe debemos de evitar los errores 500 puesto que son
 * una mala practica (Usar los estatus codes correctos)
 */


/**
 * Middleware para menejar los errores con boom
 * Al mandar un error con boom, la libreria agregar la propiedad de isBoom
 * la cual nos va a permitir si el error enviado fue mediante esa libreria
*/

function errorBoom(err, req, res, next) {
  if(err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}

module.exports = { capturarErrores, mostrarErrores, errorBoom};
