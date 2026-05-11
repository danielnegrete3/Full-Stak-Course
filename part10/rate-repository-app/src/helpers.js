export const NumberFormater = (num) => {
    const sufixes=['','K','M'];
    let i=0;
    while(num > 999){
        num = num/1000;
        i++;
    }
    if((num % 1) !== 0) return `${num.toFixed(1)}${sufixes[i]}` 
    return `${num}${sufixes[i]}`
}