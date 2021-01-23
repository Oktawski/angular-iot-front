import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    logout(){
        this.userService.logout();
    }

    isSignedIn(){
        return this.userService.getIsSignedIn();
    }


}
