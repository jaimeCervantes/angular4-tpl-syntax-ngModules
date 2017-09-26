import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './contact.component';
import { ContactService } from './contact.service';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    SharedModule, // get Common and Forms Module, awesome pipe and highlight directive
    ContactRoutingModule
  ],
  // Contact service provider is only used in this module
  providers: [ContactService]
})

export class ContactModule {}
