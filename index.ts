import express,{Express,Request,Response} from 'express'
import dotenv from 'dotenv'


// Configuration the .env file
dotenv.config();

// Create Express APP

const app: Express = express();
const port = process.env.PORT || 8000;

// Define the first route of APP

app.get('/',(req:Request, res:Response) => {
    // Send HELLO WORD
    res.send('welcome to APP Express +Nodemon + Jest + TS + Swagger + Mongoose')
})
app.get('/hello',(req:Request, res:Response) => {
    // Send HELLO WORD
    res.send('Buena')
})

app.get('/ejercicio',(req:Request, res:Response) => {
    // Send HELLO WORD
    res.send("message: Goodbye, world")
})



//execute APP and listen Reques to Port
app.listen(port, ()=>{
    console.log(`EXPRESS SERVER: Running at http://localhost:${port}`)
})

