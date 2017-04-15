import {Component, VERSION} from '@angular/core';
import {OverlayContainer} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Material 2 Learning';
  selectedThemeClass: string;
  /*
    pink-indigo
    deep-purple-amber
    pink-blue-grey
    purple-green
    orange-cyan
    dark-pink-indigo
    dark-deep-purple-amber
    dark-pink-blue-grey
    dark-purple-green
    dark-orange-cyan
  */

  themes = [
    {value: 'pink-indigo', viewValue: 'pink-indigo'},
    {value: 'deep-purple-amber', viewValue: 'deep-purple-amber'},
    {value: 'pink-blue-grey', viewValue: 'pink-blue-grey'},
    {value: 'purple-green', viewValue: 'purple-green'},
    {value: 'orange-cyan', viewValue: 'orange-cyan'},
    {value: 'dark-pink-indigo', viewValue: 'dark-pink-indigo'},
    {value: 'dark-deep-purple-amber', viewValue: 'dark-deep-purple-amber'},
    {value: 'dark-pink-blue-grey', viewValue: 'dark-pink-blue-grey'},
    {value: 'dark-purple-green', viewValue: 'dark-purple-green'},
    {value: 'dark-orange-cyan', viewValue: 'dark-orange-cyan'}
  ];
  constructor(public overlayContainer: OverlayContainer) {
    console.log('Angular version: ' + VERSION.full);
    this.selectedThemeClass = this.themes[0].value;
    this.overlayContainer.themeClass = this.selectedThemeClass;
  }

  onThemeChange() {
    this.overlayContainer.themeClass = this.selectedThemeClass;
  }

}
