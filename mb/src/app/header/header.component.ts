import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import {  ViewChild, ElementRef, VERSION } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Output() toggleCartVisibility = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();
 

  itemsCount$ = this.scService.itemsCount$;

  constructor(private scService: ShoppingCartService) { }

  ngOnInit(): void { }  

  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }

  onMenuClicked(): void {
    this.toggleMenu.emit();
  }
  scrollPoint1(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth"});
    el.scrollIntoView();
  }
  
  scrollPoint2() {
    // document.getElementById("point_2").scrollIntoView({behavior: "smooth"});
    document.getElementById('catalog').scrollIntoView();
  }
  
  @ViewChild('point_3') private my_point_3: ElementRef;
  scrollPoint3() {
    // this.my_point_3.nativeElement.scrollIntoView({behavior: "smooth"});
    this.my_point_3.nativeElement.scrollIntoView();
  }
  
  
   
}
