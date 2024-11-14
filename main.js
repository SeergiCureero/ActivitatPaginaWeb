
let currentLang = 'es';

const translations = {
    es : {  buttonSwitchLanguage:'CAT',
            subTitle:'Agencia de Viajes',
            titDestino1:'Italia',
            titDestino2:"Mexico",
            titDestino3:"Alemania"
    },
    ca : {  buttonSwitchLanguage:'ENG',
            subTitle:'Agencia de Viatges',
            titDestino1:'Itàlia',
            titDestino2:"Mèxic",
            titDestino3:"Alemanya"
    },      
    en : {  buttonSwitchLanguage:'ESP',
            subTitle:'Travel Agency',
            titDestino1:'Italy',
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
    document.getElementById('buttonSwitchLanguage').innerText = translations[currentLang].buttonSwitchLanguage;
    document.getElementById('subTitle').innerText = translations[currentLang].subTitle; 
    document.getElementById('titDestino1').innerText = translations[currentLang].titDestino1; 
    document.getElementById('titDestino2').innerText = translations[currentLang].titDestino2;
    document.getElementById('titDestino3').innerText = translations[currentLang].titDestino3;
} 

