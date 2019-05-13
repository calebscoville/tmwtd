let ideas = [
    { name: 'Feed the Ducks', id:1},
    { name: 'Chase a Cheetah', id: 2},
    { name: 'Paper Boats in a Stream', id: 3},
    { name: 'Draw Pictures of Cats', id: 4},
    { name: 'Build a Treehouse on an Elephant', id: 5},
    { name: 'Have a Picnic', id: 6},
    { name: 'Go on a Hike', id: 7},
    { name: 'Get Ice Cream and Play Cards', id: 8},
    { name: 'Ride a Whale', id: 9},
    { name: 'Make a Submarine out of Grass', id: 10},
    // { name: 'Eat Bamboo for Breakfast', id: 11},
    // { name: 'Sidewalk Chalk Pictionary', id: 12},
    
]

module.exports = {
    getRandomIdea: (req, res) => {
        let random=Math.floor(Math.random() * 11)
        const idea = ideas[random]
        res.status(200).send(idea)
    },
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
        console.log(req.body)
        const newIdea = {
            name: req.body.newItem,
            // cost: req.body.cost,
            id: id 
        }
        ideas = [...ideas, newIdea]
        res.status(200).send(ideas)
    },
    updateIdea: (req, res) => {
        let {text}=req.body
        let {id}=req.params
        let updateIndex=ideas.findIndex((idea) => {
            return idea.id === +id
        })
        let newIdea={
            id: ideas[updateIndex].id,
            name: text || ideas[updateIndex].name
        }
        ideas.splice(updateIndex, 1, newIdea)
        res.status(200).send(ideas)

    },

    deleteIdea: (req, res) => {
        let {id}=req.params
        let deleteIndex=ideas.findIndex((idea) => {
            return idea.id === +id
        })
        ideas.splice(deleteIndex, 1)
        res.status(200).send(ideas)
    }
}