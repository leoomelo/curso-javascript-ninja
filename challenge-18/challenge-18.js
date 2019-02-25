(function(){

    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE.
    2. Adicione a diretiva 'use strict';
    3. Crie um arquivo index.html e adicione esse script à ele.
    */

    'use strict'    
    
    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    */

    var cpfs = ["049-214 3421-1", "210.458.522-05", "735 500 794 - 22", "101.123-131x32"]
    var cleanCPFArray = []

    function cleanCPF(cpf) {
        let clean = ''
        const regex = /\d/
        for (let c of cpf) {
            c.match(regex) ? clean += c : false
        }
        cleanCPFArray.push(clean)
        return clean
    }

    for(let cpf of cpfs) {
        console.log( 'Limpando CPFs:', cleanCPF(cpf) );
    }     
    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */

    function formatCPF(cpf) {
        return cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9)
    }

    for(let cpf of cleanCPFArray) {

        console.log( '\nFormatando CPFs corretamente:', formatCPF(cpf));
    }
    // ?
    
    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */
   var monthRegex = /ju(n|l)ho/g
   var message = "Os meses de janeiro, junho e julho começam com a letra j."
   console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":', message.match(monthRegex) );
    // ?
    
    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */
   var tagRegex = /<\w+>/g
   var messageTag = "<div><section><blockquote>Texto <img /></blockquote></section></div>"
   console.log( '\nMatch com a abertura de uma tag HTML:', messageTag.match(tagRegex) );
    // ?
    
    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */
    var tagRegexComplete = /<\w+><\/\w+>/g
    var messageTagComplete = "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):', messageTagComplete.match(tagRegexComplete) );
    // ?
    
    /*
    Vamos complicar um pouco agora :D
    
    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'
    
    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    
    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.
    
    O resultado deve ser esse:
    <h1>O texto dentro da tag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>
    
    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */
    const tagRegexChallenge = /(<\w*\d?>)(.*)(<\/\w+\d?>)/
    const openTagsPattern = /(<\w*\d?>)/gi
    const challengeMsg = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
    let indexTags = []
    let groupTags = []
    
    console.log(challengeMsg.match(openTagsPattern))
    
    for(let item of challengeMsg.match(openTagsPattern)) {
        indexTags.push(challengeMsg.indexOf(item))
    }

    for (let i = 0; i < indexTags.length; i++) {
        if (!(i + 1 === indexTags.length)) {
            groupTags.push(challengeMsg.substring(indexTags[i], indexTags[i + 1]))
        }
        else {
            groupTags.push(challengeMsg.substring(indexTags[i]))
        }
        
    }
    console.log( '\nFazer replace dos textos das tags:', );

    for (let item of groupTags) {
        let str = item.match(tagRegexChallenge)
        str[2] = 'O texto dentro da tag "' + str[1].slice(1, str[1].length-1) + '" é "' + str[2] + '"'
        console.log(str[1] + str[2] + str[3])
    }
    
    // ?
})()