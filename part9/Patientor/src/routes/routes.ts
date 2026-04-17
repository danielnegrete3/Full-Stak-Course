import { DiagnosesController } from "../controllers/diagnosesController";
import { PatientsController } from "../controllers/patientsController";
import { Diagnos } from "../models/diagnose";
import { Patient } from "../models/patient";
import { createDiagnosesRouter } from "./diagnosesRoter";
import { createPatientsRouter } from "./patientsRoter";

export const routes = [
    {prefix:'/diagnoses',router:createDiagnosesRouter({
                                                        controller:DiagnosesController,
                                                        model:Diagnos
                                                    }),
    },
    {prefix:'/patients',router:createPatientsRouter({
                                                        controller:PatientsController,
                                                        model:Patient
                                                    }),
    },
] as const;