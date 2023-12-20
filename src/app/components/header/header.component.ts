import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  title: String = 'Angular Todo Application';

  addTodoFunction() {
    console.log('log from add todo function');
  }
}
