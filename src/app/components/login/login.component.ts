import {
  Component, OnInit
}
from '@angular/core';
import {
  AuthenticationService
}
from '../services/index';
import {
  Router, ActivatedRoute
}
from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute,
      private router: Router, private authenticationService: AuthenticationService) {}

  ngOnInit() {
      this.authenticationService.logout();
  }

  loginSubmit(form: any) {
      this.authenticationService.login(form.id, form.password)
          .subscribe(
              data => {
                  this.router.navigate(["/"]);
              },
              error => {
                  alert(error);
              });
  }
}