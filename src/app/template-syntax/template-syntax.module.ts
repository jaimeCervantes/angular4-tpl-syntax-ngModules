import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FundTemplateSyntaxComponent } from '../fund-template-syntax/fund-template-syntax.component';
import { FundPropertyBindingComponent } from '../fund-property-binding/fund-property-binding.component';
import { FundAttrClassStyleBindingComponent } from '../fund-attr-class-style-binding/fund-attr-class-style-binding.component';
import { FundEventBindingComponent } from '../fund-event-binding/fund-event-binding.component';
import { FundPersonDetailComponent } from '../fund-person-detail/fund-person-detail.component';

@NgModule({
  declarations: [
    FundTemplateSyntaxComponent,
    FundPropertyBindingComponent,
    FundAttrClassStyleBindingComponent,
    FundEventBindingComponent,
    FundPersonDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    FundTemplateSyntaxComponent,
    FundPropertyBindingComponent,
    FundAttrClassStyleBindingComponent,
    FundEventBindingComponent,
    FundPersonDetailComponent
  ]
})

export class TemplateSyntaxModule {}
