import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular boilerplate - title';
  description = 'this is description';
  showDescription = false;
  catNames = ['Pūka', 'Kūka', 'Muris'];

  ngOnInit(): void {
    console.log('Component is loaded', this.description);
  }

  sayHello(): void {
    console.log('Hello');
  }

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }
}
