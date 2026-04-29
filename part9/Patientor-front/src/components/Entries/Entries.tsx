import { Button } from "@mui/material";
import { Diagnosis, Entry as EntryType, EntryWithoutId } from "../../types";
import { Entry } from "./Entry";
import { useEffect, useState } from "react";
import AddEntryModal from "../AddEntryModal";
import axios from "axios";
import service from "./../../services/diagonses";
import servicePatients from "./../../services/patients";


export const Entries = ({entries,id}:{entries:EntryType[],id:string}) => {
    
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>();
    const [diagnoses,setDiagnose] = useState<Diagnosis[]>([]);
    const [dEntries,setDEntries] = useState<EntryType[]>(entries);
        
    useEffect(() => {
        const fetchPatientList = async () => {    
            const d = await service.getAll();
            setDiagnose(d);
        };
        void fetchPatientList();
        }, []);
    
    const openModal = (): void => setModalOpen(true);
    
    const closeModal = (): void => {
        setModalOpen(false);
        setError(undefined);
    };

    const submitNewEntry= async (entry:EntryWithoutId) => {
        try {
            const newEntry = await servicePatients.createEntry({id,form:entry});
            setDEntries([...dEntries, newEntry]);
            setModalOpen(false);
        } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
            if (e?.response?.data && typeof e?.response?.data === "string") {
            const message = e.response.data.replace('Something went wrong. Error: ', '');
            console.error(message);
            setError(message);
            } else {
            setError("Unrecognized axios error");
            }
        } else {
            console.error("Unknown error", e);
            setError("Unknown error");
        }
        }
    };
    
    if(entries.length < 1) return <><Button variant="contained" color="primary" onClick={openModal}>Add Entry</Button></>;
    return(
        <div>
            <h2>Entries</h2>
            <Button variant="contained" color="primary" onClick={openModal}>Add Entry</Button>
            <br />
            {dEntries.map((entry)=><>
                <Entry entry={entry} key={'entries_'+entry.id} diagnoses={diagnoses}/>
                <br />
            </>
            )}
            <AddEntryModal
                modalOpen={modalOpen}
                onSubmit={submitNewEntry}
                error={error}
                onClose={closeModal}
                diagnoses={diagnoses}
            />
        </div>
    );
};