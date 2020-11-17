import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../../services/navbar.service'

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  title: string = "Coding Challenge";
  constructor(public nav: NavbarService) { }

  ngOnInit() {
    this.nav.setTitle(this.title);
    // console.log(this.title)
  }

}
