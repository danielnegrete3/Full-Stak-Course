import { Diagnose } from "../../types";
import { diagnoses } from "../mocks/diagnoses";
import { Model } from "./model";

export class Diagnos extends Model<Diagnose>{
    protected items:Array<Diagnose> = diagnoses;

    getCodes(){
        return this.items.map((it)=>it.code);
    }
}