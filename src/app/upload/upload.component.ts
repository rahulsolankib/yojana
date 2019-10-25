import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file;
  constructor(private Pic:UploadImageService) { }

  ngOnInit() {
  }
  onFileChanged($event)
  {
      this.file=$event.target.files[0];
  }
  onSubmit()
  {
    this.Pic.uploadImage(this.file);
  }
}
