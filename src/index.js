function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) { 
    let task = expr;    

    function isOperator(candidate){
        return candidate==='+'||candidate==='-'||candidate==='*'||candidate==='/';
    };

    function solvePart(part,operators){

        for(let i = 0; i<part.length; i++){
            if(part[i] === operators[0]||part[i] === operators[1]){
                const operator = part[i];
                function calculate(a,b){
                    a=a.replace('NEG','-');
                    b=b.replace('NEG','-');
                    if(operator === '*'){return a*b}
                    if(operator === '/'){
                        if(+b===0){
                            throw new Error('TypeError: Devision by zero.')
                        }
                        return a/b
                    }
                    if(operator === '+'){return +a + +b}
                    if(operator === '-'){return a-b}
                }

                let subPartStart = i - 1;
                while(!isOperator( part[subPartStart] )){
                    if(subPartStart===0){
                        subPartStart=-1;
                        break
                    };
                    subPartStart--;
                }

                let subPartEnd = i + 1;
                while(!isOperator( part[subPartEnd] )){
                    if(subPartEnd === part.length-1){
                        subPartEnd++;
                        break
                    }
                    subPartEnd++;
                }
                const subPart = part.slice(subPartStart+1,subPartEnd);                
                const subPartResult = subPart.split(operator).reduce(calculate);
                part = part.replace(subPart, String(subPartResult).replace('-','NEG'));
                i = subPartStart+1;
            }
        }
        return part;
    };
    
    const result = +solvePart( solvePart(task,['*','/']), ['+','-']).replace('NEG','-');

    return +result;
}

module.exports = {
    expressionCalculator
}