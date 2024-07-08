import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './Config/db.js';
import searchrouter from './routes/search.js';
import datarouter from './routes/data.js';
import suggestionrouter from './routes/suggest.js';


connect();

const app = express();
dotenv.config();
const port = process.env.PORT;

const corsOptions = {
    origin: 'https://task-search.vercel.app/', 
    optionsSuccessStatus: 200, 
  };

app.use(cors(corsOptions));

app.use(express.json());

app.use('/api', searchrouter);
app.use('/api',datarouter);
app.use('/api', suggestionrouter);


app.get('/', function(req,res){
    
    res.send(" Home Page");
})

app.listen(port , function(){
    console.log(`server is listening at http://localhost:${port}`);
});

