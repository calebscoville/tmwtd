let ideas = [
    { name: 'Feed the Ducks'},
    { name: 'Chase a Cheetah'},
    { name: 'Paper Boats in a Stream'},
    { name: 'Draw Pictures of Cats'},
    { name: 'Build a Treehouse on an Elephant'},
    { name: 'Have a Picnic'},
    { name: 'Go on a Hike'},
    { name: 'Get Ice Cream and Play Cards'},
    { name: 'Ride a Whale'},
    { name: 'Make a Submarine out of Grass'}
    
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
            // cost: req.body.cost,
            id: id 
        }
        ideas = [...ideas, newIdea]
        res.status(200).send(newEvent)
    }
}