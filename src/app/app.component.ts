import { Component } from "@angular/core";

@Component({
 selector: 'shanks-root',
 template: `
  <div><h1>{{pageTitle}}</h1>
    <div>My First Component</div>
  </div>
 `
})

export class AppComponent{
  pageTitle: string = "Shanks World"
}