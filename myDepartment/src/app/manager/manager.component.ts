import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent {
  managerArray = new Array();
  devAndTesterArray: { role: string }[] = [];
  _left = 1;
  _item = {};
  @Input() set item(data: any) {
    if (data) {
      this._item = data;
    }
  }
  @Input() set left(data: any) {
    if (data) {
      this._left = data;
    }
  }
  addManager() {
    this.managerArray.push(1);
  }
  addDeveloper() {
    this.devAndTesterArray.push({ role: 'developer' });
  }
  addTester() {
    this.devAndTesterArray.push({ role: 'tester' });
  }
  getStyle() {
    return `${this._left * 20}px`;
  }
}
