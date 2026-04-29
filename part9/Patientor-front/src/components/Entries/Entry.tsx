import { ListItem } from "@mui/material";
import { Diagnosis, Entry as EntryType } from "../../types";
import { BaseEntry } from "./BaseEntry";
import { LocalHospital } from "@mui/icons-material";


export const Entry = ({entry,diagnoses}:{entry:EntryType,diagnoses:Diagnosis[]}) => {

    switch(entry.type){
        case "HealthCheck":
            return (
                <BaseEntry entry={entry} diagnoses={diagnoses}>
                    <ListItem>Health CheckRating: {entry.healthCheckRating}</ListItem>
                </BaseEntry>
            );
        case "Hospital":
            return (
                <BaseEntry entry={entry} diagnoses={diagnoses} icon={<LocalHospital></LocalHospital>}>
                    <ListItem>Health CheckRating: {entry.hospital}</ListItem>
                </BaseEntry>
            );
        case "OccupationalHealthCare":
            return (
                <BaseEntry entry={entry} diagnoses={diagnoses}>
                    <ListItem>Health CheckRating: {entry.OccupationalHealthCare}</ListItem>
                </BaseEntry>
            );
        default:
            return (
                <BaseEntry entry={entry} diagnoses={diagnoses}/>
            );
    };
};