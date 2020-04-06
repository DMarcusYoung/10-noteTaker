const fs = require("fs");
const path = require('path');

module.exports = function(app) {
    // Var for path to the json database file
    const dbPath = path.join(__dirname, '../db', 'db.json')
    // Gives each note an id based on its index in the main array
    const assignIds = arr => { arr.forEach((el,i) => el.id = i)};
    // Callback functions that add or delete a note, the parameters are used because the arguments aren't declare until later
    const addData = (arr, reqPlaceholder) => {arr.push(reqPlaceholder.body)};
    const deleteData = (arr,reqPlaceholder) => {arr.splice(reqPlaceholder.params.id, 1)};
    // Gets and changes the data in the json database file
    const updateData = (log, cb, reqPlaceholder, resPlaceholder) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
              return console.log(err);
            }
            const arrayData = JSON.parse(data);
            cb(arrayData, reqPlaceholder);
            assignIds(arrayData);
            resPlaceholder.json(arrayData);
            fs.writeFile(dbPath, JSON.stringify(arrayData), (err) => {
                if (err) {
                  return console.log(err);
                }
                console.log(`File was ${log}!`)
            });
        });
    }
    // GET api listener, returns data in the json database file
    app.get('/api/notes', (req, res) => {
        fs.readFile(dbPath, "utf8", (err, data) => {
            if (err) {
              return console.log(err);
            }
            res.json(JSON.parse(data));
          });
    })
    // POST api listener, gets stored note data from json database file, adds and returns saved note
    app.post('/api/notes', (req, res) => {
        updateData('appended', addData, req, res);
    });
    // DELETE api listener, gets stored note data and deletes the note at the selected id/index
    app.delete('/api/notes/:id', (req, res) => {
        updateData('deleted', deleteData,req, res);
    });
};