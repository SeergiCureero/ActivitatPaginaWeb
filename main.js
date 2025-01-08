//Precios
//Por el momento los precios se editan editando el documento main.js. La idea es crear un JSON donde se puedan editar los precios, pero da problemas que no valen la pena resolver por el momento.
const prizes = {
    C1D1 : 2199.99, //Münich, DE
    C2D1 : 1259.89, //Berlin, DE
    C3D1 : 1240.99, //Köln, DE
    C1D2 : 893,      //Roma, IT
    C2D2 : 567,     //Milano, IT
    C3D2 : 4530,      //Firenze, IT
    C1D3 : 60,      //CDMX, MX
    C2D3 : 3840,    //Texcoco de Mora, MX
    C3D3 : 184,     //Guadalajara, MX
    OtherOffers1 : 1285, //Boston, USA
    OtherOffers2 : 1575, //Medellin, COL
    OtherOffers3 : 1780  //BBAA, ARG
}
var lowestPrizes = [];

//Translations with prizes. for regular translations, check the translations.json file
updatePrizes();
const translationsWithPrizes = {
    es:{
        pTitDestino1: `Viaja a Alemania desde ${lowestPrizes[0]}€ todo incluido`,
        T2C1D1:`Disfruta en uno de los mil Biergarten de Münich por solo ${(prizes.C1D1)}€`,
        T2C2D1:`Viaja a Berlín por solo ${(prizes.C2D1)}`,
        T2C3D1:`Disfruta de un carnaval inolvidable por solo ${(prizes.C3D1)}€`,
    
        pTitDestino2: `Viaja a Italia desde ${lowestPrizes[1]}€ todo incluido`,
        T2C1D2:`Pasea por donde caminaban los emperadores romanos por solo ${prizes.C1D2}€`,
        T2C2D2:`Tanto si buscas una ciudad medieval como una urbe moderna y europea, ¡Milán es tu ciudad! Visitala por solo ${prizes.C2D2}€`,
        T2C3D2:`FLORENCIA ${prizes.C3D2}€`,
    
        pTitDestino3: `Viaja a México con todo incluido desde ${lowestPrizes[2]}€.`,
        T2C1D3:`Descubre Ciudad de México desde ${prizes.C1D3}€ todo incluido.`,
        T2C2D3:`Disfruta en Texcoco de Mora desde ${prizes.C2D3}€ todo incluido.`,
        T2C3D3:`Viaja a Guadalajara desde ${prizes.C3D3}€ todo incluido.`,

        T1H1COUNTRIES:`A partir de ${prizes.OtherOffers1}€`,
        T1H2COUNTRIES:`A partir de ${prizes.OtherOffers2}€`,
        T1H3COUNTRIES:`A partir de ${prizes.OtherOffers3}€`
    },
    ca:{
        pTitDestino1: `Viatja a Alemanya des de ${lowestPrizes[0]}€ tot inclòs`,
        T2C1D1:`Gaudeix a un dels milers Biergarten de Múnic per sols ${prizes.C1D1}€`,
        T2C2D1:`Viatja a Berlín per sols 500€${prizes.C2D1}€`,
        T2C3D1:`Gaudeix d'un carnaval inoblidable per sols ${prizes.C3D1}€`,
    
        pTitDestino2: `Viatja a Itàlia des de ${lowestPrizes[1]}€ tot inclòs`,
        T2C1D2:`Passeja  per on caminaven emperadors romans per sols ${prizes.C1D2}€`,
        T2C2D2:`Tant si busques una ciutat medieval o una metropoli moderna i europea, Milà és la teva ciutat! Visita-la per sols ${prizes.C2D2}€`,
        T2C3D2:`FLORENCIA ${prizes.C3D2}€`,
    
        pTitDestino3: `Viatja a Mèxic amb tot inclos des de ${lowestPrizes[2]}€.`,
        T2C1D3:`Descobreix Ciudad de México des de ${prizes.C1D3}€ tot inclos.`,
        T2C2D3:`Disfruta a Texcoco de Mora des de ${prizes.C2D3}€ tot inclos.`,
        T2C3D3:`Viatja a Guadalajara des de ${prizes.C3D3}€ tot inclos.`,

        T1H1COUNTRIES:`A partir de ${prizes.OtherOffers1}€`,
        T1H2COUNTRIES:`A partir de ${prizes.OtherOffers2}€`,
        T1H3COUNTRIES:`A partir de ${prizes.OtherOffers3}€`

    },
    en:{
        pTitDestino1: `Travel to Germany for ${lowestPrizes[0]}€ all included`,
        T1C1D1:`The capital of Bavaria, the home of the beer, and one of the cities with the most relevance in the recent history of Germany and the world. Enjoy in on of the thousands Biergarten of Munich for only ${prizes.C1D1}€`,
        T1C2D1:`There is no city like Berlin. With just one trip you won't see all that there is to see, but with us you'll be one step closer for only ${prizes.C2D1}€`,
        T1C3D1:`Carnival lover? Cologne has THE best carnival in all Europe. Enjoy an unforgettable carnival for only ${prizes.C3D1}€`,
    
        pTitDestino2: `Travel to Italy for ${lowestPrizes[1]}€ all included`,
        T1C1D2:`It's said that all roads lead to Rome. The city that once served as capital of the Empire that surfed the waves of the Mediterranean sea for centuries, the birthplace of western culture and latin languages. You can feel and see all this influence in what is nowadays the capital of Italy. Go for a walk stepping on the same roads the emperors of Rome once walked uppon for only ${prizes.C1D2}€`,
        T1C2D2:`The second biggest city in Italy. A city with a rich history and a gorgeous architecture. It doesn't matter if you're looking for a medieval big city or a modern an european metropolis, Milan is your city! Visit it for only ${prizes.C2D2}€`,
        T1C3D2:`FLORENCIA ${prizes.C3D2}€`,
    
        pTitDestino3: `Travel to Mexico for ${lowestPrizes[2]}€ all included`,
        T1C1D3:`${prizes.C1D3}€`,
        T1C2D3:`${prizes.C2D3}€`,
        T1C3D3:`${prizes.C3D3}€`,

        T1H1COUNTRIES:`Prizes starting at ${prizes.OtherOffers1}€`,
        T1H2COUNTRIES:`Prizes starting at ${prizes.OtherOffers2}€`,
        T1H3COUNTRIES:`Prizes starting at ${prizes.OtherOffers3}€`
    },
};


