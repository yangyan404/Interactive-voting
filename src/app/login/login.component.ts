import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators, FormControl} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls:['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginGroup:FormGroup; 
  constructor(private fb:FormBuilder) {
    // this.loginGroup=fb.group({
    //   username:['zhangsan',Validators.required,Validators.minLength(4)]
    // })
   }

  ngOnInit() {
    this.loginGroup=this.fb.group({
      username:new FormControl('',[Validators.required,Validators.minLength(4)])
    })
  }

  login(){
    console.log(this.loginGroup.value);
  }
}
