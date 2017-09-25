import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { FundTemplateReferenceVariablesComponent } from '../fund-template-reference-variables/fund-template-reference-variables.component';
import { FundInputOutputPropsComponent } from '../fund-input-output-props/fund-input-output-props.component';
import { FundTplExprOperatorsComponent } from '../fund-tpl-expr-operators/fund-tpl-expr-operators.component';

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
    FundBuiltInStructDirectivesComponent,
    FundTemplateReferenceVariablesComponent,
    FundInputOutputPropsComponent,
    FundTplExprOperatorsComponent
  ],
  imports: [
    // we don't import BrowserModule because we don't need to launch and run the app from here.
    // We don't need to reinstall the app-wide(de toda la app) providers
    CommonModule, // directives like ngIf, ngFor
    FormsModule, // ngModel diretive
    RoutingModule // to use routerLink inside the templates of components
  ],
  // exports to be accessible from another modules that imports this module
  exports: [
    FundTemplateSyntaxComponent,
    FundPropertyBindingComponent,
    FundAttrClassStyleBindingComponent,
    FundEventBindingComponent,
    FundPersonDetailComponent,
    FundSizerComponent,
    FundTwoWayBindingComponent,
    FundBuiltInAttrDirectivesComponent,
    FundBuiltInStructDirectivesComponent,
    FundTemplateReferenceVariablesComponent,
    FundInputOutputPropsComponent,
    FundTplExprOperatorsComponent
  ]
})

export class TemplateSyntaxModule {}
