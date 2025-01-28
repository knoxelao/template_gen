const attributes = [
    {
        name: "Штрихкод",
        code: "barcode",
        type: "text",
        required: true,
        validation: { regex: /^\d{13}$/, errorMessage: "Must be 13 digits" },
        defaultValue: "",
    },
    {
        name: "Название товара",
        code: "longName",
        type: "text",
        required: false,
        validation: { maxLength: 100 },
        defaultValue: "",
    },
    {
        name: "Кол-во",
        code: "markCount",
        type: "number",
        required: true,
        validation: { min: 1, max: 999 },
        defaultValue: "",
    },
    {
        name: "Юнит",
        code: "markCountUnitList",
        type: "select",
        required: true,
        values: [
            { name: "мл", code: "millilitre", aliases: ["миллилитры", "ml"] },
            { name: "л", code: "liter", aliases: ["литры", "l"] },
            { name: "г", code: "gram", aliases: ["граммы", "g"] },
            { name: "кг", code: "kilogram", aliases: ["килограммы", "kg"] },
            { name: "шт.", code: "unit", aliases: ["штуки", "pcs"] },
        ],
        defaultValue: "",
    },
    {
        name: "Страна",
        code: "countryISO",
        type: "select",
        required: false,
        values: [
        
{ name: "Аруба", code: "ABW", aliases: ["Aruba"] },
{ name: "Афганистан", code: "AFG", aliases: [] },
{ name: "Ангола", code: "AGO", aliases: [] },
{ name: "Ангилья", code: "AIA", aliases: [] },
{ name: "Аландские острова", code: "ALA", aliases: [] },
{ name: "Албания", code: "ALB", aliases: [] },
{ name: "Андорра", code: "AND", aliases: [] },
{ name: "Объединённые Арабские Эмираты", code: "ARE", aliases: ["ОАЭ"] },
{ name: "Аргентина", code: "ARG", aliases: [] },
{ name: "Армения", code: "ARM", aliases: [] },
{ name: "Американское Самоа", code: "ASM", aliases: [] },
{ name: "Антарктика", code: "ATA", aliases: [] },
{ name: "Французские Южные и Антарктические территории", code: "ATF", aliases: [] },
{ name: "Антигуа и Барбуда", code: "ATG", aliases: [] },
{ name: "Австралия", code: "AUS", aliases: [] },
{ name: "Австрия", code: "AUT", aliases: [] },
{ name: "Азербайджан", code: "AZE", aliases: [] },
{ name: "Бурунди", code: "BDI", aliases: [] },
{ name: "Бельгия", code: "BEL", aliases: [] },
{ name: "Бенин", code: "BEN", aliases: [] },
{ name: "Бонайре", code: "BES", aliases: [] },
{ name: "Буркина-Фасо", code: "BFA", aliases: [] },
{ name: "Бангладеш", code: "BGD", aliases: [] },
{ name: "Болгария", code: "BGR", aliases: [] },
{ name: "Бахрейн", code: "BHR", aliases: [] },
{ name: "Багамские острова", code: "BHS", aliases: [] },
{ name: "Босния и Герцеговина", code: "BIH", aliases: ["Босния"] },
{ name: "Сен-Бартелеми", code: "BLM", aliases: [] },
{ name: "Беларусь", code: "BLR", aliases: ["Белоруссия"] },
{ name: "Белиз", code: "BLZ", aliases: [] },
{ name: "Бермудские Острова", code: "BMU", aliases: [] },
{ name: "Боливия", code: "BOL", aliases: [] },
{ name: "Бразилия", code: "BRA", aliases: [] },
{ name: "Барбадос", code: "BRB", aliases: [] },
{ name: "Бруней", code: "BRN", aliases: [] },
{ name: "Бутан", code: "BTN", aliases: [] },
{ name: "Остров Буве", code: "BVT", aliases: [] },
{ name: "Ботсвана", code: "BWA", aliases: [] },
{ name: "Центральноафриканская Республика", code: "CAF", aliases: [] },
{ name: "Канада", code: "CAN", aliases: [] },
{ name: "Кокосовые острова", code: "CCK", aliases: [] },
{ name: "Швейцария", code: "CHE", aliases: [] },
{ name: "Чили", code: "CHL", aliases: [] },
{ name: "Китай", code: "CHN", aliases: [] },
{ name: "Кот-д’Ивуар", code: "CIV", aliases: [] },
{ name: "Камерун", code: "CMR", aliases: [] },
{ name: "Демократическая Республика Конго", code: "COD", aliases: [] },
{ name: "Конго", code: "COG", aliases: [] },
{ name: "Острова Кука", code: "COK", aliases: [] },
{ name: "Колумбия", code: "COL", aliases: [] },
{ name: "Коморы", code: "COM", aliases: [] },
{ name: "Кабо-Верде", code: "CPV", aliases: [] },
{ name: "Коста-Рика", code: "CRI", aliases: [] },
{ name: "Куба", code: "CUB", aliases: [] },
{ name: "Кюрасао", code: "CUW", aliases: [] },
{ name: "Остров Рождества", code: "CXR", aliases: [] },
{ name: "Острова Кайман", code: "CYM", aliases: [] },
{ name: "Кипр", code: "CYP", aliases: [] },
{ name: "Чехия", code: "CZE", aliases: [] },
{ name: "Германия", code: "DEU", aliases: [] },
{ name: "Джибути", code: "DJI", aliases: [] },
{ name: "Доминика", code: "DMA", aliases: [] },
{ name: "Дания", code: "DNK", aliases: [] },
{ name: "Доминиканская Республика", code: "DOM", aliases: [] },
{ name: "Алжир", code: "DZA", aliases: [] },
{ name: "Эквадор", code: "ECU", aliases: [] },
{ name: "Египет", code: "EGY", aliases: [] },
{ name: "Эритрея", code: "ERI", aliases: [] },
{ name: "Западная Сахара", code: "ESH", aliases: [] },
{ name: "Испания", code: "ESP", aliases: [] },
{ name: "Эстония", code: "EST", aliases: [] },
{ name: "Эфиопия", code: "ETH", aliases: [] },
{ name: "Финляндия", code: "FIN", aliases: [] },
{ name: "Фиджи", code: "FJI", aliases: [] },
{ name: "Фолклендские острова", code: "FLK", aliases: [] },
{ name: "Франция", code: "FRA", aliases: [] },
{ name: "Фарерские острова", code: "FRO", aliases: [] },
{ name: "Микронезия", code: "FSM", aliases: [] },
{ name: "Габон", code: "GAB", aliases: [] },
{ name: "Великобритания", code: "GBR", aliases: ["Англия"] },
{ name: "Грузия", code: "GEO", aliases: [] },
{ name: "Гернси", code: "GGY", aliases: [] },
{ name: "Гана", code: "GHA", aliases: [] },
{ name: "Гибралтар", code: "GIB", aliases: [] },
{ name: "Гвинея", code: "GIN", aliases: [] },
{ name: "Гваделупа", code: "GLP", aliases: [] },
{ name: "Гамбия", code: "GMB", aliases: [] },
{ name: "Гвинея-Бисау", code: "GNB", aliases: [] },
{ name: "Экваториальная Гвинея", code: "GNQ", aliases: [] },
{ name: "Греция", code: "GRC", aliases: [] },
{ name: "Гренада", code: "GRD", aliases: [] },
{ name: "Гренландия", code: "GRL", aliases: [] },
{ name: "Гватемала", code: "GTM", aliases: [] },
{ name: "Гвиана", code: "GUF", aliases: [] },
{ name: "Гуам", code: "GUM", aliases: [] },
{ name: "Гайана", code: "GUY", aliases: [] },
{ name: "Гонконг", code: "HKG", aliases: [] },
{ name: "Остров Херд и острова Макдональд", code: "HMD", aliases: [] },
{ name: "Гондурас", code: "HND", aliases: [] },
{ name: "Хорватия", code: "HRV", aliases: [] },
{ name: "Гаити", code: "HTI", aliases: [] },
{ name: "Венгрия", code: "HUN", aliases: [] },
{ name: "Индонезия", code: "IDN", aliases: [] },
{ name: "Остров Мэн", code: "IMN", aliases: [] },
{ name: "Индия", code: "IND", aliases: [] },
{ name: "Британская территория в Индийском океане", code: "IOT", aliases: [] },
{ name: "Ирландия", code: "IRL", aliases: [] },
{ name: "Иран", code: "IRN", aliases: [] },
{ name: "Ирак", code: "IRQ", aliases: [] },
{ name: "Исландия", code: "ISL", aliases: [] },
{ name: "Израиль", code: "ISR", aliases: [] },
{ name: "Италия", code: "ITA", aliases: [] },
{ name: "Ямайка", code: "JAM", aliases: [] },
{ name: "Джерси", code: "JEY", aliases: [] },
{ name: "Иордания", code: "JOR", aliases: [] },
{ name: "Япония", code: "JPN", aliases: [] },
{ name: "Казахстан", code: "KAZ", aliases: [] },
{ name: "Кения", code: "KEN", aliases: [] },
{ name: "Киргизия", code: "KGZ", aliases: [] },
{ name: "Камбоджа", code: "KHM", aliases: [] },
{ name: "Кирибати", code: "KIR", aliases: [] },
{ name: "Сент-Китс и Невис", code: "KNA", aliases: [] },
{ name: "Южная Корея", code: "KOR", aliases: [] },
{ name: "Кувейт", code: "KWT", aliases: [] },
{ name: "Лаос", code: "LAO", aliases: [] },
{ name: "Ливан", code: "LBN", aliases: [] },
{ name: "Либерия", code: "LBR", aliases: [] },
{ name: "Ливия", code: "LBY", aliases: [] },
{ name: "Сент-Люсия", code: "LCA", aliases: [] },
{ name: "Лихтенштейн", code: "LIE", aliases: [] },
{ name: "Шри-Ланка", code: "LKA", aliases: [] },
{ name: "Лесото", code: "LSO", aliases: [] },
{ name: "Литва", code: "LTU", aliases: [] },
{ name: "Люксембург", code: "LUX", aliases: [] },
{ name: "Латвия", code: "LVA", aliases: [] },
{ name: "Макао", code: "MAC", aliases: [] },
{ name: "Сен-Мартен", code: "MAF", aliases: [] },
{ name: "Марокко", code: "MAR", aliases: [] },
{ name: "Монако", code: "MCO", aliases: [] },
{ name: "Молдавия", code: "MDA", aliases: [] },
{ name: "Мадагаскар", code: "MDG", aliases: [] },
{ name: "Мальдивы", code: "MDV", aliases: [] },
{ name: "Мексика", code: "MEX", aliases: [] },
{ name: "Маршалловы Острова", code: "MHL", aliases: [] },
{ name: "Северная Македония", code: "MKD", aliases: [] },
{ name: "Мали", code: "MLI", aliases: [] },
{ name: "Мальта", code: "MLT", aliases: [] },
{ name: "Мьянма", code: "MMR", aliases: [] },
{ name: "Черногория", code: "MNE", aliases: [] },
{ name: "Монголия", code: "MNG", aliases: [] },
{ name: "Северные Марианские острова", code: "MNP", aliases: [] },
{ name: "Мозамбик", code: "MOZ", aliases: [] },
{ name: "Мавритания", code: "MRT", aliases: [] },
{ name: "Монтсеррат", code: "MSR", aliases: [] },
{ name: "Мартиника", code: "MTQ", aliases: [] },
{ name: "Маврикий", code: "MUS", aliases: [] },
{ name: "Малави", code: "MWI", aliases: [] },
{ name: "Малайзия", code: "MYS", aliases: [] },
{ name: "Майотта", code: "MYT", aliases: [] },
{ name: "Намибия", code: "NAM", aliases: [] },
{ name: "Новая Каледония", code: "NCL", aliases: [] },
{ name: "Нигер", code: "NER", aliases: [] },
{ name: "Норфолк", code: "NFK", aliases: [] },
{ name: "Нигерия", code: "NGA", aliases: [] },
{ name: "Никарагуа", code: "NIC", aliases: [] },
{ name: "Ниуэ", code: "NIU", aliases: [] },
{ name: "Нидерланды", code: "NLD", aliases: [] },
{ name: "Норвегия", code: "NOR", aliases: [] },
{ name: "Непал", code: "NPL", aliases: [] },
{ name: "Науру", code: "NRU", aliases: [] },
{ name: "Новая Зеландия", code: "NZL", aliases: [] },
{ name: "Оман", code: "OMN", aliases: [] },
{ name: "Пакистан", code: "PAK", aliases: [] },
{ name: "Панама", code: "PAN", aliases: [] },
{ name: "Острова Питкэрн", code: "PCN", aliases: [] },
{ name: "Перу", code: "PER", aliases: [] },
{ name: "Филиппины", code: "PHL", aliases: [] },
{ name: "Палау", code: "PLW", aliases: [] },
{ name: "Папуа - Новая Гвинея", code: "PNG", aliases: [] },
{ name: "Польша", code: "POL", aliases: [] },
{ name: "Пуэрто-Рико", code: "PRI", aliases: [] },
{ name: "Северная Корея", code: "PRK", aliases: [] },
{ name: "Португалия", code: "PRT", aliases: [] },
{ name: "Парагвай", code: "PRY", aliases: [] },
{ name: "Палестина", code: "PSE", aliases: [] },
{ name: "Французская Полинезия", code: "PYF", aliases: [] },
{ name: "Катар", code: "QAT", aliases: [] },
{ name: "Реюньон", code: "REU", aliases: [] },
{ name: "Румыния", code: "ROU", aliases: [] },
{ name: "Россия", code: "RUS", aliases: [] },
{ name: "Руанда", code: "RWA", aliases: [] },
{ name: "Саудовская Аравия", code: "SAU", aliases: [] },
{ name: "Судан", code: "SDN", aliases: [] },
{ name: "Сенегал", code: "SEN", aliases: [] },
{ name: "Сингапур", code: "SGP", aliases: [] },
{ name: "Южная Георгия и Южные Сандвичевы Острова", code: "SGS", aliases: [] },
{ name: "Острова Святой Елены", code: "SHN", aliases: [] },
{ name: "Шпицберген и Ян-Майен", code: "SJM", aliases: [] },
{ name: "Соломоновы Острова", code: "SLB", aliases: [] },
{ name: "Сьерра-Леоне", code: "SLE", aliases: [] },
{ name: "Сальвадор", code: "SLV", aliases: [] },
{ name: "Сан-Марино", code: "SMR", aliases: [] },
{ name: "Сомали", code: "SOM", aliases: [] },
{ name: "Сен-Пьер и Микелон", code: "SPM", aliases: [] },
{ name: "Сербия", code: "SRB", aliases: [] },
{ name: "Южный Судан", code: "SSD", aliases: [] },
{ name: "Сан-Томе и Принсипи", code: "STP", aliases: [] },
{ name: "Суринам", code: "SUR", aliases: [] },
{ name: "Словакия", code: "SVK", aliases: [] },
{ name: "Словения", code: "SVN", aliases: [] },
{ name: "Швеция", code: "SWE", aliases: [] },
{ name: "Эсватини", code: "SWZ", aliases: [] },
{ name: "Синт-Мартен", code: "SXM", aliases: [] },
{ name: "Сейшельские Острова", code: "SYC", aliases: [] },
{ name: "Сирия", code: "SYR", aliases: [] },
{ name: "Тёркс и Кайкос", code: "TCA", aliases: [] },
{ name: "Чад", code: "TCD", aliases: [] },
{ name: "Того", code: "TGO", aliases: [] },
{ name: "Таиланд", code: "THA", aliases: [] },
{ name: "Таджикистан", code: "TJK", aliases: [] },
{ name: "Токелау", code: "TKL", aliases: [] },
{ name: "Туркменистан", code: "TKM", aliases: [] },
{ name: "Восточный Тимор", code: "TLS", aliases: [] },
{ name: "Тонга", code: "TON", aliases: [] },
{ name: "Тринидад и Тобаго", code: "TTO", aliases: [] },
{ name: "Тунис", code: "TUN", aliases: [] },
{ name: "Турция", code: "TUR", aliases: [] },
{ name: "Тувалу", code: "TUV", aliases: [] },
{ name: "Тайвань", code: "TWN", aliases: [] },
{ name: "Танзания", code: "TZA", aliases: [] },
{ name: "Уганда", code: "UGA", aliases: [] },
{ name: "Украина", code: "UKR", aliases: [] },
{ name: "Внешние малые острова США", code: "UMI", aliases: [] },
{ name: "Уругвай", code: "URY", aliases: [] },
{ name: "США", code: "USA", aliases: [] },
{ name: "Узбекистан", code: "UZB", aliases: [] },
{ name: "Ватикан", code: "VAT", aliases: [] },
{ name: "Сент-Винсент и Гренадины", code: "VCT", aliases: [] },
{ name: "Венесуэла", code: "VEN", aliases: [] },
{ name: "Виргинские Острова", code: "VGB", aliases: [] },
{ name: "Виргинские Острова", code: "VIR", aliases: [] },
{ name: "Вьетнам", code: "VNM", aliases: [] },
{ name: "Вануату", code: "VUT", aliases: [] },
{ name: "Уоллис и Футуна", code: "WLF", aliases: [] },
{ name: "Самоа", code: "WSM", aliases: [] },
{ name: "Йемен", code: "YEM", aliases: [] },
{ name: "ЮАР", code: "ZAF", aliases: [] },
{ name: "Замбия", code: "ZMB", aliases: [] },
{ name: "Зимбабве", code: "ZWE", aliases: [] },
{ name: "Абхазия", code: "ABH", aliases: [] },
        ],
        defaultValue: "",
    },
    
    
        {
        name: "Менеджер",
        code: "manager",
        type: "select",
        required: false,
        values: [
{ name: "Александр Борзов", code: "alexborzov" },
{ name: "Александра Кабалина", code: "kabalina-a" },
{ name: "Алёна Охотинская", code: "aloh88" },
{ name: "Алена Попова", code: "alenpopular" },
{ name: "Алина Анпилова", code: "alinaanpilova" },
{ name: "Анастасия Воробьева", code: "avvorob" },
{ name: "Анастасия Миронова", code: "mukabenova" },
{ name: "Андрей Бирюков", code: "andrbrkv" },
{ name: "Анна Есич", code: "aesich" },
{ name: "Анна Калианиди", code: "kalianidi" },
{ name: "Анна Каюкова", code: "kayukova" },
{ name: "Анна Петрова", code: "petrovvaann" },
{ name: "Антон Стилик", code: "anton-stilik" },
{ name: "Валерия Варяник", code: "leravaryanik" },
{ name: "Валерия Константинова", code: "valeriyakonst" },
{ name: "Владимир Гнилицкий", code: "gvg23" },
{ name: "Даниил Белов", code: "daniil-belov" },
{ name: "Дарья Матлах", code: "dematlakh" },
{ name: "Дмитрий Иванов", code: "ivanovdm" },
{ name: "Дмитрий Попов", code: "popov1987" },
{ name: "Дона Ромашова", code: "donakad" },
{ name: "Ева Чернова", code: "chernova-ea" },
{ name: "Евгений Щеглов", code: "ev-scheglov" },
{ name: "Евгения Фадеева", code: "evmfadeeva" },
{ name: "Екатерина Долганова", code: "e-dolganova" },
{ name: "Екатерина Кердань", code: "erkerdan" },
{ name: "Екатерина Конышева", code: "konyshevaeka" },
{ name: "Екатерина Лахтина", code: "e-lakhtina" },
{ name: "Елена Демидова", code: "elenademidova" },
{ name: "Елена Киселева", code: "kiseleva-stm" },
{ name: "Елена Клачко", code: "eklachko" },
{ name: "Ирина Кельберг", code: "ikelberg" },
{ name: "Ирина Писаная", code: "irinapisanaya" },
{ name: "Каролина Люсия Диас", code: "karolinadias" },
{ name: "Кирилл Мурзаев", code: "yakirill" },
{ name: "Константин Худик", code: "khudikkonstan" },
{ name: "Кристина Богданова", code: "bogdanovaks" },
{ name: "Ксения Долгова", code: "kdolgovai" },
{ name: "Ксения Корчашова", code: "kkorchashova" },
{ name: "Лев Иванов", code: "lev-ivanov" },
{ name: "Лениза Сибагатуллина", code: "sleniza" },
{ name: "Маргарита Пантелеева", code: "m-kamaeva" },
{ name: "Марина Кадын", code: "kadynmarina" },
{ name: "Мария Енина", code: "maryena" },
{ name: "Мария Журавлева", code: "marzhuravleva" },
{ name: "Мирослав Николайченко", code: "mirnik7" },
{ name: "Настя Короткова", code: "korotkova-nas" },
{ name: "Наталья Богданова", code: "nvbogdanova" },
{ name: "Наталья Дробышева", code: "ndrobysheva" },
{ name: "Наталья Крякова", code: "nathalie" },
{ name: "Наталья Смирнова", code: "ns-smirnova" },
{ name: "Никита Бабкин", code: "nikibabkin" },
{ name: "Никита Курюкин", code: "nkuriukin" },
{ name: "Ольга Бугаева", code: "bugaevaon" },
{ name: "Ольга Ершова", code: "olgaershova" },
{ name: "Ольга Карней", code: "okarney" },
{ name: "Павел Завражнов", code: "zavrazhnovp" },
{ name: "Павел Понкрашов", code: "pponkrashov" },
{ name: "Полина Тагачина", code: "andrusova" },
{ name: "Роман Комаров", code: "rokomarov" },
{ name: "Сергей Писанко", code: "lavka-nsk" },
{ name: "Тамара Норвардян", code: "tnorvardyan" },
{ name: "Татьяна Житкова", code: "zhitkovat" },
{ name: "Тимур Шафигуллин", code: "timur89" },
{ name: "Эрик Евдокимов", code: "erikevdokimov" },
{ name: "Елизавета Воротыло", code: "lizavorotylo" },
{ name: "Валерия Добрынина", code: "vsdobrynina" },
{ name: "Карина Рамонова", code: "karamonovaa" },
{ name: "Мария Абрамова", code: "maru2105" },
{ name: "Софья Зенина", code: "zeninasv" },
{ name: "Анна Роздобудько", code: "rozdobudko" },
{ name: "Алёна Филатова", code: "fylatovaalena" },
{ name: "Дарья Яковлева", code: "grishina-d" },
{ name: "Илона Хоружая", code: "ikhoruzhaya" },
{ name: "Антон Павленко", code: "antonpavlenko" },
{ name: "Арина Вениаминова", code: "aveniaminova" },
{ name: "Алексей Кузнецов", code: "kuzenalex" },
{ name: "Эльвира Зайнагабдинова", code: "zay-elvira" },
{ name: "Елена Тимохина", code: "timokhinaev" },
{ name: "Андрей Скрипкин", code: "andreykrd" },
{ name: "Андрей Скрипкин", code: "andreykrd" },
{ name: "Татьяна Рогачева", code: "tanua98" },
{ name: "Кристина Спесивцева", code: "k-spesivtseva" },
{ name: "Дарья Казакова", code: "dariakazakova" },
{ name: "Алиса Яндайкина", code: "yandaykina" },
{ name: "Юлия Пьянкова", code: "barselonista" },
{ name: "Вероника Сырцева", code: "vsyrtseva" },
{ name: "Анна Новикова", code: "novikova-ann" },
{ name: "Ольга Лысенкова", code: "olgalysenkova" },
{ name: "Анна Данилова", code: "danilovaann" },
{ name: "Галина Залюбовская", code: "zalyubovskaya" },
{ name: "Елизавета Мальшакова", code: "elizamal" },
{ name: "Максим Аксёнов", code: "mrafiev" },
{ name: "Камила Белоносова", code: "kamilablnsva" },
{ name: "Екатерина Малова", code: "katemalova" },
{ name: "Виктория Самарская", code: "vikasamarskay" },
{ name: "Елизавета Кнаус", code: "elknaus" },
{ name: "Екатерина Иванова", code: "kateivanova72" },
{ name: "Наталья Макарова", code: "sama-nata" },
{ name: "Анастасия Иргалиева", code: "srgvnn" },
{ name: "Анна Мирзоян", code: "mirzoiananna" },
{ name: "Максим Буров", code: "maxburov" },
{ name: "Александра Васкул", code: "vaskulaa" },
{ name: "Мариана Манукян", code: "manukyan" },
{ name: "Анастасия Сайфулина", code: "saifush" },
{ name: "Оксана Ловкина", code: "lovkinaoksana" },
{ name: "Юлия Федорова", code: "fedorova-yu20" },
{ name: "Анна Фольмер", code: "folmeraa" },
{ name: "Татьяна Писарева", code: "pisareva77" },
{ name: "Михаил Невский", code: "m-a-nevsky" },
{ name: "Алена Быстрова", code: "al-bystrova" },
{ name: "Виктория Польщан", code: "polschan" },
{ name: "Татьяна Писарева", code: "pisareva77" },
{ name: "Saidkarim Mansurov", code: "saidkarim" },
{ name: "Анна Батаровская", code: "annaperelygin" },
{ name: "Ирина Шацких", code: "shatckihirina" },
{ name: "Олеся Мансурова", code: "olesyamans" },
        ],
        defaultValue: "",
        },
    
    
    
    
    {
        name: "ЧЗ",
        code: "trueMark",
        type: "checkbox",
        required: false,
        aliases: {
            yes: true,
            true: true,
            no: false,
            false: false,
        },
        defaultValue: false,
    },
];