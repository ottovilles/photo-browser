import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PhotoDetailPageComponent } from "./pages/photo-detail-page/photo-detail-page.component";
import { PhotoPageComponent } from "./pages/photo-page/photo-page.component";

const photoRoutes: Routes = [
  { path: 'photos',  component: PhotoPageComponent },
  { path: 'photos/:id', component: PhotoDetailPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(photoRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PhotoRoutingModule { };