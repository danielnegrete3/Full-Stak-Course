import { Patientor } from "../../types";
import { patients } from "../mocks/patients";
import { Model } from "./model";

export class Patient extends Model<Patientor>{
    protected items:Array<Patientor> = patients;


}