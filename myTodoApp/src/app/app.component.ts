import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyTodosComponent } from '../app/my-todos/my-todos.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MyTodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myTodoApp';
}
