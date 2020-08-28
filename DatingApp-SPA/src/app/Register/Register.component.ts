import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  // tslint:disable-next-line: typedef
  register(){
  this.authService.register(this.model).subscribe(() => {
    this.alertify.success('registration successful');
  }, error => {
    this.alertify.error(error);

  });
}
  // tslint:disable-next-line: typedef
  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }

}
