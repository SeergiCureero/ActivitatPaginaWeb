
let currentLang = 'es';

const translations = {
    es : {  buttonSwitchLanguage:'CAT',
            subTitle:'Agencia de Viajes',
            titDestino1:'Italia',
            titDestino2:"Mexico",
            titDestino3:"Alemania",
            titPorqueNuestraAgencia:"¿Porque viajar con nosotros?",
            pPorqueNuestraAgencia:"Lorem ipsum y su polla.",
            titAboutUs:"Sobre nosotros",
            pAboutUs:"Somos una agencia de viajes joven y tenemos a Diego Hijano (2+2) en nuestro equipo.",
            pFooter:"Contacto    © 2024 Reisen Club    Politica de privacidad"
    },
    ca : {  buttonSwitchLanguage:'ENG',
            subTitle:'Agencia de Viatges',
            titDestino1:'Itàlia',
            titDestino2:"Mèxic",
            titDestino3:"Alemanya",
            titPorqueNuestraAgencia:"Per que viatjar amb nosaltres?",
            pPorqueNuestraAgencia:"Lorem ipsum i la seva polla.",
            titAboutUs:"Sobre nosaltres",
            pAboutUs:"Som una agència de viatges jove i tenim al Diego Hijano (2+2) al nostre equip.",
            pFooter:"Contacte    © 2024 Reisen Club    Política de privacitat"
    },      
    en : {  buttonSwitchLanguage:'ESP',
            subTitle:'Travel Agency',
            titDestino1:'Italy',
            titDestino2:"Mexico",
            titDestino3:"Germany",
            titPorqueNuestraAgencia:"Why travel with us?",
            pPorqueNuestraAgencia:"Lorem ipsum and their dick.",
            titAboutUs:"About us",
            pAboutUs:"We are young team, with fresh ideas and we have Diego Hijano in our team.",
            pFooter:"Contact    © 2024 Reisen Club    Privacy Policy"
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

    //Header
    //Section Banner
    document.getElementById('buttonSwitchLanguage').innerText = translations[currentLang].buttonSwitchLanguage;
    document.getElementById('subTitle').innerText = translations[currentLang].subTitle;

    //Main
    //Section "Destinies"
    document.getElementById('titDestino1').innerText = translations[currentLang].titDestino1; 
    document.getElementById('titDestino2').innerText = translations[currentLang].titDestino2;
    document.getElementById('titDestino3').innerText = translations[currentLang].titDestino3;
    //Section "Why Our Agency?""
    document.getElementById('titPorqueNuestraAgencia').innerText = translations[currentLang].titPorqueNuestraAgencia; 
    document.getElementById('pPorqueNuestraAgencia').innerText = translations[currentLang].pPorqueNuestraAgencia;
    //Section "About Us"
    document.getElementById('titAboutUs').innerText = translations[currentLang].titAboutUs; 
    document.getElementById('pAboutUs').innerText = translations[currentLang].pAboutUs;

    //Footer
    //Section "Footer"
    document.getElementById('pFooter').innerText = translations[currentLang].pFooter;

} 

