import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Output, OnInit, OnDestroy } from "@angular/core";
// import { AuthService } from '../shared/services/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit, OnDestroy {
    constructor(private router: Router, private route:ActivatedRoute) { }
    //private userSub: Subscription
    //isAuthenticated = false;

    ngOnInit() {
        // this.userSub = this.authServive.user.subscribe(user => {
        //     this.isAuthenticated = !!user;
        // });
    }

    ngOnDestroy() {
        //this.userSub.unsubscribe();
    }

    onSaveData() {
        //this.dataStorageService.storeRecipes();
    }

    onFetchData() {
        //this.dataStorageService.fetchRecipes().subscribe();
    }

    onLogout() {
        //this.authServive.logout();
    }

}