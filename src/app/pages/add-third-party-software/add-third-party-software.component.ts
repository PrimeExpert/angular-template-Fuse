import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-third-party-software',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h1>Add Third-Party Software</h1>
      <p>Component is loading successfully!</p>
    </div>
  `,
  styles: [`
    h1 {
      color: #333;
      font-size: 24px;
    }
  `]
})
export class AddThirdPartySoftwareComponent {
  constructor() {
    console.log('AddThirdPartySoftwareComponent loaded successfully');
  }
}
