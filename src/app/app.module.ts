import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { UserInputComponent } from './first-page/user-input/user-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, FirstPageComponent, UserInputComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
