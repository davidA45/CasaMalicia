import {  Component , OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


  export class AppComponent implements OnInit {
    title = 'malicia-bar';
    
    ngOnInit(): void {
    }
    
    isCartVisible = false;
    isMenuOpened = false;
    parametro: String;


  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  showMenu(): void {
    this.isCartVisible = false;
    this.isMenuOpened = true;
  }

  hideMenu(): void {
    this.isMenuOpened = false;
  }



}