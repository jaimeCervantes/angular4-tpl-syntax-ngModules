import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service';

import { PeopleService } from './services/people.service';
import { TplSyntaxModule } from './tpl-syntax/tpl-syntax.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Learning ngModules
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';
import { ContactModule } from './contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    // Now this directive does not conflict with the contact one
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    TplSyntaxModule,
    ContactModule
  ],
  providers: [PeopleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
