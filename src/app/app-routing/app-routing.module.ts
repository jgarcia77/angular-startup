import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './app-routing-routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
