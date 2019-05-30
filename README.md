# Angular App Components
### (_An Introduction_)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

In this tutorial, I was introduced to *Components & Databinding*.

Credit for the code in this tutorial is to []Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/), who presents Master Angular (Angular 2+, incl. Angular 8) and build awesome, reactive web apps with the successor of Angular.js

1. Splitting Apps into Components
2. A look at Property & Event binding
3. Binding to Custom Properties
4. Assigning an _Alias_ to Custom Properties
5. Binding to Custom Events
6. Assigning an Alias to Custom Events
7. Custom Property and Event Binding
8. A look at Encapsulation
9. Introduction to Local Reffrences in the Template
10. Accessing the Template & DOM using _@ViewChild_
11. Projecting Content with _ng-content_
12. Introduction to Component LifeCycle & hooks in Action

### 1. Splitting Apps up into Components

In this tutorial, we were provided with a base application which was comprised of a typescript file which contained all the working methods for the application.  The html framework then included the components for accessing the methods and running the application.  

Looking at the application, it was very clearly fulfilling two functions in the same application.  The tutorial lets one refined the application in a way which would make better use of the inner workings of Angular as well as allow one to reuse code when expanding the application.

The App existing app is in two sections,

  1.  The user interface and
  2.  data output back to the user

So we created two new apps, using the cli (without test files)
`ng g c cockpits --spec false` and 
`ng g c server-elements --spec false`

The input elements from the app.component framework were then removed and placed in the cockpit html framework.  The associated methods used for the inputs and the buttons were also removed from the app.components.ts and relocated to the app.cockpit.ts file.

### 2. Property & Event binding

Property and event binding facilitate the passing of data between components. For example, the status for a disabled element can be set to be _true_ or _false_ by binding the boolean property; the data, to the element.  

    <button class="btn btn-primary mb-2"
    [disabled]="!allowNewServer"
    (click)="onCreateServer()">Add Server</button>

In the example above, a method is used where the disabled true status of the button is removed after a time of 2 seconds.

```javascript
constructor() {
  setTimeout(() => {
    this.allowNewServer = true;
      }, 2000);
}
```

Another example is event binding.  A click listener on a button passes the status of the event to the method; the status being clicked or not clicked.  Where we are looking for data, from an input, we use an event emitter, **$event**.

    <input
    type="text"
    class="form-control"
    (input)="onUpdateServerName($event)">
    
The method below in the typeScript file, "listens to the DOM", waiting for the data to be freed or passed to it, once the button has been clicked.

```javascript
onUpdateServerName(event: Event) {
this.serverName = (event.target as HTMLInputElement).value;

```

### 3. Binding to Custom Properties

The key point to know/remember: "...by default, all properties of components are only accessible from inside its own component and not from another component".  This is essential, how ever there are circumstances where we create and exceptionto this default Angular behaviour.

To expose an element to other components, we use `@`decorators which  are built in angular/core.  This gives explicit exposure of a specific property so a parent component can bind to it.  For example, `@Input` cna provied a component wiht access to the following element:

#### server-element.component.ts

```javascript
export class ServerElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string};
  
  constructor() {}
  
  ngOnInit() {
  
  }
}
```
#### app.component.html

    [element]="serverElement"

### 4. Assigning an _Alias_ to Custom Properties

Instead of exposing literal property name, "element", one can assign an alias to the the property, like "bob"- hence the same property could be used by different components each with their own alias.  Note that the alias you choose should best describe what the property is that you are wanting to bind to.  To do this, the alias is used in the decorator function: 

```javascript
  @Input('bob') element: {type: string, name: string, content: string};

```
    [bob]="serverElement"
    
### 5. Binding to Custom Events

In binding events, we pass data following an event so that that data can be acted on.  Remember that if a button is clicked, that is an event. If one has a parent component, we may want to receive data from a child component, so that it can be actioned.  `@` Decorators are used again.  But this isn't enough though.  In this example, the property "serverCreated" is for an event which we will want to pass on too something else, so it has to be emitted by a _new value_, the **EventEmitter** class, which again is part of the angular/core components.

**Note**, that the EventEmmitter class needs to be a generic data type,  defined with the syntax `EventEmmiter<>()`. The data type is what we specified it to be in the app.component.ts, which is `{serverName: string, serverContent: string}` which came from `onServerAdded(serverData: {serverName: string, serverContent: string})`. The call to the eventEmitter constructor is concluded with parentheses, for storing the serverCreated object.

To allow the EventEmitter object to be accessible from outside of the component, angualr/core has the `@Output` decorator.


```javascript
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
  }

```

Here is where we listen for serverCreated.  Once the we get serverCreated, the onServerAdded method is called. The method then returns and object, which is the same object from the EventEmitter

    <app-cockpit 
    (serverCreated)="onServerAdded($event)">
    </app-cockpit>
  
So, now we can emitt an object.  We can act on it.

```javascript
onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
}
```


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
