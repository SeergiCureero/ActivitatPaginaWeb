
let currentLang = 'es';

const translations = {
    es : {  buttonSwitchLanguage:'CAT',
        navBar:'navBar',
        banner:'Bienvenidos',
        destino1:'Italia',
        destino2:"Mexico",
        destino3:"Alemania"
    },
    ca : {  buttonSwitchLanguage:'ENG',
            navBar:'navBar',
            banner:'Benvinguts',
            destino1:'Itàlia',
            destino2:"Mèxic",
            destino3:"Alemanya"
    },      
    en : {  buttonSwitchLanguage:'ESP',
            navBar:'navBar',
            banner:'Welcome',
            destino1:'Italy',
            titDestino2:"Mexico",
            titDestino3:"Germany"
    }
};


function switchLanguage() { 
    if (currentLang == 'es') {
        currentLang = 'ca';  //change language from spanish to catalan
    }
    else if(currentLang == 'ca'){
        currentLang = 'en';  //change language from catalan to english
    }
    else if (currentLang == 'en') {
        currentLang = 'es';  //change language from english to spanish 
    }
    
    
    //change text from elements
    document.getElementById('navBar').innerText = translations[currentLang].navBar; 
    document.getElementById('banner').innerText = translations[currentLang].banner; 
    document.getElementById('destino1').innerText = translations[currentLang].destino1; 
    document.getElementById('destino2').innerText = translations[currentLang].destino2;
    document.getElementById('destino3').innerText = translations[currentLang].destino3;
    document.getElementById('buttonSwitchLanguage').innerText = translations[currentLang].buttonSwitchLanguage;
} 

