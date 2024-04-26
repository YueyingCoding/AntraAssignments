import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,  OnChanges {
  @Input() fromParent: string = '';
  @Output() customEvent: EventEmitter<string> = new EventEmitter;
  @Input() message2: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Children onChanges Called");
      
  }

  onInput(event: Event) {
    let str = (<HTMLInputElement>event.target).value;
    this.customEvent.emit(str);
  }



}
