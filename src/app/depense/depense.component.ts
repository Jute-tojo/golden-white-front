import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-depense',
  templateUrl: './depense.component.html',
  styleUrls: ['./depense.component.css']
})
export class DepenseComponent implements OnInit {
  type: String = "all";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => {
      if(parms['type']=="all")
        this.type = "Tous les dépenses";
      else
      this.type = "Dépense journalière";
    });
  }

}
