import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  @Input() display = false;
  currentLang: string;

  constructor(
    private shareDataService: ShareDataService,
    // private translate: TranslateService
  ) {
    this.shareDataService.shareLangMethod$.subscribe((data) => {
      if (data) {
        this.currentLang = data;
      }
    });
  }

  ngOnInit() {
    // this.currentLang = this.translate.currentLang;
  }

  /**
   * Shows the loader
   */
  show() {
    this.display = true;
  }

  /**
   * Hides the loader
   */
  hide() {
    this.display = false;
  }

}
