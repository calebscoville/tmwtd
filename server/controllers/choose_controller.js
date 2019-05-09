let ideas = [
    { name: 'Feed the Ducks', cost: 1 },
    { name: 'Paper Boats in a Stream', cost: 1 },
    { name: 'Draw Pictures of Cats', cost: 0 },
    { name: 'Have a picnic', cost: 3 },
    { name: 'Go on a hike', cost: 0 },
    { name: 'Get ice cream and play cards', cost: 1 },
    
]

module.exports = {
    getAllIdeas: (req, res) => {
        res.status(200).send(ideas)
    },
    getIdeaById: (req, res) => {
        const idea = ideas.filter((idea) => {
            return idea.id === +req.params.id
        })
        res.status(200).send(idea[0])
    },
    addIdea: (req, res) => {
        let id = ideas[ideas.length - 1].id + 1
        const newIdea = {
            name: req.body.name,
            cost: req.body.cost,
            id: id 
        }
        ideas = [...ideas, newIdea]
        res.status(200).send(newEvent)
    }
}