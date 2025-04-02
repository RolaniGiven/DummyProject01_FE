import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoServiceService } from '../services/todo-service.service';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-my-todos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-todos.component.html',
  styleUrl: './my-todos.component.css'
})
export class MyTodosComponent implements OnInit{
   todos: Todo[] = [];
   newTodoName: string = '';
   
   constructor(private todoService: TodoServiceService) {}

   ngOnInit(): void {
     this.loadTodos();
   }

   loadTodos(): void {
    this.todoService.getAllTodos()
      .subscribe({
        next: (todos) => this.todos = todos,
        error: (error) => console.error('Error fetching todos:', error)
      });
  }

  
    addTodo(): void {
    if (this.newTodoName.trim()) {
      const newTodo: Todo = {
        name: this.newTodoName,
        complete: false
      };

      this.todoService.createTodo(newTodo)
        .subscribe({
          next: () => {
            this.loadTodos();
            this.newTodoName = '';
          },
          error: (error) => console.error('Error creating todo:', error)
        });
    }
  }

  toggleComplete(todo: Todo): void {
    if (todo.id) {
      this.todoService.updateTodo(todo.id, { complete: !todo.complete })
        .subscribe({
          next: () => this.loadTodos(),
          error: (error) => console.error('Error updating todo:', error)
        });
    }
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
      .subscribe({
        next: () => this.loadTodos(),
        error: (error) => console.error('Error deleting todo:', error)
      });
  }
  

}
