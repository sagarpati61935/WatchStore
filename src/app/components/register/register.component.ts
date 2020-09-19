import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ CommonService} from 'src/app/services/common.service'

/**
 * 
 * @param form 
 */

function passwordsMatchValidator(form){
  const password=form.get('password')
  const confirmPassword=form.get('confirmPassword')

  if(password.value !==confirmPassword.value){
    confirmPassword.setErrors({passwordsMatch:true})
  }else{
    confirmPassword.setErrors(null)
  }
  return null
}
function symbolValidator(control){
  if(control.hasError('required')) return null;
  if(control.hasError('minlength')) return null;
  
  if(control.value.indexOf('@')> -1){
    return null
  }else{
    return {symbol:true}
  }
  }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  allUser:Object;

  constructor(private builder:FormBuilder,
               private commonService:CommonService) { }

  ngOnInit(): void {
    this.buildForm()
  }
    buildForm(){
      this.registerForm=this.builder.group({
        name:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        username:['',Validators.required],
        password:['',[Validators.required,symbolValidator,Validators.minLength(4)]],
        confirmPassword:''
      }, {
        validators:passwordsMatchValidator
      
      })
    }

register(){
  console.log(this.registerForm.value)
  this.commonService.createUser(this.registerForm.value).subscribe((response)=>{
  alert("succesfull registered");
  })
}
 
  }

