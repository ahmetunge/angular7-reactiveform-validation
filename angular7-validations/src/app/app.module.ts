import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatTextareaAutosize} from '@angular/material/input';
import {MatDatepickerModule, MatDatepickerInput, MatDatepickerToggle, MatCalendarHeader, MatDatepicker} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule, MatRadioGroup, MatRadioButton} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      RegisterComponent,
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatRadioModule,
      MatButtonModule,
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      MatTextareaAutosize,
      MatDatepickerInput,
      MatDatepickerToggle,
      MatCalendarHeader,
      MatDatepicker,
      MatRadioGroup,
      MatRadioButton
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
