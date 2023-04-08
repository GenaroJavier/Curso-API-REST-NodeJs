# Creación de APIs REST

### Rutas

Son las direcciones a las que se apunta una pagina web 

### API RESTFUL

REST 

(Representational State Transfer)

Es un termino utilizado para realizar servicios web, usando el protocolo HTTP. 

Este protocolo nos permite usar los metodos: 

GET (Obtiene o solicita información)

PUT  (Trabaja sobre modificaciones, enviando el ID)

POST  (Creación)

DELETE (Elimina)

![](C:\Users\Programador%20JR\AppData\Roaming\marktext\images\2023-04-07-22-32-10-image.png)

#### Convenciones de REST

cuando tenemos un endpoint, nosotros definimos la entidad y luego el ID 

![](C:\Users\Programador%20JR\AppData\Roaming\marktext\images\2023-04-07-22-35-50-image.png)

### Query paraments

![](C:\Users\Programador%20JR\AppData\Roaming\marktext\images\2023-04-08-00-17-05-image.png)

* Pueden ser opcionales 

* Sirven para paginar, filtrar, etc. 



### Single Responsability Principle

(Separación de responsabilidades) 

Cada fragmento de código deberá tener una unica responsabilidad. 

Ej. Si tenemos un metodo sumar, ese metodo unicamente se debe centrar en sumar. 



Siguiendo esta filosofia, actualmente en nuestro codigo nosotros tenemos un index con todos los endpoints que hemos creado. Pero si seguimos la SRP podemos organizar por todos los endpoints de productos en un archivo, todos los endpoints de categorias en otro, etc. 

Esto lo podemos hacer de la siguiente manera: 



## Notas

Faker es una libreria npm que nos ayuda a generar data fake. 



* Un error muy común al momento de crear rutas para los endpoints, es el siguiente. 

![](C:\Users\Programador%20JR\AppData\Roaming\marktext\images\2023-04-08-10-18-11-image.png)


Los endpoints anteriores comparten la similitud de empezar con el mismo nombre **/products** 

Para el primer endpoint le especificamos que vamos a recibir un parametro llamado id. 

Para el segundo, nosotros asignamos un nombre. 

El error constaria a que al compartir el mismo nombre, se entrelazan los endpoints y al quere ejecutar el segundo me ejecutará el primero como si yo le estuviera mandando la palabra filter, como el parametro id que esta esperando. 

La solución seria la siguiente: **Todo lo que es especifico debe ir antes que lo dinamico** 
