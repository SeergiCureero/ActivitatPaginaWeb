
let currentLang = 'es';

const translations = {
    ca : {  title:'Benvinguts a la pàgina web oficial del Montpedrosí',
            titArt1:'Què és el Montpedrosí?',
            titArt2:'Història',
            AA:"S'escriu tot en majúscules i també té algunes grafíes d'altres alfabets com la 'Ñ' castellana.",
            buttonSwitchLanguage:'CAST'
    },
    es : {  title:'Bienvenidos a la pagina web oficial del Montpedrosí',
            titArt1:'Qué es el Montpedrosí?',
            titArt2:'Historia',
            AA:"Se escribe todo en mayúsculas y también tiene algunas grafías de otros alfabetos como la 'Ñ' castellana.",
            buttonSwitchLanguage:'CAT'
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
    
    
    //change texts
    document.getElementById('title').innerText = translations[currentLang].title; 
    document.getElementById('titArt1').innerText = translations[currentLang].titArt1; 
    document.getElementById('titArt2').innerText = translations[currentLang].titArt2; 
    document.getElementById('AA').innerText = translations[currentLang].AA;
    document.getElementById('buttonSwitchLanguage').innerText = translations[currentLang].buttonSwitchLanguage;
} 

