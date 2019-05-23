import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string};
  // by default, all properties of components are only accessible
  // inside these components, not from outside.
  // we need the @Input() to make the element accessible from the outside.
  constructor() { }

  ngOnInit() {
  }

}
