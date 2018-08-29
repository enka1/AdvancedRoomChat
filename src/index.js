import http from 'http'
import express from 'express'
import socketIO from 'socket.io'
import cors from 'cors'

export const app = express()
const server = http.createServer(app)
export const io = socketIO(server)

//api
require('./api/room');

app.use(cors())
server.listen(3001, () => console.log('server is opening at port 3001'))