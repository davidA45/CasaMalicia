import { Component, OnInit } from '@angular/core';
import { Image } from './image.model';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

     

     images: Image[] = [];
     actualImage: string;
     changeBackgroundCounter = 0;
      constructor(private ImagesService : ImagesService ) {}

    ngOnInit() {
      this.images = this.ImagesService.getImages();
      this.actualImage = this.images[0].image;
      setInterval(() => {
        this.changeBackgroundCounter++;
        if (this.changeBackgroundCounter > this.images.length - 1) {
          this.changeBackgroundCounter = 0;
        }
        this.actualImage = this.images[this.changeBackgroundCounter].image;
      }, 5000);
    }

}
