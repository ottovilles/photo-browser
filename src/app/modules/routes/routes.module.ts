import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent }
]

@NgModule({
  declarations: [
    SideNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
    SideNavComponent
  ]
})
export class RoutesModule { }
