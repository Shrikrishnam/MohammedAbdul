import { Component, OnInit} from '@angular/core';
import {  FormGroup, FormControl, Validators } from "@angular/forms";
import { UserService } from '../_services/user.service';


export class Fitness {
  constructor(
    public inr: number,
    public paisa: number,
    public streetaddress: string,
    public city: string,
    public state: string,
    public country: string,
    public pincode: number,
    public phonenumber: string,
    public email: string,
    public firstname:string,
    public lastname: string,
    public age:number,
    public trainerpreference: string,
    public physiotherapist: string,
    public packages: string
  ) { }
}

@Component({
  selector: 'app-place-fitness-trainer-appointment',
  templateUrl: './place-fitness-trainer-appointment.component.html'
  
})
export class PlaceFitnessTrainerAppointmentComponent implements OnInit {

  

  fitnessForm: FormGroup;
  
  constructor(private userservice: UserService) {
  
   }
  
  fitness: Fitness
  ngOnInit() {
    this.fitnessForm= new FormGroup({
       'firstname':new FormControl(null,[Validators.required,Validators.pattern('[a-z A-z]*')]),
       'lastname':new FormControl(null,[Validators.required,Validators.pattern('[a-z A-z]*')]),
       'email':new FormControl(null,[Validators.required,Validators.email]),
       'phone':new FormControl(null,[Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')
        
        ]),
        'age':new FormControl(null,[Validators.required,
          Validators.min(18),
          Validators.max(60),
          Validators.pattern('[0-9]*')
        ]),
        'address':new FormControl(null,Validators.required),
        'state':new FormControl(null,[Validators.required,
          Validators.pattern('[a-z A-z]*')]),
        'pincode':new FormControl(null,[Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6),
        Validators.pattern('[0-9]*')]),
        'city':new FormControl(null,[Validators.required,
        Validators.pattern('[a-zA-Z]*')]),
        'country':new FormControl(null,Validators.required),
        'package':new FormControl('500'),
        'preference':new FormControl('any'),
        'inr':new FormControl({value:'',disabled:true},Validators.required),
        'paisa':new FormControl({value:'',disabled:true},Validators.required)
        
    })
      let fc=<HTMLScriptElement>document.querySelector("input[formControlName='firstname']");
      fc.focus();
  }

  check(){
    if(this.fitnessForm.controls['package'].value=="other")
    {
      this.fitnessForm.controls['inr'].enable();
      this.fitnessForm.controls['paisa'].enable();
    }
    else{
      this.fitnessForm.controls['inr'].disable();
      this.fitnessForm.controls['paisa'].disable();
    }
  }

  onSubmit() {
    if(this.fitnessForm.valid)
    {
      this.userservice.postfitnessdata(this.fitnessForm.value)
      .subscribe()
      alert("APPOINTMENT PLACED THANK YOU!")
    }
  }
  
    
}
