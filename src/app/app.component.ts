import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo';
  isDarkMode = false;

  changeMode(mode: string) {
    document.body.className = `${mode}-body`;
    switch (mode) {
      case "light":
        this.isDarkMode = false;
        break;
      case "dark":
        this.isDarkMode = true;
        break;
    }
  }
}
