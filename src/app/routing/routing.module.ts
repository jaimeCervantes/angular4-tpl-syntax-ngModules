import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundTemplateSyntaxComponent } from '../fund-template-syntax/fund-template-syntax.component';
import { FundPropertyBindingComponent } from '../fund-property-binding/fund-property-binding.component';
import { FundAttrClassStyleBindingComponent } from '../fund-attr-class-style-binding/fund-attr-class-style-binding.component';
import { FundEventBindingComponent } from '../fund-event-binding/fund-event-binding.component';

const routes: Routes = [
  { path: 'template-syntax', component: FundTemplateSyntaxComponent },
  { path: 'template-syntax/property-binding', component: FundPropertyBindingComponent },
  { path: 'template-syntax/attr-class-style-binding', component: FundAttrClassStyleBindingComponent },
  { path: 'template-syntax/event-binding', component: FundEventBindingComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class RoutingModule {}
