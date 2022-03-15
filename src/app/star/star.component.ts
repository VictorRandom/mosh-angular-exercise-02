import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit {

  isActive: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeBackground(){
    this.isActive = !this.isActive;
  }

}
