let reactions = [
    {
        "itineraryId": "6385017ceb64ae145f943ca4",
        "name": "like",
        "icon": "https://cdn-icons-png.flaticon.com/512/456/456115.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/739/739282.png",
        "userId": []
    },
    {
        "itineraryId": "6385017ceb64ae145f943ca4",
        "name": "not-like",
        "icon": "https://cdn-icons-png.flaticon.com/512/1612/1612768.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/1612/1612623.png",
        "userId": []
    },
    {
        "itineraryId": "6385017ceb64ae145f943ca4",
        "name": "love",
        "icon": "https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2107/2107952.png",
        "userId": []
    },
    {
        "itineraryId": "6385017ceb64ae145f943ca4",
        "name": "surprise",
        "icon": "https://cdn-icons-png.flaticon.com/512/2341/2341934.png",
        "iconBack": "https://cdn-icons-png.flaticon.com/512/2341/2341959.png",
        "userId": []
    }
]



require('dotenv').config()
require('../../config/database')
const Reaction = require('../../models/Reaction')

reactions.forEach(elemento => {
    Reaction.create({
        itineraryId: elemento.itineraryId,
        name: elemento.name,
        icon: elemento.icon,
        iconBack: elemento.iconBack,
        userId: elemento.userId
    })
})