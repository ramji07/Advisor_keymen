import express from 'express'
import dotenv from 'dotenv'
import Connection from './config/db.Connection.js'
import Routes from './Routes/user.Routes.js'
import cors from 'cors'
const app = express()
dotenv.config()
import path from 'path'


app.use(express.json())
const _dirname = path.dirname('')
const buildPath = path.join(_dirname, '../client/build')
app.use(express.static(buildPath))
app.use(cors())
app.use( '/',Routes)

Connection()



app.listen(process.env.PORT, ()=>{
    console.log(`server is listing on ${process.env.PORT}`)
})