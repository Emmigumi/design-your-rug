import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseFormRugComponent } from './choose-form-rug/choose-form-rug.component';

const routes: Routes = [
{
  path: '',
  component: ChooseFormRugComponent,
},
{
  path: '**',
  component: ChooseFormRugComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
