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
  // { path: '', redirectTo: 'tpl-syntax-data-binding', pathMatch: 'full' },
  { path: 'tpl-syntax-data-binding/tpl-syntax', component: TplSyntaxComponent },
  { path: 'tpl-syntax-data-binding/property-binding', component: PropertyBindingComponent },
  { path: 'tpl-syntax-data-binding/attr-class-style-binding', component: AttrClassStyleBindingComponent },
  { path: 'tpl-syntax-data-binding/event-binding', component: EventBindingComponent },
  { path: 'tpl-syntax-data-binding/two-way-binding', component: TwoWayBindingComponent },
  { path: 'tpl-syntax-data-binding/built-in-attr-directives', component: BuiltInAttrDirectivesComponent },
  { path: 'tpl-syntax-data-binding/built-in-struct-directives', component: BuiltInStructDirectivesComponent },
  { path: 'tpl-syntax-data-binding/template-reference-variables', component: TplReferenceVariablesComponent },
  { path: 'tpl-syntax-data-binding/input-output-props', component: InputOutputPropsComponent },
  { path: 'tpl-syntax-data-binding/tpl-expr-operators', component: TplExprOperatorsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class TplSyntaxDataBindingRoutingModule {}
