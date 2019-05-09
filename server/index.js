const express = require('express')
const app = express()
const choose_ctrl = require('./controllers/choose_controller')

app.use(express.json())

const express = require('express')
const app = express()

app.get('/api/ideas', choose_ctrl.getAllIdeas)
app.get('/api/idea/:id', choose_ctrl.getIdeaById)
app.post('/api/addIdea', choose_ctrl.addIdea)

const PORT = 3456
app.listen(PORT, () => console.log(`Caleb is a frickin boss ${PORT}`))