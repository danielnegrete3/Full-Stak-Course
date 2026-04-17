import { Request, Response } from "express";
import { Model } from "../models/model";

export class Controller<T>{
    protected model: Model<T>;

  constructor({ creator }: {
    creator: new () => Model<T>;
  }) {
    this.model = new creator();
  }

  protected filtersCreate(_req:Request):T
  {
    throw new Error("filtersCreate must be implemented");
  }

  async getAll(_req: Request, res: Response) {
    const data = await this.model.get();
    res.json(data);
  }

  async create(req:Request,res:Response){
    const newT = this.filtersCreate(req);
    await this.model.add(newT);
    res.status(201).json(newT);
  }
}