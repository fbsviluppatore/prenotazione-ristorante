function confrontopersone(){
    var persone=document.getElementById("npersone").value;
    document.getElementById("auto-h").classList.add("autoh");
   
    if(persone<=0){
    const titolo=document.getElementById('text1');
    titolo.textContent=`Non possiamo proseguire se non inserisci almeno 1 persona`; 
    }else if(persone <4 & persone>0){
        document.getElementById("titolo-seleziona").classList.add("tav-visibili");
        document.getElementById("tav1").classList.add("tav-visibili");
        document.getElementById("but").classList.add("tav-visibili");
        document.getElementById("but2").classList.add("tav-visibili");
        document.getElementById("1").classList.add("libero");
        document.getElementById("2").classList.add("libero");
        document.getElementById("4").classList.add("libero");
        document.getElementById("6").classList.add("libero");
        document.getElementById("7").classList.add("libero");      
          
    }else{    
        document.getElementById("titolo-seleziona").classList.add("tav-visibili");
        document.getElementById("tav1").classList.add("tav-visibili");
        document.getElementById("but").classList.add("tav-visibili");
        document.getElementById("but2").classList.add("tav-visibili");
        document.getElementById("3").classList.add("libero");
        document.getElementById("5").classList.add("libero");
        document.getElementById("8").classList.add("libero");
    }
    };


function prenotazione(num){
    const selezionato=num;
    const titolo=document.getElementById('text1');
    titolo.textContent=`Hai selezionato il tavolo N° ${selezionato}`;
    switch(selezionato){
        case '1':
            document.getElementById("1").classList.add("prenotato");
            break;
        case '2':
            document.getElementById("2").classList.add("prenotato");
            break;
        case '3':
            document.getElementById("3").classList.add("prenotato");
            break;
        case '4':
            document.getElementById("4").classList.add("prenotato");
            break;
        case '5':
            document.getElementById("5").classList.add("prenotato");
            break;
        case '6':
            document.getElementById("6").classList.add("prenotato");
            break;
        case '7':
            document.getElementById("7").classList.add("prenotato");
            break;
        case '8':
            document.getElementById("8").classList.add("prenotato");
            break;
    }
            document.getElementById("tav1").classList.add("scelta");
            document.getElementById("but").classList.add("scelta2");
            document.getElementById("but2").classList.add("scelta2");
          
 };

function prenotazioneavvenuta(){
    const titolo=document.getElementById('text2');
    titolo.textContent=`Prenotazione completata !!`; 
}



 var lastScrollTop = 0;
 window.addEventListener("scroll", function () {
         let st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > 360) {
              document.getElementById("nav-b").classList.add("is-scrolled");
              document.getElementById("image").classList.add("scrolled");
            
         } else {
             document.getElementById("nav-b").classList.remove("is-scrolled");
             document.getElementById("image").classList.remove("scrolled");
         }
       
     },
     false
 );