import express from 'express';
import cors from 'cors';
import 'dotenv/config';


const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: '*',
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);

const startApp = async () => {
    try {
      app.listen(PORT, () => console.log('server started on port ' + PORT));
    } catch (e) {
      console.log(e);
    }
  };
  
  startApp();