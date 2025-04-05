import {Component, inject, OnInit} from '@angular/core';
import {DeveloperCardComponent} from '../../components/developer-card/developer-card.component';
import {NgForOf} from '@angular/common';
import {Developer} from '../../models/developer';
import {FirestoreService} from '../../services/firestore/firestore.service';
import {Router} from '@angular/router';

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
  firestoreService = inject(FirestoreService);
  router = inject(Router);

  developers: Developer[] = [];
  loading: boolean = true;
  error: string | null = null;


  ngOnInit(): void {
    this.loadDevelopers();
  }

  loadDevelopers(): void {
    this.loading = true;
    this.firestoreService.getDevelopers().subscribe({
      next: (developers) => {
        this.developers = developers;
        console.log(this.developers);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al cargar los desarrolladores:', err);
        this.error = 'No se pudieron cargar los desarrolladores. Por favor, inténtalo de nuevo más tarde.';
        this.loading = false;
      }
    });
  }
}
