import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-parents',
  template: `
      <div class="items">
        <p style="font-size: 1.5rem;">
          Showing Data : <b style="color:#eee;">{{data}}</b>
        </p>
      </div>

      <div class="items">
          <input type="text" placeholder="Add user..." [(ngModel)] = "dataUser"/>
          <button (click)= "onSelectDataUser()">Add</button>
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
     
    `,
  ],
})
export class ParentsComponent {
  @Input() data: string = '';
  
  dataUser:string = "";

  @Output() selectDataUser : EventEmitter<string> = new EventEmitter<string>();

  onSelectDataUser(){
    this.selectDataUser.emit(this.dataUser);
    // console.log(this.dataUser);
  }

}
