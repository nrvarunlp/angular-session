import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { LoopingComponent } from './looping/looping.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { HttpComponent } from './http/http.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoopingComponent,
    BindingComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'index', component: WelcomeComponent },
      { path: 'looping', component: LoopingComponent },
      { path: 'binding', component: BindingComponent },
      { path: 'http', component: HttpComponent },
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: '**', redirectTo: 'index', pathMatch: 'full' },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
