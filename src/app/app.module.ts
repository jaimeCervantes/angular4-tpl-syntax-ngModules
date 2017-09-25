import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data-service';

import { PeopleService } from './services/people.service';
import { TemplateSyntaxModule } from './template-syntax/template-syntax.module';
import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';

// Learning ngModules
import { HighlightDirective } from './highlight.directive';
import { TitleComponent } from './title.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    TemplateSyntaxModule,
    RoutingModule
  ],
  providers: [PeopleService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
