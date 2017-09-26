import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
/* Contact Imports */
import { ContactComponent } from './contact.component';
/*
{ ContactComponent }   from './contact/contact.component';
*/
import { ContactService } from './contact.service';
import { AwesomePipe } from './awesome.pipe';

//  Importing using as operator to avoid name conflicts with HighlightDirective directives
import { HighlightDirective } from './highlight.directive';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent,
    AwesomePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ],
  // Contact service provider is only used in this module
  providers: [ContactService]
})

export class ContactModule {}
