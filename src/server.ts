import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import compression from 'compression';
import partsRouter from './modules/parts';
import gridMotherRouter from './modules/gridMother';
import finishRouter from './modules/finish';
class App {
  public app: express.Application;

  constructor () {
    this.app = express();
    this.config();
    this.routes();
  }

  private config (): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
  }

  private routes (): void {
    this.app.use(partsRouter);
    this.app.use(gridMotherRouter);
    this.app.use(finishRouter);
  }
}

export default new App().app;
