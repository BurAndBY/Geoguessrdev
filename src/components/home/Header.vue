<template>
    <div>
        <v-app-bar class="header" height="100">
            <img class="header__logo" src="@/assets/geoguessLogo.png" />

            <div class="flex-grow-1"></div>

            <nav class="header__nav">
                <v-btn text @click="historyDialog = true" id="historyBtn">{{
                    $t('Home.historyBtn')
                }}</v-btn>
                <div class="header__nav__btns">
                    <v-btn text @click="aboutDialog = true" id="aboutBtn">
                        <v-icon size="30">mdi-help-circle</v-icon>
                    </v-btn>
                    <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-btn text v-on="on" id="languageBtn">
                                <v-icon size="30">mdi-translate</v-icon>
                            </v-btn>
                        </template>
                        <v-list id="menuLanguage">
                            <v-list-item
                                v-for="(language, index) in languages"
                                :key="index"
                                @click="switchLanguage(language.value)"
                            >
                                <v-list-item-title>{{
                                    language.text
                                }}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </div>
            </nav>
            <v-dialog v-model="historyDialog">
                <History :history="history" />
            </v-dialog>
            <v-dialog v-model="aboutDialog">
                <About />
            </v-dialog>
        </v-app-bar>
    </div>
</template>
<script>
import History from '@/components/History';
import About from '@/components/home/About';
export default {
    components: {
        History,
        About,
    },
    data() {
        return {
            drawer: false,
            historyDialog: false,
            aboutDialog: false,
            history: localStorage.getItem('history')
                ? JSON.parse(localStorage.getItem('history'))
                : [],
            languages: [
                {
                    text: 'English',
                    value: 'en',
                },
                {
                    text: 'Français',
                    value: 'fr',
                },
                {
                    text: 'Deutsch',
                    value: 'de',
                },
                {
                    text: 'čeština',
                    value: 'cs',
                },
                {
                    text: '日本語',
                    value: 'ja',
                },
                {
                    text: 'Русский',
                    value: 'ru',
                },
            ],
        };
    },
    methods: {
        switchLanguage(language) {
            this.$i18n.locale = language;
            this.$vuetify.lang.current = language;
            this.saveLanguage(language);
        },
        saveLanguage(language) {
            localStorage.setItem('language', language);
        },
    },
};
</script>
<style lang="scss" scoped>
.header {
    padding: 0 5%;
    background-color: #f1e9d6 !important;
    nav.header__nav {
        display: flex;
        & > div {
            margin: 0 1.5rem;
        }
    }
    .v-btn {
        font-size: 1.2rem;
    }
    .header__logo {
        height: 6rem;
        width: auto;
    }
}
@media (max-width: 660px) {
    .header {
        .header__logo {
            display: none;
        }
    }
}
</style>