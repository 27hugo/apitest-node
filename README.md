# API control-animales

## Instalación
```sh
$ git clone http://owc.cl:5000/control-animales/api.git
$ cd api
$ npm install
$ node server.js
```
Realizar consultas a la api en http://localhost:8080/


## Estructura
```
api
 └ controllers              → Controladores para cada entidad.
 └ database                 → 
    └ database.js           → Objetos de conexión con MySQL.
    └ keys.js               → Datos de acceso MySQL.
 └ domain 
   └ models                 → Modelos como entidades.
 └ repositories             → Interfaces de consultas a la BD 
 └ routes                   → Rutas de accesso a la API.
 └ use_cases                → Casos de uso de la aplicación.
 └ node_modules (generado)  → Dependencias NPM.
 └ app.js                   → 
 └ config.js                → Archivo de configuración.
 └ server.js                → Servidor de la aplicación.
```

## Ejemplos de uso
Para acceder a la api es necesario ejecutar una solicitud a través de una ruta deseada. como ejemplo tenemos las
siguientes solicitudes:
### GET
Obtener la lista de los encargados que se encuentran en la base de datos.
```
http://localhost:8080/encargados/
```

### POST
Para agregar un animal mediante, se envía una solicitud mediante POST, con un dato de tipo `animalesModel` en formato JSON como ejemplo:
```
{
  "ani_nombre":"Michi",
  "ani_tipo":"felino",
  "ani_color":"negro"
}
```
hacia el servidor:
```
http://localhost:8080/animales/
```
