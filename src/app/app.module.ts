import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarComponent } from './star/star.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PipetextComponent } from './pipetext/pipetext.component';
import { PipetextPipe } from './pipetext.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent,
    PipetextComponent,
    PipetextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
