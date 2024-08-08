exports.seed = function (knex) {

  return knex('courses').del()
    .then(function () {
      return knex('courses').insert([{
          course_name: 'Design I',
          description: 'Je maakt in dit opleidingsonderdeel kennis met de basisprincipes van grafische vormgeving: typografie, kleur, beeld, compositie en de werkprocessen van een grafisch vormgever. We leren deze principes toepassen en maken daarvoor gebruik van de software uit de professionele wereld (Adobe Illustrator en Photoshop).',
          instructor: 'Maaike Beuten, Els Vande Kerckhove',
          credits: 5
        },
        {
          course_name: 'Design II',
          description: 'Design II gaat over het structuren en vormgeven van informatie. Navigatie is daarbij een belangrijk onderdeel. We doorlopen het hele ontwerpproces van een digitale toepassing: van het ontwikkelen van wireframes over het organiseren van de flow tot de uiteindelijke vormgeving. We maken daarvoor gebruik van software uit de professionele wereld. We kijken hoe we een duidelijk hiërarchie kunnen aanbrengen door gebruik van typografie, kleur en lay-out. We leren designbeslissingen maken en consequent doortrekken naar meerdere (types) paginas.',
          instructor: 'Maaike beuten, Els Vande Kerckhove ',
          credits: 5
        },
        {
          course_name: 'Development I',
          description: 'Je leert procedureel programmeren met behulp van Javascript. Door gebruik te maken van de grafische mogelijkheden van HTML 5 Canvas leer je op een visuele en intuïtieve manier programmeren. Alle basisconcepten van programmeren komen aan bod: variabelen en objecten, functies en methodes, variatie door middel van iteratiestructuren en selectiestructuren, events en lijst-structuren. Met behulp van de aangeleerde vaardigheden genereer je abstracte afbeeldingen en interactieve animaties.',
          instructor: 'Peter Dickx',
          credits: 5
        },
        {
          course_name: 'Development II',
          description: 'Je leert object georiënteerd programmeren met behulp van Javascript (ES6). Hierbij leer je zowel de basisconcepten (zoals objecten, klassen en attributen) als geavanceerde concepten (zoals overerving). Daarnaast leer je hoe je data kan uitwisselen met een REST API door gebruik te maken van Ajax REST calls & JSON Objecten. Met behulp van de aangeleerde vaardigheden ontwikkel je een interactieve webapplicatie.',
          instructor: 'Jan Everaert',
          credits: 5
        },
        {
          course_name: 'Grow I',
          description: 'In Grow I reflecteer je over je eigen handelen. Op basis van een persoonlijke SWOT werk je persoonlijke doelstellingen uit waar je het volledige academiejaar aan werkt. Je traject gebeurt onder begeleiding van een study coach. Naast het bijwonen van en actief participeren in infosessies waarin je leert studeren, lessen herhalen en aandacht vestigt op habit tracking, neem je deel aan coachingsgesprekken met het doel je persoonlijke en professionele talentontwikkeling te ondersteunen. Daarnaast leer je in het kader van problem solving methoden en creatieve technieken aan om te ontleden, oorzaken te identificeren, alternatieven te genereren, te implementeren en te evalueren.',
          instructor: 'Joachim Quartier',
          credits: 5
        },
        {
          course_name: 'Communication I',
          description: 'In Grow I reflecteer je over je eigen handelen. Op basis van een persoonlijke SWOT werk je persoonlijke doelstellingen uit waar je het volledige academiejaar aan werkt. Je traject gebeurt onder begeleiding van een study coach. Naast het bijwonen van en actief participeren in infosessies waarin je leert studeren, lessen herhalen en aandacht vestigt op habit tracking, neem je deel aan coachingsgesprekken met het doel je persoonlijke en professionele talentontwikkeling te ondersteunen. Daarnaast leer je in het kader van problem solving methoden en creatieve technieken aan om te ontleden, oorzaken te identificeren, alternatieven te genereren, te implementeren en te evalueren.',
          instructor: 'Joachim Quartier, Herman Gillaert',
          credits: 5
        },
        {
          course_name: 'Web I',
          description: 'Je leert HTML5 en CSS3 voor het bouwen van een statische website. Je zal in staat zijn een design om te zetten naar een werkende website. Hierbij leer je hoe de pagina-structuur van een website eruit moet zien en ga je aan de slag met het positioneren, vormgeven en inladen van bestanden waarbij je rekening houdt met responsive design. Je schrijft code die performant, gestructureerd & zoekmachinegeoptimaliseerd (SEO) is en waarbij het begrijpen van semantiek essentieel is. Bij dit leerproces zal je fouten kunnen opsporen en de gepaste oplossingen vinden.',
          instructor: 'Ben Verschooris',
          credits: 5
        },
        {
          course_name: 'Makerslab',
          description: 'De cursus omvat elektrische schakelingen, componenten zoals diodes en transistoren, en het verbinden van input- en outputcomponenten tot een werkend geheel. Je leert de logica van elektronica aansturen met een programmeertaal voor interactiviteit. Praktisch gezien pas je deze kennis toe in functionele schakelingen, microcontrollers en het ontwikkelen van prototypes in het fablab. Daarnaast maak je kennis met productontwikkeling, inclusief interaction en experience design, materialen, emotie-opwekking en storytelling.',
          instructor: 'Jan everaert',
          credits: 5
        },
        {
          course_name: 'Motion',
          description: 'In dit opleidingsonderdeel krijg je een inleiding tot de vormgeving en productie van digitaal videomateriaal. Je maakt kennis met de belangrijke basisprincipes in pre-productie, productie, post-productie en distributie van digitale video. Hierbij is er naast de audiovisuele principes: workflow, cameratechnieken & opname; een bijzondere aandacht voor video & geluidsmontage, en hardware. Ook VFX en motion graphics basics komen aan bod: green screen, compositing & color grading; keyframes & easing, shape layers & masks.',
          instructor: 'Denis Baptiste',
          credits: 5
        },
        {
          course_name: 'Full Projects I',
          description: 'Gedurende drie projectweken leer je een goed doordachte website in HTML en CSS te maken. In teamverband worden volgens de basisprincipes van projectmanagement en projectmatig werken binnen de context van multimedia- en communicatietechnologie de fasen doorlopen om te komen tot een bruikbaar en door de klant aanvaard eindproduct. Je wordt tijdens deze periode intensief begeleid door docenten van de opleiding en krijgt je opdracht van een reële klant. Voorafgaand leer je de basisprincipes van klassiek project management en de kenmerken van projecten. Bijzondere aandacht gaat naar een projectmatige aanpak en de basisprincipes van Agile Scrum projectmanagement. De studenten worden tijdens deze periode intensief begeleid door docenten van de opleiding.',
          instructor: 'Jurgen Dedeckere',
          credits: 5
        },
        {
          course_name: 'Design III',
          description: 'In dit opleidingsonderdeel oefen je op het maken van originele en concrete concepten, rekening houdend met een doelpubliek. We doorlopen de verschillende fases van design thinking, geven invulling aan een merk, zoeken naar de juiste marketingkanalen en passende campagnes. Onderwerpen zoals marktonderzoek & doelgroepbepaling, brainstorming, prototyping, merkidentiteit & visueel design, marketingkanalen, pitch & presentatie komen aan bod.',
          instructor: 'Fenna Zamouri',
          credits: 5
        },
        {
          course_name: 'Design IV',
          description: 'Dit opleidingsonderdeel brengt je kennis bij van UX-design, systemisch design en strategisch design. Tijdens de werkcolleges zet je die opgedane kennis meteen ook in de praktijk. Je leert dan op een iteratieve manier, ideeën genereren, die ideeën omzetten in design keuzes en de gemaakte keuzes ook uitwerken in een dienst of product. Concreet gebruik je design research technieken zoals personae, customer journeys, empathy mapping, problem definition,… om in 4 stappen van idee naar product te gaan.',
          instructor: 'Jan Van Caneghem',
          credits: 5
        },
        {
          course_name: 'Development III',
          description: 'Je leert professionele applicaties bouwen met behulp van een platformonafhankelijke objectgeoriënteerde programmeertaal. Hierbij maken we gebruik van bibliotheken of frameworks. Je leert op een objectgeorienteerde manier gestructureerde applicaties maken die data kunnen verwerken. Ook de interactie met databases komt hierbij aan bod. Verder is er aandacht voor gevorderde programmeertechnieken.',
          instructor: 'Bert Heyman',
          credits: 5
        },
        {
          course_name: 'Communication II',
          description: 'Je leert professioneel communiceren in het Engels, zowel schriftelijk als mondeling. Aan de hand van een bedrijfsbezoek, word je ondergedompeld in een Engelstalige omgeving en leer je hoe een multimediaprofessional communiceert en werkt. Tegelijkertijd krijg je een heuse shot marketing, zodat je niet alleen een concreet & realistisch voorbeeld uit het werkveld te zien krijgt, maar ook zelf een analyse kan maken van een belangrijke speler binnen het werkveld. Om je op deze buitenkans voor te bereiden, krijg je enkele belangrijke tools ter beschikking. Naast essentiële taaltips en inzicht in professioneel Engels taalgebruik, leer je ook courante marketingconcepten herkennen, toepassen en evalueren.',
          instructor: 'Joachim Quartier, Helena Pynthe',
          credits: 5
        },
        {
          course_name: 'Grow II',
          description: 'Je werkt een project uit dat kadert in één van de vijf opgelegde domeinen, formuleert persoonlijke doelstellingen, reflecteert over je eigen attitude (scoring bij start en einde van het project) en brengt alle onderdelen samen in een portfolio. Bijzondere aandacht gaat opnieuw naar zelfmanagement en talentontwikkeling. Daarnaast leer je, als start van het Final Work, hoe je een onderzoeksvraagstuk aanpakt in de colleges rond research.',
          instructor: 'Tessa Lagey',
          credits: 5
        },
        {
          course_name: 'Web II',
          description: 'Je leert dynamische websites maken in back- en front-end met behulp van full stack Javascript en andere moderne web technieken. Je leert een volwaardig gestylde website maken dat straalt van persoonlijkheid met geavanceerde CSS animaties . Je web apps krijgen heel wat meer functionaliteiten dankzij het gebruik van Node en NPM. Dynamisch data manipuleren met nosql of realtime databases, de backbone en security van je webapps wordt hier bekeken.',
          instructor: 'Mike Derijke',
          credits: 5
        },
        {
          course_name: 'Full Projects III',
          description: 'Gedurende drie projectweken maak je een goed doordachte toepassing voor IoT of AI. In teamverband worden alle fasen doorlopen om te komen tot een professioneel eindproduct. Het team is verantwoordelijk voor het projectmanagement en komt tot een presenteerbaar en door de klant aanvaard eindproduct door middel van projectmatig werken. Je wordt tijdens deze periode intensief begeleid door docenten van de opleiding. Voorafgaand leer je de basisprincipes van IoT, AI en machine learning.',
          instructor: 'Kobe Vermeire',
          credits: 5
        },
        {
          course_name: 'Full Projects IV',
          description: 'Gedurende drie projectweken werk je, binnen je specialisatiegebied, aan een goed doordachte toepassing voor het herwerken en presenteren van de portfolio’s van medestudenten en externe uitstraling van de opleiding. In teamverband worden alle fasen doorlopen om te komen tot een professioneel eindproduct. Het team is verantwoordelijk voor het projectmanagement en komt tot een presenteerbaar en door de klant aanvaard eindproduct door middel van projectmatig werken.',
          instructor: 'Kobe Vermeire',
          credits: 5
        },
        {
          course_name: 'Design V',
          description: 'In dit opleidingsonderdeel ligt de focus op het ontwerp en de creatie van inhoud in het multi-device tijdperk. In eerste instantie gaat het hierbij over inhoud waarin de onderwerpen van de Design opleidingsonderdelen geïntegreerd worden in multimediale toepassingen die dezelfde ervaring over verschillende toestellen aanbieden. We bekijken hoe een wisselende context invloed heeft op de gebruikservaring. Er zal ook verder gekeken worden naar innovatieve cross-mediale vormgeving die de grenzen tussen digitale en fysieke mediavormen overbrugt.',
          instructor: 'Kobe Vermeire',
          credits: 5
        },
        {
          course_name: 'Development V',
          description: 'Je maakt kennis met de rol en de principes van datavisualisatie en krijgt een inleiding (basis) tot data-analyse en statistiek. Je maakt daarnaast uitgebreid kennis met de grafische taal van datavisualisaties. Deze inzichten worden vervolgens toegepast in een reeks oefeningen gericht op de vormgeving en de implementatie van statische, dynamische en tot slot ook interactieve datavisualisaties. Je leert hierbij werken met gespecialiseerde software-tools en -bibliotheken.',
          instructor: 'Jan Everaert',
          credits: 5
        },
        {
          course_name: 'Communication III',
          description: 'In dit opleidingsonderdeel leer je hoe je een opinie schrijft, een technische publicatie schrijft, een artikel schrijft, presenteert. Je oefent je bovendien in je luister-, lees-, schrijf- en spreekvaardigheden. Je aandacht gaat voornamelijk naar het verbeteren van je mondelinge receptieve en productieve vaardigheden. Je slaagt erin moeiteloos een uiteenzetting in het Nederlands, Frans en Engels te begrijpen over je vakgebied. Daarnaast neem je ook actief deel aan allerlei oefenvormen van gesproken uitdrukkingsvaardigheid in meerdere talen over onderwerpen die verband houden met je technisch-professionele opleiding.',
          instructor: 'Hilko Van Hauthem',
          credits: 5
        },
        {
          course_name: 'Grow III',
          description: 'Net zoals voorgaande jaren werk je rond het formuleren van persoonlijke doelstellingen, het reflecteren en maken van een portfolio. Ook in ‘Grow III’ wordt de nadruk gelegd op zelfmanagement en verdere talentontwikkeling. Daarnaast werk je actief rond ondernemerszin en ondernemerschap in de colleges rond entrepreneurship. Je verwerft kennis in juridische en financiële onderwerpen die als noodzakelijk dienen beschouwd te worden in hun werksituatie als werknemer en/of hun werksituatie als zelfstandig ondernemer.',
          instructor: 'Hilko Van Hauthem',
          credits: 5
        },
        {
          course_name: 'Expert lab',
          description: 'Je onderzoekt de technologieën om de uitwerking van je Final Work te faciliteren. Hiervoor stel je een portfolio op met verschillende prototypes die de onderzochte technische aspecten en designs uitdiepen. Je wordt actief begeleid door een aantal coaches die je richting geven in het onderzoek op zelfstandige basis. Er worden workshops ingericht over relevante themas die voortvloeien uit jullie onderzoeksproces. Ook word je aangemoedigd om expertise te vergaren bij relevante bedrijven, organisaties of kunstenaars. Doorheen het semester wordt het professioneel proces geëvalueerd waarbij gelet wordt op de volgende zaken: Probleemoplossend denken, planning/analyse en uitvoering. Dit zal gebeuren door middel van sprints en milestones. Deze zullen samen met de coaches bepaald worden doorheen het traject.',
          instructor: 'Kobe Vermeire',
          credits: 10
        },
        {
          course_name: 'Internship',
          description: 'Je doorloopt een stageperiode van ten minste twaalf weken (5/5) in een multimedia-omgeving binnen een bedrijf. De stage is onderhevig aan een stageovereenkomst tussen student, hogeschool en bedrijf. De stage wordt begeleid door een stagebegeleider in het bedrijf, die verantwoordelijk is voor de opdracht en werkregeling, controle en evaluatie van de stagiair. De stagiair krijgt ook een lid van het onderwijzend personeel toegewezen als stagebegeleider vanuit de hogeschool. Aan hem of haar rapporteert de stagiair regelmatig via het stagelogboek. Na afloop van de stage dient de stagiair een stageverslag en ontwikkelingsportfolio in en wordt de stage verdedigd bij de stagebegeleiders.',
          instructor: 'Kobe Vermeire',
          credits: 20
        },
        {
          course_name: 'Final Work',
          description: 'Het afstudeerwerk is het logische sluitstuk van een functionele, praktijkgeoriënteerde opleiding. Het is een uitgelezen visitekaartje voor de afgestudeerde, waarbij de student laat zien dat hij/zij alle competenties van de opleiding in hun onderlinge context beheerst. Het uitwerken van de bachelorproef beoogt enerzijds het kunnen toepassen van de tijdens de opleiding opgedane kennis, vaardigheden en attitudes maar zal anderzijds ook een verdere uitbreiding of grotere specialisatie eisen. Het is bedoeld als een leertraject waarin zelfstandig nieuwe kennis en inzichten verworven worden en waar de student zijn/haar professionele vaardigheden doet gelden. De student is in staat om geheel zelfstandig te functioneren als een beginnend professional. In het afstudeerwerk verdiept de student zich in een specifiek multimediaprobleem en een theoretische uitdaging. Aan de basis staat een toegepaste onderzoeksvraag. Het dient een zekere uitdaging in te houden: een nog onbewandelde weg, een nieuwe of nog weinig gekende of toegepaste technologie, een nieuwe toepassing, .... Er wordt dus geen mooi uitgestippelde oplossingsstrategie gevolgd, maar het vergt een zekere toegepaste onderzoeksmentaliteit en creativiteit. In de loop van de maand oktober gaat de student op zoek naar een opdracht. Eisen hiervoor zijn dat de opdracht voldoende uitdaging biedt om te laten zien dat de student over de vereiste competenties van een MCT-professional beschikt. Binnen de opdracht moet de student het volledige proces, van analyse tot product, doorlopen. Daarenboven moet het mogelijk zijn onderzoek te doen naar verschillende oplossingen of mogelijkheden. Het onderwerp van het afstudeerwerk dient goedgekeurd te worden door de opleiding. Begin november wordt het afstudeerwerk opgestart. De student wordt een promotor toegewezen die het afstudeerwerk tussentijds opvolgt en tussentijdse indicatieve evaluaties meegeeft. De bachelorproef wordt afgerond met het indienen van een verslag, het eindproduct en een verdediging van het werk voor een jury van professionals.',
          instructor: 'Kobe Vermeire',
          credits: 10
        },

      ]);
    });
};