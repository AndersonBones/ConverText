var OriginalText = document.getElementById('original-text');
var ModifiedText = document.getElementById('texto-modificado');


function SentenceCase(){
    
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    if(OriginalText.value.length > 0){
        let Stringlist = OriginalText.value.trim().split('.');
        let SentenceText = '';
        let cont = 0;
        let dotList = [];

        for(var i=0; i<OriginalText.value.length; i++){
            if(OriginalText.value[i] == '.'){
                dotList.push('.');
            }
        }

        for(var i=0; i<Stringlist.length; i++){
            if(Stringlist[i].length == 0){
                cont+=1;
            }
        }
        
        for(var i=0; i<Stringlist.length; i++){
            if(Stringlist[i].length == 0){
                Stringlist.splice(i,cont);
            }
        }

        for(var i=0; i<Stringlist.length; i++){
            Stringlist[i] = Stringlist[i].trim();
        }

        for(var i=0; i<Stringlist.length; i++){
            Stringlist[i] = Stringlist[i].replace(Stringlist[i][0], Stringlist[i][0].toUpperCase());
        }

        for(var i=1; i<Stringlist.length; i++){
            Stringlist[i] = ' '+Stringlist[i];
            
        }
        
        for(var y=0; y<dotList.length; y++){
            Stringlist[y] = Stringlist[y].replace(Stringlist[y], Stringlist[y]+'.');
        } 

        for(var i=0; i<Stringlist.length; i++){
            SentenceText+=Stringlist[i];
        }

        
        ModifiedText.innerHTML = SentenceText;
    }

    else{
        ModifiedText.innerText = '';
    }
}

function LowerCase(){
    let lowercaseText = OriginalText.value.toLowerCase();

    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = lowercaseText;
}

function UpperCase(){
    let uppercaseText = OriginalText.value.toUpperCase();

    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = uppercaseText;
}

function AlternatingCase(){
    let content = OriginalText.value.split('');
    let alternatingText = '';

    for(var i=1; i<content.length; i+=2){
        content[i] = content[i].toUpperCase();
    }

    for(var j=0; j<content.length; j+=2){
        content[j] = content[j].toLowerCase();
    }

    for(var x=0; x<content.length; x++){
        alternatingText+=content[x];
    }

    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = alternatingText;
}

function CapitalizedCase(){

    let content = OriginalText.value.trim().split(/\s/g);
    let CapitalizedText = '';

    for(var i=0; i<content.length; i++){
        content[i] = content[i].replace(content[i][0], content[i][0].toUpperCase());
    }

    console.log(content);
    for(var x=0; x<content.length; x++){
        CapitalizedText+=content[x]+' ';
    }

    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = CapitalizedText;
}

function TitleCase(){
    let exceçoesPT = ['o','os','a','as','um','uns','uma','umas','ao',
                     'à','às','da','das','do','dos','na','nas','no','nos',
                     'num','nuns','numa','numas','dum','duns','duma','dumas','ante','após',
                     'até','com','contra','de','desde','em','entre','para','perante','por','sem','sob','sobre',
                     'e','nem','bem como','não só','mas também','não apenas','como ainda',
                     'mas','porém','todavia','contudo','não obstante','no entanto','entretanto',
                     'ou','ou...ou','quer...quer','ora...ora','já...já','seja... seja',
                     'assim','logo','portanto','então','por isso','desse modo','por conseguinte',
                     'dessa forma','pois', 'que','porque','porquanto'];
    
    let contents = OriginalText.value.split(' ');
    let TitleText = '';

    for(var i=0; i<exceçoesPT.length; i++){
        exceçoesPT[i] = exceçoesPT[i].replace(exceçoesPT[i][0], exceçoesPT[i][0].toUpperCase());
    }

    for(var i=0; i<contents.length; i++){
        contents[i] = contents[i].replace(contents[i][0], contents[i][0].toUpperCase());
    }

    for(var i=1; i<contents.length; i++){
        for(var j=0; j<exceçoesPT.length; j++){
            if(contents[i] == exceçoesPT[j]){
                contents[i] = contents[i].replace(contents[i], contents[i].toLowerCase());
            }
        }
        
    }

    for(var c=0; c<contents.length; c++){
        TitleText+=contents[c]+' ';
    }

    ModifiedText.innerText = TitleText;
}

function InverseCase(){
    let content = OriginalText.value.split('');
    let listLetter = [];
    let inverseCase = '';

    for(var i=0; i<content.length; i++){

        if(content[i] != ' ' && content[i] == content[i].toUpperCase()){       
            listLetter.push(true);      
        }
        
        if(content[i] != ' ' && content[i] == content[i].toLowerCase()){
            listLetter.push(false);
        }

        if(content[i] == ' '){
            listLetter.push('space');
        }
    }

    for(var x=0; x<listLetter.length; x++){
        if(listLetter[x] == true){
            inverseCase+=content[x].toLowerCase();
        }

        else{
            inverseCase+=content[x].toUpperCase();
        }
    }

    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.innerText = inverseCase;
}


function BoldCase(){
    
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.style.fontWeight = 'bold';
    ModifiedText.innerText = OriginalText.value;
    
}


function ItalicCase(){
    ModifiedText.style.fontWeight = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.style.fontStyle = 'italic';
    ModifiedText.innerText = OriginalText.value;
}

function UnderlineCase(){
    ModifiedText.style.fontWeight = 'normal';    
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.textDecoration = 'underline';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';
    

    ModifiedText.innerText = OriginalText.value;
}


function MirrorCase(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.style.transform = 'scale(-1,1)';
    ModifiedText.style.textAlign = 'right';
    ModifiedText.innerText = OriginalText.value;
}


function WideText(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';

    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    ModifiedText.style.letterSpacing = '5px';
    ModifiedText.innerText = OriginalText.value;
}


function StrikethroughCase(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    ModifiedText.style.textDecoration = ' line-through';

    ModifiedText.innerText = OriginalText.value;
} 


function ReverseCase(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    ModifiedText.innerText = OriginalText.value.split('').reverse().join('');
}


function UpsideDownCase(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'rotate(180deg)';
    ModifiedText.style.textAlign = 'right';

    ModifiedText.innerText = OriginalText.value;
}


function MorseCode(){
    let morse = ['/','.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.',
                 '---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..',
                 '.----','..---','...--','....-','.....','-....','--...','---..','----.','-----'];
    
    let alpha = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                 '1','2','3','4','5','6','7','8','9','0'];

    let Text = OriginalText.value.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    let MorseCode = '';
    let contents = [];

    
    for(var i=0; i<Text.length; i++){
        for(var c=0; c<alpha.length; c++){
            if(Text[i] == alpha[c] ){
                contents.push(Text[i].replace(Text[i], morse[c]+' '));
            }

        }
    }

    for(var x=0; x<contents.length; x++){
        MorseCode+=contents[x];
    }

    
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'normal';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    ModifiedText.style.fontSize = '20px';
    ModifiedText.innerText = MorseCode;
}

function BinaryCode(){

}

function ClearArea(){
    OriginalText.value = '';
}

function CopyClipBoard(){
    ModifiedText.select();
    navigator.clipboard.writeText(ModifiedText.value);
}

