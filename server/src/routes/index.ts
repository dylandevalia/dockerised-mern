import { Router } from 'express';
import usersRoutes from './users.routes';

const router = Router();

router.get('/rnd', (req, res) => {
  const rnd = Math.ceil(Math.random() * 10);
  res.status(200).send({
    http_status: 200,
    data: rnd,
  });
});

router.use('/users', usersRoutes);

export default router;
