import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: TodoItem[];
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(item: TodoItem): void {
    this.remove.emit(item);
  }

  completeItem(item: TodoItem): void {
    console.log(item);
    
    this.update.emit({
      item: item,
      changes: { completed: !item.completed }
    });
  }
  

}
