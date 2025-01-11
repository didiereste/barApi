require('dotenv').config();
const app =require('./app');
const AppDataSource = require('./src/config/connection');

const PORT = process.env.PORT;

async function main() {
    try{
        await AppDataSource.initialize();
        console.log('Conexion exitosa a la DB')
        app.listen(PORT,()=>{
            console.log('Servidor iniciado por el puerto 3000');
        });  
    }catch (error){
        console.error(error);
    }
    
}

main();