import { Request, Response } from 'express';

export class BarController {
  static bar(req: Request, res: Response) {
    return res.json({ message: 'bar' });
  }
}
