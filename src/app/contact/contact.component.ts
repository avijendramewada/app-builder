import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userData:any[] = [];
  addUser = new FormGroup({
    first_name: new FormControl('' ,Validators.required),
   email: new FormControl('' ,[Validators.required , Validators.email]),
   subject: new FormControl('' , Validators.required),
   message: new FormControl('')
    
  })
  get first_name() {
    return this.addUser.get('first_name');
  } 
  get email() {
    return this.addUser.get('email');
  } 
  get subject() {
    return this.addUser.get('subject');
  }
  constructor() { }

  ngOnInit(): void {
  }
  submitForm() {
    console.log('name ',this.addUser.value)
    let data = localStorage.getItem('user') || JSON.stringify([]);
    this.userData = JSON.parse(data);
    let userExist =  this.userData.filter(_userdata =>{
      return _userdata.email == this.addUser.value.email;
    })
    console.log('userExist',userExist)
    if(userExist.length){
      return alert('User already exist');
    }
     else{
      this.userData.push(this.addUser.value);
      localStorage.setItem('user',JSON.stringify(this.userData));
    }
  }
}
