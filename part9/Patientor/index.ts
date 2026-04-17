import express from 'express';
import cors from 'cors';
import { routes } from './src/routes/routes';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

routes.forEach(({prefix,router})=>{
    app.use(`/api${prefix}`,router);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});