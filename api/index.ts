import express from 'express';
import cors from 'cors';
const app = express();
const port = 8000;

app.use(cors());

app.listen(port, () => {
    console.log('We are live on ' + port);
});