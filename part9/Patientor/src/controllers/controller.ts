import { Request, Response } from "express";
import { Model } from "../models/model";

export class Controller<T extends { id: string },M extends Model<T>>{
    protected model:M;

  constructor({ model }: {
    model: M ;
  }) {
    this.model = model;
  }

  protected filtersCreate(_req:Request):T
  {
    throw new Error("filtersCreate must be implemented");
  }

  getAll(_req: Request, res: Response) {
    const data = this.model.get();
    res.json(data);
  }
  
  get(req: Request, res: Response) {
    const {id} = req.params;
    if(typeof id != 'string'){
      res.status(400).json({ 
                error: 'Invalid or missing ID parameter' 
            });
      return;
    }

    const data = this.model.getById({id});
    res.json(data);
  }

  create(req:Request,res:Response){
    const newT = this.filtersCreate(req);
    this.model.add(newT);
    res.status(201).json(newT);
  }
}