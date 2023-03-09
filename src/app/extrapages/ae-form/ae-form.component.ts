import { Component } from '@angular/core';
import { User } from '../../models/users'
import { NgFor } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-ae-form',
    templateUrl: './ae-form.component.html',
    styleUrls: ['./ae-form.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, FormsModule, NgFor]
})
export class AeFormComponent  {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new User();

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newUser() {
    this.model = new User();
  }

  skyDog(): User {
    let myUser =  new User();
    console.log('My user is called ' + myUser.username); // "My user is called SkyDog"
    return myUser;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(userForm)}}
  showFormControls(form: any) {
    return
      form && form.controls['username'] &&
          form.controls['username'].value; // Dr. IQ
  }

  /////////////////////////////

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

// id!: number;
  // username!: string;
  // password!: string;
  // firstName?: string;
  // lastName?: string;
  // token?: string;
  // email!: string;

