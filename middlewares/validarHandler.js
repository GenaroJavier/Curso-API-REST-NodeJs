const Boom = require('@hapi/boom');

//Vamos a construir un middleware que sea dinamico

//Esta funcion recibe un equema y le vamos a decir donde encontrar la informacion
function validarHandler(schema, propiedad) {
  //va a retornar un middleware
  return (req, res, next) => {
    const data = req[propiedad];
    const { error } = schema.validate(data, { abortEarly: false });
    if(error) {
      next(Boom.badRequest(error));
    }
    next();
  }
}

module.exports = { validarHandler };

/**
 * La informacion dentro de un request puede venir de varios lugares depende de si es un post o un get
 *  POST -> body
 *  GET -> params o en query
 * Es por esto que tenemos el parametro de propiedad, para especificarle de donde viene la informacion
 */
