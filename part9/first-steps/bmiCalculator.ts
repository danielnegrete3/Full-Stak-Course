

export const calculateBmi = (height:number,weight:number):string => {
    if(weight === 0) return "Error, the weight can't be 0";
    if(height === 0) return "Error, the height can't be 0";

    const result = (weight/(height*height))*10000;

    if(result < 16.0) return "Underweight (Severe thinness)";
    if(result < 17.0) return "Underweight (Moderate thinness)";
    if(result < 18.5) return "Underweight (Mild thinness)";
    if(result < 25.0) return "Normal range";
    if(result < 30.0) return "Overweight (Pre-obese)";
    if(result < 35.0) return "Obese (Class I)";
    if(result < 40.0) return "Obese (Class II)";

    return "Obese (Class III)";
}

// console.log(calculateBmi(180, 74))