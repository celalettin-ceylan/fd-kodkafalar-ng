import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {

  items: MegaMenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: "Dashboard",
        icon: "pi pi-home",
        routerLink: "dashboard",
      },
      {
        label: "Category",
        icon: "pi pi-list",
        routerLink: "category",
      }
    ]
  }
}
