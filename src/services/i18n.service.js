var gTrans = {
    time: {
        en: 'time',
        he: 'זמן'
    },
    sunrise: {
        en: 'sunrise',
        he: 'זריחה'
    },

    sunset: {
        en: 'sunset',
        he: 'שקיעה',
    },

    max: {
        en: 'max',
        he: 'מקס',
    },

    min: {
        en: 'min',
        he: 'מינ',
    },
    humidity: {
        en: 'humidity',
        he: 'לחות',
    },
    visibility: {
        en: 'visibility',
        he: 'ראות',
    },
    pressure: {
        en: 'pressure',
        he: 'לחץ',
    },
    confidence: {
        en: 'confidence',
        he: 'בטחון',
    },
    '': {
        en: '',
        he: '',
    },
    Sources: {
        en: 'Sources',
        he: 'מקורות',
    },
    select: {
        en: 'select a country',
        he: 'בחר מדינה',
    },
    new: {
        en: 'New York',
        he: 'ניו-יורק',
    },
    los: {
        en: 'Los Angeles',
        he: 'לוס אנגלס',
    },
    Marseille: {
        en: 'Marseille',
        he: 'מרסיי',
    },
    Barcelona: {
        en: 'Barcelona',
        he: 'ברצלונה',
    },
    Rome: {
        en: 'Rome',
        he: 'רומא',
    },
    State: {
        en: 'United State',
        he: 'ארה"ב',
    },
    Europe: {
        en: 'Europe',
        he: 'אירופה',
    },
}

var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]

    if (!txt) txt = keyTrans['en']

    return txt;
}

export function doTrans() {

    var els = document.querySelectorAll('[data-trans]')

    els.forEach(function(el) {
        var txt = getTrans(el.dataset.trans)
        console.dir(el)
        if (el.nodeName === 'INPUT') {
            el.setAttribute('placeholder', txt)
        } else {
            el.innerText = txt
        }
    })

}

export function setLang(lang) {
    gCurrLang = lang;
}

function formatNumOlder(num) {
    return num.toLocaleString('es')
}

function formatNum(num) {
    return new Intl.NumberFormat(gCurrLang).format(num);
}

function formatCurrency(num) {
    return new Intl.NumberFormat('he-IL', { style: 'currency', currency: 'ILS' }).format(num);
}

function formatDate(time) {

    var options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };

    return new Intl.DateTimeFormat(gCurrLang, options).format(time);
}