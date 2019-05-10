const express = require('express')
const app = express()
const choose_ctrl = require('./controllers/choose_controller')

console.log(choose_ctrl)

app.use(express.json())

//Endpoints
app.get('/api/ideas', choose_ctrl.getAllIdeas) //LINK!! links to component
app.get('/api/idea/:id', choose_ctrl.getIdeaById)
app.post('/api/addIdea', choose_ctrl.addIdea)

const PORT = 3456
app.listen(PORT, () => console.log(`Caleb is a frickin boss ${PORT}`))