import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './model/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap
  myOtherSnap!: FaceSnap
  mLastSnap!: FaceSnap

  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );
    this.myOtherSnap = new FaceSnap(
      'Halo : Reach',
      'Ce jeu est vraiment génial !',
      'https://store-images.s-microsoft.com/image/apps.11841.13712233546831125.9f4bcdfb-0193-4de3-ae20-7f6d3ffe2658.527e1272-f3bb-4917-96fa-15c35316e1e5?q=90&w=480&h=270',
      new Date(),
      0
    );
    this.mLastSnap = new FaceSnap(
      'Hello there',
      'General Kenobi !',
      'https://c.tenor.com/DSG9ZID25nsAAAAC/hello-there-general-kenobi.gif',
      new Date(),
      0
    );
  }
}
