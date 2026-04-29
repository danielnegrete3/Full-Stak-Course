import { Entry, Patientor } from "../../types";
import { patients } from "../mocks/patients";
import { Model } from "./model";

export class Patient extends Model<Patientor>{
    protected items:Array<Patientor> = patients;

    public addEntry({id,entry}:{id:string,entry:Entry}){
        this.items = this.items.map((item) => {
            if(item.id === id){
                return {...item,entries:[...item.entries,entry]};
            }
            return item;
        });
    }
}