function switchLang(p_language) {
    //Store Language
    localStorage.setItem('language', p_language);
    //Update translations
    //Reload JSON
    carregarTraduccions();
    
}

function carregarTraduccions() {
    console.log("procedint a carregar json amb traduccions");
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
        console.log("js traduccions carregat");
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
    document.getElementById('botonCambioIdioma').innerText = data[currentLang].botonCambioIdioma;
    document.getElementById('navBarHome').innerText = data[currentLang].navBarHome;
    document.getElementById('navBarCountries').innerText = data[currentLang].navBarCountries;
    document.getElementById('aDestinos1').innerText = data[currentLang].titDestino1;
    document.getElementById('aDestinos2').innerText = data[currentLang].titDestino2;
    document.getElementById('aDestinos3').innerText = data[currentLang].titDestino3;
    //Footer
    //Section "Footer"
    document.getElementById('pFooter').childNodes[0].textContent  = data[currentLang].pFooter;
    try {
        document.getElementById('TyCFooter').innerText = data[currentLang].TyCFooter;
    } catch (error) {
        console.log("estem al TyC, no cal ficar l'enllaç al footer")
    }
    




    switch (document.body.id) { //check what page we're on
        case "indexBody":
            
            //Update Prizes from main page
            updatePrizes();
            
            //Header
            //Section Banner
            document.getElementById('subTitle').innerText = data[currentLang].subTitle;
            document.getElementById('buttonBanner').innerText = data[currentLang].buttonBanner;
            //Main
            //Section "Destinies"
            document.getElementById('DestinosRecomendados').innerText = data[currentLang].DestinosRecomendados;
            document.getElementById('titDestino1').innerText = data[currentLang].titDestino1;
            document.getElementById('T1A1MP').innerText = data[currentLang].T1A1MP;
            document.getElementById('mainOfferD1').innerText = (`${lowestPrizes[0]}€`);
            document.getElementById('titDestino2').innerText = data[currentLang].titDestino2;
            document.getElementById('T1A2MP').innerText = data[currentLang].T1A2MP;
            document.getElementById('mainOfferD2').innerText = (`${lowestPrizes[1]}€`);
            document.getElementById('titDestino3').innerText = data[currentLang].titDestino3;
            document.getElementById('T1A3MP').innerText = data[currentLang].T1A3MP;
            document.getElementById('mainOfferD3').innerText = (`${lowestPrizes[2]}€`);
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
            document.getElementsByTagName('title').innerText = data[currentLang].pageNameD1;
            document.getElementById('title1').innerText = data[currentLang].titDestino1;
            document.getElementById('subTitle1').innerText = data[currentLang].subTitle1;
            document.getElementById('titDestino1').innerText = data[currentLang].titDestino1;
            document.getElementById('pTitDestino1').innerText = translationsWithPrizes[currentLang].pTitDestino1;
            document.getElementById('C1D1').innerText = data[currentLang].C1D1;
            document.getElementById('T1C1D1').innerText = data[currentLang].T1C1D1;
            document.getElementById('T2C1D1').innerText = translationsWithPrizes[currentLang].T2C1D1;
            document.getElementById('C2D1').innerText = data[currentLang].C2D1;
            document.getElementById('T1C2D1').innerText = data[currentLang].T1C2D1;
            document.getElementById('T2C2D1').innerText = translationsWithPrizes[currentLang].T2C2D1;
            document.getElementById('C3D1').innerText = data[currentLang].C3D1;
            document.getElementById('T1C3D1').innerText = data[currentLang].T1C3D1;
            document.getElementById('T2C3D1').innerText = translationsWithPrizes[currentLang].T2C3D1;
            break;

        case "destiny2Body":
            //Update Prizes 
            updatePrizes();
            document.getElementsByTagName('title').innerText = data[currentLang].pageNameD2;
            document.getElementById('title2').innerText = data[currentLang].titDestino2;
            document.getElementById('subTitle2').innerText = data[currentLang].subTitle2;
            document.getElementById('titDestino2').innerText = data[currentLang].titDestino2;
            document.getElementById('pTitDestino2').innerText = translationsWithPrizes[currentLang].pTitDestino2;
            document.getElementById('C1D2').innerText = data[currentLang].C1D2;
            document.getElementById('T1C1D2').innerText = data[currentLang].T1C1D2;
            document.getElementById('T2C1D2').innerText = translationsWithPrizes[currentLang].T2C1D2;
            document.getElementById('C2D2').innerText = data[currentLang].C2D2;
            document.getElementById('T1C2D2').innerText = data[currentLang].T1C2D2;
            document.getElementById('T2C2D2').innerText = translationsWithPrizes[currentLang].T2C2D2;
            document.getElementById('C3D2').innerText = data[currentLang].C3D2;
            document.getElementById('T1C3D2').innerText = data[currentLang].T1C3D2;
            document.getElementById('T2C3D2').innerText = translationsWithPrizes[currentLang].T2C3D2;
            break;
    
        case "destiny3Body":
            //Update Prizes from main page
            updatePrizes();
            document.getElementsByTagName('title').innerText = data[currentLang].pageNameD3;
            document.getElementById('title3').innerText = data[currentLang].titDestino3;
            //document.getElementById('titDestino3').innerText = data[currentLang].titDestino3;
            //document.getElementById('pTitDestino3').innerText = translationsWithPrizes[currentLang].pTitDestino3;
            document.getElementById('C1D3').innerText = data[currentLang].C1D3;
            document.getElementById('T1C1D3').innerText = data[currentLang].T1C1D3;
            document.getElementById('T2C1D3').innerText = translationsWithPrizes[currentLang].T2C1D3;
            document.getElementById('T3C1D3').childNodes[0].textContent = data[currentLang].TextForMoreInfo;
            document.getElementById('C2D3').innerText = data[currentLang].C2D3;
            document.getElementById('T1C2D3').innerText = data[currentLang].T1C2D3;
            document.getElementById('T2C2D3').innerText = translationsWithPrizes[currentLang].T2C2D3;
            document.getElementById('T3C2D3').childNodes[0].textContent = data[currentLang].TextForMoreInfo;
            document.getElementById('C3D3').innerText = data[currentLang].C3D3;
            document.getElementById('T1C3D3').innerText = data[currentLang].T1C3D3;
            document.getElementById('T2C3D3').innerText = translationsWithPrizes[currentLang].T2C3D3;
            document.getElementById('T3C3D3').childNodes[0].textContent = data[currentLang].TextForMoreInfo;
            
            break;
        case "countriesBody":
            document.getElementsByTagName('title').innerText = data[currentLang].pageNameCOUNTRIES;
            document.getElementById('ourHighlightedDestinies').innerText = data[currentLang].ourHighlightedDestinies;
            document.getElementById('highlightedDestiny1').innerText = data[currentLang].highlightedDestiny1;
            document.getElementById('highlightedDestiny2').innerText = data[currentLang].highlightedDestiny2;
            document.getElementById('highlightedDestiny3').innerText = data[currentLang].highlightedDestiny3;
            document.getElementById('otherOffers').innerText = data[currentLang].otherOffers;
            document.getElementById('T1COUNTRIES').innerText = data[currentLang].T1COUNTRIES;
            document.getElementById('T2COUNTRIES').childNodes[0].textContent = data[currentLang].T2COUNTRIES;
            document.getElementById('TyCCOUNTRIES').innerText = data[currentLang].TyCCOUNTRIES;
            document.getElementById('H1COUNTRIES').innerText = data[currentLang].H1COUNTRIES;
            document.getElementById('H2COUNTRIES').innerText = data[currentLang].H2COUNTRIES;
            document.getElementById('H3COUNTRIES').innerText = data[currentLang].H3COUNTRIES;
            document.getElementById('T1H1COUNTRIES').innerText = translationsWithPrizes[currentLang].T1H1COUNTRIES;
            document.getElementById('T1H2COUNTRIES').innerText = translationsWithPrizes[currentLang].T1H2COUNTRIES;
            document.getElementById('T1H3COUNTRIES').innerText = translationsWithPrizes[currentLang].T1H3COUNTRIES;
            break;
        case "TyCBody":
            document.getElementsByTagName('title').innerText = data[currentLang].pageNameTyC;
            document.getElementById('t1TyC').innerText = data[currentLang].t1TyC;
            document.getElementById('p1TyC').innerText = data[currentLang].p1TyC;
            document.getElementById('p2TyC').innerText = data[currentLang].p2TyC;
            document.getElementById('p3TyC').innerText = data[currentLang].p3TyC;
            document.getElementById('p4TyC').childNodes[0].textContent = data[currentLang].p4TyC;
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
    lowestPrizes[0] = prizesD1[0];
    prizesD2 = [parseFloat(prizes.C1D2),parseFloat(prizes.C2D2),parseFloat(prizes.C3D2)];
    prizesD2.sort(function(a, b){return a - b});
    lowestPrizes[1] = prizesD2[0];
    prizesD3 = [parseFloat(prizes.C1D3),parseFloat(prizes.C2D3),parseFloat(prizes.C3D3)];
    prizesD3.sort(function(a, b){return a - b});
    lowestPrizes[2] = prizesD3[0];
}

