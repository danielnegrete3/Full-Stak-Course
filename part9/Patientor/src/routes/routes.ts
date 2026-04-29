import { DiagnosesController } from "../controllers/diagnosesController";
import { PatientsController } from "../controllers/patientsController";
import { Diagnos } from "../models/diagnose";
import { Patient } from "../models/patient";
import { createDiagnosesRouter } from "./diagnosesRoter";
import { createPatientsRouter } from "./patientsRoter";

const models = {
    Diagnos:new Diagnos(),
    Patient:new Patient(),
};

const controllers = {
    DiagnosesController:new DiagnosesController({model:models.Diagnos}),
    PatientsController:new PatientsController({model:models.Patient,diagnos:models.Diagnos})
} as Record<string,unknown>;

export const routes = [
    {prefix:'/diagnoses',router:createDiagnosesRouter({
                                                        controller:controllers.DiagnosesController as DiagnosesController,
                                                        model:models.Diagnos
                                                    }),
    },
    {prefix:'/patients',router:createPatientsRouter({
                                                        controller:controllers.PatientsController as PatientsController,
                                                        model:models.Patient
                                                    }),
    },
] as const;