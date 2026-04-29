import { Diagnose } from "../../types";

export const diagnoses = [
    {
        code: "M24.2",
        name: "Disorder of ligament",
        latin: "Morbositas ligamenti",
        id: "d1"
    },
    {
        code: "M24.1",
        name: "Disorder of joint cartilage",
        latin: "Morbositas cartilaginis articularis",
        id: "d2"
    },
    {
        code: "J10.1",
        name: "Influenza with other respiratory manifestations",
        latin: "Influenza cum aliis manifestationibus respiratoriis",
        id: "d3"
    },
    {
        code: "Z57.1",
        name: "Occupational exposure to radiation",
        id: "d4"
        // Nota: sin latin (es opcional)
    },
    {
        code: "S62.5",
        name: "Fracture of thumb",
        latin: "Fractura pollicis",
        id: "d5"
    },
    {
        code: "I10",
        name: "Essential (primary) hypertension",
        latin: "Hypertensio arterialis essentialis",
        id: "d6"
    },
    {
        code: "E11.9",
        name: "Type 2 diabetes mellitus without complications",
        latin: "Diabetes mellitus typus 2 sine complicationibus",
        id: "d7"
    },
    {
        code: "F32.9",
        name: "Major depressive disorder, single episode, unspecified",
        latin: "Depressio magna, episodium singulum, non specificatum",
        id: "d8"
    },
    {
        code: "G44.1",
        name: "Vascular headache, not elsewhere classified",
        id: "d9"
    },
    {
        code: "R51",
        name: "Headache",
        latin: "Cephalalgia",
        id: "d10"
    }
] as Diagnose[];