import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCGKNfA9RVWbB4B5hYE2wqSdcNunEXNJUw',
      authDomain: 'ng-recipe-book-ddea7.firebaseapp.com',
      databaseURL: 'https://ng-recipe-book-ddea7.firebaseio.com',
      projectId: 'ng-recipe-book-ddea7',
      storageBucket: 'ng-recipe-book-ddea7.appspot.com',
      messagingSenderId: '55582188283'
    });
  }

  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
