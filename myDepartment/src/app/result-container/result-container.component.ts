import { Component } from '@angular/core';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss'],
})
export class ResultContainerComponent {
  managerArray: { m: object; d: Array<number>; q: Array<number> }[] = [
    { m: {}, d: Array(0), q: Array(0) },
  ];
  devAndTesterArray: { role: string }[] = [];
  addManager(item: any, index: any) {
    //item.m = {m:{},d:1,q:1};
    this.managerArray.push({ m: {}, d: Array(0), q: Array(0) });
  }
  addDeveloper(item: any, index: any) {
    this.managerArray[index].d.push(1);
    //item.d += 1;
    //this.devAndTesterArray.push({ role: 'developer' });
  }
  addTester(item: any, index: any) {
    this.managerArray[index].q.push(1);
    //item.q += 1;
    //this.devAndTesterArray.push({ role: 'tester' });
  }
}
