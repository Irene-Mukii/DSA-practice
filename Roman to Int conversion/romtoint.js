const romConverter = (romnum)=>{
 if (romnum == null) return console.log('false');

 let num = charToInt(romnum.charAt(0));
 let pre, curr;

 for(let i =1; i< romnum.length;i++){
    curr= charToInt(romnum.charAt(i));
    pre = charToInt(romnum.charAt(i-1));

    if(curr<= pre) num += curr;
    else num = num - pre*2 + curr;
 }
 return num;
}

const charToInt = (char) => {
    switch(char){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}

console.log(romConverter(''));
