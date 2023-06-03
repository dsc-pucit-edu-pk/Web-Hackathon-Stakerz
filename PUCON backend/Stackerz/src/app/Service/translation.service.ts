import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor() { }

  private translations: { [key: string]: { [key: string]: string } } = {
    // Define translations for each language
    English: {
      website:'Global Quran',
      home:'HOME',
      services:'SERVICES',
      menu:'Menu',                                 // HEADER DONE
      language:'Language',
      searchhere:'Search Here...',
      searchbtn:'Search',                          // SEARCH DONE
      midname:'Al-Quran Ul Kareem',
      namaz:'Namaz',
      namazdescription:'Salaah Or Namaz Is An Obligatory Prayer Performed By A Practising Muslim Five Times A Day. The Namaz Is Performed Early In The Morning, Afternoon, Evening, Near Sunset And Late Evening.',
      hadees:'Hadees',
      hadeesdescription:'Salaah Or Namaz Is An Obligatory Prayer Performed By A Practising Muslim Five Times A Day. The Namaz Is Performed Early In The Morning, Afternoon, Evening, Near Sunset And Late Evening.',
      history:'Islamic History',
      historydescription:'Islamic History Is The History Of The Islamic Religion, Its Adherents And Its Civilization. It Spans Over A Period Of More Than 1400 Years, From The Revelation Of The Quran To The Present Day.',  // CARDS DONE
      readmorebtn:'Read More',
      surahbtn:'Surah',
      juzzbtn:'Juzz',
      praytime:'Prayer Time Table',
      date:'Date',
      fajr:'Fajr',
      zuhr:'Zuhr',
      asr:'Asr',
      maghrib:'Maghrib',
      isha:'Isha',
      fajrdesc:"Fajr, also known as Subh or Dawn, is the first of the five daily prayers (salah) performed by Muslims. It is performed before sunrise and consists of two Rak'ah (units of prayer).The time for Fajr prayer begins at the onset of true dawn and ends just before sunrise. The exact time for Fajr prayer may vary depending on the location and the season.",
      hadithjild:'Hadiths Jild',
      islamichistory:'ISLAMICHISTORY',
      intro:'AL QURAN UL KAREEM ( القرآن الكريم)',
      greeting: 'Hello!',
      welcome: 'Welcome to my website!',
      button: 'Click me',
      company:'company'
    },
    Arabic: {
      website:"ABC"
    },
    Urdu:{

    },
    French: {
      
    },
    Chinese: {
      
    }
  };

  private currentLanguage: string = 'English';

  public setCurrentLanguage(language: string): void {
    this.currentLanguage = language;
  }

  public getTranslation(key: string): string {
    const languageTranslations = this.translations[this.currentLanguage];
    return languageTranslations[key] || key;
  }
}
