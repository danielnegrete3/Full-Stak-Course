
import express from 'express';
import { Patientor, RouterProps } from '../../types';
import { Patient } from '../models/patient';
import { PatientsController } from '../controllers/patientsController';

export const createPatientsRouter = ({controller}:RouterProps<Patientor,Patient,PatientsController>) => {
    const router = express.Router();
    const c = controller;
    router.get('/',c.getAll.bind(c));
    router.get('/:id',c.get.bind(c));
    router.post('/',c.create.bind(c));
    router.post('/:id/entries',c.addEntry.bind(c));

    return router;
};