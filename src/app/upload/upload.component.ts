import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase'; 


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file;
  url="";
  
  private uploadTask: firebase.storage.UploadTask;
  constructor(private Pic:UploadImageService,private firestore:AngularFirestore) { }

  ngOnInit() {
  }
  onFileChanged($event)
  {
      this.file=$event.target.files[0];
  }
  onSubmit()
  {
    var file=this.file;
    
    console.log(file)
    
    var storage = firebase.storage();
  
    // Create a storage reference from our storage service
    var storageRef = storage.ref('name/'+file.name);
    //this.Pic.uploadImage(file);
    storageRef.put(file);
  }
  downloadUrl()
  {
    var url1="";
    var storage = firebase.storage();
    var starsRef = storage.ref('/name/taj.jpg');
    starsRef.getDownloadURL().then((url)=>{
      this.url=url;
      console.log(this.url)
    })

  }
}
