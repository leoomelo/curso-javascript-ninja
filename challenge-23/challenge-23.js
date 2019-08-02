(function(doc, win){
    
    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:
    
    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;
    
    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    var $input = doc.getElementById("inputData")
    var $number0 = doc.getElementById("number0")
    var $number1 = doc.getElementById("number1")
    var $number2 = doc.getElementById("number2")
    var $number3 = doc.getElementById("number3")
    var $number4 = doc.getElementById("number4")
    var $number5 = doc.getElementById("number5")
    var $number6 = doc.getElementById("number6")
    var $number7 = doc.getElementById("number7")
    var $number8 = doc.getElementById("number8")
    var $number9 = doc.getElementById("number9")
    var $sumOper = doc.getElementById("sumOper")
    var $minOper = doc.getElementById("minOper")
    var $mulOper = doc.getElementById("mulOper")
    var $divOper = doc.getElementById("divOper")
    var $equOper = doc.getElementById("equOper")
    var $cleOper = doc.getElementById("cleOper")

    isAnyOperatorClicked = false
    isResultNumber = false
    $input.value = 0

    // --- NUMBERS ---
    $number0.addEventListener('click', function() {
        inputDigit(0)
    })

    $number1.addEventListener('click', function() {
        inputDigit(1)
    })

    $number2.addEventListener('click', function() {
        inputDigit(2)
    })

    $number3.addEventListener('click', function() {
        inputDigit(3)
    })

    $number4.addEventListener('click', function() {
        inputDigit(4)
    })

    $number5.addEventListener('click', function() {
        inputDigit(5)
    })

    $number6.addEventListener('click', function() {
        inputDigit(6)
    })

    $number7.addEventListener('click', function() {
        inputDigit(7)
    })

    $number8.addEventListener('click', function() {
        inputDigit(8)
    })

    $number9.addEventListener('click', function() {
        inputDigit(9)
    })

    // --- OPERATIONS ---s
    $sumOper.addEventListener('click', function() {
        isAnyOperatorClicked ? inputOperator('-') : $input.value += '+'
        isAnyOperatorClicked = true
    })

    $minOper.addEventListener('click', function() {
        isAnyOperatorClicked ? inputOperator('-') : $input.value += '-'
        isAnyOperatorClicked = true
    })

    $mulOper.addEventListener('click', function() {
        isAnyOperatorClicked ? inputOperator('*') : $input.value += '*'
        isAnyOperatorClicked = true
    })

    $divOper.addEventListener('click', function() {
        isAnyOperatorClicked ? inputOperator('/') : $input.value += '/'
        isAnyOperatorClicked = true
    })

    $equOper.addEventListener('click', function() {
        // var completeExpressionRegex = /(\d{1,})([+\-*/])(\d{1,})/g
        var completeExpressionRegex = /(\d{1,})/g
        var numbers = $input.value.match(completeExpressionRegex)

        console.log(numbers)
        
        var result = numbers.reduce( function(accumulate, currentValue){
            return parseInt(accumulate) + parseInt(currentValue)
        }, 0)

        $input.value = result
        isAnyOperatorClicked = true
        isResultNumber = true
    })

    $cleOper.addEventListener('click', function() {
        $input.value = 0
        isAnyOperatorClicked = false
    })

    function inputDigit(number) {
        if (parseInt($input.value) === 0 || isResultNumber) {
            $input.value = number
        }
        else {
            $input.value += number
        } 
        // parseInt($input.value) === 0 && !isAnyOperatorClicked ? $input.value = number : $input.value += number
        isAnyOperatorClicked = false
        isResultNumber = false
    }

    function inputOperator(operator) {
        $input.value = $input.value.replace(/[+\-*\/]$/g, operator)
    }
    
})(document, window)
