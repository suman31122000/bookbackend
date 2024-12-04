import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import router from './router/route.router.js';
const app = express();
app.use(express.json()); 
app.use(cookieParser());
const options = {
  origin:'https://bookstoreproject1.netlify.app/'|| 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  preflightContinue: false,
};
app.use(cors(options));
dotenv.config();
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/', (req, res) => {
  res.send('Hello bookbackend!')
})
app.use('/api/v1',router);
app.post('/api/v1/addbook',(req,res)=>{
  console.log(req.body);
  res.send(req.body);
});
export default app;