import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:Login = {
    email: '',
    password: '',
    agree: false
  }
  public submitted:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  public onSubmit(form:any){
    if(form.valid){
      this.submitted = true;
      console.log(this.submitted);
    }else{
      console.log("Invalid Form");
      this.validate(form);
    }
  }
  validate(form: any) {
    Object.keys(form.controls).forEach(field =>
      {
        const control = form.controls[field];
        control.markAsTouched({onlyself : true});
      });
  }
  hasError(field:any){
    return(field.invalid && field.touched && field.errors); //'errors' is a method name
  }
}
interface Login{
  email:string;
  password:string;
  agree:boolean;
}
