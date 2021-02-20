import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginform = this.fb.group({
    username:[''],
    password:['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public onLoginSubmit() : void{
    console.log(this.loginform)
  }

  onButtonClick(){
    console.log("Thank you for clicking");
  }

}


