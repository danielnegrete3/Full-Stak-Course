
const resultsExercises = [
    'bad but you can do it',
    'not too bad but could be better',
    'well, you met the objective',
] as const


type ResultsExercisesType = typeof resultsExercises[number]

interface StatusExercise {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: ResultsExercisesType,
    target: number,
    average: number
}

export const calculateExercises = (hours:Array<number>,expectedHours:number):StatusExercise => {
    const time = hours.reduce((prev,curr)=>prev+curr,0);
    const average = time/hours.length;
    var rating = (average)/expectedHours;
    if(rating < .8)rating = 0;
    if(rating < 1.5)rating = 1;
    else rating = 2;

    const result = {
        periodLength:hours.length,
        trainingDays:hours.reduce((prev,curr)=>curr>0?prev+1:prev,0),
        success:average >= expectedHours,
        rating:rating + 1,
        ratingDescription: resultsExercises[rating],
        target: expectedHours,
        average,
    }

    return result;
}

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1],2))