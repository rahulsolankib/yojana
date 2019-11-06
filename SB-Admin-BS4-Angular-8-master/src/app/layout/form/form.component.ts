import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerTransition()]
})
export class FormComponent implements OnInit {
    msg: string;
    name: string;
    constructor(private http: HttpClient) {}

    ngOnInit() {}
    onSubmit() {
        console.log(this.msg);
        const mes = this.msg;
        this.http.post('http://localhost:4201/person/message', {name: this.name, mes: mes, mdate: '11/10/1999'}).subscribe(res => {
          console.log(res);
        });
    }
}
