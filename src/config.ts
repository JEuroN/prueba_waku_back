const config = {
    port: 8000,
    db: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        database: 'prueba_waku',
        password: 'admin'
    }
}

/* 
port es el puerto en el que se desea colocar el servidor de express
db contiene toda la informacion para la conexion a la db
*/
export default config;