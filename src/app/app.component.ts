import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*'
  })
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GOLDEN WHITE';

  produits: any;
  uri: string = "https://golden-white.herokuapp.com/api/";
  constructor(private httpClient: HttpClient) {
    /*this.httpClient.get(this.uri)
        .subscribe(
            data => {
              this.produits = data;
            }
        );*/
  }

  ngOnInit(): void {

  }
}
