import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private tasksrv: TaskService) {}

  ngOnInit() {
    this.tasksrv.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(task: Task) {
    this.tasksrv.deletetask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t.id !== task.id);
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;

    this.tasksrv.updateTaskReminder(task).subscribe();
  }
}
