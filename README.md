# [Angular App Components](https://ddeveloper72.github.io/angular-app-components/)
### (_An Introduction_)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

In this tutorial, I was introduced to *Components & Databinding*

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

Looking at the application, it was very vclearly fulfilling two functions in the same applicantion.  The tutorial lets one refined the application in a way which would make better use of the inner workings of Angular as well as allow one to reuse code when expanding the applcation.

The App existing app is in two sections,

  1.  The user interface and
  2.  data output back to the user

So we created two new apps, using the cli (without test files)
`ng g c cockpits --spec false` and 
`ng g c server-elements --spec false`

The input elements from the app.component framework were then removed and placed in the cockpit html framework.  The associated methods used for the inputs and the buttons were also removed from the app.components.ts and relocated to the app.cockpit.ts file.

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
