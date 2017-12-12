import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service';

import { PeopleService } from './services/people.service';
import { TplSyntaxDataBindingModule } from './tpl-data-binding/tpl-syntax-data-binding.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Learning ngModules
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { ContactModule } from './contact/contact.module';

// angular material needs animations for its components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// angular components to be used in the app
import { MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    TplSyntaxDataBindingModule,
    ContactModule
  ],
  providers: [PeopleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
