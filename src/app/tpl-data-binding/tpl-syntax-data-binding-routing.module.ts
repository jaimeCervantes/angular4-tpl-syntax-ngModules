import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TplSyntaxComponent } from './tpl-syntax/tpl-syntax.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttrClassStyleBindingComponent } from './attr-class-style-binding/attr-class-style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { BuiltInAttrDirectivesComponent } from './built-in-attr-directives/built-in-attr-directives.component';
import { BuiltInStructDirectivesComponent } from './built-in-struct-directives/built-in-struct-directives.component';
import { TplReferenceVariablesComponent } from './tpl-reference-variables/tpl-reference-variables.component';
import { InputOutputPropsComponent } from './input-output-props/input-output-props.component';
import { TplExprOperatorsComponent } from './tpl-expr-operators/tpl-expr-operators.component';

const routes: Routes = [
  { path: 'template-syntax', component: TplSyntaxComponent },
  { path: 'template-syntax/property-binding', component: PropertyBindingComponent },
  { path: 'template-syntax/attr-class-style-binding', component: AttrClassStyleBindingComponent },
  { path: 'template-syntax/event-binding', component: EventBindingComponent },
  { path: 'template-syntax/two-way-binding', component: TwoWayBindingComponent },
  { path: 'template-syntax/built-in-attr-directives', component: BuiltInAttrDirectivesComponent },
  { path: 'template-syntax/built-in-struct-directives', component: BuiltInStructDirectivesComponent },
  { path: 'template-syntax/template-reference-variables', component: TplReferenceVariablesComponent },
  { path: 'template-syntax/input-output-props', component: InputOutputPropsComponent },
  { path: 'template-syntax/tpl-expr-operators', component: TplExprOperatorsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class TplSyntaxDataBindingRoutingModule {}
