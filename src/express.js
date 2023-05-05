const express = require('express');

const app = express();
app.use(express.static('./build'));
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.listen(9000, () => {
    console.log('Express server listening on port 9000');
});