function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {    
    let task = expr;

    function solvePart(operator, ind){
    }

    //1st priority
    for(let i = 0; i < task.length; i++){
        if(task[i] === '*'){
            solvePart('*',i);
            i = 0;
        }

        if(task[i] === '/'){
            solvePart('/',i);
            i = 0;
        }
    }

    //2nd priority
    for(let i = 0; i < task.length; i++){
        if(task[i] === '+'){
            solvePart('+',i);
            i = 0;
        }

        if(task[i] === '-'){
            solvePart('-',i);
            i = 0;
        }
    }

    return task;
}

module.exports = {
    expressionCalculator
}

/*for(let bracketOpen = expr.length -1; bracketOpen >= 0; bracketOpen--){
        if(task[bracketOpen] === '('){
            const bracketClose = task.indexOf(')', bracketOpen);
            const bracketInside = task.slice(bracketOpen + 1, bracketClose);
            task = task.replace(task.slice(bracketOpen,bracketClose + 1), String(expressionCalculator(bracketInside)));
        }
    }

    /////bracket error test
    
    function operationPositionCondition(ind){
        debugger
        return task[ind] === '*'|| task[ind] === '/'|| task[ind] === '+'|| task[ind] === '-'
    }
    
    function solveOperation(operator, ind){
        debugger
        function getResult(a,b){
            debugger
            if(operator === '*'){return a * b}
            if(operator === '/'){return a / b}
            if(operator === '+'){return +a + +b}
            if(operator === '-'){return a - b}
        }

        let operationStart = ind-1;
            while(!operationPositionCondition(operationStart)){
                operationStart--;
                if(operationStart === 0){
                    operationStart--;
                    break;
                };
            }

        let operationEnd = ind+1;
        while(!operationPositionCondition(operationEnd)){
            operationEnd++;
            if(operationEnd === task.length){
                operationEnd++
                break
            };
        }
            
        const operation = task.slice(operationStart+1,operationEnd-1);
        const operationResult = operation.split(operator).reduce(getResult);
        task = task.replace(operation, operationResult);
    }
    
    //1st priority
    
    for(let i = 0, len = task.length; i < len; i++){
        if(task[i] === '*'){
            solveOperation('*',i);
            i = 0;
        }
        if(task[i] === '/'){
            solveOperation('/',i);
            i = 0;
        }
    }


    //2nd priority
    for(let i = 0, len = task.length; i < len; i++){
        if(task[i] === '+'){
            solveOperation('+',i);
            i = 0;
        }
        if(task[i] === '-'){
            solveOperation('-',i);
            i = 0;
        }
    }

    return +task*/