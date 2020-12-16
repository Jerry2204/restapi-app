const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

// parse application/json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

// panggil router
let routes = require('./routes');
routes(app);

// daftarkan menu routes dari index
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on 3000`);
});
