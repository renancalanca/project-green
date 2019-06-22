import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { AppRoutingModule } from "./app-routing.module";
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { environment } from "../environments/environment";
import { AgmCoreModule } from "@agm/core";
import { RegisterComponent } from "./components/register/register.component";
import { MapsComponent } from "./components/maps/maps.component";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule
} from "@angular/platform-browser/animations";
import { MaterialModule } from "./material-module";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    PasswordResetComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: "GoogleApiKey"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
