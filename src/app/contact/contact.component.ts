import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistService } from '../regist.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor( private _RegistService:RegistService ){}
  // Form
  registerForm : FormGroup = new FormGroup({
    name  : new FormControl (null , [Validators.required ,Validators.pattern(/^[A-Za-z0-9]{3,12}$/) ]) ,
    email : new FormControl(null, [Validators.required , Validators.email]) ,
    phone : new FormControl(null , [Validators.required , Validators.pattern(/^01[0125][0-9]{8}$/) ]) ,
  })
  // 
  userData : any ;
  // submit
  handelRegister(registerForm:FormGroup){
    console.log( registerForm );
    this.userData = registerForm.value
    console.log(registerForm.get('name'));
    

    this._RegistService.handelRegister(this.userData).subscribe({
      next :(response)=> { console.log(response) } ,
      error :(err)=> { console.log(err) }
    })
    
  }


}
