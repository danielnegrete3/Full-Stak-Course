import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
import { isNotNumber  } from "./utils/text";

const args = process.argv;
args.shift();
args.shift();
const funName = args.shift();

if(funName === 'bmi'){
    const h = args.shift();
    const w = args.shift();
    if(isNotNumber (h) || isNotNumber (w)) throw Error('need two numeric arguments,height and weight');
    else console.log(calculateBmi(Number(h),Number(w)));
}
if(funName === 'calculateExercises'){
    const arg = args.shift();
    if(isNotNumber (arg)) throw Error('need be a number the expected hours');
    const expectedHours = Number(arg);

    const hours = args.map((value) => {
        if(isNotNumber(value)) return 0;
        return Number(value);
    });

    console.log(calculateExercises(hours,expectedHours));
}