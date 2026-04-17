import { Controller } from "./controller";
import { Model } from "../models/model";
import { Patientor } from "../../types";
import { Request } from "express";
import { isDate, isGender, isString } from "../helpers/types";
import { v1 } from "uuid";

export class PatientsController extends Controller<Patientor>{
    constructor(data:{
        creator:new()=>Model<Patientor>
    })
    {
        super(data); 
    }
    
    protected filtersCreate(req: Request): Patientor {

        const body: unknown = req.body;

        if (!body || typeof body !== "object") {
            throw new Error("Invalid body");
        }

        const data = body as {
            name: unknown;
            occupation: unknown;
            ssn: unknown;
            dateOfBirth: unknown;
            gender: unknown;
        };

        if (!isString(data.name)) {
            throw new Error("Invalid name");
        }

        if (!isString(data.occupation)) {
            throw new Error("Invalid occupation");
        }

        if (!isString(data.ssn)) {
            throw new Error("Invalid ssn");
        }

        if (!isDate(data.dateOfBirth)) {
            throw new Error("dateOfBirth must be a valid date");
        }

        if (!isGender(data.gender)) {
            throw new Error("Invalid gender");
        }

        return {
            id: v1(),
            name: data.name,
            occupation: data.occupation,
            ssn: data.ssn,
            dateOfBirth: new Date(data.dateOfBirth),
            gender: data.gender
        };
        }
}