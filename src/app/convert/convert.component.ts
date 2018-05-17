import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  title = 'Human Readable';
  @Input() public value;
  @Output() public childEvent = new EventEmitter();

  onEnter(value: string) { this.value = value; }

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit(this.value);
  }

}
