import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {HttpClient} from '@angular/common/http';
import { send } from 'q';
import { LoginserviceService } from '../loginservice.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file;
  tat = true;
  imageDetails: any;
  chat: any;
  url = '';
  name = '';
  delname = '';
  columnsToDisplay = ['Image_name', 'updated', 'Click'];
  private uploadTask: firebase.storage.UploadTask;
  // tslint:disable-next-line:max-line-length
  constructor(private person: LoginserviceService, private router: Router, private http: HttpClient, private Pic: UploadImageService, private firestore: AngularFirestore) { }

  ngOnInit() {
    if (this.person.name === '') {
       this.router.navigate(['./login']);
    }
    this.http.post('http://localhost:4201/person/photos', {uuid: this.person.pid}).subscribe(res => {
          this.imageDetails = res;
      });
  }
  onFileChanged($event) {
      this.file = $event.target.files[0];
  }
  send(metadata) {
    if (this.person.pid !== '') {
    this.http.post('http://localhost:4201/image/metadata', {meta: metadata, uuid: this.person.pid}).subscribe(res => {
        console.log(res);
      });
    }
  }
  fetchData() {
    this.http.post('http://localhost:4201/person/photos', {uuid: this.person.pid}).subscribe(res => {
          this.imageDetails = res;
      });
  }
  onSubmit() {
    if (this.file != null) {
      const file = this.file;
      const storage = firebase.storage();
      // Create a storage reference from our storage service
      const storageRef = storage.ref('farm/' + file.name);
      storageRef.put(file);
      storageRef.getMetadata().then((metadata) => {
          console.log(metadata);
          console.log(this.person.getpid());
          this.send(metadata);
      });
    } else {
      alert('No file selected');
    }
  }
  downloadUrl() {
    const url1 = '';
    // console.log('/farm/'+this.name+'.jpg')
    const storage = firebase.storage();
    const starsRef = storage.ref(`/farm/${this.name}.jpg`);
    starsRef.getDownloadURL().then((url) => {
      this.url = url;
    //  console.log(this.url)
    }).catch((error) =>
        confirm(error.code_));
    starsRef.getMetadata().then((metadata) => {
        console.log(metadata);
    }).catch((error) => {
      // Uh-oh, an error occurred!
    });
  }
  // tslint:disable-next-line:comment-format
  //create table imageMeta(iname varchar(100),contentType varchar(100),fullPath varchar(100),updated date)

  deleteImage() {
    // Delete the file
    if (confirm('Are you sure? you want to delete image ' + this.delname + '.jpg')) {
        const desertRef = firebase.storage().ref(`farm/${this.delname}.jpg`);
        desertRef.delete().then(() =>
          confirm('Deleted successfully')).catch((error) => {
          confirm('Uh-oh, an error occurred!');
        });
        const newfile = this.delname + '.jpg';
        this.http.post('http://localhost:4201/person/photos/delete', {iname: newfile}).subscribe(res => {
          this.imageDetails = res;
      });
      }
  }
  viewImage(l, tat) {
    this.tat = !this.tat;
    const storage = firebase.storage();
    console.log(l);
    const starsRef = storage.ref(`${l.fullpath}`);
    starsRef.getDownloadURL().then((url) => {
      this.url = url;
    //  console.log(this.url)
    }).catch((error) =>
        confirm(error.code_));
  }
  getChats() {
    this.http.post('http://localhost:4201/chats', {pid: this.person.pid}).subscribe(res => {
          this.chat = res;
      });
  }
}
