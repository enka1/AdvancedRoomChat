import {io} from '../'

let roomIO = io.of('/room')

roomIO.on('connection', socket => {
  socket.on('create_chat_room', (data) => {
    console.log(data)
  })
})