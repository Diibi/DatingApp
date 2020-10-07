import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BsDropdownModule} from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FileUploadModule } from 'ng2-file-upload';
//import { TimeAgoPipe } from 'time-ago-pipe';

import { AppComponent } from '../src/app/app.component';
import { HomeComponent } from '../src/app/Home/Home.component';
import { ListsComponent } from '../src/app/lists/lists.component';
import { MemberCardComponent } from '../src/app/members/member-card/member-card.component';
import { MemberDetailComponent } from '../src/app/members/member-detail/member-detail.component';
import { MemberListComponent } from '../src/app/members/member-list/member-list.component';
import { MessagesComponent } from '../src/app/messages/messages.component';
import { NavComponent } from '../src/app/nav/nav.component';
import { RegisterComponent } from '../src/app/Register/Register.component';
import { appRoutes } from '../src/app/routes';
import { MemberDetailResolver } from '../src/app/_resolvers/member-detail.resolver';
import { MemberListResolver } from '../src/app/_resolvers/member-list.resolver';
import { AlertifyService } from '../src/app/_services/alertify.service';
import { AuthService } from '../src/app/_services/auth.service';
import { ErrorInterceptorProvider } from '../src/app/_services/error.interseptor';
import { UserService } from '../src/app/_services/user.service';
import { MemberEditComponent } from '../src/app/members/member-edit/member-edit.component';
import { MemberEditResolver } from '../src/app/_resolvers/member-edit.resolver';
import { PreventUnsavedChanges } from '../src/app/_gurads/prevent-unsaved-changes.guard';
import { PhotoEditorComponent } from '../src/app/members/photo-editor/photo-editor.component';


export function tokenGetter(){
  return localStorage.getItem('token');
}
export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false}
  };
}

@NgModule({
  declarations: [
    AppComponent,
      NavComponent,
      HomeComponent,
      RegisterComponent,
      MemberListComponent,
      ListsComponent,
      MessagesComponent,
      MemberCardComponent,
      MemberDetailComponent,
      MemberEditComponent,
      PhotoEditorComponent,

   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
      allowedDomains: ['localhost:5000'],
      disallowedRoutes: ['localhost:5000/api/auth']

      }
    })

  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    UserService,
    MemberDetailComponent,
    MemberListResolver,
    MemberDetailResolver,
    MemberEditResolver,
    PreventUnsavedChanges,
    {provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }