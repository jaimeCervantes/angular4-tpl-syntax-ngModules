import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AwesomePipe } from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    // Importing Common and Forms Module because declarations modules need them
    CommonModule,
    FormsModule
  ],
  declarations: [
    // we need to declare them to be able to exported
    AwesomePipe,
    HighlightDirective
  ],
  // Exports to have these modules public for other modules that import this one
  exports: [
    // we don't import BrowserModule because we don't need to launch and run the app from here.
    // We don't need to reinstall the app-wide(de toda la app) providers
    CommonModule, // directives like ngIf, ngFor
    FormsModule, // ngModel diretive
    AwesomePipe,
    HighlightDirective
  ]
})

export class SharedModule { }
