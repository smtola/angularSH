import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="child-container">
        <h1><b>Child</b> Components</h1>
        <div>
          <app-child></app-child>
        </div>
      </div>
    </div>
  `,
  styles: [`
      .container{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:40px;
        gap:1rem;
      }

      .parent-container,.child-container{
          border:1px solid grey;
          margin:30px 10px;
          padding: 40px 10px;
          text-align:center;
      }
  `],
})
export class AppComponent {
  title = 'sharing-data';
}
