import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navsUrl: string[] = [
    '../../../assets/images/plus.svg',
    '../../../assets/images/calendar icon.svg',
    '../../../assets/images/Group 5099.svg',
    '../../../assets/images/message.svg',
    '../../../assets/images/list.svg',
    '../../../assets/images/sett.svg'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
