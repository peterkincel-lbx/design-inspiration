class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { lang: 'SK', lb: null, ex: null, stuck: false, hidden: false };
    if (typeof window !== 'undefined') {
      this._onScroll = () => {
        const y = window.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || 0;
        const dy = y - (this._lastY || 0);
        this._lastY = y;
        const s = y > 40;
        const h = false;
        if (s !== this.state.stuck || h !== this.state.hidden) this.setState({ stuck: s, hidden: h });
      };
      window.addEventListener('scroll', this._onScroll, { passive: true });
    }
  }
  renderVals() {
    const lang = this.state.lang;
    const COPY = {
      SK: {
        eyebrow: 'Redizajn webu',
        h1a: 'Inšpirácie pre nový web ',
        h1b: 'Luigi’s Box.',
        lead: 'Prehľad vizuálnych inšpirácií, nápadov a poznámok na redizajn súčasného webu.',
        s1tag: 'Vizuálny smer',
        s1title: 'Všeobecná inšpirácia: Bloomreach, Stripe, Shopify.',
        s1body: 'Tieto weby sú skvelou inšpiráciou ako prepojiť prezentáciu produktu s celkovým používateľským zážitkom. Namiesto generických fotografií stavajú na produktovom UI, kreatívnych vizuáloch a abstraktných prvkoch, ktoré dopĺňajú celkový vizuál. Páči sa mi tu jemné animácie, práca s farebnosťou a gradientami a celkový dôraz na zapamätateľný vizuálny zážitok.',
        s1intro: 'Čím sa môžeme inšpirovať:',
        bullets: [
          '**Vizuálne pútavé a „engaging“ sekcie** (a minimum klasických „nudných“ textových boxov)',
          '**Kombinácia abstraktných prvkov a vizuálov** s realistickými UI assetmi a obrazovkami',
          '**Mikroanimácie a animované videá**, ktoré príjemne oživia zážitok z prehliadania webu bez toho, aby sa človeku zatočila hlava',
          '**Decentné použitie gradientov** v pozadí, ktoré môžu byť rozanimované, alebo môžu reagovať na pohyb kurzora, čo oživí prehliadanie webu'
        ],
        s2tag: 'Čo zlepšiť',
        s2title: 'Kde máme priestor na zlepšenie',
        s2body: 'Na webe máme viacero dobre zvládnutých obsahových sekcií, no ich vizuálne spracovanie je často generické a trošku zastaralé. Textové bloky, štatistiky, case studies či integrácie môžeme prezentovať kreatívnejšie a zapamätateľnejšie.',
        s3g1title: 'UI ukážky s obrázkami ľudí v pozadí',
        s3g1body: 'Páčia sa mi tmavé UI assety, kde sú na pozadí použité obrázky alebo videá ľudí, ale sú viac potlačené do pozadia, takže to nepôsobí len ako klasické fotky z fotobanky. Hlavnú rolu stále hrajú UI ukážky, ale je to doplnené ľudským prvkom.',
        s3g2title: 'Použitie reálnych screenshotov z appky.',
        s3g2body: 'Doteraz sme na webe používali ukážky našej aplikácie málo, ale odkedy je prerobená a má oveľa krajší a modernejší dizajn, viac by som screenshoty & UI z nej zapájal do dizajnu ako v ukážkach nižšie.',
        s3g3title: 'Bento grids s väčším priestorom na vizuály a animácie',
        s3g3body: 'Na prezentáciu produktov a features môžeme naďalej používať bento grids (boxy s textom a vizuálom), ale grafika by mala dostať viac priestoru a ideálne by mala byť rozpohybovaná. Aby to nebolo prehnané, animácie by sa mohli spúšťať napríklad pri hoveri ako v ukážkach nižšie.',
        s3g4title: 'Sticky image on scroll',
        s3g4body: 'Toto riešenie som navrhoval už v minulosti a máme ho aj na webe, ale nie je dobre doriešené. V podstate ide o prezentáciu features alebo produktov, kedy sa pri skrolovaní text posúva, ale obrázok či animácia sa mení na základe aktuálneho textového obsahu. Toto riešenie oživí podstránky a zároveň texty netreba skrývať do tabov alebo riešenia typu „accordion“.',
        s4t1: 'Náš branding',
        s4d1: 'Naša farebnosť, typografia a branding je v poriadku a dá sa na jeho základe pokračovať. Kreatívne však môžeme skúšať aj nové veci, ktoré sa prípadne do brandingu spätne dopracujú.',
        s4t2: 'Použitie screenov',
        s4d2: 'Luigisbox.ai je podľa mňa celkom moderný refresh a páči sa mi, že sú tu už zapojené aj screeny z novej aplikácie. Header tohto webu je pekná ukážka, ako pracovať s novými abstraktnými prvkami, gradientmi a screenmi.',
        s4t3: 'Tmavé a moderné assety',
        s4d3: 'Nový set assetov podľa mňa dobre odráža look, ktorý by sme mohli mať v assetoch naprieč celým webom. Sú farebné, vhodne dopĺňajú texty a ideálne sa dajú aj pekne rozpohybovať.',
        s4t4: 'Výrazné CTA bloky',
        s4d4: 'Páčia sa mi výrazné CTA bloky, ktoré pokojne zaberajú aj celú obrazovku a sú zvýraznené výraznejšou farebnosťou či animáciou. Na Luigisbox.ai je toto tiež spravené dobre.',
        s4t5: 'Zmodernizované staršie assety',
        s4d5: 'Podobne ako ukážka vyššie, môžeme viacero starších assetov preniesť do modernejšej podoby. Tieto assety nevyzerajú zle, niektoré stačí refreshnúť do nového looku a pridať mikroanimácie.',
        s4t6: 'Horizontálne taby + vizuál',
        s4d6: 'Páči sa mi tiež tento nápad, kde sa dá medzi obsahom prepínať tabmi a vo vizuáloch nakombinovať fotky ľudí a UI assetov. Myslím, že podobný štýl vieme využiť v niektorých sekciách.',
        s4Alt1: 'Brand guidelines: farebná paleta Luigi’s Box',
        s4Alt2: 'Hero sekcia Luigi’s Box AI s náhľadom aplikácie na tmavom pozadí',
        s4Alt3: 'Sekcia How it works s tmavými kartami a vizualizáciami',
        s4Alt4: 'CTA sekcia s formulárom na tmavom teal pozadí',
        s4Alt5: 'Vizuál s vyhľadávaním, odporúčaniami a filtrami na tmavom pozadí',
        s4Alt6: 'Sekcia s prepínaním funkcií a svetlou kartou s fotografiou',
        s4tag: 'Čo funguje',
        s4title: 'Čo funguje a na čom môžeme stavať',
        s4body: 'Náš branding, farebnosť a typografia predstavujú dobrý východiskový bod pre ďalší rozvoj webu. Máme viacero funkčných prvkov a vizuálnych riešení, ktoré môžeme zachovať, rozvíjať a postupne posúvať novým smerom.',
        s5tag: 'Na záver',
        s5title: 'Zhrnutie',
        s5body: 'Hlavné myšlienky z celej stránky v skratke.',
        sum1t: 'Vizuály namiesto generických fotiek',
        sum1d: 'Produktové UI, reálne screenshoty z appky a kreatívne vizuály s abstraktnými prvkami.',
        sum2t: 'Animácie a gradienty',
        sum2d: 'Mikroanimácie, videá a jemné gradienty v pozadí, ktoré môžu reagovať aj na pohyb kurzora.',
        sum3t: 'Menej generických boxov',
        sum3d: 'Jednoduché textové bloky nechať nižšie v hierarchii a navrch dať vizuálnejšie sekcie.',
        sum4t: 'Výraznejšie štatistiky',
        sum4d: 'Animované načítavanie čísel, jednoduché grafy a silný vizuál, ktoré zvýraznia ich význam.',
        sum5t: 'Case studies s vizuálmi',
        sum5d: 'Individuálne obrázky či grafiky a variabilnejší layout, ktorý dá príbehom viac priestoru.',
        sum6t: 'Viac integrácií na očiach',
        sum6d: 'Viac ikon a animované autoskrolovanie, ktoré ukážu šírku podporovaných platforiem.',
        sum7t: 'Prezentácia produktov a features',
        sum7d: 'Bento grids s väčším priestorom na vizuály, animácie pri hoveri a sticky image on scroll.',
        sum8t: 'Výrazné CTA bloky',
        sum8d: 'Veľké, farebné a animované bloky, ktoré môžu zabrať aj celú obrazovku.',
        sum9t: 'Stavať na brandingu',
        sum9d: 'Farebnosť, typografia a nové tmavé assety sú dobrý základ, na ktorom môžeme ďalej stavať.',
        s3g5title: 'Ďalšie všeobecné ukážky layoutov pre prezentáciu features',
        s3g5body: 'Okrem bento grids alebo typických rozložení „obrázok naľavo, text napravo“ môžeme začleniť aj kreatívnejšie infografiky, screenshoty alebo prepínanie vizuálov cez taby. V skratke: menej textu, viac vizuálov.',
        moreAlt1: 'Inšpirácia: sekcia Loomi: The Search Core od Bloomreach s diagramom',
        moreAlt2: 'Inšpirácia: sekcia od ClickUp s kartami na tmavom pozadí',
        moreAlt3: 'Inšpirácia: sekcia od Stripe s UI náhľadom a kartami s kódom',
        moreAlt4: 'Inšpirácia: sekcia s kartou Add new contact list na tmavom pozadí',
        moreAlt5: 'Inšpirácia: sekcia od Bloomreach s UI náhľadom a mriežkou kanálov',
        moreAlt6: 'Inšpirácia: sekcia od Chargeflow s kartami metrík na tmavom pozadí',
        s3tag: 'Prezentácia produktov',
        s3title: 'Ako lepšie prezentovať produkty a ich funkcie',
        s3body: 'Inšpirácie, ako predstaviť naše produkty vizuálne atraktívnejšie a zároveň zrozumiteľnejšie.',
        todayLabel: 'Dnes',
        betterLabel: 'Ako to zlepšiť',
        cases: [
          {
            tag: 'Príklad 1',
            title: 'Generické textové bloky s boxami',
            body: 'Štyri identické boxy s ikonou a krátkym textom sa zobrazujú bez výraznejšieho vizuálu či interakcie. Ikony plnia skôr dekoratívnu funkciu a samotné benefity produktu nijako vizuálne nepribližujú. Keďže podobný typ sekcie používame na viacerých miestach webu, výsledkom je pomerne monotónny zážitok z prehliadania.',
            img1: 'assets/5538855b44a5c8882823d30335a1bcd1.webp', alt1: 'Aktuálna sekcia Benefits so štyrmi textovými boxami',
            img2: 'assets/37f1f30e21055c79ef78c0e138fc7630.webp', alt2: 'Aktuálna sekcia Benefits s dlhšími textami v boxoch',
            rows: [
              { todayT: 'Text v boxoch s ikonou', todayB: 'Štyri rovnaké boxy s ikonou a pár vetami. Vizuálne nič nepovedia a ikony sú len dekorácia.', betterT: 'Doplniť vizuály', betterB: 'Namiesto ikon možno pridať nejaké UI assety, malé infografiky, alebo pridať okrem textových blokov do tejto sekcie aj nejaký výraznejší vizuál.' },
              { todayT: 'Statické bloky', todayB: 'Všetko sa zobrazí naraz a nič sa nedeje, takže oko nemá kam ísť.', betterT: 'Pridať animáciu alebo vizualizáciu', betterB: 'Jemné odhalenie pri scrollovaní, abstraktná animácia na pozadí, alebo iné mikrointerakcie. Stačí decentne.' },
              { todayT: 'Rovnaká schéma všade', todayB: 'Rovnaký typ bloku používame hore aj dole, takže stránka pôsobí monotónne.', betterT: 'Jednoduché bloky dať nižšie', betterB: 'Môžeme ich niekde zachovať aj takto jednoducho, ale v tom prípade by som ich používal v hierarchii až nižšie na stránke. Navrchu by mali dostať priestor vizuálnejšie sekcie.' }
            ]
          },
          {
            tag: 'Príklad 2',
            title: 'Štatistiky a čísla',
            body: 'Táto sekcia je v zásade dobrá, ale určite by sa dala vizuálne zatraktívniť. Buď úpravou dizajnu, pridaním animácií alebo vizuálu, alebo zvýraznením samotných štatistík.',
            img1: 'assets/39cb3825cb85d440b9d329811824aec8.png', alt1: 'Aktuálna sekcia so tromi štatistikami na tmavom pozadí',
            img2: 'assets/81de8988690923c32bd802d6d00e1faa.png', alt2: 'Aktuálna sekcia s tromi metrikami na svetlom pozadí',
            rows: [
              { todayT: 'Čísla v bielych boxoch', todayB: 'Veľké číslo a jedna veta v troch rovnakých boxoch. Čísla sú statické a bez kontextu.', betterT: 'Oživiť prezentáciu čísel', betterB: 'Využiť animované načítavanie hodnôt, jednoduché grafy, ikonky alebo vizualizácie, ktoré lepšie ukážu ich význam.' },
              { todayT: 'Čísla bez dôkazu', todayB: 'Nie je jasné, z čoho čísla pochádzajú ani koho sa týkajú, takže pôsobia ako marketingové heslo.', betterT: 'Skúsiť kreatívnejšie riešenie', betterB: 'Pri tejto sekcii sa dá viac vizuálne odviazať, pridať abstraktné animácie, silný vizuál alebo skúsiť úplne iný layout.' }
            ]
          },
          {
            tag: 'Príklad 3',
            title: 'Case studies',
            body: 'Súčasná prezentácia case studies je prehľadná, no jednotlivé studies by mohli dostať aj výraznejší vizuálny priestor.',
            img1: 'assets/0ffb91c005d7ef63dcd5e26a2145ef47.webp', alt1: 'Aktuálna sekcia Case studies s kartami klientov a číslami',
            img2: '', alt2: '',
            rows: [
              { betterT: 'Doplniť obrázky', betterB: 'Každá case study môže mať okrem loga individuálny obrázok alebo grafiku, ktorá ju pomôže odlíšiť od ostatných.' },
              { betterT: 'Experimentovať s layoutom', betterB: 'Namiesto radu rovnakých kariet vyskúšať asymetrické alebo variabilnejšie rozloženie, ktoré jednotlivým príbehom poskytne viac priestoru.' },
              { betterT: 'Animácie a interaktivita', betterB: 'Aj na aktuálnom webe sú case study rozpohybované, ale môžeme vyskúšať aj kreatívnejšie možnosti.' }
            ]
          },
          {
            tag: 'Príklad 4',
            title: 'Integrácie',
            body: 'Zákazníci sa často zaujímajú o možnosti integrácie. Súčasná sekcia poskytuje základný prehľad, ale mohla by lepšie ukázať, že máme široké portfólio podporovaných riešení.',
            img1: 'assets/f49e62a383be5a63059e489902dacd3c.png', alt1: 'Aktuálna sekcia Seamless integration s niekoľkými ikonami integrácií',
            img2: '', alt2: '',
            rows: [
              { betterT: 'Zobraziť viac ikon', betterB: 'Zákazník tak už na prvý pohľad zistí, že podporujeme integráciu mnohých platforiem.' },
              { betterT: 'Pridať animácie', betterB: 'Ikonky sa dajú pekne rozpohybovať, či autoskrolovať do strán, čo opäť podporuje pointu, že umožňujeme integráciu s mnohými platformami.' }
            ]
          }
        ],
        exTitle: 'Inšpirácie z iných webov',
        exLead: 'Sem pridáme referencie. Zatiaľ ide o placeholdery.',
        exAlt1: 'Príklad: karty s vizuálmi a posúvaním ďalších benefitov',
        exAlt2: 'Príklad: video ukážky webu',
        exAlt3: 'Príklad: video ukážky webu',
        exCap1: 'Benefity a textové bloky doplnené vizuálmi, prípadne aj s možnosťou skrolovania pozrieť ďalšie, čo robí túto sekciu interaktívnejšiu.',
        exCap2: 'Sekcia s ikonkami, v ktorej je však zároveň inak rozložený nadpis, text a CTA a je tam doplnená výrazná animácia/video.',
        exCap3: 'Jednoduché boxy s ikonkami, ale doplnené animáciou so štatistikami, čo celý blok robí vizuálne pútavejším.',
        exAlt4: 'Príklad: video interaktívnych štatistík s abstraktnými animáciami',
        exCap4: 'Interaktívne štatistiky s abstraktnými animáciami, pri ktorých sa užívateľ zastaví.',
        exAlt5: 'Príklad: video výraznej sekcie so štatistikami a animáciou',
        exCap5: 'Výrazná sekcia a priestor pre štatistiky s animáciou na upútanie pozornosti.',
        exAlt6: 'Príklad: video štatistík, kde sa čísla postupne načítavajú a vizuál púta pozornosť',
        exCap6: 'Ďalší príklad štatistík, kde sa čísla postupne načítavajú a napravo púta pozornosť vizuál.',
        exAlt7: 'Príklad: sekcia s integráciami v dvoch radoch ikon',
        exAlt8: 'Príklad: video sekcie s veľkým množstvom ikon integrácií',
        exAlt9: 'Príklad: video sekcie s integráciami',
        exAlt10: 'Príklad: video sekcie s case studies',
        exAlt11: 'Príklad: video sekcie s case studies',
        exAlt12: 'Príklad: case studies s veľkými fotografiami a krátkymi popismi',
        exAlt13: 'Inšpirácia: hero sekcia s portrétom a živým profilom zákazníka',
        exAlt14: 'Inšpirácia: video prezentácie produktu',
        exAlt15: 'Inšpirácia: sekcia s náhľadom administrácie objednávok na tmavom pozadí',
        exAlt16: 'Inšpirácia: hero sekcia s náhľadom tabuľky v produkte a fialovým gradientom',
        exAlt17: 'Inšpirácia: video prezentácie produktu od Shopify',
        exAlt18: 'Inšpirácia: video prezentácie produktu od Stripe',
        exAlt19: 'Inšpirácia: video prezentácie produktu od Retool',
        exAlt20: 'Inšpirácia: video prezentácie produktu od Calendly',
        exAlt21: 'Inšpirácia: video prezentácie produktu od Rogo',
        exAlt22: 'Inšpirácia: video prezentácie produktu od Experro',
        exLabel: 'Príklad',
        exHint: 'Sem pridať screenshot alebo video',
        mbTitle: 'Screenshoty a príklady',
        mbLead: 'Sem pridáme screenshoty z jednotlivých webov. Zatiaľ ide o placeholdery.',
        hint: 'Sem pridať screenshot',
        hintWide: 'Sem pridať screenshot (široký formát)',
        tiles: [
          ['Bloomreach', 'Hero sekcia, UI obrazovky'],
          ['Stripe', 'Animované gradienty'],
          ['Shopify', 'Mikroanimácie a videá'],
          ['Názov webu', 'Čo nás na ňom zaujalo'],
          ['Názov webu', 'Čo nás na ňom zaujalo']
        ],
        footL: 'Luigi’s Box · interný projekt redizajnu webu',
        footR: 'Máš tip na web? Pridaj ho do moodboardu.'
      },
      EN: {
        eyebrow: 'Website redesign',
        h1a: 'Inspiration for the new ',
        h1b: 'Luigi’s Box website.',
        lead: 'An overview of visual inspirations, ideas and notes for redesigning the current website.',
        s1tag: 'Visual direction',
        s1title: 'General inspiration: Bloomreach, Stripe, Shopify.',
        s1body: 'These websites are great inspiration for connecting the presentation of a product with the overall user experience. Instead of generic photos, they build on product UI, creative visuals and abstract elements that complement the overall look. I like the subtle animations, the work with color and gradients, and the overall emphasis on a memorable visual experience.',
        s1intro: 'What we can draw inspiration from:',
        bullets: [
          '**Visually engaging sections** (and as few classic, boring text boxes as possible)',
          '**A mix of abstract elements and visuals** with realistic UI assets and screens',
          '**Micro-animations and animated videos** that bring the browsing experience to life without making anyone dizzy',
          '**Subtle use of gradients** that don’t have to be static: they can gently move the background or react to the cursor'
        ],
        s2tag: 'What to improve',
        s2title: 'Where we have room to improve',
        s2body: 'We have several well-handled content sections on the website, but their visual treatment is often generic and a bit dated. We can present text blocks, statistics, case studies and integrations more creatively and more memorably.',
        s3g1title: 'UI previews with images of people in the background',
        s3g1body: 'I like dark UI assets where images or videos of people are used in the background but pushed further back, so it does not look like a classic stock photo. The UI previews still play the main role, but they are complemented by a human element.',
        s3g2title: 'Using real screenshots from the app.',
        s3g2body: 'Until now we have used previews of our application on the website only sparingly, but since it has been rebuilt and has a much nicer, more modern design, I would work screenshots and UI from it into the design more, as in the examples below.',
        s3g3title: 'Bento grids with more room for visuals and animations',
        s3g3body: 'To present products and features we can keep using bento grids (boxes with text and a visual), but the graphics should get more room and ideally be animated. To keep it from being overdone, the animations could be triggered on hover, for example, as in the examples below.',
        s3g4title: 'Sticky image on scroll',
        s3g4body: 'I proposed this solution in the past and we already have it on the website, but it is not well executed. It is essentially a presentation of features or products where the text scrolls, but the image or animation changes based on the current text content. This solution brings subpages to life, and the text does not have to be hidden in tabs or an “accordion”-type solution.',
        s4t1: 'Our branding',
        s4d1: 'Our colors, typography and branding are in good shape and we can keep building on them. Creatively, we can still try new things, which may later be worked back into the branding.',
        s4t2: 'Use of screens',
        s4d2: 'Luigisbox.ai is a fairly modern refresh, and I like that screens from the new app are already part of it. The header of this site is a nice example of how to work with new abstract elements, gradients and screens.',
        s4t3: 'Dark, modern assets',
        s4d3: 'I think the new set of assets reflects the look we could have across the whole website. They are colorful, complement the copy well and are ideal for adding motion.',
        s4t4: 'Bold CTA blocks',
        s4d4: 'I like bold CTA blocks that can take up the entire screen and stand out with stronger colors or animation. Luigisbox.ai does this well too.',
        s4t5: 'Modernized older assets',
        s4d5: 'Like the example above, we can bring many older assets into a more modern form. These assets don’t look bad; some only need a refresh to the new look and a few micro-animations.',
        s4t6: 'Horizontal tabs + visual',
        s4d6: 'I also like this idea, where content can be switched with tabs and the visuals combine photos of people with UI assets. I think we can use a similar style in some sections.',
        s4Alt1: 'Brand guidelines: Luigi’s Box color palette',
        s4Alt2: 'Luigi’s Box AI hero section with an app preview on a dark background',
        s4Alt3: 'How it works section with dark cards and visualizations',
        s4Alt4: 'CTA section with a form on a dark teal background',
        s4Alt5: 'Visual with search, recommendations and filters on a dark background',
        s4Alt6: 'Section with feature tabs and a light card with a photo',
        s4tag: 'What works',
        s4title: 'What works and what we can build on',
        s4body: 'Our branding, colors and typography are a good starting point for the further development of the website. We have several functional elements and visual solutions that we can keep, develop and gradually move in a new direction.',
        s5tag: 'In conclusion',
        s5title: 'Summary',
        s5body: 'The main ideas from the whole page at a glance.',
        sum1t: 'Visuals instead of generic photos',
        sum1d: 'Product UI, real screenshots from the app and creative visuals with abstract elements.',
        sum2t: 'Animations and gradients',
        sum2d: 'Micro-animations, videos and subtle background gradients that can also react to the cursor.',
        sum3t: 'Fewer generic boxes',
        sum3d: 'Keep simple text blocks lower in the hierarchy and give the top to more visual sections.',
        sum4t: 'Bolder statistics',
        sum4d: 'Animated count-up numbers, simple charts and a strong visual that emphasize their meaning.',
        sum5t: 'Case studies with visuals',
        sum5d: 'Individual images or graphics and a more varied layout that gives the stories more room.',
        sum6t: 'More integrations in plain sight',
        sum6d: 'More icons and animated auto-scrolling that show the breadth of supported platforms.',
        sum7t: 'Presenting products and features',
        sum7d: 'Bento grids with more room for visuals, animations on hover and sticky image on scroll.',
        sum8t: 'Bold CTA blocks',
        sum8d: 'Large, colorful and animated blocks that can take up the entire screen.',
        sum9t: 'Building on our branding',
        sum9d: 'Our colors, typography and new dark assets are a good foundation we can keep building on.',
        s3g5title: 'More general layout examples for presenting features',
        s3g5body: 'Besides bento grids or the typical “image on the left, text on the right” layouts, we can also include more creative infographics, screenshots or switching visuals via tabs. In short: less text, more visuals.',
        moreAlt1: 'Inspiration: Loomi: The Search Core section by Bloomreach with a diagram',
        moreAlt2: 'Inspiration: section by ClickUp with cards on a dark background',
        moreAlt3: 'Inspiration: section by Stripe with a UI preview and code cards',
        moreAlt4: 'Inspiration: section with an Add new contact list card on a dark background',
        moreAlt5: 'Inspiration: section by Bloomreach with a UI preview and a grid of channels',
        moreAlt6: 'Inspiration: section by Chargeflow with metric cards on a dark background',
        s3tag: 'Product presentation',
        s3title: 'How to present products and their features better',
        s3body: 'Inspiration for presenting our products in a visually more attractive and, at the same time, clearer way.',
        todayLabel: 'Today',
        betterLabel: 'How to improve',
        cases: [
          {
            tag: 'Example 1',
            title: 'Generic text blocks with boxes',
            body: 'Four identical boxes with an icon and short text appear without a more striking visual or any interaction. The icons serve mostly a decorative purpose and do nothing to visually convey the product’s benefits. Since we use a similar type of section in several places on the website, the result is a rather monotonous browsing experience.',
            img1: 'assets/5538855b44a5c8882823d30335a1bcd1.webp', alt1: 'Current Benefits section with four text boxes',
            img2: 'assets/37f1f30e21055c79ef78c0e138fc7630.webp', alt2: 'Current Benefits section with longer texts in boxes',
            rows: [
              { todayT: 'Text in boxes with an icon', todayB: 'Four identical boxes with an icon and a few sentences. They say nothing visually and the icons are just decoration.', betterT: 'Add visuals', betterB: 'Instead of icons, we could add some UI assets, small infographics, or, besides the text blocks, add a more striking visual to this section.' },
              { todayT: 'Static blocks', todayB: 'Everything appears at once and nothing happens, so the eye has nowhere to go.', betterT: 'Add animation or visualization', betterB: 'A subtle reveal on scroll, an abstract animation in the background, or other micro-interactions. Keep it understated.' },
              { todayT: 'The same pattern everywhere', todayB: 'We use the same type of block at the top and the bottom, so the page feels monotonous.', betterT: 'Move simple blocks lower', betterB: 'We can keep them simple like this in some places, but in that case I would use them lower in the page hierarchy. The top should go to more visual sections.' }
            ]
          },
          {
            tag: 'Example 2',
            title: 'Statistics and numbers',
            body: 'This section is fundamentally good, but it could definitely be made more visually appealing, either by adjusting the design, adding animations or a visual, or by emphasizing the statistics themselves.',
            img1: 'assets/39cb3825cb85d440b9d329811824aec8.png', alt1: 'Current section with three statistics on a dark background',
            img2: 'assets/81de8988690923c32bd802d6d00e1faa.png', alt2: 'Current section with three metrics on a light background',
            rows: [
              { todayT: 'Numbers in white boxes', todayB: 'A big number and one sentence in three identical boxes. The numbers are static and without context.', betterT: 'Bring the numbers to life', betterB: 'Use animated count-up values, simple charts, icons or visualizations that show their meaning better.' },
              { todayT: 'Numbers without proof', todayB: 'It is unclear where the numbers come from or whom they concern, so they read like a marketing slogan.', betterT: 'Try a more creative solution', betterB: 'This section leaves room to be more visually bold: add abstract animations, a strong visual, or try a completely different layout.' }
            ]
          },
          {
            tag: 'Example 3',
            title: 'Case studies',
            body: 'The current presentation of case studies is clear, but the individual studies could get more prominent visual space.',
            img1: 'assets/0ffb91c005d7ef63dcd5e26a2145ef47.webp', alt1: 'Current Case studies section with client cards and numbers',
            img2: '', alt2: '',
            rows: [
              { betterT: 'Add images', betterB: 'Besides the logo, each case study can have an individual image or graphic that helps set it apart from the others.' },
              { betterT: 'Experiment with the layout', betterB: 'Instead of a row of identical cards, try an asymmetric or more varied layout that gives each story more room.' },
              { betterT: 'Animations and interactivity', betterB: 'The case studies on the current website are already animated, but we can try more creative options too.' }
            ]
          },
          {
            tag: 'Example 4',
            title: 'Integrations',
            body: 'Customers are often interested in integration options. The current section provides a basic overview, but it could better show that we have a broad portfolio of supported solutions.',
            img1: 'assets/f49e62a383be5a63059e489902dacd3c.png', alt1: 'Current Seamless integration section with a few integration icons',
            img2: '', alt2: '',
            rows: [
              { betterT: 'Show more icons', betterB: 'Customers can see at a glance that we support integration with many platforms.' },
              { betterT: 'Add animations', betterB: 'The icons can be nicely animated or auto-scrolled sideways, which again supports the point that we integrate with many platforms.' }
            ]
          }
        ],
        exTitle: 'Inspiration from other websites',
        exLead: 'References will go here. For now, these are placeholders.',
        exAlt1: 'Example: cards with visuals and a slider for more benefits',
        exAlt2: 'Example: video preview of a website',
        exAlt3: 'Example: video preview of a website',
        exCap1: 'Benefits and text blocks complemented with visuals, possibly with the option to scroll and see more, which makes the section more interactive.',
        exCap2: 'A section with icons, but with a different layout of the heading, text and CTA, and a prominent animation or video added.',
        exCap3: 'Simple boxes with icons, but complemented with an animation of statistics, which makes the whole block more visually engaging.',
        exAlt4: 'Example: video of interactive statistics with abstract animations',
        exCap4: 'Interactive statistics with abstract animations that make the user stop and look.',
        exAlt5: 'Example: video of a prominent section with statistics and animation',
        exCap5: 'A prominent section and space for statistics with an animation to catch attention.',
        exAlt6: 'Example: video of statistics where the numbers load gradually and a visual draws attention',
        exCap6: 'Another example of statistics, where the numbers load gradually and a visual on the right draws attention.',
        exAlt7: 'Example: integrations section with two rows of icons',
        exAlt8: 'Example: video of a section with a large number of integration icons',
        exAlt9: 'Example: video of an integrations section',
        exAlt10: 'Example: video of a case studies section',
        exAlt11: 'Example: video of a case studies section',
        exAlt12: 'Example: case studies with large photos and short descriptions',
        exAlt13: 'Inspiration: hero section with a portrait and a live customer profile',
        exAlt14: 'Inspiration: video of a product presentation',
        exAlt15: 'Inspiration: section with a preview of an order admin on a dark background',
        exAlt16: 'Inspiration: hero section with a preview of a product table and a purple gradient',
        exAlt17: 'Inspiration: video of a product presentation by Shopify',
        exAlt18: 'Inspiration: video of a product presentation by Stripe',
        exAlt19: 'Inspiration: video of a product presentation by Retool',
        exAlt20: 'Inspiration: video of a product presentation by Calendly',
        exAlt21: 'Inspiration: video of a product presentation by Rogo',
        exAlt22: 'Inspiration: video of a product presentation by Experro',
        exLabel: 'Example',
        exHint: 'Add a screenshot or video here',
        mbTitle: 'Screenshots and examples',
        mbLead: 'Screenshots from individual websites will go here. For now, these are placeholders.',
        hint: 'Add a screenshot here',
        hintWide: 'Add a screenshot here (wide format)',
        tiles: [
          ['Bloomreach', 'Hero section, UI screens'],
          ['Stripe', 'Animated gradients'],
          ['Shopify', 'Micro-animations and videos'],
          ['Website name', 'What caught our eye'],
          ['Website name', 'What caught our eye']
        ],
        footL: 'Luigi’s Box · internal website redesign project',
        footR: 'Got a tip for a site? Add it to the moodboard.'
      }
    };
    const c = COPY[lang];
    const figBase = 'margin:0;border-radius:16px;overflow:hidden;background:#fff;border:1px solid #E5EFF2';
    const boxBase = 'background:#F4FBFC;border-bottom:1px dashed #96D9E3;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;color:#007E90;';
    const tiles = c.tiles.map((x, i) => {
      const wide = i === 3;
      return {
        name: x[0],
        note: x[1],
        hint: wide ? c.hintWide : c.hint,
        figStyle: figBase + (wide ? ';grid-column:span 2' : ''),
        boxStyle: boxBase + 'height:' + (i < 3 ? 300 : 340) + 'px'
      };
    });
    const SH = [
      ['c8ba289e3bb1e651877eebec177fd9de.webp', 'Stripe', 'm-a'],
      ['0e709bfe49812b6c5ab1d13f2b90e421.webp', 'Bloomreach', 'm-b'],
      ['bf927fd63b58da697e15b2c279db6412.webp', 'Shopify', 'm-c'],
      ['bbf3d3fe9632009c7ddceaeb29e5f94f.webp', 'Bloomreach', 'm-d'],
      ['4d23f1260cf0c942f18e00cd414ef1ee.webp', 'Stripe', 'm-e'],
      ['700f33d45fb6f66fdbbf5e7ce9a134ec.webp', 'Shopify', 'm-f'],
      ['6ead37ced3ca57664cd0fe7786be588f.webp', 'Bloomreach', 'm-g'],
      ['f7f7fedee58d387ac6891108b6ff3711.webp', 'Shopify', 'm-h'],
      ['d2df3d093d955fe70eeb1cfb3b93720b.webp', 'Stripe', 'm-i'],
      ['df13b9d95179b504240cdede0ece4340.webp', 'Bloomreach', 'm-j'],
      ['7347a6fdc22c13655d58e24dc4deb0b0.webp', 'Bloomreach', 'm-k'],
      ['2ed70f6f90e32703308034d48c40cbc5.webp', 'Stripe', 'm-l'],
      ['ac42d61e12eb421c4b432bd7801d6a26.webp', 'Shopify', 'm-m'],
      ['94e891b9b2cbcefdc54aba8595326a5e.webp', 'Stripe', 'm-n']
    ];
    const n = SH.length;
    const cur = this.state.lb;
    const L = lang === 'SK'
      ? { view: 'Zväčšiť: ', close: 'Zavrieť', prev: 'Predchádzajúci', next: 'Nasledujúci' }
      : { view: 'Enlarge: ', close: 'Close', prev: 'Previous', next: 'Next' };
    const shots = SH.map((s, i) => ({
      src: 'assets/' + s[0],
      alt: s[1],
      cls: s[2],
      label: L.view + s[1] + ' ' + (i + 1),
      open: () => this.setState({ lb: i })
    }));
    const lb = {
      open: cur !== null,
      src: cur !== null ? shots[cur].src : '',
      alt: cur !== null ? shots[cur].alt : '',
      labelClose: L.close,
      labelPrev: L.prev,
      labelNext: L.next,
      close: () => this.setState({ lb: null }),
      stop: (e) => e.stopPropagation(),
      prev: (e) => { e.stopPropagation(); this.setState({ lb: (cur + n - 1) % n }); },
      next: (e) => { e.stopPropagation(); this.setState({ lb: (cur + 1) % n }); }
    };
    const mk = (src, alt, video, caption, url, host) => ({
      isImg: !video, isVideo: video, isPh: false, canOpen: true, src, alt,
      hasCaption: !!url, hasText: !!caption, caption, url, host, isMedia: true, isHead: false, wrap: 'min-width:0',
      zoomLabel: L.view + alt,
      open: () => this.setState({ ex: { src, alt, video } })
    });
    const ph = (n) => ({
      hasCaption: false, isMedia: true, isHead: false, wrap: 'min-width:0', isImg: false, isVideo: false, isPh: true, canOpen: false, open: () => {}, zoomLabel: '',
      label: c.exLabel + ' ' + n, hint: c.exHint
    });
    const addHead = (arr) => arr.slice(0, 2).concat([{
      isHead: true, isMedia: false, hasCaption: false, wrap: 'grid-column:1/-1;max-width:820px;margin-bottom:24px',
      title: c.s3g2title, body: c.s3g2body
    }], arr.slice(2, 4), [{
      isHead: true, isMedia: false, hasCaption: false, wrap: 'grid-column:1/-1;max-width:820px;margin-bottom:24px',
      title: c.s3g3title, body: c.s3g3body
    }], arr.slice(4, 6), [{
      isHead: true, isMedia: false, hasCaption: false, wrap: 'grid-column:1/-1;max-width:820px;margin-bottom:24px',
      title: c.s3g4title, body: c.s3g4body
    }], arr.slice(6));
    const exCur = this.state.ex;
    const ex = {
      open: exCur !== null,
      isVideo: exCur !== null && exCur.video,
      isImg: exCur !== null && !exCur.video,
      src: exCur !== null ? exCur.src : '',
      alt: exCur !== null ? exCur.alt : '',
      labelClose: L.close,
      close: () => this.setState({ ex: null }),
      stop: (e) => e.stopPropagation()
    };
    const stuck = this.state.stuck;
    const tr = 'transition:padding 220ms cubic-bezier(0.4,0,0.2,1),background 220ms cubic-bezier(0.4,0,0.2,1),height 220ms cubic-bezier(0.4,0,0.2,1);';
    const bar = {
      wrap: 'position:fixed;top:0;left:0;right:0;z-index:60;padding:0 24px;color:#fff;' + tr +
        'transition:padding 220ms cubic-bezier(0.4,0,0.2,1),background 220ms cubic-bezier(0.4,0,0.2,1),transform 260ms cubic-bezier(0.22,1,0.36,1);' +
        (this.state.hidden ? 'transform:translateY(-110%);' : 'transform:translateY(0);') +
        (stuck
          ? 'background:rgba(7,12,17,0.85);backdrop-filter:blur(16px) saturate(140%);-webkit-backdrop-filter:blur(16px) saturate(140%)'
          : 'background:transparent'),
      cls: '',
      logoSrc: 'assets/df55b59015b5555993780efc3d554dcc.svg',
      langBox: 'display:flex;gap:4px;padding:4px;border-radius:999px;border:1px solid rgba(255,255,255,0.16)',
      row: 'display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;border-bottom:1px solid rgba(255,255,255,0.08);' + tr +
        (stuck ? 'padding:10px 0' : 'padding:32px 0 20px'),
      logo: 'width:auto;display:block;' + tr + (stuck ? 'height:32px' : 'height:44px')
    };
    const navs = [['sec-s1', c.s1tag], ['sec-s2', c.s2tag], ['sec-s3', c.s3tag], ['sec-s4', c.s4tag], ['sec-s5', c.s5title]].map((n) => ({
      label: n[1],
      go: () => {
        const el = document.getElementById(n[0]);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }));
    const langs = ['SK', 'EN'].map((code) => {
      const active = code === lang;
      return {
        code,
        active,
        pick: () => this.setState({ lang: code }),
        style: 'min-width:48px;min-height:36px;padding:0 14px;border:0;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:0.06em;' +
          (active ? 'background:#96F1FE;color:#060609' : 'background:transparent;color:rgba(255,255,255,0.8)')
      };
    });
    return {
      langs, navs, bar, shots, lb, ex,
      t: {
        navLabel: lang === 'SK' ? 'Sekcie stránky' : 'Page sections',
        eyebrow: c.eyebrow, h1a: c.h1a, h1b: c.h1b, lead: c.lead,
        s1tag: c.s1tag, s1title: c.s1title, s1body: c.s1body, s1intro: c.s1intro,
        bullets: c.bullets.map((text) => ({ parts: text.split('**').map((t, i) => ({ t, style: i % 2 ? 'font-weight:700;color:#111A21;white-space:pre-wrap' : 'white-space:pre-wrap' })).filter((p) => p.t) })),
        s2tag: c.s2tag, s2title: c.s2title, s2body: c.s2body,
        s3g5title: c.s3g5title, s3g5body: c.s3g5body,
        s4tag: c.s4tag, s4title: c.s4title, s4body: c.s4body,
        s5tag: c.s5tag, s5title: c.s5title, s5body: c.s5body,
        sum1t: c.sum1t, sum1d: c.sum1d, sum2t: c.sum2t, sum2d: c.sum2d, sum3t: c.sum3t, sum3d: c.sum3d,
        sum4t: c.sum4t, sum4d: c.sum4d, sum5t: c.sum5t, sum5d: c.sum5d, sum6t: c.sum6t, sum6d: c.sum6d,
        sum7t: c.sum7t, sum7d: c.sum7d, sum8t: c.sum8t, sum8d: c.sum8d, sum9t: c.sum9t, sum9d: c.sum9d,
        s4items: [
          ['c22f2cef9bc0d18cc306d9124a3f18da.png', c.s4Alt1, c.s4t1, c.s4d1],
          ['9c3148e16be00a231020bc23e427556e.webp', c.s4Alt2, c.s4t2, c.s4d2],
          ['06242cb6181f10f8cd02df8f510fd776.webp', c.s4Alt3, c.s4t3, c.s4d3],
          ['987e9952d97ffd7d0826d757f96554dd.webp', c.s4Alt4, c.s4t4, c.s4d4],
          ['d082106ec2936f19e15008864895870e.webp', c.s4Alt5, c.s4t5, c.s4d5],
          ['9fe7d8e569d7631f98c1e1c9ea7605bd.webp', c.s4Alt6, c.s4t6, c.s4d6]
        ].map((m) => Object.assign(mk('assets/' + m[0], m[1], false), { title: m[2], text: m[3] })),
        s3more: [
          ['800142c69811702201358077cced3aa0.webp', c.moreAlt1],
          ['7d56b92fcb1cb7324e3768429f25f8cb.webp', c.moreAlt2],
          ['da611dc6e07f62401a26d1c01beaf1bb.webp', c.moreAlt3],
          ['d0dd9741d2e54f68eb9cf394bda89620.png', c.moreAlt4],
          ['4479f4753685d6316ef1d68de6600934.webp', c.moreAlt5],
          ['cb8d57d5ed2a9aafeba14b00c553d42e.webp', c.moreAlt6]
        ].map((m) => mk('assets/' + m[0], m[1], false)),
        s3tag: c.s3tag, s3title: c.s3title, s3body: c.s3body, s3g2title: c.s3g2title, s3g2body: c.s3g2body, s3g3title: c.s3g3title, s3g3body: c.s3g3body, s3g4title: c.s3g4title, s3g4body: c.s3g4body, s3g1title: c.s3g1title, s3g1body: c.s3g1body,
        s3items: addHead([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((k) => k === 1
          ? mk('assets/ba315d1e48836902b300c6c817746c93.webp', c.exAlt13, false, '', 'https://www.bloomreach.com/en/products/loomi-ai', 'Bloomreach Loomi')
          : k === 2
            ? mk('assets/10e2c171ca963931135283e97d2ce7fc.mp4', c.exAlt14, true, '', 'https://www.bloomreach.com/en', 'Bloomreach')
            : k === 3
              ? mk('assets/61da2be10d58da1a547d5ee1da5a6d10.webp', c.exAlt15, false, '', 'https://www.shopify.com/sk/orders', 'Shopify')
              : k === 4
                ? mk('assets/0ae316aa593a2210d7384405c832602a.webp', c.exAlt16, false, '', 'https://www.silnahealth.com/prior-authorization/', 'Silna')
                : k === 5
                  ? mk('assets/f9fd25d85b91fc83fb63061759023e45.mp4', c.exAlt17, true, '', 'https://www.shopify.com/sk/agentic-storefronts', 'Shopify')
                  : k === 6
                    ? mk('assets/c6e06b24cfe3184d43e8d6046cee28bf.mp4', c.exAlt18, true, '', 'https://stripe.com/en-sk', 'Stripe')
                    : k <= 10
                      ? [
                          mk('assets/b3313747b2d2c12888416d037ce10833.mp4', c.exAlt19, true, '', 'https://retool.com/', 'Retool'),
                          mk('assets/c6fa32a2c4c5c53e4fc28ed8e6bf1bfd.mp4', c.exAlt20, true, '', 'https://calendly.com/', 'Calendly'),
                          mk('assets/7198dd303e3e18120de428fc354796c8.mp4', c.exAlt21, true, '', 'https://rogo.com/', 'Rogo'),
                          mk('assets/f1e3d676a1468400b78cb706e27a9be7.mp4', c.exAlt22, true, '', 'https://www.experro.com/gen-ai-search/', 'Experro')
                        ][k - 7]
                      : ph(k))),
        todayLabel: c.todayLabel, betterLabel: c.betterLabel, cases: c.cases.map((k, i) => Object.assign({}, k, {
          sep: '',
          examples: i === 0
            ? [
                mk('assets/32bfca9b864d89525a3c50d19c4b6d9b.webp', c.exAlt1, false, c.exCap1, 'https://insiderone.com/channels/email/', 'Insider One'),
                mk('assets/0d234b403eb6ea48bd42524c9fd5b0fe.mp4', c.exAlt2, true, c.exCap2, 'https://www.typeform.com/', 'Typeform'),
                mk('assets/52c24d9b637accd048ac12e938975baf.mp4', c.exAlt3, true, c.exCap3, 'https://www.bloomreach.com/en/products/ecommerce-search/product-recommendations', 'Bloomreach')
              ]
            : [1, 2, 3].map((n) => i === 3 ? [
                mk('assets/134ce09f4279fd9b86f59d365d5c5b8f.mp4', c.exAlt8, true, '', 'https://www.shopify.com/sk', 'Shopify'),
                mk('assets/b18b3d4d3c81d58d6e4d4b1193df28a0.webp', c.exAlt7, false, '', 'https://calendly.com/', 'Calendly'),
                mk('assets/aa0a8b54c5e4f09d6333b3750022e9f2.mp4', c.exAlt9, true, '', 'https://www.personio.com/', 'Personio')
              ][n - 1] : i === 2 ? [
                mk('assets/fdd1f6260ca333c355d0a025e1e5ec18.mp4', c.exAlt10, true, '', 'https://insiderone.com/', 'Insider One'),
                mk('assets/fc76778856904efabd52ac01a8b7305d.mp4', c.exAlt11, true, '', 'https://www.checkout.com/', 'Checkout.com'),
                mk('assets/084edc283aa8953f64c29926fbf4ab61.webp', c.exAlt12, false, '', 'https://www.bloomreach.com/en', 'Bloomreach')
              ][n - 1] : i !== 1 ? ph(n) : n === 1 ? mk('assets/b50a200543db8b3c2b6e7e02b0430b40.mp4', c.exAlt4, true, c.exCap4, 'https://stripe.com/en-sk', 'Stripe') : n === 2 ? mk('assets/7424776b6b4674a57b9530a230599b82.mp4', c.exAlt5, true, c.exCap5, 'https://www.chargeflow.io/', 'Chargeflow') : n === 3 ? mk('assets/9c5a0a346b3fc60628283a858d3c52d3.mp4', c.exAlt6, true, c.exCap6, 'https://www.tennr.com/', 'Tennr') : ({ hasCaption: false, isImg: false, isVideo: false, isPh: true, canOpen: false, open: () => {}, zoomLabel: '', label: c.exLabel + ' ' + n, hint: c.exHint })),
          zoomLabel: L.view + k.alt1,
          openToday: () => this.setState({ ex: { src: k.img1, alt: k.alt1, video: false } })
        })),
        exTitle: c.exTitle, exLead: c.exLead,
        examples: [1, 2, 3, 4, 5, 6].map((k) => ({ label: c.exLabel + ' ' + k, hint: c.exHint })),
        mbTitle: c.mbTitle, mbLead: c.mbLead, tiles,
        footL: c.footL, footR: c.footR
      }
    };
  }
}
