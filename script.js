var OriginalText = document.getElementById('original-text'); /* area de texto original */
var ModifiedText = document.getElementById('texto-modificado'); /* area de texto modificado */

function SentenceCase(){
    
    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    /* verificando se há algun texto para converter */
    if(OriginalText.value.length > 0){
        let spaceIndex = [];
        let strContents = OriginalText.value.toLowerCase().split('.'); /* recebe uma lista de strings separadas por '.' */
        let sentenceText = '';
        

        /* armazena as posições dos espaços em branco na string */
        for(var i=0; i<OriginalText.value.length; i++){
            if(OriginalText.value[i] == ' '){
                spaceIndex.push(i);
            }
        }

        /* faz um looping na lista de strings */
        let firstLetter = [];   
        for(var i=0; i<strContents.length; i++){
            
            if(strContents[i].match(/[a-zA-Z\u00C0-\u00FF ]+/i)){ /* verifica se cada string da lista contém letras */
                for(var c=0; c<strContents[i].length; c++){ /* faz um looping em cada string da lista que contém letras */
                    if(strContents[i][c].match(/[a-zA-Z\u00C0-\u00FF ]+/i)){ /* identifica a primeira letra de cada string */
                        firstLetter.push(c); /* armazena a posição da primeira letra de cada string da lista */
                    }
                }
                
                /* substitui cada string da lista por uma string com sua primeira letra em maiúsculo */
                strContents[i] = strContents[i].replace(strContents[i][firstLetter[0]], strContents[i][firstLetter[0]].toUpperCase());
                
            }

            firstLetter = []; /* esvazia a lista */
        }

        let dotAmount = 0;

        for(var c=0; c<OriginalText.value.length; c++){ /* dotAmount armazena a quantidade de '.' que há na string */
            if(OriginalText.value[c] == '.'){
                dotAmount+=1;
            }
        }

        for(var i=0; i<dotAmount; i++){ /* volta a adicionar '.' no final das strings que tinham '.' */
            strContents[i] = strContents[i].replace(strContents[i], strContents[i]+'.');
        }

        for(var i=0; i<strContents.length; i++){ /* concatena tadas as strings em uma string só */
            sentenceText+=strContents[i];
        }

        ModifiedText.innerText = sentenceText; /* mostra o resultado no campo de texto */
        ModifiedText.style.wordSpacing = '3px';
    }

    else{ 
        ModifiedText.innerText = '';
    }
}

function LowerCase(){
    let lowercaseText = OriginalText.value.toLowerCase(); /* converte o texto para texto minúsculo */

    /* redefinindo o estilo de texto */
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = lowercaseText; /* mostra o resultado */
}

function UpperCase(){
    let uppercaseText = OriginalText.value.toUpperCase(); /* converte o texto para texto maiúsculo */

    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = uppercaseText; /* mostra o resultado */
}

function AlternatingCase(){
    let content = OriginalText.value.split('');
    let alternatingText = '';

    /* converte cada letra para a sequencia : aAaAaA */
    for(var i=1; i<content.length; i+=2){ /* de dois em dois começando da segunda letra, converte cada letra para letra maiúscula */
        content[i] = content[i].toUpperCase();
    }

    for(var j=0; j<content.length; j+=2){ /* de dois em dois começando da primeira letra, converte cada letra para letra minúscula */
        content[j] = content[j].toLowerCase();
    }

    /* concatena os caracteres a uma string só */
    for(var x=0; x<content.length; x++){
        alternatingText+=content[x];
    }

    /* redefinindo o estilo de texto */
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = alternatingText; /* mostra o resultado */
}

function CapitalizedCase(){

    if(OriginalText.value.length){
        let content = OriginalText.value.trim().split(/\s/g);
        let CapitalizedText = '';

        /* converte cada palavra para maiúsculo */
        for(var i=0; i<content.length; i++){
            content[i] = content[i].replace(content[i][0], content[i][0].toUpperCase());
        }

        /* concatena cada palavra em uma string só */
        for(var x=0; x<content.length; x++){
            CapitalizedText+=content[x]+' ';
        }

        ModifiedText.innerText = CapitalizedText; /* mostra o resultado */
    }

    else{
        ModifiedText.innerText = '';
    }

    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';
}

function TitleCase(){ /* converte a primeira letra de cada palavra para maiúscula exceto as palavras abaixo */

    if(OriginalText.value.length){
        let exceçoesPT = ['o','os','a','as','um','uns','uma','umas','ao',
                        'à','às','da','das','do','dos','na','nas','no','nos',
                        'num','nuns','numa','numas','dum','duns','duma','dumas','ante','após',
                        'até','com','contra','de','desde','em','entre','para','perante','por','sem','sob','sobre',
                        'e','nem','mas','porém','todavia','contudo','entretanto',
                        'ou','assim','logo','portanto','então','pois', 'que','porque','porquanto'];
        
        let contents = OriginalText.value.split(' '); /* sepera cada palavra por um espaço */
        let TitleText = '';

        /* converte todas as primeiras letras de cada palavra de exceçoesPT para maiúsculas */
        for(var i=0; i<exceçoesPT.length; i++){
            exceçoesPT[i] = exceçoesPT[i].replace(exceçoesPT[i][0], exceçoesPT[i][0].toUpperCase());
        }

        /* converte todas as primeiras letras de cada palavra de contents para maiúsculas */
        for(var i=0; i<contents.length; i++){
            contents[i] = contents[i].replace(contents[i][0], contents[i][0].toUpperCase());
        }

        /* verifica a igualdade de palavras de contents e exceçoesPT */
        for(var i=1; i<contents.length; i++){
            for(var j=0; j<exceçoesPT.length; j++){
                if(contents[i] == exceçoesPT[j]){ /* se as palavras forem iguais, contents converte toda a palavra para minúscula */
                    contents[i] = contents[i].replace(contents[i], contents[i].toLowerCase());
                }
            }
            
        }

        /* concatena as palavras em uma string só */
        for(var c=0; c<contents.length; c++){
            TitleText+=contents[c]+' ';
        }

        ModifiedText.innerText = TitleText; /* mostra o resultado */
    }
    else{
        ModifiedText.innerText = '';
    }
}

