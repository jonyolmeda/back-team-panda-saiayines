let cities = [
    {
        id: "city1",
        name: "London",
        continent: "Europe",
        photo: "https://utopiaurbana.city/wp-content/uploads/2022/09/Rutas-por-Londres.jpg",
        population:  9000000,
        userId:  "636d51715d29e99d62636bd7"
    },
    {
        id: "city2",
        name: "New York City",
        continent: "America",
        photo: "https://images.hola.com/imagenes/viajes/20200416165850/manhattan-nueva-york-maravillas-desde-mi-pantalla/0-812-351/nueva-york-manhattan-maravillas-desde-mi-pantalla-t.jpg",
        population:  8804190,
        userId:  "636d51715d29e99d62636bd7"
    },
    {
        id: "city3",
        name: "Paris",
        continent: "Europe",
        photo: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2013/04/Paris.jpg?fit=1024%2C685&quality=50&strip=all&ssl=1",
        population:  2165423,
        userId:  "636d51715d29e99d62636bd7"
    },
    {
        id: "city4",
        name: "Mendoza",
        continent: "America",
        photo: "https://www.clarin.com/img/2019/11/06/uno-de-los-vinedos-de___a8GQ9c_x_1256x620__2.jpg#1573058846499",
        population:  1055679,
        userId:  "636d51715d29e99d62636bd8"
    },
    {
        id: "city5",
        name: "Doha",
        continent: "Africa",
        photo: "https://a.cdn-hotels.com/gdcs/production22/d1331/47c812a4-ef46-4beb-b1e6-e81cced4393f.jpg?impolicy=fcrop&w=800&h=533&q=medium",
        population:  2382000,
        userId:  "636d51715d29e99d62636bd8"
    },
    {
        id: "city6",
        name: "Tokyo",
        continent: "Asia",
        photo: "https://media.istockphoto.com/photos/tokyo-skyline-with-mt-fuji-picture-id1387616822?b=1&k=20&m=1387616822&s=170667a&w=0&h=n8PwNOmprRGIdRJYrr5IXvzLqg0LFQrJYIDHYY0oNLI=",
        population:  37468000,
        userId:  "636d51715d29e99d62636bd8"
    },
    {
        id: "city7",
        name: "Cancun",
        continent: "America",
        photo: "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_900,q_75,w_1700/v1/clients/quintanaroo/_cc911e74-049d-4172-b8d9-67b8942c9bc0.1392201394-2910bf3f5b8388c632d75b47bd71a0c94b1389b5c0b1926331aa7ed225a20103-d_640.jpg",
        population:  888797,
        userId:  "636d51715d29e99d62636bd9"
    },
    {
        id: "city8",
        name: "Cairo",
        continent: "Africa",
        photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/9b/2f/5b/cairo.jpg?w=700&h=500&s=1",
        population:  10000000,
        userId:  `636d51715d29e99d62636bd9`
    },
    {
        id: "city9",
        name: "Sydney",
        continent: "Oceania",
        photo: "https://dingoos.com/wp-content/uploads/2017/11/estudiar-en-sydney-1.jpg",
        population:  5231147,
        userId:  "636d51715d29e99d62636bd9"
    },
    {
        id: "city10",
        name: "Santorini",
        continent: "Europe",
        photo: "https://a.cdn-hotels.com/gdcs/production18/d1838/041ae6b1-0a88-4c22-a648-53a22dd4a006.jpg",
        population:  15550,
        userId:  "636d51715d29e99d62636bda"
    },
    {
        id: "city11",
        name: "San Francisco",
        continent: "America",
        photo: "https://cdn.britannica.com/13/77413-050-95217C0B/Golden-Gate-Bridge-San-Francisco.jpg",
        population:  815201,
        userId:  "636d51715d29e99d62636bda"
    },
    {
        id: "city12",
        name: "Singapore",
        continent: "Asia",
        photo: "https://www.globalization-partners.com/es/wp-content/uploads/2021/07/blog-new-18.jpg",
        population:  5637000,
        userId:  "636d51715d29e99d62636bda"
    },
]

require ('dotenv').config()
require('../../config/database')
const City = require('../City')

cities.forEach(elemento =>{
    City.create({
    name:elemento.name,
    continent: elemento.continent,
    photo:elemento.photo,
    population:elemento.population,
    userId: elemento.userId,
})
})