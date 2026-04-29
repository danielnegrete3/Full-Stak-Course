import { Gender, Patientor } from "../../types";

export const patients = [
    {
    id: "d2773336-f723-11e9-8f0b-362b9e155667",
    name: "John McClane",
    dateOfBirth: "1986-07-09",
    ssn:'wf',
    entries:[
      {
          id: "e003",
          description: "Gunshot wound",
          date: "2023-11-10",
          specialist: "Dr. House",
          type: "Hospital",
          hospital: "General Hospital",
          diagnosisCodes:["M24.2","Z57.1"]
      }
    ],
    gender: Gender.Male,
    occupation: "New York City Cop",
    
  },
  {
    id: "d2773598-f723-11e9-8f0b-362b9e155667",
    name: "Martin Riggs",
    dateOfBirth: "1979-01-30",
    ssn:'wf',
    entries:[],
    gender: Gender.Male,
    occupation: "Cop",
    
  },
  {
    id: "d27736ec-f723-11e9-8f0b-362b9e155667",
    name: "Hans Gruber",
    dateOfBirth: "1970-04-01",
    ssn:'wf',
    entries:[],
    gender: Gender.Male,
    occupation: "Terrorist",
    
  },
  {
    id: "d2773822-f723-11e9-8f0b-362b9e155667",
    name: "Dana Scully",
    dateOfBirth: Date.now(),
    ssn:'wf',
    entries:[],
    gender: Gender.Female,
    occupation: "FBI Agent",
    
  },
  {
    id: "d2773c6e-f723-11e9-8f0b-362b9e155667",
    name: "Marge Simpson",
    dateOfBirth: new Date("1979-03-19"),
    gender: Gender.Female,
    occupation: "Housewife",
    ssn:'wf',
    entries:[],
  },
  {
    id: "d2773e18-f723-11e9-8f0b-362b9e155667",
    name: "Tony Stark",
    dateOfBirth: "1970-05-29",
    ssn:'wf',
    entries:[],
    gender: Gender.Male,
    occupation: "CEO of Stark Industries",
    
  },
  {
    id: "d2774000-f723-11e9-8f0b-362b9e155667",
    name: "Natasha Romanoff",
    dateOfBirth: new Date("1984-11-22"),
    ssn:'wf',
    entries:[],
    gender: Gender.Female,
    occupation: "Secret Agent",
    
  },
  {
    id: "d2774228-f723-11e9-8f0b-362b9e155667",
    name: "Bruce Wayne",
    dateOfBirth: "1975-02-19",
    ssn:'wf',
    entries:[],
    gender: Gender.Male,
    occupation: "CEO of Wayne Enterprises",
    
  },
  {
    id: "d27744c0-f723-11e9-8f0b-362b9e155667",
    name: "Hermione Granger",
    dateOfBirth: new Date("1979-09-7"),
    ssn:'wf',
    entries:[],
    gender: Gender.Female,
    occupation: "Ministry of Magic",
    
  },
  {
    id: "d277472e-f723-11e9-8f0b-362b9e155667",
    name: "Peter Parker",
    dateOfBirth: "2001-08-10",
    ssn:'wf',
    entries:[],
    gender: Gender.Male,
    occupation: "Photographer",
    
  }
] as Patientor[];