import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() valuesTask = [
    {task: '', checking: true, progress: '', delete: false},
  ];

  public checking!: boolean;
  public ln = this.valuesTask.length;
  public name!: string;
  public checkingEditBlock!: boolean;

  @Output() tasksList = new EventEmitter();
  @Output() tasksLength = new EventEmitter();
  @Output() nameEdit = new EventEmitter();
  @Output() indexEdit = new EventEmitter();
  @Output() checkEdit = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
  }

  editUser(index: number): void {
    this.name = this.valuesTask[index].task;
    this.checkingEditBlock = true;
    this.nameEdit.emit(this.name);
    this.indexEdit.emit(index);
    this.checkEdit.emit(this.checkingEditBlock);
  };

  deleteUser(index: number): void {
    this.valuesTask.splice(index, 1);
    this.ln = this.valuesTask.length;
    this.tasksList.emit(this.valuesTask);
    this.tasksLength.emit(this.ln);
  };

  editCheck(index: number): void {
    this.valuesTask[index].checking = !this.valuesTask[index].checking;
    console.log(this.valuesTask[index].checking);
    if (this.valuesTask[index].checking) {
      this.valuesTask[index].progress = 'Done';
      this.valuesTask[index].delete = false;
    }
    else {
      this.valuesTask[index].progress = 'In Progress';
      this.valuesTask[index].delete = true;
    }
  };

}
