
let currentLang = 'es';

const translations = {
    es : {  pageLanguage:'es',
            buttonSwitchLanguage:'CAT',
            srcFlagSwitchLanguage:'resources/flagOfCatalonia.png',
            subTitle:'Agencia de Viajes',
            titDestino1:'Alemania',
            titDestino2:"Italia",
            titDestino3:"Mexico",
            titPorqueNuestraAgencia:"Porque elegir nuestra agencia",
            pPorqueNuestraAgencia:"Lorem ipsum y su polla.",
            titAboutUs:"Sobre nosotros",
            pAboutUs:"Somos una agencia de viajes joven y tenemos a Diego Hijano (2+2) en nuestro equipo.",
            pFooter:"© 2024 Raisen Club. Todos los derechos reservados."
    },
    ca : {  pageLanguage:'ca',
            buttonSwitchLanguage:'ENG',
            srcFlagSwitchLanguage:'resources/flagOfEngland.png',
            subTitle:'Agència de Viatges',
            titDestino1:'Alemanya',
            titDestino2:"Itàlia",
            titDestino3:"Mèxic",
            titPorqueNuestraAgencia:"Perque escollir la nostra agència",
            pPorqueNuestraAgencia:"Lorem ipsum i la seva polla.",
            titAboutUs:"Sobre nosaltres",
            pAboutUs:"Som una agència de viatges jove i tenim al Diego Hijano (2+2) al nostre equip.",
            pFooter:"© 2024 Raisen Club. Tots els drets reservats."
    },      
    en : {  pageLanguage:'en',
            buttonSwitchLanguage:'DEU',
            srcFlagSwitchLanguage:'resources/flagOfGermany.png',
            subTitle:'Travel Agency',
            titDestino1:'Germany',
            titDestino2:"Italy",
            titDestino3:"Mexico",
            titPorqueNuestraAgencia:"Why travel with us?",
            pPorqueNuestraAgencia:"Lorem ipsum and their dick.",
            titAboutUs:"About us",
            pAboutUs:"We are young team, with fresh ideas and we have Diego Hijano in our team.",
            pFooter:"© 2024 Raisen Club. All rights preserved."
    },
    de : {  pageLanguage:'de',
            buttonSwitchLanguage:'ESP',
            srcFlagSwitchLanguage:'resources/flagOfSpain.png',
            subTitle:'Reisebüro',
            titDestino1:'Deutschland',
            titDestino2:"Italien",
            titDestino3:"Mexico",
            titPorqueNuestraAgencia:"Warum mit uns reisen?",
            pPorqueNuestraAgencia:"Lorem ipsum und ihr Schwanz.",
            titAboutUs:"Über uns",
            pAboutUs:"Wir sind ein junges Team mit frischen Ideen und wir haben Diego Hijano in unserem Team.",
            pFooter:"© 2024 Raisen Club. Alle Rechte vorbehalten."
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
        currentLang = 'de';  //change language from english to german 
    }
    else if (currentLang == 'de') {
        currentLang = 'es';  //change language from german to spanish 
    }
    
    
    //change text from elements

    document.getElementsById('mainPageLanguage').lang = translations[currentLang].pageLanguage;

    //Header
    //Section Banner
    document.getElementById('imgButtonSwitchLanguage').alt = translations[currentLang].buttonSwitchLanguage;
    document.getElementById('imgButtonSwitchLanguage').title = translations[currentLang].buttonSwitchLanguage;
    document.getElementById('imgButtonSwitchLanguage').src = translations[currentLang].srcFlagSwitchLanguage;
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

