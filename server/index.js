const express = require('express')
const app = express()
const choose_ctrl = require('./controllers/choose_controller')

app.use(express.json())

//Endpoints
app.get('/api/ideas', choose_ctrl.getAllIdeas) //LINK!! links to component
app.get('/api/idea/:id', choose_ctrl.getIdeaById)
app.get('/api/random', choose_ctrl.getRandomIdea)
app.post('/api/addIdea', choose_ctrl.addIdea)

const PORT = 3456
app.listen(PORT, () => console.log(`Caleb is a frickin boss ${PORT}`))