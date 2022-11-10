let admins = [
    {    
    name: 'German',
    lastName: 'Pungitore',
    role: 'admin',
    photo: 'https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000',
    age: 24,
    email: 'pungitoregerman@gmail.com',
    password: 'hola1234',
    code: 'administratorOne',
    verified: true,
    logged: true
},
{
    name: 'Jonathan', 
    lastName: 'Olmeda',
    role: 'admin',
    photo: 'https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000',
    age: 30,
    email: 'jonathanolmeda@gmail.com',
    password: 'hola5678',
    code: 'administratorTwo',
    verified: true,
    logged: true,
},
{
    name: 'Eric',
    lastName: 'Rodriguez',
    role: 'admin',
    photo: 'https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000',
    age: 23,
    email: 'feric.rodriguez@gmail.com',
    password: 'chau1234',
    code: 'administratorThree',
    verified: true,
    logged: true,
},
{
    name: 'Ignacio',
    lastName: 'Borraz',
    role: 'admin',
    photo: 'https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg?w=2000',
    age: 32,
    email: 'ignacioborraz@hotmail.com',
    password: 'chau5678',
    code: 'administratorFour',
    verified: true,
    logged: true
}
]

require ('dotenv').config()
require('../../config/database')
const User = require('../User')

admins.forEach(elemento =>{
    User.create({
    name:elemento.name,
    lastName: elemento.lastName,
    role: elemento.role,
    photo:elemento.photo,
    age:elemento.age,
    email: elemento.email,
    password: elemento.password,
    code: elemento.code,
    verified: elemento.verified,
    logged: elemento.logged,
})
})

