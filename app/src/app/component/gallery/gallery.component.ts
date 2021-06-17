import { Component, Input, OnInit } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from "ng-gallery";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() images;
  @Input() index;
  constructor(public gallery: Gallery) { }

  ngOnInit(): void {
    if (this.images.length > 0) {
      console.log("galery found");
      let items = this.images.map(
        (item) => new ImageItem({ src: item.url, thumb: item.url })
      );

      this.loadCustomGallery(items);
    }
  }

    /**
   * Use custom gallery config with the lightbox
   */
     loadCustomGallery(items) {
      // 2. Get a lightbox gallery ref
      const lightboxGalleryRef = this.gallery.ref(this.index);
      // (Optional) Set custom gallery config to this lightbox
      lightboxGalleryRef.setConfig({
        imageSize: ImageSize.Contain,
        thumbPosition: ThumbnailsPosition.Bottom,
        thumb: true,

      });
      // 3. Load the items into the lightbox
      lightboxGalleryRef.load(items);
    }

}
