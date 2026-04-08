import { calculateBmi } from "./bmiCalculator"
import { calculateExercises } from "./exerciseCalculator"
import { isNotNumber  } from "./utils/text"

var args = process.argv
args.shift()
args.shift()
var funName = args.shift()

if(funName === 'bmi'){
    var h = args.shift()
    var w = args.shift()
    if(isNotNumber (h) || isNotNumber (w)) throw Error('need two numeric arguments,height and weight')
    else console.log(calculateBmi(Number(h),Number(w)))
}
if(funName === 'calculateExercises'){
    var arg = args.shift()
    if(isNotNumber (arg)) throw Error('need be a number the expected hours');
    var expectedHours = Number(arg);

    var hours = args.map((value) => {
        if(isNotNumber(value)) return 0
        return Number(value)
    })

    console.log(calculateExercises(hours,expectedHours))
}