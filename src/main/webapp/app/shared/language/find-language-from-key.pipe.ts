import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'findLanguageFromKey',
})
export default class FindLanguageFromKeyPipe implements PipeTransform {
  private languages: { [key: string]: { name: string; rtl?: boolean } } = {
    fr: { name: 'Français' },
    en: { name: 'English' },
    'ar-ly': { name: 'العربية', rtl: true },
    'zh-cn': { name: '中文（简体）' },
    es: { name: 'Español' },
    tr: { name: 'Türkçe' },
    // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
  };

  transform(lang: string): string {
    return this.languages[lang].name;
  }

  isRTL(lang: string): boolean {
    return Boolean(this.languages[lang].rtl);
  }
}
