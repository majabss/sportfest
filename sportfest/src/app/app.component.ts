import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagePath = '/assets/images/tribune2.png';
  atiwlogo = '/assets/images/atiw-bk_150x60.png';
  title = 'Sportfest';
  year = '2017';
  asdf = 42;
  sadf: number;
  
  public abd(){
    let as: string;
    return 13;
  }
}
