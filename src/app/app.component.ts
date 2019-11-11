import { Component } from '@angular/core';

@Component({
  selector: 'ae-component',
  templateUrl: './app.component.html',
  styles: [`
    .active {
      @apply rounded-full bg-gray-200 px-2 py-1 text-gray-700 font-bold;
    }
  `]
})
export class AppComponent {}
