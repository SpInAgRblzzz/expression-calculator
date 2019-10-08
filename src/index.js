function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    debugger
    let task = expr;    

    function isOperator(candidate){
        return candidate==='+'||candidate==='-'||candidate==='*'||candidate==='/';
    };

    function solvePart(part,operators){
        debugger
        for(let i = 0; i<part.length; i++){
            if(part[i] === operators[0]||part[i] === operators[1]){
                const operator = part[i];

                function calculate(a,b){
                    debugger
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
                debugger
                const subPartResult = subPart.split(operator).reduce(calculate).toFixed(20);
                part = part.replace(subPart, String(subPartResult).replace('-','NEG'));
                debugger
                i = subPartStart+1;
            }
        }
        return part;
    };
    
    //brackets
    for(let openBr = task.length - 1; openBr>=0; openBr--){
        if(task[openBr]==='('){
            for(let closeBr = openBr, len= task.length; closeBr<len; closeBr++){
                if(task[closeBr]===')'){
                    const brExpression = task.slice(openBr, closeBr+1)
                    const brInside = task.slice(openBr+1,closeBr);
                    debugger
                    const brInsideResult = solvePart( solvePart(brInside,['*','/']), ['+','-']);
                    task = task.replace(brExpression, brInsideResult);
                    debugger
                    break
                } else {
                    if(closeBr === len-1){
                        throw new Error('ExpressionError: Brackets must be paired');
                    }
                }
            }
        }
    }

    if(task.indexOf(')') !== -1){
        throw new Error('ExpressionError: Brackets must be paired');
    }

    const result = +solvePart( solvePart(task,['*','/']), ['+','-']).replace('NEG','-');

    return +result;
}

module.exports = {
    expressionCalculator
}