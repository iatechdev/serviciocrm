import { Router } from 'express';

import {
  getOneData
} from '../controllers/users.controller';

const router = Router();

router.post('/read', getOneData,);



export default router;
