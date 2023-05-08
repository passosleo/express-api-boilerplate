import { Request, Response } from 'express';

export class FooController {
  static foo(req: Request, res: Response) {
    return res.json({ message: 'foo' });
  }
}
