import {Component, inject, OnInit} from '@angular/core';
import { Game } from '../../models/game';
import {GameGalleryComponent} from '../../components/game-gallery/game-gallery.component';
import {GameSectionTransferService} from '../../services/game-section-tranfer/game-section-transfer.service';

@Component({
  selector: 'app-view-more-section-page',
  templateUrl: './view-more-section-page.component.html',
  standalone: true,
  imports: [
    GameGalleryComponent
  ],
  styleUrls: ['./view-more-section-page.component.css']
})
export class ViewMoreSectionPageComponent implements OnInit{
  gameSectionTransferService = inject(GameSectionTransferService)

  title: string = '';
  games: Game[] = [];

  ngOnInit(): void {
    const sectionData = this.gameSectionTransferService.getSectionData();
    if (sectionData) {
      this.title = sectionData.title;
      this.games = sectionData.games;
    } else {
      this.title = 'Sección';
      this.games = [];
    }
  }
}
