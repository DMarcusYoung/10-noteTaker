const fs = require("fs");
const path = require('path')

module.exports = function(app) {
    const dbPath = path.join(__dirname, '../db', 'db.json')
    const assignIds = (arr) => {
        arr.forEach((el,i) => el.id = i)
    }
    app.get('/api/notes', (req, res) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
              return console.log(err);
            }
            res.json(JSON.parse(data));
          });
    })

    app.post('/api/notes', (req, res) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
              return console.log(err);
            }
            const arrayData = JSON.parse(data);
            arrayData.push(req.body)
            assignIds(arrayData);
            res.json(arrayData)
            fs.writeFile(dbPath, JSON.stringify(arrayData), (err) => {
                if (err) {
                  return console.log(err);
                }
                console.log('File was appended!')
              });
        });
    })

    app.delete('/api/notes/:id', (req, res) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
              return console.log(err);
            }
            let arrayData = JSON.parse(data);
            arrayData.splice(req.params.id, 1);
            console.log(arrayData)
            assignIds(arrayData);
            res.json(arrayData);
            fs.writeFile(dbPath, JSON.stringify(arrayData), (err) => {
                if (err) {
                  return console.log(err);
                }
                console.log('File was deleted!');
              });
        });
    })
}