import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { TplSyntaxComponent } from './tpl-syntax/tpl-syntax.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttrClassStyleBindingComponent } from './attr-class-style-binding/attr-class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { FundPersonDetailComponent } from '../fund-person-detail/fund-person-detail.component';
import { FundSizerComponent } from '../fund-sizer/fund-sizer.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { BuiltInAttrDirectivesComponent } from './built-in-attr-directives/built-in-attr-directives.component';
import { BuiltInStructDirectivesComponent } from './built-in-struct-directives/built-in-struct-directives.component';
import { TplReferenceVariablesComponent } from './tpl-reference-variables/tpl-reference-variables.component';
import { InputOutputPropsComponent } from './input-output-props/input-output-props.component';
import { TplExprOperatorsComponent } from './tpl-expr-operators/tpl-expr-operators.component';
import { TplSyntaxDataBindingRoutingModule } from './tpl-syntax-data-binding-routing.module';

// componentes to be used in the tpl-syntax components
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    SharedModule, // get Common and Forms Module, awesome pipe and highlight directive
    TplSyntaxDataBindingRoutingModule, // to use routerLink inside the templates of components
    // angular material
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ],
  declarations: [
    TplSyntaxComponent,
    PropertyBindingComponent,
    AttrClassStyleBindingComponent,
    EventBindingComponent,
    FundPersonDetailComponent,
    FundSizerComponent,
    TwoWayBindingComponent,
    BuiltInAttrDirectivesComponent,
    BuiltInStructDirectivesComponent,
    TplReferenceVariablesComponent,
    InputOutputPropsComponent,
    TplExprOperatorsComponent
  ],
  exports: [
    // angular material
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule
  ]
})

export class TplSyntaxDataBindingModule {}
