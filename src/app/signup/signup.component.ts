import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  pas1:any=''
  pas2:any=''
signUpForm:FormGroup= new FormGroup({
  name: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.email]),
  uname: new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z1-9]+$/)]),
  pass1: new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
  pass2: new FormControl('',[Validators.required])
  
},
this.matchPasswordValidator
)

signUp(){
  console.log(this.signUpForm)

}

matchPasswordValidator(control: AbstractControl): ValidationErrors | null {
  // const password = this.signUpForm.get('pass1');
  // const confirmPassword = control.value;
 
  // console.log(confirmPassword)
  // console.log(password?.value)
  
  // if (password && confirmPassword && password.value !== confirmPassword.value) {
  //   console.log('password')
  console.log(control.value.pass1 === control.value.pass2)
  if(control.value.pass1 !== control.value.pass2 ){
    
    return { matchPassword: true };
    
  }
  
  return null;
}


}
