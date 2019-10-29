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
  name=""; 
  delname=""; 
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
    
   // console.log(file)
    
    var storage = firebase.storage();
  
    // Create a storage reference from our storage service
    var storageRef = storage.ref('farm/'+file.name);
    //this.Pic.uploadImage(file);
    storageRef.put(file);
  }
  downloadUrl()
  {
    var url1="";
    //console.log('/farm/'+this.name+'.jpg')
    var storage = firebase.storage();
    var starsRef = storage.ref(`/farm/${this.name}.jpg`);
    starsRef.getDownloadURL().then((url)=>{
      this.url=url;
    //  console.log(this.url)
    }).catch(function(error) {
        confirm(error.code_)
    })
  }
  deleteImage()
  {
    // Delete the file
    if(confirm("Are you sure? you want to delete image "+this.delname+".jpg")){
        var desertRef = firebase.storage().ref(`farm/${this.delname}.jpg`)

        desertRef.delete().then(function() {      
          confirm("Deleted successfully");
        }).catch(function(error) {
          confirm("Uh-oh, an error occurred!");
        });
      }
  }
}
