import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="container">
      <div class="parent-container">
        <h1><b>Parent</b> Components</h1>
        <div>
          <app-parents [data]="currentData" (selectDataUser)="onGetData($event)"></app-parents>
        </div>
      </div>
      <div class="child-container">
        <h1><b>Child</b> Components</h1>
        <div class="items">
          <input type="text" placeholder="Typing..." #inputText/>
          <button (click)="onSubmit(inputText.value)">Sharing</button>

          <ul >
          <li *ngFor="let user of dataUser; let i = index;">

           Username {{i}}: <b></b> {{user}}
          </li>
          </ul>
        </div>

       
      </div>
  </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        gap: 1rem;
      }

      .parent-container,
      .child-container {
        border: 1px solid grey;
        margin: 30px 10px;
        padding: 40px 10px;
        text-align: center;
      }
      .items {
        background: #a6a6a6;
        padding: 1rem 10px;
      }
      input[type='text'] {
        padding: 10px 1rem;
        border: none;
        outline: none;
      }
      button {
        padding: 10px 1rem;
        background: blue;
        border: none;
        outline: none;
        color: #eee;
        cursor: pointer;
      }
      ul{
        list-style-type:none;
        text-align:left;
      }
    `,
  ],
})
export class ChildComponent {

  currentData;


  onSubmit(value:string){
    this.currentData = value;
  }

  dataUser = [] ;
  onGetData(data:string){
    this.dataUser.push(data);
  }

}
