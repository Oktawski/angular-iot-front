import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FlexLayoutModule } from '@angular/flex-layout';

/* Angular material */
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
    declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        FlexLayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
