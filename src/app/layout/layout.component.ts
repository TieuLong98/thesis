import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  collapseSidebar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  collapseMenu() {
    console.log("testMenu");
    this.collapseSidebar = !this.collapseSidebar;
  }

}
