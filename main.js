//Prizes
var prizes = {
    //usad . para separar decimales de numeros enteros
    C1D1 : '2199.99',   //München
    C2D1 : '1259.89',   //Berlin
    C3D1 : '1240.99',   //Köln
    C1D2 : '2',         //Roma
    C2D2 : '530',       //Milano
    C3D2 : '500',       //Firenze
    C1D3 : '500',       //
    C2D3 : '500',
    C3D3 : '500',
    lowestOffer1 : '',
    lowestOffer2 : '',
    lowestOffer3 : ''
}

//Translations with prizes. for regular translations, check the json file
const translationsWithPrizes = {
    es:{
        pTitDestino1: `Viaja a Alemania desde ${prizes.lowestOffer1}€ todo incluido`,
        T1C1D1:`La capital de Baviera, casa de la cerveza, y una de las ciudades con más relevancia en la historia reciente de Alemania y del mundo. Disfruta en uno de los mil Biergarten de Münich por solo ${prizes.C1D1}€`,
        T1C2D1:`No hay ciudad como Berlín. Con un viaje no te la acabas, pero con nosotros verás mucho por solo ${prizes.C2D1}€`,
        T1C3D1:`¿Amante del carnaval? Colònia té tiene el mejor carnaval de toda Europa. Disfruta de un carnaval inolvidable por solo ${prizes.C3D1}€`,
    
        pTitDestino2: `Viaja a Italia desde ${prizes.lowestOffer2}€ todo incluido`,
        T1C1D2:`Dicen que todos los caminos llevan a Roma. La ciudad capital del que fue el Imperio que bañó el Mediterraneo por siglos, el lugar de nacimiento de la cultura occidental, de las lenguas romances. Toda esta influencia se siente y se ve en la capital de Italia. Pasea por donde caminaban los emperadores romanos por solo ${prizes.C1D2}€`,
        T1C2D2:`La segunda ciudad más grande de Italia. Una ciudad con una rica historia y preciosa arquitectura. Tanto si buscas una ciudad medieval como una urbe moderna y europea, ¡Milán es tu ciudad! Visitala por solo ${prizes.C2D2}€`,
        T1C3D2:`FLORENCIA${prizes.C3D2}€`,
    
        pTitDestino3: `Viaja a Mexico desde ${prizes.lowestOffer3}€ todo incluido`,
        T1C1D3:`${prizes.C1D3}€`,
        T1C2D3:`${prizes.C2D3}€`,
        T1C3D3:`${prizes.C3D3}€`
    },
    ca:{

    },
    en:{

    },
};


function switchLang(p_language) {
    //Store Language
    localStorage.setItem('language', p_language);
    //Update translations
    //Reload JSON
    carregarJSON();
    
}

function carregarJSON() {
    console.log("procedint a carregar json");
    // Carregar el fitxer JSON local
    fetch('resources/translations.json')
      .then(response => {
        // Verificar si la resposta és correcta (status 200)
        if (!response.ok) {
          throw new Error('Error al carregar el fitxer JSON');
        }
        return response.json(); // Convertir la resposta a JSON
      })
      .then(data => {
        // Carrega les traduccions a "updateLanguage()"
        updateLanguage(data)
        console.log("js carregat");
      })
      .catch(error => {
        console.error('Error:', error);
      });
      
    }


