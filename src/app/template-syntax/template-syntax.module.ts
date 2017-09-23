import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FundTemplateSyntaxComponent } from '../fund-template-syntax/fund-template-syntax.component';
import { FundPropertyBindingComponent } from '../fund-property-binding/fund-property-binding.component';
import { FundAttrClassStyleBindingComponent } from '../fund-attr-class-style-binding/fund-attr-class-style-binding.component';
import { FundEventBindingComponent } from '../fund-event-binding/fund-event-binding.component';
import { FundPersonDetailComponent } from '../fund-person-detail/fund-person-detail.component';
import { FundSizerComponent } from '../fund-sizer/fund-sizer.component';
import { FundTwoWayBindingComponent } from '../fund-two-way-binding/fund-two-way-binding.component';
import { FundBuiltInAttrDirectivesComponent } from '../fund-built-in-attr-directives/fund-built-in-attr-directives.component';
import { FundBuiltInStructDirectivesComponent } from '../fund-built-in-struct-directives/fund-built-in-struct-directives.component';

import { RoutingModule } from '../routing/routing.module';

@NgModule({
  declarations: [
    FundTemplateSyntaxComponent,
    FundPropertyBindingComponent,
    FundAttrClassStyleBindingComponent,
    FundEventBindingComponent,
    FundPersonDetailComponent,
    FundSizerComponent,
    FundTwoWayBindingComponent,
    FundBuiltInAttrDirectivesComponent,
    FundBuiltInStructDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  exports: [
    FundTemplateSyntaxComponent,
    FundPropertyBindingComponent,
    FundAttrClassStyleBindingComponent,
    FundEventBindingComponent,
    FundPersonDetailComponent,
    FundSizerComponent,
    FundTwoWayBindingComponent,
    FundBuiltInAttrDirectivesComponent,
    FundBuiltInStructDirectivesComponent
  ]
})

export class TemplateSyntaxModule {}
