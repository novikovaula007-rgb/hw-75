import express, {Request, Response} from 'express';
import cors from 'cors';
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;

app.use(cors());
app.use(express.json())

app.post('/encode', (req: Request, res: Response) => {
    if (!req.body.password || !req.body.message) {
        return res.status(400).send({error: "Please enter a message and a password"});
    } else {
        const vigenereObject = {
            message: req.body.message,
            password: req.body.password
        }

        const encodeText = Vigenere.Cipher(vigenereObject.password).crypt(vigenereObject.message);
        return res.send({"encoded": encodeText});
    }

})

app.post('/decode', (req: Request, res: Response) => {
    if (!req.body.password || !req.body.message) {
        return res.status(400).send({error: "Please enter a message and a password"});
    } else {
        const vigenereObject = {
            message: req.body.message,
            password: req.body.password
        }

        const decodeText = Vigenere.Decipher(vigenereObject.password).crypt(vigenereObject.message);
        return res.send({"decoded": decodeText});
    }

})

app.listen(port, () => {
    console.log('We are live on ' + port);
});