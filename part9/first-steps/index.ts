import express from 'express';
import { isNotNumber } from './utils/text';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());  // Para parsear JSON
app.use(express.urlencoded({ extended: true }));

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const {height,weight} = req.query;
  if(isNotNumber(height) || isNotNumber(weight)){
    res.send({error: "malformatted parameters"});
    return;
  }

  res.send(calculateBmi(Number(height),Number(weight)));
});

interface ExerciseRequest {
  daily_exercises: number[];
  target: number;
}

app.post('/exercises', (req, res) => {
  const {daily_exercises,target} = req.body as ExerciseRequest;

  if(!daily_exercises || !target){
    res.status(400).json({error: "parameters missing"});
    return;
  }

  if(isNotNumber(target) || !Array.isArray(daily_exercises) || daily_exercises.some(t=>isNotNumber(t))){
    res.status(400).json({error: "malformatted parameters"});
    return;
  }

  res.send(calculateExercises(daily_exercises,target));
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});