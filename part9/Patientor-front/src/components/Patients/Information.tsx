import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gender, Patient } from "../../types";
import { DeviceUnknown, Female, Male } from "@mui/icons-material";
import { Container, List, ListItem } from "@mui/material";
import patientService from "./../../services/patients";
import { Entries } from "../Entries/Entries";

export const Information = () => {
    const {id} = useParams();
    const [patient, setPatient] = useState<Patient|null>(null);

    useEffect(() => {
    const fetchPatientList = async () => {
        if(typeof id != 'string') return;

        const patient = await patientService.get({id});
        setPatient(patient);
    };
    void fetchPatientList();
  }, [id]);

    if(!patient) return <></>;

    return (
        <>
            <Container style={{display:'flex',gap:6}}>
                <h1>{patient.name}</h1>
                {patient.gender === Gender.Female && <Female></Female>}
                {patient.gender === Gender.Male && <Male></Male>}
                {patient.gender === Gender.Other && <DeviceUnknown></DeviceUnknown>}
            </Container>
            <List>
                <ListItem>Ocupation: {patient.occupation}</ListItem>
                <ListItem>SSN: {patient.ssn}</ListItem>
                <ListItem>Date Of Birth: {patient.dateOfBirth}</ListItem>
            </List>
            <Entries id={id as string} entries={patient.entries.sort((a,b)=> new Date(a.date).getTime() - new Date(b.date).getTime())}/>
        </>
    );
};