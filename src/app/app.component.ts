import { Component, Input } from '@angular/core';
import { Stuffy } from './model/stuffy.class';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Stuffies';
  header: string = 'New Stuffy';

  stuffies: Stuffy[] = [];
  // two way bindings
  id: number = null;
  type: string = "";
  color: string = "";
  size: string = "";
  limbs: number = null;

  addStuffy(): void {
    let s: Stuffy = new Stuffy(this.id, this.type, this.color, this.size, this.limbs);
    this.stuffies.push(s);
  }
}
