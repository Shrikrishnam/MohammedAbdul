import { Component, OnInit } from '@angular/core';
import {UserService,Appointment} from '../_services/user.service';

// export class Modify {
//   constructor(
//     public address: string,
//     public city: string,
//     public phone: string,
//     public firstname:string,
//     public lastname: string,
//     public trainerpreference: string,
//     public packages: string
//   ) { }
// }


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  constructor(private userservice:UserService) { }

 private data:Appointment[];
  modify:any;

  ngOnInit() {
    this.getfitness()  

  }
  
  getfitness() {
     this.userservice.getfitnessdata().subscribe(result=>this.data= result,error=>console.log("Error: "+error))
  }

  delete(id){
    if(confirm("Are you sure you want to delete"))
   {
      this.userservice.deletefitnessdata(id).subscribe();
      location.reload();
    }
  }

  edit(ap){
    this.modify=ap;
    try{
     let temp=prompt("Edit your first name",ap.firstname);
     if(temp.length!=0)
     { this.modify.firstname=temp; }
     temp=prompt("Edit your last name",ap.lastname);
     if(temp.length!=0)
     { this.modify.lastname=temp; }
     temp=prompt("Edit your city",ap.city);
     if(temp.length!=0)
     { this.modify.city=temp; }
     temp=prompt("Edit your phone",ap.phone);
     if(temp.length!=0 && temp.length==10)
     { this.modify.phone=temp; }
     temp=prompt("Edit your address",ap.address);
     if(temp.length!=0)
     { this.modify.address=temp; }
     temp=prompt("Edit your package",ap.package);
     if(temp.length!=0)
     { this.modify.package=temp; }
     this.modify.preference=ap.preference;
    this.userservice.updatefitnessdata(ap.id,this.modify).subscribe();
    alert("values updated");
    }
    catch(err)
    {
      console.log("update cancelled")
    }

   
  }
  // check(inr,paisa)
  // {
  //   if(inr==null)
  //   {
  //     return "package"
  //   }
  //   else{
  //     return inr+"."+paisa
  //   }
  // }
}
