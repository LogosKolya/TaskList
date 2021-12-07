import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometest',
  templateUrl: './hometest.component.html',
  styleUrls: ['./hometest.component.scss']
})

export class HometestComponent implements OnInit {

  public taskList = [
    {task: 'HTML5', checking: true, progress: 'Done', delete: false},
    {task: 'CSS3', checking: true, progress: 'Done', delete: false},
    {task: 'SCSS', checking: false, progress: 'In Progress', delete: true},
    {task: 'JavaScript', checking: false, progress: 'In Progress', delete: true},
    {task: 'jQuery', checking: false, progress: 'In Progress', delete: true},
    {task: 'Angular', checking: false, progress: 'In Progress', delete: true},
  ];
  public ln = this.taskList.length;
  public newTask!: string;
  public editTask!: string;
  public showEdit = false;
  public checkAdd = true;
  public checkSave = true;
  public index!: number;



  constructor() { }

  ngOnInit(): void {
  }

  saveTask(): void {
    this.taskList[this.index].task = this.editTask;
    this.index = -1;
    this.showEdit = false;
    this.editTask = '';
  };

  edtTask (): void {
    if (this.editTask != '') {
      this.checkSave = false;
    }
    else {
      this.checkSave = true;
    }
  };

  inputTask() {
    if (this.newTask != '') {
      this.checkAdd = false;
    }
    else {
      this.checkAdd = true;
    }
  };

  addTask () {
    let elem = {task: this.newTask, checking: false, progress: 'In Progress', delete: true}
    this.taskList.push(elem);
    this.ln = this.taskList.length;
    this.newTask = '';
    this.checkAdd = true;
  }
  getTasksList(data: any): void {
    this.taskList = data;
  }
  getTasksLength(data: any): void {
    this.ln = data;
  }
  getTasksName(data: any): void {
    this.editTask = data;
  }
  getTasksIndex(data: any): void {
    this.index = data;
  }
  getTasksCheck(data: any): void {
    this.showEdit = data;
  }
}
