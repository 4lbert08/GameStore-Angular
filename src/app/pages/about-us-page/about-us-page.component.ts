import { Component, inject, OnInit } from '@angular/core';
import { DeveloperCardComponent } from '../../components/developer-card/developer-card.component';
import { NgForOf } from '@angular/common';
import { Developer } from '../../models/developer';
import { FirestoreService } from '../../services/firestore/firestore.service';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [
    DeveloperCardComponent,
    NgForOf,
  ],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent implements OnInit {
  private firestoreService = inject(FirestoreService);

  developers: Developer[] = [];

  ngOnInit(): void {
    this.firestoreService.getDevelopers().subscribe(devs => {
      if (devs) this.developers = devs;
    })
  }
}
