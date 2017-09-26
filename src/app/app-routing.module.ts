import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'tpl-syntax-data-binding', pathMatch: 'full' },
  { path: 'tpl-syntax-data-binding', loadChildren: 'app/tpl-data-binding/tpl-syntax-data-binding.module#TplSyntaxDataBindingModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
