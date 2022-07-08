/**
 * @author Nicolás Tutor
 * Web Server que al solicitar http://localhost:8000/users nos devuelve un listado de cinco
 * usuarios previamente creados; caso contrario nos devuelve un error 404 con un objeto JSON.
 */

const http = require("http");

const host = 'localhost';
const port = 8000;

class User {
    static idUser = 0;

    constructor(firstName, lastName, age, country) {
        this.id = ++User.idUser;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.country = country;
    }
}

const users = [
    new User('Nathan', 'Drake', 50, 'GBR'),
    new User('Victor', 'Sullivan', 65, 'SWE'),
    new User('Chloe', 'Frazer', 38, 'IND'),
    new User('Elena', 'Fisher', 40, 'FRA'),
    new User('Nadine', 'Ross', 35, 'USA')
];

const listUsers = function (req, res) {
    res.setHeader("Content-Type", "application/json");
    switch (req.url) {
        case "/users":
            res.writeHead(200);
            res.end(JSON.stringify(users, null, 2));
            break
        default:
            res.writeHead(404);
            res.end(JSON.stringify({ statusCode: res.statusCode, message: 'Error: ' + res.statusMessage }, null, 2));
    }
};

const server = http.createServer(listUsers);
server.listen(port, host, () => {
    console.log(`Servidor funcionando en http://${host}:${port}`);
});