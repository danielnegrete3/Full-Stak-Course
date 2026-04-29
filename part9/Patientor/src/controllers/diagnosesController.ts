import { Diagnose } from "../../types";
import { Diagnos } from "../models/diagnose";
import { Controller } from "./controller";

export class DiagnosesController extends Controller<Diagnose,Diagnos>{
    constructor(data:{
        model:Diagnos
    })
    {
        super(data); 
    }
    
}