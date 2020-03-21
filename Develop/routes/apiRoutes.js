const fs = require("fs");
const path = require('path')

module.exports = function(app) {
    const dbPath = path.join(__dirname, '../db', 'db.json')
    app.get('/api/notes', (req, res) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
              return console.log(err);
            }
            res.json(data);
          });
    })
    app.post('/api/notes', (req, res) => {
        fs.appendFile(dbPath, req.body, "utf8", (err) => {
            if (err) {
              return console.log(err);
            }
            console.log('File was appended!')
          });
        console.log(req.body);
        res.send(req.body)
    })
    // app.delete('/api/notes', (req, res) => {
    //     fs.appendFile("../db/db.json", "utf8", function(err, data) {
    //         if (err) {
    //           return console.log(err);
    //         }
    //         console.log(data);
    //       });
    // })
}