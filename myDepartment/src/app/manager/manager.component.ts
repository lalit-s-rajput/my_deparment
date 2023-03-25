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
  _item: any = {
    m: [],
    d: [],
    q: [],
    mLeft: 0,
  };
  @Input() set item(data: any) {
    if (data) {
      this._item = data;
    }
  }
  addManager(item: any, index: any) {
    this._item[index].m.push({
      m: [],
      d: Array(0),
      q: Array(0),
      mLeft: item.mLeft + 20,
    });
  }
  addDeveloper(item: any, index: any) {
    this._item[index].d.push(1);
  }
  addTester(item: any, index: any) {
    this._item[index].q.push(1);
  }
  getStyle(item: any) {
    return `${item.mLeft}px`;
  }
}
