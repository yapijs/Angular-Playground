import { Component } from '@angular/core';

import { PlannerTask } from '../../models/planner.model';

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss'],
})
export class PlannerComponent {
  plannerTasks: PlannerTask[] = [];
  inputValue = '';

  addTask(): void {
    const newTask = { text: this.inputValue, done: false };

    if (newTask.text) {
      this.plannerTasks.push(newTask);
      this.inputValue = '';
    }
  }

  deleteTask(index: number): void {
    this.plannerTasks.splice(index, 1);
  }

  get finishedTaskCount(): number {
    return this.plannerTasks.filter((task) => task.done).length;
  }
}
