import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipetext',
  templateUrl: './pipetext.component.html',
  styleUrls: ['./pipetext.component.scss']
})
export class PipetextComponent implements OnInit {
  text: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  textTapped($event: any){
    this.text = $event.target.value;
  }

}
