let eventsShows = [{ 
    hotelId: '63705a14a2c3190ac7044f4e',
    name: 'Babasonicos',
    description: 'Babasónicos is an Argentine alternative rock band, formed in 1991.'  ,
    photo: 'https://laprovinciaenvivo.com/wp-content/uploads/2022/03/196417/misterio-develado-babasonicos-no-se-separa-y-bye-bye-es-solo-el-titulo-de-su-nueva-cancion.jpg',
    price: 20,
    date: new Date (2022-12-12),
    userId:'636d51715d29e99d62636bd7'
},
{  
    hotelId: '63705a14a2c3190ac7044f4e',
    name: 'Stand Up Nicolás De Tracy',
    description: 'Nicolás de Tracy is one of the young comedians with the greatest growth this last time. After more than 10 years of career, he managed to establish himself as a reference figure in the local stand-up.',
    photo: 'https://worldmusicba.com/wp-content/webp-express/webp-images/uploads/2019/05/contratar-a-nicolas-de-tracy-02.jpg.webp',
    price: 10,
    date: new Date (2023-04-12),
    userId:'636d51715d29e99d62636bd7'
},
{
    hotelId: '63705a14a2c3190ac7044f50',
    name: 'Show Yosakoi',
    description: 'Is a dance style originating in Japan. It began to be practiced in the city of Kochi in 1954. It is a modern interpretation of the Awa odori, a traditional summer dance.',
    photo: 'https://web-japan.org/trends/es/culture/images/pop201910_yosakoi07L.jpg',
    price: 3,
    date: new Date (2023-03-25),
    userId: '636d51715d29e99d62636bd8'
},
{
    hotelId: '63705a14a2c3190ac7044f50',
    name: 'Sushi tasting',
    description: 'It is a typical dish of Japanese origin based on rice, this dish is one of the most recognized of Japanese cuisine and one of the most popular internationally.',
    photo: 'https://static-sevilla.abc.es/media/gurmesevilla/2016/01/restaurantes-japones-comida.jpg',
    price: 4,
    date: new Date(2023-04-03),
    userId:  '636d51715d29e99d62636bd8'
},
{
    hotelId: '63705a14a2c3190ac7044f53', 
    name: 'Magic Show',
    description: 'Spectacle of Magic and Illusionism to enjoy with your loved ones.',
    photo: 'https://www.guatemala.com/fotos/2020/10/Show-gratuito-de-magia-en-linea-Octubre-2020-2-885x500.jpg',
    price: 7,
    date: new Date(2023-01-12),
    userId:  '636d51715d29e99d62636bda'
},
{
    hotelId: '63705a14a2c3190ac7044f53',
    name: 'Guns N Roses',
    description: 'Is an American hard rock band formed in Hollywood on the Sunset Strip in 1985. The group was founded by vocalist Axl Rose and guitarist Izzy Stradlin.',
    photo: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/FE5GM3ARM5AOTI3B7WFNELQVIY.jpg',
    price: 200,
    date: new Date(2023-05-12),
    userId:'636d51715d29e99d62636bd9'
},
]


require ('dotenv').config()
require('../../config/database')
const Show = require('../Show')

eventsShows.forEach(elemento =>{
    Show.create({
    hotelId: elemento.hotelId,
    name: elemento.name,
    description: elemento.description,
    photo: elemento.photo,
    price: elemento.price,
    date: elemento.date,
    userId: elemento.userId
})
})

