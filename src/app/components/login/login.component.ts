import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
user:User;
userGroup:FormGroup;
constructor(private builder:FormBuilder,private loginService:LoginService){
}
  ngOnInit(): void {

    this.userGroup=this.builder.group({
      username:[''],
      password:['']
    }
    )
  }

  onSubmit(){

    console.log(this.userGroup.value);
    this.user=this.userGroup.value;
    this.loginService.login(this.user).subscribe(
      data=>{
        console.log("Username  password valid ");
        alert('login success  token '+ data.access_token)
        console.log(data.access_token);
            }
      ,error=>{
        alert('login Faild')
        console.log("Username or password not valid ");
        
      }
    )
  }

}
