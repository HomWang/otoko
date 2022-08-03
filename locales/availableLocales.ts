export interface ILocales {
  [key: string]: {
    name: string
    iso: string
    flag: string
  }
}

export const availableLocales: ILocales = {
  en: {
    name: 'English',
    iso: 'en-US',
    flag: 'i-twemoji-flag-us-outlying-islands',
  },
  zhCN: {
    name: '中文简体',
    iso: 'zh-CN',
    flag: 'i-twemoji-flag-turkey',
  },
}