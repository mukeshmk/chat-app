import express from 'express';
import { requireAuth } from '../middleware/authMiddleware';
import defaultController from '../controllers';

const router = express.Router();

router.get('/', defaultController.index_get);
router.get('/chat', requireAuth, defaultController.chat_get);
router.get('/user', requireAuth, defaultController.user_get);

export default router;
