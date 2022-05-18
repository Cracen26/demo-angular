import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {

  etudiants=[
    {nom:"Ball",age:22,faculte:"ESP",sexe:"M"},
    {nom:"Fall",age:23,faculte:"ESP",sexe:"M"},
    {nom:"Diagne",age:19,faculte:"ESP",sexe:"M"},
    {nom:"Sall",age:22,faculte:"ESP",sexe:"M"},
    {nom:"Faye",age:21,faculte:"ESP",sexe:"M"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
