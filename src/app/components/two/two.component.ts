import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    return 2+2;
  }

  substraction(){
    return 4-2;
  }

}
