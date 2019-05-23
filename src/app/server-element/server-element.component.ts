import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  // by default, all properties of components are only accessible
  // inside these components, not from outside.
  // we need the @Input() to make the element accessible from the outside.
  // using an alias helps us to specify the element targeted different from
  // the property name.
  constructor() { }

  ngOnInit() {
  }

}
