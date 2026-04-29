import { Controller } from "./controller";
import { BaseEntry, Entry, Patientor } from "../../types";
import { Request, Response } from "express";
import { isDate, isGender, isHealthCheckRating, isString } from "../helpers/types";
import { v1 } from "uuid";
import { Patient } from "../models/patient";
import { Diagnos } from "../models/diagnose";

export class PatientsController extends Controller<Patientor,Patient>{
    protected diagnos:Diagnos;

    constructor(data:{
        model:Patient
        diagnos:Diagnos
    })
    {
        super(data); 
        this.diagnos = data.diagnos;
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
            gender: data.gender,
            entries:[],
        };
    }

    addEntry(req:Request,res:Response){
        const body: unknown = req.body;
        const {id} = req.params;

        if (!id || typeof id !== "string" || !this.model.getById({id})) {
            throw new Error("Invalid id");
        }

        if (!body || typeof body !== "object") {
            throw new Error("Invalid body");
        }

        const b = body as Record<string, unknown>;
        const stringData = ['description','specialist','type'];
        
        if (!b.description || !isDate(b.date)) {
            throw new Error("Invalid date");
        }

        stringData.forEach((d)=>{
            if (!b[d] || !isString(b[d])) {
                throw new Error(`Invalid ${d}`);
            }
        });

        if(!Array.isArray(b.diagnosisCodes)){
            throw new Error("Invalid diagnosisCodes");
        }


        const codes = this.diagnos.getCodes();
        
        const data = {
            id: v1(),
            description:b.description,
            date:b.date,
            specialist:b.specialist,
            diagnosisCodes:b.diagnosisCodes.filter((c)=>codes.includes(c as string))
        } as BaseEntry;

        let entry: Entry;

        if(b.type === 'HealthCheck'){
            if(!b.healthCheckRating || !isHealthCheckRating(b.healthCheckRating)){
                throw new Error("Invalid healthCheckRating");
            }

            entry = {
                ...data,
                type :b.type,
                healthCheckRating : b.healthCheckRating,
            };
        }else
        if(b.type === 'Hospital'){
            if(!b.hospital || !isString(b.hospital)){
                throw new Error("Invalid healthCheckRating");
            }
            entry = {
                ...data,
                type :b.type,
                hospital : b.hospital,
            };
        }else
        if(b.type === 'OccupationalHealthCare'){
            if(!b.OccupationalHealthCare || !isString(b.OccupationalHealthCare)){
                throw new Error("Invalid healthCheckRating");
            }

            entry = {
                ...data,
                type :b.type,
                OccupationalHealthCare : b.OccupationalHealthCare,
            };
        }else
            throw new Error("Invalid type");


        this.model.addEntry({id,entry});

        res.json(data);
    }
}