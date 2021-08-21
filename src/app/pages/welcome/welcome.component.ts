import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'webpage-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  @ViewChild('backgroundVideo') backgroundVideo: any; 
  displayMenu: boolean = true;
  constructor() {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    document.querySelector('video')?.play();
  }

  toggleMenu() {
    console.log('Clicked on menu!');
    this.displayMenu = !this.displayMenu;
  }

}
