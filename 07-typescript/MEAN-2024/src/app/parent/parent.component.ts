import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges, Input } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, AfterViewInit, DoCheck {

  @Input() num: number | undefined;
  @Input() nums: number[] | undefined;
  toChild: string = 'Hello from Parent'
  fromChild: string = '';
  message2: string = '';
  constructor() {
    console.log("Constructor");

  }

  ngOnInit(): void {
    console.log("ngOnInit called");

  }

  ngOnDestroy(): void {
      console.log("ngOnDestroy called");

  }

  onKeyup(message: HTMLInputElement) {
    this.toChild = message.value;
  }
  onCustomEvent(message: string) {
    this.fromChild = message;
  }
  newMessage(message: HTMLInputElement){
    this.message2 = message.value;
  }
ngOnChanges(changes: SimpleChanges): void {
    console.log("parent onchanges");
}

ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked");

}
ngAfterContentInit(): void {
  console.log("ngAfterContentInit");

}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked");

}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit");

}
ngDoCheck(): void {
    console.log("ngDoCheck");

}
}
