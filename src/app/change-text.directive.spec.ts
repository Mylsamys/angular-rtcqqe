import { Component, Input } from '@angular/core';

@Component({
  selector: 'ChangeTextDirective',
  template: `<h1>ChangeTextDirective {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ChangeTextDirective  {
  @Input() name: string;
}
