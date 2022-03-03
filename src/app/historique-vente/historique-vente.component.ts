import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historique-vente',
  templateUrl: './historique-vente.component.html',
  styleUrls: ['./historique-vente.component.css']
})
export class HistoriqueVenteComponent implements OnInit {
  type: String = "all";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(parms => {
      if(parms['type']=="all")
        this.type = "Tous les ventes";
      else if(parms['type']=="day")
      this.type = "Vente journalière";
      else if(parms['type']=="valider")
        this.type = "Vente valider";
      else if(parms['type']=="no")
        this.type = "Vente non valider";
      else
        this.type = "Vente en cours de validation";
    });
  }

}
