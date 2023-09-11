import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {
  albumId: number | undefined;
  albumPhotos: any[] = [];

  constructor(private route: ActivatedRoute, private photoService: PhotoService) {}

  ngOnInit(): void {
    const albumIdParam = this.route.snapshot.paramMap.get('albumId');
    this.albumId = albumIdParam !== null ? +albumIdParam : undefined;

    if (this.albumId !== undefined) {
      this.photoService.getAlbumPhotos(this.albumId).subscribe((data) => {
        console.log('Album data received:', data);
        this.albumPhotos = data;
      });
    }
  }
}
