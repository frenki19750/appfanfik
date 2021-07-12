import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import { AuthService } from "../auth.service";

@Component ({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(public autService: AuthService) {}

  OnSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.autService.createuser(form.value.email, form.value.password);
  }
}
