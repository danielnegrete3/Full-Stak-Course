
import express from 'express';
import { Diagnose, RouterProps } from '../../types';

export const createDiagnosesRouter = ({controller,model}:RouterProps<Diagnose>) => {
    const router = express.Router();
    const c = new controller({creator:model});
    router.get('/',c.getAll.bind(c));

    return router;
};