import { Component, EventEmitter, OnInit } from '@angular/core';
// import { AuthService } from './shared/services/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loadedFeature = 'recipe'

  // onNavigate(feature: string){
  //   this.loadedFeature = feature;


  // }
  //constructor(private authService: AuthService) { }
  constructor(){}
  ngOnInit() {
    //this.authService.autoLogin();
  }
}