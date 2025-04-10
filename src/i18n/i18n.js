//语言
// import { lang } from '@/settings/designSetting'
import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import zh from './zh/index'
import en from './en/index'

const i18n = createI18n({
  legacy: false,
  globalInjection:true,
  locale: "ZH",
  fallbackLocale: "ZH",
  messages: {
    ZH: zh,
    EN: en
  }
})

export default i18n
