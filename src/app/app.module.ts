import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training/training.component';
import { CurrenttrainingComponent } from './training/currenttraining/currenttraining.component';
import { NewtrainingComponent } from './training/newtraining/newtraining.component';
import { PasttrainingsComponent } from './training/pasttrainings/pasttrainings.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrenttrainingComponent,
    NewtrainingComponent,
    PasttrainingsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
