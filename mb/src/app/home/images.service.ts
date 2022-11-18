import { Image } from "./image.model";

export class ImagesService {
  private images: Image[] = [
    {
      imageDesciption: "html5",
      image: ".../assets/img/logo-html5.jpg"

    },
    {
      imageDesciption: "java",
      image: ".../assets/img/logo-java.jpg"
      
    },
    {
      imageDesciption: "css3",
      image: ".../assets/img/logo-css3.jpg"
    }
  ];

  getImages() {
    return this.images.slice();
  }
}