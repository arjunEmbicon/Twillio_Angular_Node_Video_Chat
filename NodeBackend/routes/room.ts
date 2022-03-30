import { Router } from 'express';
import { twilioClient } from '../index';

interface Room {
  name: any;
  sid: any;
}

const roomsRouter = Router();

export default roomsRouter;
