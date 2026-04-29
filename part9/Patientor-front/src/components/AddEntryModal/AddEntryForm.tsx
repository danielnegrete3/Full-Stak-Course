import { useState, SyntheticEvent } from "react";

import {  TextField, InputLabel, MenuItem, Select, Grid, Button, SelectChangeEvent, Container, Badge } from '@mui/material';
import { Diagnosis, EntryWithoutId, HealthCheckRating } from "../../types";
import { Clear } from "@mui/icons-material";

interface Props {
  onCancel: () => void;
  onSubmit: (entry:EntryWithoutId) => void;
  diagnoses:Diagnosis[],
}

const types = ['HealthCheck','Hospital','OccupationalHealthCare'];

const AddPatientForm = ({ onCancel, onSubmit,diagnoses }: Props) => {
  const [description, setDescription] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [diagnosisCodes,setDiagnosisCodes] = useState<Diagnosis['code'][]>([]);
  const [date, setDate] = useState('');
  const [healthCheckRating, setHealthCheckRating] = useState<HealthCheckRating>(HealthCheckRating.LowRisk);
  const [hospital, setHospital] = useState('');
  const [OccupationalHealthCare, setOccupationalHealthCare] = useState('');
  const [type,setType] = useState('HealthCheck');

  const changeType = (event: SelectChangeEvent<string>) => {
    event.preventDefault();
    setType(event.target.value);
  };

  const submit = (event: SyntheticEvent) => {
    event.preventDefault();
    const base = { description, specialist, diagnosisCodes, date };

    if (type === 'HealthCheck') {
        onSubmit({ ...base, type: 'HealthCheck', healthCheckRating });
    } else if (type === 'Hospital') {
        onSubmit({ ...base, type: 'Hospital', hospital:hospital });
    } else if (type === 'OccupationalHealthCare') {
        onSubmit({ ...base, type: 'OccupationalHealthCare', OccupationalHealthCare: OccupationalHealthCare });
    }
  };

  return (
    <div>
      <form onSubmit={submit}>
        <TextField
          label="Description"
          fullWidth 
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
        <TextField
          label="Specialist"
          fullWidth
          value={specialist}
          onChange={({ target }) => setSpecialist(target.value)}
        />
        <TextField
          type="date"
          fullWidth
          value={date}
          onChange={({ target }) => setDate(target.value)}
        />
        <InputLabel sx={{ marginTop: 2.5 }}>Diagnosis Codes</InputLabel>
        <Select
          label="Diagnosis Codes"
          fullWidth
          value=''
          onChange={(v)=>setDiagnosisCodes([...diagnosisCodes,v.target.value])}
        >
          {diagnoses.filter((v)=>!(diagnosisCodes.includes(v.code))).map(option =>
            <MenuItem
              key={option.id}
              value={option.code}
            >
              {option.name}
            </MenuItem>
          )}
        </Select>
        <Container style={{display:'flex',gap:3}}>
          {
            diagnosisCodes.map((it)=> <Badge>{it} <Clear onClick={()=>setDiagnosisCodes(diagnosisCodes.filter(code=>code != it))} style={{width:12,color:'red',cursor:'pointer'}} ></Clear></Badge>)
          }
        </Container>

        <InputLabel sx={{ marginTop: 2.5 }}>Type</InputLabel>
        <Select
          label="Type"
          fullWidth
          value={type}
          onChange={changeType}
        >
          {types.map(option =>
            <MenuItem
              key={option}
              value={option}
            >
              {option}
            </MenuItem>
          )}
        </Select>

        {
          type === 'HealthCheck' && 
          <>
            <InputLabel sx={{ marginTop: 2.5 }}>HealthCheck</InputLabel>
            <Select
              label="HealthCheck"
              fullWidth
              value={healthCheckRating}
              onChange={(e)=>setHealthCheckRating(e.target.value as HealthCheckRating)}
            >
              {Object.values(HealthCheckRating).filter(v => isNaN(v as number)).map(v =>
                <MenuItem
                  key={v.toString()}
                  value={HealthCheckRating[v as HealthCheckRating]}
                >
                  {v.valueOf()}
                </MenuItem>
              )}
            </Select>
          </>
        }
        {
          type === 'Hospital' && 
          <>
            <TextField
              label="Hospital"
              placeholder="Hospital"
              fullWidth
              value={hospital}
              onChange={({ target }) => setHospital(target.value)}
            />
          </>
        }
        {
          type === 'OccupationalHealthCare' && 
          <>
            <TextField
              label="Occupational Health Care"
              placeholder="-"
              fullWidth
              value={OccupationalHealthCare}
              onChange={({ target }) => setOccupationalHealthCare(target.value)}
            />
          </>
        }

        <Grid>
          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              style={{ float: "left" }}
              type="button"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={{
                float: "right",
              }}
              type="submit"
              variant="contained"
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default AddPatientForm;