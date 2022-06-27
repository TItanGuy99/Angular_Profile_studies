import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  savePage: number = 1;
  event!: string;

  constructor() {}

  ngOnInit(): void {}

  setPage(page: number): void {
    this.savePage = page;
  }
}