function InverseCase(){

    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';


    if(OriginalText.value.length){
        let contents = OriginalText.value.split('');
        let contentsModified = [];
        let inverseText = '';

        /* cria uma cópia de contents */
        for(var c=0; c<contents.length; c++){
            contentsModified.push(contents[c]);
        }

        /* identifica as letras maiúsculas e minúsculas */
        for(var i=0; i<contents.length; i++){

            /* caso seja uma letra maiúscula, contentsModified substitui a letra pelo valor 'true' */
            if(contents[i].match(/[a-zA-Z\u00C0-\u00FF ]+/i) && contents[i] == contents[i].toUpperCase()){        
                contentsModified[i] = true;  
            }
            
             /* caso seja uma letra minúscula, contentsModified substitui a letra pelo valor 'false' */
            if(contents[i].match(/[a-zA-Z\u00C0-\u00FF ]+/i) && contents[i] == contents[i].toLowerCase()){
                contentsModified[i] = false;  
            }
        }

        /* converte minúsculas para maiúsculas e vice-versa*/
        for(var c=0; c<contents.length; c++){
            if(contentsModified[c] == true){ /* caso o valor seja 'true', contents converte a letra para minúscula */
                contents[c] = contents[c].replace(contents[c], contents[c].toLowerCase());
            }

            if(contentsModified[c] == false){ /* caso o valor seja 'false', contents converte a letra para maiúscula */
                contents[c] = contents[c].replace(contents[c], contents[c].toUpperCase());
            }
        }

        for(var char of contents){ /* concantena os caracteres em uma string só */
            inverseText+=char;
        }

        ModifiedText.innerText = inverseText; /* mostra o resultado */
    }

    else{
        ModifiedText.innerText = '';
    }
}


function BoldCase(){
    /* redefinindo o estilo do texto */
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.fontStyle = 'normal';

    /* transformando o texto em bold */
    ModifiedText.style.fontWeight = 'bold';

    ModifiedText.innerText = OriginalText.value; /* mostra o resultado */
}


function ItalicCase(){

    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    /* transformando o texto em italico */
    ModifiedText.style.fontStyle = 'italic';

    ModifiedText.innerText = OriginalText.value; /* mostra o resultado */
}

function UnderlineCase(){
    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal';    
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.fontStyle = 'normal';
    
    /* adicionando underline ao texto */
    ModifiedText.style.textDecoration = 'underline';

    ModifiedText.innerText = OriginalText.value; /* mostra o resultado */
}


function MirrorCase(){
    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';

    /* espelhando as letras */
    ModifiedText.style.transform = 'scale(-1,1)';
    ModifiedText.style.textAlign = 'right';

    ModifiedText.innerText = OriginalText.value; /* mostra o resultado */
}


function WideText(){
    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    /* definindo o espaço entre os caracteres */
    ModifiedText.style.letterSpacing = '5px';

    ModifiedText.innerText = OriginalText.value; /* mostra o resultado */
}


function StrikethroughCase(){

     /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    /* risca o texto */
    ModifiedText.style.textDecoration = ' line-through';

    ModifiedText.innerText = OriginalText.value; /* mostra o resultado */
} 


function ReverseCase(){
     /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    ModifiedText.innerText = OriginalText.value.split('').reverse().join(''); /* inverte o texto */
}


function UpsideDownCase(){
    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';

    /* inverte o texto da direita pra esquerda e de coloca o texto de cabeça pra baixo */
    ModifiedText.style.transform = 'rotate(180deg)';
    ModifiedText.style.textAlign = 'right';

    ModifiedText.innerText = OriginalText.value; /* mostra o resultado */
}


function MorseCode(){
    /* redefinindo o estilo do texto */
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';


    if(OriginalText.value.length){
        let morse = ['/','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.',
                    '---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..',
                    '.----','..---','...--','....-','.....','-....','--...','---..','----.','-----'];
        
        let alpha = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    '1','2','3','4','5','6','7','8','9','0'];
        
        /* remove os espaços do inicio e fim do texto, converte o texto para minúsculo e remove a acentuação das letras */            
        let Text = OriginalText.value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        let MorseCode = '';
        let contents = [];
        
        /* converte os caracteres em codigo morse e armazena em contents */
        for(var i=0; i<Text.length; i++){
            for(var c=0; c<alpha.length; c++){
                if(Text[i] == alpha[c] ){ /* se o caractere for uma letra, espaço ou numero, substitui pela sua representação em codigo morse */
                    contents.push(Text[i].replace(Text[i], morse[c]+' ')); /* armazena os codigos morse */
                }

            }
        }

        /* concatena os codigos morse em uma string só */
        for(var x=0; x<contents.length; x++){
            MorseCode+=contents[x];
        }

        ModifiedText.innerText = MorseCode; /* mosta o resultado */
    }

    else{
        ModifiedText.innerText = '';
    }
   
}


function ClearArea(){ /* limpa a area do texto original */
    OriginalText.value = '';
}

function copyToClipboard() { /* copia o texto da area de texto modificado */
    navigator.clipboard.writeText(ModifiedText.innerText)
    .then(() => { alert('Copy successful'); }).catch((error) => { alert('Copy failed!'); });

}
