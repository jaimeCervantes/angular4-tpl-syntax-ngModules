import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TplSyntaxComponent } from './tpl-data-binding/tpl-syntax/tpl-syntax.component';

const routes: Routes = [
  // redirect so url path is correct
  { path: '', redirectTo: 'template-syntax', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
