const turnOn= document.getElementById( 'turnOn' );
const turnOff= document.getElementById( 'turnOff' );
const lamp= document.getElementById( 'lamp');
const restore= document.getElementById( 'trocar' )

//function trocar(){ 
//    lamp.src='./img/desligada.jpg'
   
//}

function lampquebrada(){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
    if( !lampquebrada () ) {
    lamp.src= './img/ligada.jpg';
    }
}

function lampOff(){
    if (!lampquebrada()){
    lamp.src= './img/desligada.jpg';
    }
}

function lampQuebrada(){
    lamp.src= './img/quebrada.jpg';
    
}

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn)
lamp.addEventListener ('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampQuebrada)

