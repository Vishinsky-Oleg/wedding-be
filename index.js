const app = require('express')();
const uuid = require('uuid');
const PORT = 3001

app.listen(
    PORT,
    () => {
        console.log(uuid.v4())
        console.log(`Listening on port ${PORT}`)
    }
)

app.get('/', (req, res) => {
    const uniqueID = req.query.id;
    res.status(200).send(uniqueID);
})
