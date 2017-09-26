import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TplSyntaxComponent } from './tpl-data-binding/tpl-syntax/tpl-syntax.component';

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