function updateLanguage(data) {
    //Read stored language
    currentLang = localStorage.getItem('language');
    console.log(currentLang);   //Debug in console
    updatePrizes();

    console.log(document.body.id); //Debug the name (id) of the page that is being loaded 

    //__Change text from elements__
    //SHARED ELEMENTS
    //Navigation Bar
    document.getElementById('navBarHome').innerText = data[currentLang].navBarHome;
    document.getElementById('navBarCountries').innerText = data[currentLang].navBarCountries;
    document.getElementById('navBarAboutUs').innerText = data[currentLang].navBarAboutUs;
    //Footer
    //Section "Footer"
    document.getElementById('pFooter').innerText = data[currentLang].pFooter;




    switch (document.body.id) { //check what page we're on
        case "indexBody":
            
            //Update Prizes from main page
            updatePrizes();
            
            //Header
            //Section Banner
            document.getElementById('subTitle').innerText = data[currentLang].subTitle;
            //Main
            //Section "Destinies"
            document.getElementById('titDestino1').innerText = data[currentLang].titDestino1;
            document.getElementById('T1A1MP').innerText = data[currentLang].T1A1MP;
            document.getElementById('mainOfferD1').innerText = (`${prizes.lowestOffer1}€`);
            document.getElementById('titDestino2').innerText = data[currentLang].titDestino2;
            document.getElementById('T1A2MP').innerText = data[currentLang].T1A2MP;
            document.getElementById('mainOfferD2').innerText = (`${prizes.lowestOffer2}€`);
            document.getElementById('titDestino3').innerText = data[currentLang].titDestino3;
            document.getElementById('T1A3MP').innerText = data[currentLang].T1A3MP;
            document.getElementById('mainOfferD3').innerText = (`${prizes.lowestOffer3}€`);
            //Section "Why Our Agency?"
            document.getElementById('titPorqueNuestraAgencia').innerText = data[currentLang].titPorqueNuestraAgencia; 
            document.getElementById('pPorqueNuestraAgencia').innerText = data[currentLang].pPorqueNuestraAgencia;
            //Section "About Us"
            document.getElementById('titAboutUs').innerText = data[currentLang].titAboutUs;
            document.getElementById('pAboutUs').innerText = data[currentLang].pAboutUs;
            break;
    
        case "destiny1Body":
            //Update Prizes from
            updatePrizes();
            document.getElementById('Name1').innerText = data[currentLang].titDestino1;
            document.getElementById('subTitle1').innerText = data[currentLang].subTitle1;
            document.getElementById('titDestino1').innerText = data[currentLang].titDestino1;
            document.getElementById('pTitDestino1').innerText = translationsWithPrizes[currentLang].pTitDestino1;
            document.getElementById('C1D1').innerText = data[currentLang].C1D1;
            document.getElementById('T1C1D1').innerText = translationsWithPrizes[currentLang].T1C1D1;
            document.getElementById('C2D1').innerText = data[currentLang].C2D1;
            document.getElementById('T1C2D1').innerText = translationsWithPrizes[currentLang].T1C2D1;
            document.getElementById('C3D1').innerText = data[currentLang].C3D1;
            document.getElementById('T1C3D1').innerText = translationsWithPrizes[currentLang].T1C3D1;
            break;

        case "destiny2Body":
            //Update Prizes 
            updatePrizes();
            document.getElementById('Name2').innerText = data[currentLang].titDestino2;
            document.getElementById('subTitle2').innerText = data[currentLang].subTitle2;
            document.getElementById('titDestino2').innerText = data[currentLang].titDestino2;
            document.getElementById('pTitDestino2').innerText = translationsWithPrizes[currentLang].pTitDestino2;
            document.getElementById('C1D2').innerText = data[currentLang].C1D2;
            document.getElementById('T1C1D2').innerText = translationsWithPrizes[currentLang].T1C1D2;
            document.getElementById('C2D2').innerText = data[currentLang].C2D2;
            document.getElementById('T1C2D2').innerText = translationsWithPrizes[currentLang].T1C2D2;
            document.getElementById('C3D2').innerText = data[currentLang].C3D2;
            document.getElementById('T1C3D2').innerText = translationsWithPrizes[currentLang].T1C3D2;
            break;
    
        case "destiny3Body":
            //Update Prizes from main page
            updatePrizes();
            
            break;
        case "countriesBody":
            
            break;
        case "aboutUsBody":
            
            break;
        case "TyCBody":
            document.getElementById('t1TyC').innerText = data[currentLang].t1TyC;
            document.getElementById('p1TyC').innerText = data[currentLang].p1TyC;
            document.getElementById('p2TyC').innerText = data[currentLang].p2TyC;
            document.getElementById('p3TyC').innerText = data[currentLang].p3TyC;
            document.getElementById('p4TyC').childNodes[0].innerText = data[currentLang].p4TyC;
            document.getElementById('p5TyC').innerText = data[currentLang].p5TyC;
            document.getElementById('p6TyC').innerText = data[currentLang].p6TyC;
            document.getElementById('p7TyC').innerText = data[currentLang].p7TyC;
            document.getElementById('p8TyC').innerText = data[currentLang].p8TyC;

            break;
        default:
            break;
    }
} 

function updatePrizes() {
    //Update Prizes from main page
    prizesD1 = [parseFloat(prizes.C1D1),parseFloat(prizes.C2D1),parseFloat(prizes.C3D1)];
    prizesD1.sort(function(a, b){return a - b});
    prizes.lowestOffer1 = prizesD1[0];
    prizesD2 = [parseFloat(prizes.C1D2),parseFloat(prizes.C2D2),parseFloat(prizes.C3D2)];
    prizesD2.sort(function(a, b){return a - b});
    prizes.lowestOffer2 = prizesD2[0];
    prizesD3 = [parseFloat(prizes.C1D3),parseFloat(prizes.C2D3),parseFloat(prizes.C3D3)];
    prizesD3.sort(function(a, b){return a - b});
    prizes.lowestOffer3 = prizesD3[0];
    console.log(prizes);
}

