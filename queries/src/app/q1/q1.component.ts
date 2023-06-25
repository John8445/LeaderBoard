import { Component, OnInit } from '@angular/core';
import { Region } from '../types';
import { LeaderboardService } from '../leaderboard.service';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})

export class Q1Component implements OnInit{
  regions: Region[] = [];

  constructor(
    private leaderboardService: LeaderboardService,
  ) { }

  ngOnInit(): void {
    this.leaderboardService.getPlayers()
      .subscribe(regions => this.regions = regions);
  }
}
