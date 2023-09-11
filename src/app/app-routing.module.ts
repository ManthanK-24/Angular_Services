import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
  { path: 'photos', component: PhotoListComponent },
  { path: 'segments/DetailsAlbum/:albumId', component: AlbumDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
