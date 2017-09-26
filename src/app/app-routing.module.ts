import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TplSyntaxComponent } from './tpl-syntax/tpl-syntax/tpl-syntax.component';

const routes: Routes = [
  { path: '', component: TplSyntaxComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
