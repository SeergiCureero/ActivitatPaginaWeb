//Prizes
prizeC1D1 = 500;    //München
prizeC2D1 = 500;    //Berlin
prizeC3D1 = 500;    //Köln
prizeC1D2 = 500;    //Milano
prizeC2D2 = 500;    //Roma
prizeC3D2 = 500;    //Venezia
prizeC1D3 = 500;    //
prizeC2D3 = 500;
prizeC3D3 = 500;



const translations = {
    es : {  
            botonCambioIdioma:"Idioma",
            textSwitchLanguage_ES:"Castellano",
            textSwitchLanguage_CA:"Catalán",
            textSwitchLanguage_EN:"Inglés",
            textSwitchLanguage_DE:"Alemán",
            textSwitchLanguage_IT:"Italiano",
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
            pFooter:"© 2024 Raisen Club. Todos los derechos reservados.",

            //TEXT FROM DESTINY PAGES
            //Destiny 1 (Germany)
            C1D1:"Munich",
            T1C1D1:`La capital de Baviera, casa de la cerveza, y una de las ciudades con más relevancia en la historia reciente de Alemania y del mundo. Disfruta en uno de los mil Biergarten de Münich por solo ${prizeC1D1}€`,
            C2D1:"Berlín",
            T1C2D1:`No hay ciudad como Berlín. Con un viaje no te la acabas, pero con nosotros verás mucho por solo ${prizeC2D1}€`,
            C3D1:"Colonia",
            T1C3D1:`¿Amante del carnaval? Colònia té tiene el mejor carnaval de toda Europa. Disfruta de un carnaval inolvidable por solo ${prizeC3D1}€`,
            //Destiny 2 Italy
            C1D1:"Milán",
            T1C1D1:`MILAN ${prizeC1D1}€`,
            C2D1:"Roma",
            T1C2D1:`ROMA ${prizeC2D1}€`,
            C3D1:"Venecia",
            T1C3D1:`VENECIA${prizeC3D1}€`,
            //Destiny 3 Mexico
            C1D1:"",
            T1C1D1:`${prizeC1D1}€`,
            C2D1:"",
            T1C2D1:`${prizeC2D1}€`,
            C3D1:"",
            T1C3D1:`${prizeC3D1}€`
    },
    ca : {  
            botonCambioIdioma:"Llengua",
            textSwitchLanguage_ES:"Castellà",
            textSwitchLanguage_CA:"Català",
            textSwitchLanguage_EN:"Anglès",
            textSwitchLanguage_DE:"Alemany",
            textSwitchLanguage_IT:"Italià",
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
            pFooter:"© 2024 Raisen Club. Tots els drets reservats.",

            //TEXT FROM DESTINY PAGES
            //Destiny 1 (Germany)
            C1D1:"Munic",
            T1C1D1:`La capital de Baviera, casa de la cervesa, i una de les ciutats amb més rellevancia a la història recent d'Alemanya i del mon. Gaudeix en un dels milers Biergarten que trobaràs a Munic per sols ${prizeC1D1}€`,
            C2D1:"Berlín",
            T1C2D1:`No hi ha ciutat com Berlín. Amb un viatge no te l'acabes, però amb nosaltres veuràs molt per sols ${prizeC2D1}€`,
            C3D1:"Colònia",
            T1C3D1:`Amant del carnaval? Colonia té el millor carnaval de tota Europa. Gaudeix d'un carnaval inoblidable per sols ${prizeC3D1}€`,
    },      
    en : {  
            botonCambioIdioma:"Language",
            textSwitchLanguage_ES:"Spanish",
            textSwitchLanguage_CA:"Catalan",
            textSwitchLanguage_EN:"English",
            textSwitchLanguage_DE:"German",
            textSwitchLanguage_IT:"Italian",
            srcFlagSwitchLanguage:"resources/flagOfGermany.png",
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
            pFooter:"© 2024 Raisen Club. All rights preserved.",

            //TEXT FROM DESTINY PAGES
            //Destiny 1 (Germany)
            C1D1:"Munich",
            T1C1D1:`The capital of Bavaria, home of the best beers in the world and one of the cities with the most relevance in the recent history of Germany and the world. enjoy visiting one of its many Biergarten for only ${prizeC1D1}€`,
            C2D1:"Berlin",
            T1C2D1:`There's no city like Berlin. You won't see it all in just one trip, but travelling with us is a good headstart, and it only costs ${prizeC2D1}€`,
            C3D1:"Cologne",
            T1C3D1:`Carnival lover? Cologne has THE BEST carnvial in Europe. Enjoy an unforgettable carnival for only ${prizeC3D1}€`,
    },
    it : {  
            botonCambioIdioma:"Lingua",
            textSwitchLanguage_ES:"Spagnolo",
            textSwitchLanguage_CA:"Catalano",
            textSwitchLanguage_EN:"Inglese",
            textSwitchLanguage_DE:"Tedesco",
            textSwitchLanguage_IT:"Italiano",
            srcFlagSwitchLanguage:"resources/flagOfSpain.png",
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
            pFooter:"© 2024 Raisen Club. Alle Rechte vorbehalten.",

            //TEXT FROM DESTINY PAGES
            //Destiny 1 (Germany)
            C1D1:"Monaco",
            T1C1D1:`La capital di Baviera, casa della birra, e una delle città piu rilevanti dell'istoria ricente dalla Germania e del mondo. Goditi a qualcuno dei mille Biergarten che troverai a Monaco per solo ${prizeC1D1}€`,
            C2D1:"Berlino",
            T1C2D1:`Non c'è nessuna città come Berlino. Con questo viaggio no la finisci, ma con noi vedrai molto per solo ${prizeC2D1}€`,
            C3D1:"Colonia",
            T1C3D1:`Amante del carnevale? Colonia ha il meglio carnevale d'Europa. Goditi d'un carnavale che non potrai dimenticare per solo ${prizeC3D1}€`,
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

    console.log(document.body.id); //Debug the name (id) of the page that is being loaded


    //__Change text from elements__
    //SHARED ELEMENTS
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
    //Footer
    //Section "Footer"
    document.getElementById('pFooter').innerText = translations[currentLang].pFooter;




    switch (document.body.id) { //check what page we're on
        case "indexBody":
            //Header
            //Section Banner
            document.getElementById('subTitle').innerText = translations[currentLang].subTitle;
            //Main
            //Section "Destinies"
            document.getElementById('titDestino1').innerText = translations[currentLang].titDestino1;
            document.getElementById('titDestino2').innerText = translations[currentLang].titDestino2;
            document.getElementById('titDestino3').innerText = translations[currentLang].titDestino3;
            //Section "Why Our Agency?"
            document.getElementById('titPorqueNuestraAgencia').innerText = translations[currentLang].titPorqueNuestraAgencia; 
            document.getElementById('pPorqueNuestraAgencia').innerText = translations[currentLang].pPorqueNuestraAgencia;
            //Section "About Us"
            document.getElementById('titAboutUs').innerText = translations[currentLang].titAboutUs;
            document.getElementById('pAboutUs').innerText = translations[currentLang].pAboutUs;
            break;
    
        case "destiny1Body":
            document.getElementById('C1D1').innerText = translations[currentLang].C1D1;
            document.getElementById('T1C1D1').innerText = translations[currentLang].T1C1D1;
            document.getElementById('C2D1').innerText = translations[currentLang].C2D1;
            document.getElementById('T1C2D1').innerText = translations[currentLang].T1C2D1;
            document.getElementById('C3D1').innerText = translations[currentLang].C3D1;
            document.getElementById('T1C3D1').innerText = translations[currentLang].T1C3D1;
            break;
        case "destiny2Body":
            document.getElementById('C1D2').innerText = translations[currentLang].C1D2;
            document.getElementById('T1C1D2').innerText = translations[currentLang].T1C1D2;
            document.getElementById('C2D2').innerText = translations[currentLang].C2D2;
            document.getElementById('T1C2D2').innerText = translations[currentLang].T1C2D2;
            document.getElementById('C3D2').innerText = translations[currentLang].C3D2;
            document.getElementById('T1C3D2').innerText = translations[currentLang].T1C3D2;
            break;
    
        case "destiny3Body":
            
            break;
        case "countriesBody":
            
            break;
    
        case "aboutUsBody":
            
            break;
        case "TyCBody":
            
            break;

        default:
            break;
    }
} 

