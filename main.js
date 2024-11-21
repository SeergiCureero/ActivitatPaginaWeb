//Prizes
var prizes = {
    //usad . para separar decimales de numeros enteros
    C1D1 : '2199.99',    //München
    C2D1 : '1259.89',    //Berlin
    C3D1 : '1240.99',    //Köln
    C1D2 : '2',    //Milano
    C2D2 : '530',    //Roma
    C3D2 : '500',    //Venezia
    C1D3 : '500',    //
    C2D3 : '500',
    C3D3 : '500'
}

//Translations
const translations = {
    es : {  
            botonCambioIdioma:"IDIOMA",
            textSwitchLanguage_ES:"Castellano",
            textSwitchLanguage_CA:"Catalán",
            textSwitchLanguage_EN:"Inglés",
            textSwitchLanguage_IT:"Italiano",
            srcFlagSwitchLanguage:"resources/flagOfCatalonia.png",
            navBarHome:"Inicio",
            navBarCountries:"Países",
            navBarAboutUs:"Sobre Nosotros",
            subTitle:"Agencia de Viajes",
            subTitle1:"Pintor Austriaco",
            subTitle2:"SUBTITOL ITALIA",
            subTitle3:"SUBTITOL MEXIC",
            titDestino1:"Alemania",
            pTitDestino1: "Viaja a Alemania desde 1000€ todo incluido",
            titDestino2:"Italia",
            pTitDestino2: "Viaja a Italia desde 1000€ todo incluido",
            titDestino3:"Mexico",
            titPorqueNuestraAgencia:"Porque elegir nuestra agencia",
            pPorqueNuestraAgencia:"Lorem ipsum y su polla.",
            titAboutUs:"Sobre nosotros",
            pAboutUs:"Somos una agencia de viajes joven y tenemos a Diego Hijano (2+2) en nuestro equipo.",
            pFooter:"© 2024 Raisen Club. Todos los derechos reservados.",

            //TEXT FROM DESTINY PAGES
            //Destiny 1 (Germany)
            C1D1:"Munich",
            T1C1D1:`La capital de Baviera, casa de la cerveza, y una de las ciudades con más relevancia en la historia reciente de Alemania y del mundo. Disfruta en uno de los mil Biergarten de Münich por solo ${prizes.C1D1}€`,
            C2D1:"Berlín",
            T1C2D1:`No hay ciudad como Berlín. Con un viaje no te la acabas, pero con nosotros verás mucho por solo ${prizes.C2D1}€`,
            C3D1:"Colonia",
            T1C3D1:`¿Amante del carnaval? Colònia té tiene el mejor carnaval de toda Europa. Disfruta de un carnaval inolvidable por solo ${prizes.C3D1}€`,
            //Destiny 2 Italy
            C1D2:"Milán",
            T1C1D2:`MILAN ${prizes.C1D2}€`,
            C2D2:"Roma",
            T1C2D2:`ROMA ${prizes.C2D2}€`,
            C3D2:"Venecia",
            T1C3D2:`VENECIA${prizes.C3D2}€`,
            //Destiny 3 Mexico
            C1D3:"",
            T1C1D3:`${prizes.C1D3}€`,
            C2D3:"",
            T1C2D3:`${prizes.C2D3}€`,
            C3D3:"",
            T1C3D3:`${prizes.C3D3}€`,

            //TEXT FROM TERMS AND CONDITIONS (TyC)
            t1TyC:"Terminos y condiciones generales",
            p1TyC:"Reisen  Club (de aquí en adelante: la Agencia), como agencia de viajes de ambito internacional, pero con sede fiscal en España, se adhiere a todas las normativas de seguridad deribadas de leyes con efecto en el Reino de España y Unión Europea.",
            p2TyC:"La Agencia ofrece a sus clientes la posibilidad de contratar un seguro de viajes de la aseguradora que el cliente desee.",
            p3TyC:"La Agencia no hará devoluciones de dinero ni dará ningun tipo de compensación a causa de vuelos retrasados o cancelados. Si desea recibir compensación, rogamos que lea las condiciones de la aseguranza de viajes que contrate.",
            p4TyC:"Reisen Club ofrece devoluciones en caso de cancelación del servicio contratado si éste se cancela 1 mes antes de la fecha de salida. Para pedir una devolución, deberá llamar a +35 685780630 o escribir a ",
            p5TyC:"Si una vez en el pais de destino tiene alguna queja en relación al hotel y desea cambiarlo, no dude en contactarnos.",
            p6TyC:"Si desea contratar un servicio, deberá pagar con tarjeta u ofreciendo a su primogénito a la Agencia para que lo podamos vender como trabajador de Temu en algun país en vias de desarrollo.",
            p7TyC:"En caso de que, por circumstancias de fuerza mayor (entiendase por fuerza mayor un accidente que derive en hospitalización, muerte, ser del Real Madrid o tener nacionalidad Francesa), se deba cancelar el viaje, el cliente deberá abonar la cantidad total del viaje más gastos de gestión y un importe ligado a las molestias ocasionadas. De no ser así, la Agencia se verá obligada a tomar acciones legales.",
            p8TyC:"¡Muchas gracias por contratar nuestros servicios!"
        },
    ca : {  
            botonCambioIdioma:"LLENGUA",
            textSwitchLanguage_ES:"Castellà",
            textSwitchLanguage_CA:"Català",
            textSwitchLanguage_EN:"Anglès",
            textSwitchLanguage_IT:"Italià",
            srcFlagSwitchLanguage:"resources/flagOfEngland.png",
            navBarHome:"Inici",
            navBarCountries:"Països",
            navBarAboutUs:"Sobre Nosaltres",
            subTitle:"Agència de Viatges",
            subTitle1:"Pintor Austríac",
            subTitle2:"SUBTITOL ITALIA",
            subTitle3:"SUBTITOL MEXIC",
            titDestino1:"Alemanya",
            pTitDestino1: "Viatja a Alemanya des de 1000€ tot inclòs",
            titDestino2:"Itàlia",
            pTitDestino2: "Viatja a Itàlia des de 1000€ tot inclòs",
            titDestino3:"Mèxic",
            titPorqueNuestraAgencia:"Perque escollir la nostra agència",
            pPorqueNuestraAgencia:"Lorem ipsum i la seva polla.",
            titAboutUs:"Sobre nosaltres",
            pAboutUs:"Som una agència de viatges jove i tenim al Diego Hijano (2+2) al nostre equip.",
            pFooter:"© 2024 Raisen Club. Tots els drets reservats.",

            //TEXT FROM DESTINY PAGES
            //Destiny 1 (Germany)
            C1D1:"Múnic",
            T1C1D1:`La capital de Baviera, casa de la cervesa, i una de les ciutats amb més rellevància a la història recent d'Alemanya i del món. Gaudeix en un dels milers Biergarten que trobaràs a Múnic per sols ${prizes.C1D1}€`,
            C2D1:"Berlín",
            T1C2D1:`No hi ha ciutat com Berlín. Amb un viatge no te l'acabes, però amb nosaltres veuràs molt per sols ${prizes.C2D1}€`,
            C3D1:"Colònia",
            T1C3D1:`Amant del carnaval? Colònia té el millor carnaval de tota Europa. Gaudeix d'un carnaval inoblidable per sols ${prizes.C3D1}€`,

            //TEXT FROM TERMS AND CONDITIONS (TyC)
            t1TyC:"Termes i condicions generals",
            p1TyC:"Reisen  Club (d'aquí endavant: l'Agència), com agència de viatges d'àmbit internacional, però amb seu fiscal a Espanya, s'adhereix a totes les normatives de seguretat derivades de lleis amb efecte al Regne d'Espanya i Unió Europea.",
            p2TyC:"L'Agència ofereix als seus clients la possibilitat de contractar una assegurança de viatges de l'asseguradora que el client desitgi.",
            p3TyC:"L'Agència no farà devolucions de diners ni donarà cap mena de compensació a causa de vols endarrerits o cancel·lats. Si desitja rebre compensació, preguem que llegeixi les condicions de l'assegurança de viatges que contracti.",
            p4TyC:"Reisen Club ofereix devolucions en cas de cancel·lació del servei contractat si aquest es cancel·la 1 mes abans de la data de sortida. Per demanar una devolució haurà de trucar al +35 685780630 o escriure a ",
            p5TyC:"Si una vegada al país de destí té alguna queixa en relació amb l'hotel i desitja canviar-ho, no dubti a contactar amb nosaltres.",
            p6TyC:"Si desitja contractar un servei, haurà de pagar amb targeta o oferint al seu primogènit a l'Agència perquè el puguem vendre com a treballador de Temu a algun país en vies de desenvolupament.",
            p7TyC:"En cas que, per circumstàncies de força major (entengui's per força major un accident que derivi en hospitalització, mort, ser del Real Madrid o tenir nacionalitat Francesa), s'hagi de cancel·lar el viatge, el client haurà d'abonar la quantitat total del viatge més despeses de gestió i un import lligat a les molesties ocasionades. En cas de no ser així, l'Agència es veurà obligada a prendre accions legals.",
            p8TyC:"Moltes gràcies per contractar els nostres serveis!"
    
        },      
    en : {  
            botonCambioIdioma:"LANGUAGE",
            textSwitchLanguage_ES:"Spanish",
            textSwitchLanguage_CA:"Catalan",
            textSwitchLanguage_EN:"English",
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
            T1C1D1:`The capital of Bavaria, home of the best beers in the world and one of the cities with the most relevance in the recent history of Germany and the world. enjoy visiting one of its many Biergarten for only ${prizes.C1D1}€`,
            C2D1:"Berlin",
            T1C2D1:`There's no city like Berlin. You won't see it all in just one trip, but travelling with us is a good headstart, and it only costs ${prizes.C2D1}€`,
            C3D1:"Cologne",
            T1C3D1:`Carnival lover? Cologne has THE BEST carnvial in Europe. Enjoy an unforgettable carnival for only ${prizes.C3D1}€`,
        },
    it : {  
            botonCambioIdioma:"LINGUA",
            textSwitchLanguage_ES:"Spagnolo",
            textSwitchLanguage_CA:"Catalano",
            textSwitchLanguage_EN:"Inglese",
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
            T1C1D1:`La capital di Baviera, casa della birra, e una delle città piu rilevanti dell'istoria ricente dalla Germania e del mondo. Goditi a qualcuno dei mille Biergarten che troverai a Monaco per solo ${prizes.C1D1}€`,
            C2D1:"Berlino",
            T1C2D1:`Non c'è nessuna città come Berlino. Con questo viaggio no la finisci, ma con noi vedrai molto per solo ${prizes.C2D1}€`,
            C3D1:"Colonia",
            T1C3D1:`Amante del carnevale? Colonia ha il meglio carnevale d'Europa. Goditi d'un carnavale che non potrai dimenticare per solo ${prizes.C3D1}€`,
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
    document.getElementById('imgBotonCambioIdioma_IT').title = translations[currentLang].textSwitchLanguage_IT;
    document.getElementById('navBarHome').innerText = translations[currentLang].navBarHome;
    document.getElementById('navBarCountries').innerText = translations[currentLang].navBarCountries;
    document.getElementById('navBarAboutUs').innerText = translations[currentLang].navBarAboutUs;
    //Footer
    //Section "Footer"
    document.getElementById('pFooter').innerText = translations[currentLang].pFooter;




    switch (document.body.id) { //check what page we're on
        case "indexBody":
            
            //Update Prizes from main page
            updatePrizes();
            
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
            document.getElementById('Name1').innerText = translations[currentLang].titDestino1;
            document.getElementById('subTitle1').innerText = translations[currentLang].subTitle1;
            document.getElementById('titDestino1').innerText = translations[currentLang].titDestino1;
            document.getElementById('pTitDestino1').innerText = translations[currentLang].pTitDestino1;
            document.getElementById('C1D1').innerText = translations[currentLang].C1D1;
            document.getElementById('T1C1D1').innerText = translations[currentLang].T1C1D1;
            document.getElementById('C2D1').innerText = translations[currentLang].C2D1;
            document.getElementById('T1C2D1').innerText = translations[currentLang].T1C2D1;
            document.getElementById('C3D1').innerText = translations[currentLang].C3D1;
            document.getElementById('T1C3D1').innerText = translations[currentLang].T1C3D1;
            break;

        case "destiny2Body":
            document.getElementById('Name2').innerText = translations[currentLang].titDestino2;
            document.getElementById('subTitle2').innerText = translations[currentLang].subTitle2;
            document.getElementById('titDestino2').innerText = translations[currentLang].titDestino2;
            document.getElementById('pTitDestino2').innerText = translations[currentLang].pTitDestino2;
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
            document.getElementById('t1TyC').innerText = translations[currentLang].t1TyC;
            document.getElementById('p1TyC').innerText = translations[currentLang].p1TyC;
            document.getElementById('p2TyC').innerText = translations[currentLang].p2TyC;
            document.getElementById('p3TyC').innerText = translations[currentLang].p3TyC;
            document.getElementById('p4TyC').childNodes[0].innerText = translations[currentLang].p4TyC;
            document.getElementById('p5TyC').innerText = translations[currentLang].p5TyC;
            document.getElementById('p6TyC').innerText = translations[currentLang].p6TyC;
            document.getElementById('p7TyC').innerText = translations[currentLang].p7TyC;
            document.getElementById('p8TyC').innerText = translations[currentLang].p8TyC;

            break;

        default:
            break;
    }
} 


function updatePrizes() {
    //Update Prizes from main page
    prizesD1 = [parseFloat(prizes.C1D1),parseFloat(prizes.C2D1),parseFloat(prizes.C3D1)];
    prizesD1.sort(function(a, b){return a - b});
    console.log(prizesD1);
    console.log(typeof(prizesD1[0]))
    document.getElementById('mainOfferD1').innerText = (`${prizesD1[0]}€`);
    prizesD2 = [parseFloat(prizes.C1D2),parseFloat(prizes.C2D2),parseFloat(prizes.C3D2)];
    prizesD2.sort(function(a, b){return a - b});
    document.getElementById('mainOfferD2').innerText = (`${prizesD2[0]}€`);
    prizesD3 = [parseFloat(prizes.C1D3),parseFloat(prizes.C2D3),parseFloat(prizes.C3D3)];
    prizesD3.sort(function(a, b){return a - b});
    document.getElementById('mainOfferD3').innerText = (`${prizesD3[0]}€`);
}

