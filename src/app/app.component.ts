import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fox-textfield-demo';

  value = '2022-12-09';

  keyPressed = '';

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    this.keyPressed = event.key;
  }

  onChange(element: any) {
    if (!element.value) {
      this.value = 'empty string';
    }
    this.value = element.value;
    console.log(this.value);
  }
}
