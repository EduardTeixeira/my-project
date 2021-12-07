import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

import { MatSnackBar } from '@angular/material/snack-bar';

import { GlobalContextService } from './../../shared/services/global-context.service';
import { SessionService } from './../../core/services/session.service';
import { AuthenticationService } from './../../core/services/authentication.service';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
   });

   constructor(
      private globalContextService: GlobalContextService,
      private authService: AuthenticationService,
      private session: SessionService,
      private snackBar: MatSnackBar,
      private fb: FormBuilder,
      private location: Location
   ) { }

   ngOnInit() {
      this.globalContextService.showHeaderFooter(false, false);
   }

   login() {

      const credentials = this.loginForm.value;

      this.authService.login(credentials.email, credentials.password).subscribe(
         () => {
            this.session.setLoggedInStatus(true);
            this.location.back();
         },
         (err) => {
            this.snackBar.open(
               'Falha na autenticação. Verifique seus dados de login.',
               'Fechar',
               { duration: 6000 }
            );
            this.loginForm.patchValue({ password: '' });
         }
      );
   }

}
