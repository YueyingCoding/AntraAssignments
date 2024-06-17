import { Component } from '@angular/core';
import { provideProtractorTestingSupport } from '@angular/platform-browser';
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN-2024';
  newNumber = 10;
  newNumbers = [1, 2, 3];

  constructor(private router: Router){}
  goToParent() {
    this.router.navigate(["parent"]);
  }

  addOne() {
    this.newNumber++;
  }
}
