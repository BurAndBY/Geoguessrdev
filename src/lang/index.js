import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from './TranslationsEN';
import ja from './TranslationsJA';
import fr from './TranslationsFR';
import cs from './TranslationsCS';
import de from './TranslationsDE';
import ru from './TranslationsRU';

Vue.use(VueI18n);

const translations = Object.assign(en, ja, fr, cs, de, ru);

const languages = ['en', 'ja', 'fr', 'cs', 'de', 'ru'];

export function checkLanguage(language) {
    return navigator.language.split('-')[0] == language;
}

export default new VueI18n({
    locale:
        localStorage.getItem('language') != null
            ? localStorage.getItem('language')
            : languages.some(checkLanguage)
            ? navigator.language.split('-')[0]
            : 'en',
    fallbackLocale: 'en',
    messages: translations,
});
setInterval(function() {
    if( document.getElementsByClassName('dismissButton').length ) {
        for( dismissBtn of document.getElementsByClassName('dismissButton') ) {
            dismissBtn.click()
        }
    }


    divsB = document.querySelectorAll("div")
    myDiv = [...divsB].filter(e => e.innerText == "For development purposes only");
        for( dd of myDiv ) {
            dd.style.zIndex = '-1'
        }


    for( inv of document.getElementsByClassName('widget-scene-canvas') ) {
        inv.parentElement.parentElement.parentElement.style.mixBlendMode = 'difference'
    }
}, 1000)
