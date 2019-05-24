import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // EventEmitter lets us send out/emit these properties to make them accessible from
  // from outside of this component.
  // EventEmitter is a generic type that uses <>
  // Addedd an alias for blueprintCreated so that only the alias is visible to the outside.
  /* newServerName = ''; */
  /* newServerContent = ''; */
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // pass the local reference or component type (not like a string)

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // console.log(this.serverContentInput)
    // use console log to determine the type of element.
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
