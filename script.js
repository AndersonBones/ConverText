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
        let text = '';
        let cont = 0;
        let dotList = [];

        for(var i=0; i<OriginalText.value.length; i++){
            if(OriginalText.value[i] == '.'){
                dotList.push('.');
            }
        }

        for(var y=0; y<Stringlist.length; y++){
            if(Stringlist[y].length == 0){
                cont+=1;
            }
        }

        for(var u=0; u<Stringlist.length; u++){
            if(Stringlist[u].length == 0){
                Stringlist.splice(u,cont);
            }
        }
        
        for(var x=0; x<Stringlist.length; x++){
            Stringlist[x] = Stringlist[x].trim();
        }

        for(var j=0; j<Stringlist.length; j++){
            Stringlist[j] = Stringlist[j].replace(Stringlist[j][0], Stringlist[j][0].toUpperCase());
        }

        for(var i=1; i<Stringlist.length; i++){
            Stringlist[i] = ' '+Stringlist[i];
            
        }
        
        for(var k=0; k<Stringlist.length; k++){
         
            text+=Stringlist[k];
        }

        
        console.log(Stringlist);
        ModifiedText.innerHTML = text;
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
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.style.transform = 'scale(-1,1)';
    ModifiedText.style.textAlign = 'right';
    ModifiedText.innerText = OriginalText.value;
}


function WideText(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.textDecoration = 'none';
    ModifiedText.style.letterSpacing = 'normal';

    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    ModifiedText.style.letterSpacing = '5px';
    ModifiedText.innerText = OriginalText.value;
}


function StrikethroughCase(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'none';
    ModifiedText.style.letterSpacing = 'normal';
    ModifiedText.style.transform = 'none';
    ModifiedText.style.textAlign = 'left';

    ModifiedText.style.textDecoration = ' line-through';

    ModifiedText.innerText = OriginalText.value;
} 


function ReverseCase(){
    ModifiedText.style.fontWeight = 'normal'; 
    ModifiedText.style.fontStyle = 'none';
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


function ClearArea(){
    OriginalText.value = '';
}

function CopyClipBoard(){
    ModifiedText.select();
    navigator.clipboard.writeText(ModifiedText.value);
}