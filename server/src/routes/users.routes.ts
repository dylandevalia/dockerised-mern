import { type Response, Router } from 'express';
import {
  createUser,
  deleteUserByEmail,
  getUserByEmail,
  getUsers,
  updateUserByEmail,
} from '../controllers/users.controllers';
import { type User } from '../models/user.model';

const router = Router();

const errorHandler = (res: Response, error: unknown) => {
  res.status(400).json({ http_status: 400, error });
};

// Get all
router.get('/', async (req, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({
      http_status: 200,
      data: { users },
    });
  } catch (e) {
    errorHandler(res, e);
  }
});

// Get single
router.get('/:id', async (req, res) => {
  try {
    const user = await getUserByEmail(req.params.id);
    res.status(200).json({
      http_status: 200,
      data: user,
    });
  } catch (e) {
    errorHandler(res, e);
  }
});

// Create
router.post('/', async (req, res) => {
  try {
    const user: User = req.body;
    user.email = user.email.toLowerCase();

    const userInfo = await createUser(user);
    res.status(201).json({
      http_status: 201,
      data: userInfo,
    });
  } catch (e) {
    errorHandler(res, e);
  }
});

// Update
router.patch('/:id', async (req, res) => {
  try {
    const user = updateUserByEmail(req.params.id, req.body);
    res.status(200).json({
      http_status: 200,
      data: user,
    });
  } catch (e) {
    errorHandler(res, e);
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    const user = deleteUserByEmail(req.params.id);
    res.status(200).json({
      http_status: 200,
      data: user,
    });
  } catch (e) {
    errorHandler(res, e);
  }
});

export default router;
