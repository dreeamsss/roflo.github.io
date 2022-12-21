document.addEventListener("DOMContentLoaded", function() {
    // const promise = fetch("../resources/data/data.json")
    // .then(response => {
    //     return response.json();
    // });

    const mainBtn = document.querySelector(".main__btn");
    mainBtn.addEventListener("click", function() {
        const data = getData();
        const randomInt = random(0, data.length - 1);
        const randomMessage = (data[randomInt].message).toUpperCase();
        const messageElement = document.querySelector(".main__message");

        messageElement.innerHTML = `ТЫ <span class="text-danger">${randomMessage}</span>`;
    });


    const random = (min, max) => {
        const random = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(random);
    };

    const getData = () => {
        return [
            {
                "message": "АНУС"
            },
            {
                "message": "АРМЯНСКАЯ КОРОЛЕВА"
            },
            {
                "message": "АНАЛЬНОЕ ОТВЕРСТИЕ"
            },
            {
                "message": "БАЛУН"
            },
            {
                "message": "БАРАБАННАЯ ПАЛОЧКА"
            },
            {
                "message": "БЗДЕНИЕ"
            },
            {
                "message": "БЗДЕЯ"
            },
            {
                "message": "БЛУД"
            },
            {
                "message": "БИКСА"
            },
            {
                "message": "БЛЯДВО"
            },
            {
                "message": "БЛЯДИНА"
            },
            {
                "message": "БЛЯДКИ"
            },
            {
                "message": "БЛЯДОХОД"
            },
            {
                "message": "БЛЯДЬ РУБЛЕВАЯ"
            },
            {
                "message": "БЛЯДУН"
            },
            {
                "message": "БЛЯДЬ ВОКЗАЛЬНАЯ"
            },
            {
                "message": "БЛЯДЬМО"
            },
            {
                "message": "БЛЯДЮШКА"
            },
            {
                "message": "БЛЯХА МУХА"
            },
            {
                "message": "БОРДЕЛЕН"
            },
            {
                "message": "БУНКЕР"
            },
            {
                "message": "БАРДАЧ"
            },
            {
                "message": "БЕЗМУДЫЙ"
            },
            {
                "message": "БЗДУН"
            },
            {
                "message": "БЛУДИЛИЩЕ"
            },
            {
                "message": "БЛЯДЕХА"
            },
            {
                "message": "БЛЯДИСТКА"
            },
            {
                "message": "БЛЯДОВОЗКА"
            },
            {
                "message": "БЛЯДЬ"
            },
            {
                "message": "БЛЯДЬ ПОЛОСАТАЯ"
            },
            {
                "message": "БЛЯДЬ, У КОТОРОЙ НЕГДЕ ПРОБЫ СТАВИТЬ"
            },
            {
                "message": "БЛЯДЮГА"
            },
            {
                "message": "БЛЯДЮШНИК"
            },
            {
                "message": "БАЛДА"
            },
            {
                "message": "БАННАЯ ДЕВКА, ОДАЛИСКА"
            },
            {
                "message": "БАТОН"
            },
            {
                "message": "БЕДКА"
            },
            {
                "message": "БЗДЕХА"
            },
            {
                "message": "БЛЯДИЩЕ"
            },
            {
                "message": "БЛЯДОЛИЗ"
            },
            {
                "message": "БЛЯДЮРА"
            },
            {
                "message": "БЛЯХА"
            },
            {
                "message": "ВАФЛЯ"
            },
            {
                "message": "ВАРЗУХА"
            },
            {
                "message": "ВАКХАНКА"
            },
            {
                "message": "ВЗЪЕБЩИК"
            },
            {
                "message": "ВЫЕБИСТЫЙ ХУЕСОС"
            },
            {
                "message": "ВЛАГАЛИЩЕ"
            },
            {
                "message": "ВАФЛИСТ"
            },
            {
                "message": "ГОВНЯНЫЙ"
            },
            {
                "message": "ГОМИК"
            },
            {
                "message": "ГУМОЗНИК"
            },
            {
                "message": "ГОВНЮК"
            },
            {
                "message": "ГОВНОМЕР"
            },
            {
                "message": "ГОВНОДАВ"
            },
            {
                "message": "ГОВНОЕД"
            },
            {
                "message": "ГОВНЕЦО"
            },
            {
                "message": "ГАШЕТКА"
            },
            {
                "message": "ГОВНОЕБ"
            },
            {
                "message": "ГОНДОН"
            },
            {
                "message": "ГУЗНОЕБ"
            },
            {
                "message": "ГОВНОМЕР"
            },
            {
                "message": "ГЛИНОМЕС"
            },
            {
                "message": "ДАВАЛКА"
            },
            {
                "message": "ДАВАХА"
            },
            {
                "message": "ДЕРЬМО"
            },
            {
                "message": "ДРИСТУН"
            },
            {
                "message": "ДВУСТВОЛКА"
            },
            {
                "message": "ДЯТЕЛ"
            },
            {
                "message": "ЕБАРИШКО"
            },
            {
                "message": "ЕБАНАТИК"
            },
            {
                "message": "ЕБЕЛЬНИЦА"
            },
            {
                "message": "ЕБЛИВЫЙ ДОЛБОЕБ"
            },
            {
                "message": "ЕБНУТЫЙ"
            },
            {
                "message": "ЕБУР"
            },
            {
                "message": "ЕЛДА"
            },
            {
                "message": "ЕБОТА"
            },
            {
                "message": "ЕБАЛО"
            },
            {
                "message": "ЕБАТОРИЯ"
            },
            {
                "message": "ЕБАЧЬ"
            },
            {
                "message": "ЖОПА"
            },
            {
                "message": "ЖМЫХ"
            },
            {
                "message": "ЖИРЕХА"
            },
            {
                "message": "ЖОПОЕБ"
            },
            {
                "message": "ЗАБИЯКА"
            },
            {
                "message": "ЗАЕБА"
            },
            {
                "message": "ЗАСРАНКА"
            },
            {
                "message": "ЗООФИЛ"
            },
            {
                "message": "ЗОЙКА"
            },
            {
                "message": "ЗАПРИДУХ"
            },
            {
                "message": "ЗАЛУПА"
            },
            {
                "message": "ЗАГЛОТ"
            },
            {
                "message": "ЗАТРУХА"
            },
            {
                "message": "ЗОЙКА"
            },
            {
                "message": "КАСТРАТ"
            },
            {
                "message": "КРЫСА"
            },
            {
                "message": "КУРВА"
            },
            {
                "message": "ЛЯРВА"
            },
            {
                "message": "ЛЮЭС"
            },
            {
                "message": "ЛОХАНКА"
            },
            {
                "message": "ЛЮБОДЕЙ"
            },
            {
                "message": "МАНДЮК"
            },
            {
                "message": "МИНЖА"
            },
            {
                "message": "МУДОЗВОН",
                "link": "https://mat2.slovaronline.com/1897-MUDOZVON"
            },
            {
                "message": "МУНДШТУК",
                "link": "https://mat2.slovaronline.com/1907-MUNDSHTUK"
            },
            {
                "message": "МУДАК",
                "link": "https://mat2.slovaronline.com/1886-MUDAK"
            },
            {
                "message": "МУДОЕБ",
                "link": "https://mat2.slovaronline.com/1896-MUDOEB"
            },
            {
                "message": "МУДИК",
                "link": "https://mat2.slovaronline.com/1889-MUDIK"
            },
            {
                "message": "МУДИЛО",
                "link": "https://mat2.slovaronline.com/1890-MUDILO"
            },
            {
                "message": "МУДОФЕР",
                "link": "https://mat2.slovaronline.com/1900-MUDOFER"
            },
            {
                "message": "МУДОФЕР",
                "link": "https://mat2.slovaronline.com/1900-MUDOFER"
            },
            {
                "message": "МИНЖА",
                "link": "https://mat2.slovaronline.com/1864-MINZHA"
            },
            {
                "message": "МОЗГОЕБКА",
                "link": "https://mat2.slovaronline.com/1866-MOZGOEB"
            },
            {
                "message": "МАЭСТРО",
                "link": "https://mat2.slovaronline.com/1845-MAESTRO"
            },
            {
                "message": "МАНЬКА",
                "link": "https://mat2.slovaronline.com/1811-MANKA"
            },
            {
                "message": "МАРКСИСТ",
                "link": "https://mat2.slovaronline.com/1817-MARKSIST"
            },
            {
                "message": "МАРА",
                "link": "https://mat2.slovaronline.com/1812-MARA"
            },
            {
                "message": "МАЙОНЕЗ",
                "link": "https://mat2.slovaronline.com/1743-MAYONEZ"
            },
            {
                "message": "МУСЬКА",
                "link": "https://mat2.slovaronline.com/1908-MUSKA"
            },
            {
                "message": "МОТЫЛЕК",
                "link": "https://mat2.slovaronline.com/1878-MOTYILEK"
            },
            {
                "message": "МИНЕТЧИЦА",
                "link": "https://mat2.slovaronline.com/1863-MINETCHITSA"
            },
            {
                "message": "ОБИЖЕНКА",
                "link": "https://mat2.slovaronline.com/1900-MUDOFER"
            },
            {
                "message": "ОБОСРАНЕЦ",
                "link": "https://mat2.slovaronline.com/2246-OBOSRANETS"
            },
            {
                "message": "ПАДАЛЕЦ",
                "link": "https://mat2.slovaronline.com/2853-PADALETS"
            },
            {
                "message": "ПАДЛЮКА",
                "link": "https://mat2.slovaronline.com/2859-PADLYUKA"
            },
            {
                "message": "ПЕДЕРАСТ",
                "link": "https://mat2.slovaronline.com/2875-PEDERAST"
            },
            {
                "message": "ПЕДРИЛО",
                "link": "https://mat2.slovaronline.com/2881-PEDRILO"
            },
            {
                "message": "ПЕДИК",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "ПИЗДОБОЛ",
                "link": "https://mat2.slovaronline.com/3121-PIZDOBOL"
            },
            {
                "message": "ПИЗДОЛИЗ",
                "link": "https://mat2.slovaronline.com/3137-PIZDOLIZ"
            },
            {
                "message": "ПИЗДОН",
                "link": "https://mat2.slovaronline.com/3144-PIZDON"
            },
            {
                "message": "ПИЗДЮГА",
                "link": "https://mat2.slovaronline.com/3172-PIZDYUGA"
            },
            {
                "message": "ПИЗДЮК",
                "link": "https://mat2.slovaronline.com/3173-PIZDYUK"
            },
            {
                "message": "РАЗЪЕБАЙ",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "РАЗЪЕБА",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "РАСТАК",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "УЕБИЩЕ",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "бздун",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "бздюх",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "блудилище",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "говно",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "говенка",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "говночист",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "говяга",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "говнюк",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "гнида",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "гнидас",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "гнидазавр",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "гниданидзе",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "гондольер",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "даун",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "даунитто",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дерьмо",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дерьмодемон",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дерьмище",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дрисня",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дрисня",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дристун",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дрочила",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "суходрочер",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дебил",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дебилоид",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дцпшник",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "елдаклык",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "елдище",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "жопа",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "жопошник",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "залупа",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "залупинец",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "засеря",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "засранец",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "защеканец",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "идиот",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "курва",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "кретин",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "кретиноид",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "курвырь",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "лезбуха",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "лох",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "мокрощелка",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "мудак",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "мудень",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "мудила",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "мудозвон",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "мудасраная дерьмопроелдина",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "мусор",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "педрик",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пидор",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пидорасина",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пидорормитна",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пидорюга",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "педерастер",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "спидозный пес",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "ссаная псина",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "спермер",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "спермобак",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "сракаборец",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "сучара",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "даунитто",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "сука",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "сучище",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "даунитто",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "хероед",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "хрен моржовый",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "шлюха",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "шлюшидзе",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "горлопай",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "верстан",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "валява",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "балабан",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "балабой",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "ветрогон",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "глупыня",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "додон",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "долбень",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дурень",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "губоня",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дурбень",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "дупоплет",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "жабенок",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "глист",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "маламзя",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "лататуй",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "лешебойник",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "обламон",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "облапай",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "орясина",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "ослоп",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пакостун",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пантеха",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пентюх",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "пест",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "лодыга",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "чупаха",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "сбродыга",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "плешак",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
            {
                "message": "окаяха",
                "link": "https://mat2.slovaronline.com/2880-PEDIK"
            },
        ];  
    }
});
