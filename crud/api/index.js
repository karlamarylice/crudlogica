import express from "express" 
/*import userroutes from "./routes/alunos.js" */
import cors from "cors"

const app = express ()

app.use(express.json())
app.use(cors())

/*app.use ("/", userroutes)*/

app.listen (8800) 