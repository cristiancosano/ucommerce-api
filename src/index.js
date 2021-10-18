const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes');

dotenv.config();


const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})