
import express from 'express';
import { Patientor, RouterProps } from '../../types';

export const createPatientsRouter = ({controller,model}:RouterProps<Patientor>) => {
    const router = express.Router();
    const c = new controller({creator:model});
    router.get('/',c.getAll.bind(c));
    router.post('/',c.create.bind(c));

    return router;
};