


const translations = {
    es : {  
            botonCambioIdioma:'Idioma',
            textSwitchLanguage_ES:'Castellano',
            textSwitchLanguage_CA:'Catalán',
            textSwitchLanguage_EN:'Inglés',
            textSwitchLanguage_DE:'Alemán',
            textSwitchLanguage_IT:'Italiano',
            srcFlagSwitchLanguage:"resources/flagOfCatalonia.png",
            navBarHome:"Inicio",
            navBarCountries:"Países",
            navBarAboutUs:"Sobre Nosotros",
            subTitle:"Agencia de Viajes",
            titDestino1:"Alemania",
            titDestino2:"Italia",
            titDestino3:"Mexico",
            titPorqueNuestraAgencia:"Porque elegir nuestra agencia",
            pPorqueNuestraAgencia:"Lorem ipsum y su polla.",
            titAboutUs:"Sobre nosotros",
            pAboutUs:"Somos una agencia de viajes joven y tenemos a Diego Hijano (2+2) en nuestro equipo.",
            pFooter:"© 2024 Raisen Club. Todos los derechos reservados."
    },
    ca : {  
            botonCambioIdioma:'Llengua',
            textSwitchLanguage_ES:'Castellà',
            textSwitchLanguage_CA:'Català',
            textSwitchLanguage_EN:'Anglès',
            textSwitchLanguage_DE:'Alemany',
            textSwitchLanguage_IT:'Italià',
            srcFlagSwitchLanguage:"resources/flagOfEngland.png",
            navBarHome:"Inici",
            navBarCountries:"Països",
            navBarAboutUs:"Sobre Nosaltres",
            subTitle:"Agència de Viatges",
            titDestino1:"Alemanya",
            titDestino2:"Itàlia",
            titDestino3:"Mèxic",
            titPorqueNuestraAgencia:"Perque escollir la nostra agència",
            pPorqueNuestraAgencia:"Lorem ipsum i la seva polla.",
            titAboutUs:"Sobre nosaltres",
            pAboutUs:"Som una agència de viatges jove i tenim al Diego Hijano (2+2) al nostre equip.",
            pFooter:"© 2024 Raisen Club. Tots els drets reservats."
    },      
    en : {  
            botonCambioIdioma:'Language',
            textSwitchLanguage_ES:'Spanish',
            textSwitchLanguage_CA:'Catalan',
            textSwitchLanguage_EN:'English',
            textSwitchLanguage_DE:'German',
            textSwitchLanguage_IT:'Italian',
            srcFlagSwitchLanguage:'resources/flagOfGermany.png',
            navBarHome:"Home",
            navBarCountries:"Countries",
            navBarAboutUs:"About Us",
            subTitle:"Travel Agency",
            titDestino1:'Germany',
            titDestino2:"Italy",
            titDestino3:"Mexico",
            titPorqueNuestraAgencia:"Why travel with us?",
            pPorqueNuestraAgencia:"Lorem ipsum and their dick.",
            titAboutUs:"About us",
            pAboutUs:"We are young team, with fresh ideas and we have Diego Hijano in our team.",
            pFooter:"© 2024 Raisen Club. All rights preserved."
    },
    de : {  
            botonCambioIdioma:'Sprache',
            textSwitchLanguage_ES:'Spanisch',
            textSwitchLanguage_CA:'Katalanisch',
            textSwitchLanguage_EN:'Englisch',
            textSwitchLanguage_DE:'Deutsch',
            textSwitchLanguage_IT:'Italienisch',
            srcFlagSwitchLanguage:'resources/flagOfItaly.png',
            navBarHome:"Homepage",
            navBarCountries:"Länder",
            navBarAboutUs:"Über uns",
            subTitle:"Reisebüro",
            titDestino1:'Deutschland',
            titDestino2:"Italien",
            titDestino3:"Mexico",
            titPorqueNuestraAgencia:"Warum mit uns reisen?",
            pPorqueNuestraAgencia:"Lorem ipsum und ihr Schwanz.",
            titAboutUs:"Über uns",
            pAboutUs:"Wir sind ein junges Team mit frischen Ideen und wir haben Diego Hijano in unserem Team.",
            pFooter:"© 2024 Raisen Club. Alle Rechte vorbehalten."
    },
    it : {  
            botonCambioIdioma:'Lingua',
            textSwitchLanguage_ES:'Spagnolo',
            textSwitchLanguage_CA:'Catalano',
            textSwitchLanguage_EN:'Inglese',
            textSwitchLanguage_DE:'Tedesco',
            textSwitchLanguage_IT:'Italiano',
            srcFlagSwitchLanguage:'resources/flagOfSpain.png',
            navBarHome:"Inizio",
            navBarCountries:"Paesi",
            navBarAboutUs:"Chi siamo",
            subTitle:"Agenzia di viaggi",
            titDestino1:'Germania',
            titDestino2:"Italia",
            titDestino3:"Messico",
            titPorqueNuestraAgencia:"Perche viaggiare con noi?",
            pPorqueNuestraAgencia:"Lorem ipsum e il suo cazzo",
            titAboutUs:"Chi siamo",
            pAboutUs:"Siamo una squadra giovane e abbiamo Diego Hijano nella nostra squadra. 2+2 = Diego Hijano.",
            pFooter:"© 2024 Raisen Club. Alle Rechte vorbehalten."
    }
};


function switchLang(p_language) {
    //Store Language
    localStorage.setItem('language', p_language);
    //Update translations
    updateLanguage();
}

function updateLanguage() {
    //Read stored language
    const currentLang = localStorage.getItem('language');
    console.log(currentLang);   //Debug in console

    
    //__Change text from elements__

    //Header
    //Navigation Bar
    document.getElementById('botonCambioIdioma').innerText = translations[currentLang].botonCambioIdioma;
    document.getElementById('imgBotonCambioIdioma_ES').title = translations[currentLang].textSwitchLanguage_ES; //we just change the title of the image, no need to change also the alternative text
    document.getElementById('imgBotonCambioIdioma_CA').title = translations[currentLang].textSwitchLanguage_CA;
    document.getElementById('imgBotonCambioIdioma_EN').title = translations[currentLang].textSwitchLanguage_EN;
    document.getElementById('imgBotonCambioIdioma_DE').title = translations[currentLang].textSwitchLanguage_DE;
    document.getElementById('imgBotonCambioIdioma_IT').title = translations[currentLang].textSwitchLanguage_IT;
    document.getElementById('navBarHome').innerText = translations[currentLang].navBarHome;
    document.getElementById('navBarCountries').innerText = translations[currentLang].navBarCountries;
    document.getElementById('navBarAboutUs').innerText = translations[currentLang].navBarAboutUs;
    //Section Banner
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

