import { List, ListItem } from "@mui/material";
import { Diagnosis, Entry } from "../../types";
import React from "react";

interface Props
{
    children?:React.ReactNode
    icon?:React.ReactNode
    entry: Entry,
    diagnoses: Diagnosis[]
}

export const BaseEntry = ({children,entry,diagnoses,icon}:Props) => {
    return(
        <>
            <ListItem key={entry.id} style={{border:'2px solid black'}}>
                <List>
                    <ListItem>Date: {entry.date}{icon??<></>}</ListItem>
                    <ListItem>Description: {entry.description}</ListItem>
                    <ListItem>Specialist: {entry.specialist}</ListItem>
                    {children??<></>}
                    <List style={{marginLeft:20}}>
                        {entry.diagnosisCodes?.map(diag=><ListItem key={diag}>{diag}:{diagnoses.find(item=>item.code === diag)?.name??''}</ListItem>)}
                    </List>
                </List>
            </ListItem>
        </>
    );
};