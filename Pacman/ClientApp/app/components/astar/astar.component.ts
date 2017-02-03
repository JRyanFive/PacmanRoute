import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Pacman } from '../../pacman';

@Component({
    selector: 'atar',
    template: require('./astar.component.html')
})
export class AstarComponent implements OnInit {
    Pacman: Pacman.PacmanRoute;

    ngOnInit() {
        this.Pacman = new Pacman.PacmanRoute();

        this.Pacman.Main();
    }

    OnCellClick(cell) {
        console.log("X=" + cell.X + " | Y=" + cell.Y);
    }   

    OnRandomMap() {
        this.Pacman.RandomMap();
    }   
}
