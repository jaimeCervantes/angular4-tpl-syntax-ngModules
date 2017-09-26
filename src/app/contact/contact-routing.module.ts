import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    // @TODO: forChild vs forRoot
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})

export class ContactRoutingModule {}
