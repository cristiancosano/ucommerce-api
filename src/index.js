const express = require('express');
const cors = require('cors');
//const cors = require('./middlewares/cors')
const dotenv = require('dotenv');
dotenv.config();

const router = require('./routes');



const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.options('*', cors())
app.use(cors());
//app.use(cors);
app.use(router);

app.listen(port, () => {
  console.log(`Ucommerce api listening at http://localhost:${port}`);
})