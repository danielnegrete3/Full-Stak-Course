import { Controller } from "./src/controllers/controller";
import { Model } from "./src/models/model";

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other'
};

export interface Diagnose{
    code: string
    name: string
    latin?: string
};

export interface Patientor{
    id:string
    name:string
    dateOfBirth:Date
    ssn:string
    gender:Gender
    occupation:string
};

export interface ModelType{
    items?:[]
    add:()=>void
    get:()=>Array<unknown>
};

export interface RouterProps<T>{
    controller: new (args: { creator: new () => Model<T> }) => Controller<T>
    model: new () => Model<T>
};