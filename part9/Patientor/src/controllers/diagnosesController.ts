import { Diagnose } from "../../types";
import { Model } from "../models/model";
import { Controller } from "./controller";

export class DiagnosesController extends Controller<Diagnose>{
    constructor(data:{
        creator:new()=>Model<Diagnose>
    })
    {
        super(data); 
    }
    
}