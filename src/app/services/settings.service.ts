import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private element = document.querySelector('#theme');

  constructor() { 
    const url =  localStorage.getItem('theme') || './assets/css/colors/default.css';
    this.element?.setAttribute('href', url);
   }

   changeTheme( theme: string, links: NodeListOf<Element> ){
      const url = `./assets/css/colors/${theme}.css`;
      this.element?.setAttribute('href', url);
      localStorage.setItem('theme', url);
      this.checkCurrentTheme( links );
  }

  checkCurrentTheme( links: NodeListOf<Element>){

      links.forEach( element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
      const currentTheme = this.element?.getAttribute('href');

      if( btnThemeUrl === currentTheme ){
        element.classList.add('working');
      }

    });

  }
  

}
