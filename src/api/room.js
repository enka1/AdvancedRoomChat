import {app} from '../'
import {Room} from '../models'
import 'babel-polyfill'

app.get('/rooms', async(req, res) => {
  return await Room.find()
})