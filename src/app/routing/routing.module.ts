import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundTemplateSyntaxComponent } from '../fund-template-syntax/fund-template-syntax.component';
import { FundPropertyBindingComponent } from '../fund-property-binding/fund-property-binding.component';
import { FundAttrClassStyleBindingComponent } from '../fund-attr-class-style-binding/fund-attr-class-style-binding.component';
import { FundEventBindingComponent } from '../fund-event-binding/fund-event-binding.component';
import { FundTwoWayBindingComponent } from '../fund-two-way-binding/fund-two-way-binding.component';
import { FundBuiltInAttrDirectivesComponent } from '../fund-built-in-attr-directives/fund-built-in-attr-directives.component';
import { FundBuiltInStructDirectivesComponent } from '../fund-built-in-struct-directives/fund-built-in-struct-directives.component';

const routes: Routes = [
  { path: 'template-syntax', component: FundTemplateSyntaxComponent },
  { path: 'template-syntax/property-binding', component: FundPropertyBindingComponent },
  { path: 'template-syntax/attr-class-style-binding', component: FundAttrClassStyleBindingComponent },
  { path: 'template-syntax/event-binding', component: FundEventBindingComponent },
  { path: 'template-syntax/two-way-binding', component: FundTwoWayBindingComponent },
  { path: 'template-syntax/built-in-attr-directives', component: FundBuiltInAttrDirectivesComponent },
  { path: 'template-syntax/built-in-struct-directives', component: FundBuiltInStructDirectivesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class RoutingModule {}
