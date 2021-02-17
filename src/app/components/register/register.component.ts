import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user: User;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    signup(): void{
        this.userService.signup(this.user)
            .subscribe(
                response => {
                    console.log(response);
                },
                error => {
                    console.log(error);
                }
            );
    }


}
