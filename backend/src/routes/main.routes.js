import { Router } from 'express';
const mainRouter = Router();

mainRouter.get('/', (req, res) => {
  res.send('Ruta principal funcionando');
});

export default mainRouter;
