import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import en from '../../static/data/contact/about_en.js'
import cn from '../../static/data/contact/about_cn.js'

const messages = {
    cn: {
      message:cn
    },
    en: {
      message:en
    }
}

const i18n = new VueI18n({
    locale: 'cn', // 语言标识
    messages
})

export default i18n