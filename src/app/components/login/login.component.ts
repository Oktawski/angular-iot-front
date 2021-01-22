import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import {User} from '../../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: User;

    constructor(private userService: UserService) {
        this.user = new User();
    }

    ngOnInit(): void {
    }

    signin(): void{
        this.userService.signin(this.user)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                });
    }

}
