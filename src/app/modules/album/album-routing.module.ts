import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumDetailPageComponent } from "./pages/album-detail-page/album-detail-page.component";
import { AlbumPageComponent } from "./pages/album-page/album-page.component";

const albumRoutes: Routes = [
  { path: 'albums',  component: AlbumPageComponent },
  { path: 'albums/:id', component: AlbumDetailPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(albumRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AlbumRoutingModule { };