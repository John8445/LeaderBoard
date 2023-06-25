import { Component, OnInit } from '@angular/core';
import { Region } from '../types';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-make-queries',
  templateUrl: './make-queries.component.html',
  styleUrls: ['./make-queries.component.css']
})
export class MakeQueriesComponent implements OnInit {
  regions: Region[] = [];

  constructor(
    private leaderboardService: LeaderboardService,
  ) { }

  ngOnInit(): void {
    this.leaderboardService.getPlayers()
      .subscribe(regions => this.regions = regions);
  }
}
