import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  savePage: number = 1;
  event!: string;

  constructor(private Location: Location) {
    if (this.Location.path().includes('interviews')) {
      this.savePage = 2;
    } else if (this.Location.path().includes('fanpages')) {
      this.savePage = 3;
    } else if (this.Location.path().includes('development')) {
      this.savePage = 4;
    } else if (this.Location.path().includes('contact')) {
      this.savePage = 5;
    } else {
      this.savePage = 1;
    }
  }

  ngOnInit(): void {}

  setPage(page: number): void {
    this.savePage = page;
  }
}
