import {Router, Request, Response} from 'express';

const router: Router = Router();

// basic healthcheck
router.get('/*', (req: Request, res: Response) => {
  res.status(200).send('OK');
});

export default router;
