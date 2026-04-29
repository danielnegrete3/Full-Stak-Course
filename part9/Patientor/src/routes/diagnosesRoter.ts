
import express from 'express';
import { Diagnose, RouterProps } from '../../types';
import { Diagnos } from '../models/diagnose';
import { DiagnosesController } from '../controllers/diagnosesController';

export const createDiagnosesRouter = ({controller}:RouterProps<Diagnose,Diagnos,DiagnosesController>) => {
    const router = express.Router();
    const c = controller;
    router.get('/',c.getAll.bind(c));

    return router;
};