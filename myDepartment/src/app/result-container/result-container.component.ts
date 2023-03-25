import { Component } from '@angular/core';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss'],
})
export class ResultContainerComponent {
  managerArray: {
    m: object[];
    d: Array<number>;
    q: Array<number>;
    mLeft: number;
  }[] = [];
  devAndTesterArray: { role: string }[] = [];
  addManager(item: any, index: any) {
    this.managerArray[index].m.push({
      m: [],
      d: Array(0),
      q: Array(0),
      mLeft: 20,
    });
  }
  addDeveloper(item: any, index: any) {
    this.managerArray[index].d.push(1);
  }
  addTester(item: any, index: any) {
    this.managerArray[index].q.push(1);
  }
  addManagerFirst() {
    this.managerArray.push({ m: [], d: Array(0), q: Array(0), mLeft: 0 });
  }
  addDeveloperFirst() {
    this.managerArray[0].d.push(1);
  }
  addTesterFirst() {
    this.managerArray[0].q.push(1);
  }
}
