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
  //{ m: object[]; d: Array<number>; q: Array<number> }
  _item: any = {
    m: [],
    d: [],
    q: [],
  };
  @Input() set item(data: any) {
    if (data) {
      this._item = data;
    }
  }
  // @Input() set left(data: any) {
  //   if (data) {
  //     this._left = data;
  //   }
  // }
  addManager(item: any, index: any) {
    //item.m = {m:{},d:1,q:1};
    this._item[index].m.push({ m: [], d: Array(0), q: Array(0) });
  }
  addDeveloper(item: any, index: any) {
    this._item[index].d.push(1);
    //item.d += 1;
    //this.devAndTesterArray.push({ role: 'developer' });
  }
  addTester(item: any, index: any) {
    this._item[index].q.push(1);
    //item.q += 1;
    //this.devAndTesterArray.push({ role: 'tester' });
  }
  getStyle() {
    return `${this._left * 20}px`;
  }
}
