import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TimerObservable } from "rxjs/observable/TimerObservable";

@Component({
    selector: 'home',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    currentCellStyle = "#3f7f00";
    routeCellStyle = "#58b200";
    defaultCellStyle = "whitesmoke";
    lockCellStyle = "black";

    currentPosition = [0, 0];
    goodRoute = [];
    checkedCells = [];
    lockCells = [];
    queuePosition = [];

    row = 30;
    col = 30;
    rowMap = [];
    colMap = [];

    ngOnInit() {
        this.colMap = new Array(this.col);
        this.rowMap = new Array(this.row);
        this.randomMap();
    }

    setSourceTarget(x, y) {
        console.log("X=" + x + " | Y=" + y);

        if (<boolean>this.isItemInArray(this.lockCells, [x, y])) {
            return;
        }

        this.goodRoute = [];
        this.checkedCells = [];

        var xMax = this.rowMap.length;
        var yMax = this.colMap.length;

        this.enQueue(this.currentPosition[0], this.currentPosition[1], this.currentPosition);

        do {
            var pos = this.queuePosition.shift();
            var xPos = pos[0];
            var yPos = pos[1];
            var previousPos = pos[2];
            if (xPos < 0 || xPos >= xMax || yPos < 0 || yPos >= yMax || (xPos == previousPos[0] && yPos == previousPos[1])) {
                continue;
            }

            if (xPos == x && yPos == y) {
                while (previousPos != null) {
                    this.goodRoute.push(pos);
                    pos = pos[2];
                    previousPos = pos[2];
                }

                this.queuePosition = [];

                this.currentPosition[0] = x;
                this.currentPosition[1] = y;
                break;
            }

            this.enQueue(xPos, yPos, pos);
        }
        while (this.queuePosition.length > 0);      
    }

    enQueue(x, y, previousPos) {

        if (!<boolean>this.isItemInArray(this.checkedCells, [x, y + 1]) && !<boolean>this.isItemInArray(this.lockCells, [x, y + 1])) {
            this.checkedCells.push([x, y + 1]);
            this.queuePosition.push([x, y + 1, previousPos]);
        }

        if (!<boolean>this.isItemInArray(this.checkedCells, [x, y - 1]) && !<boolean>this.isItemInArray(this.lockCells, [x, y - 1])) {
            this.checkedCells.push([x, y - 1]);
            this.queuePosition.push([x, y - 1, previousPos]);
        }

        if (!<boolean>this.isItemInArray(this.checkedCells, [x + 1, y]) && !<boolean>this.isItemInArray(this.lockCells, [x + 1, y])) {
            this.checkedCells.push([x + 1, y]);
            this.queuePosition.push([x + 1, y, previousPos]);
        }

        if (!<boolean>this.isItemInArray(this.checkedCells, [x - 1, y]) && !<boolean>this.isItemInArray(this.lockCells, [x - 1, y])) {
            this.checkedCells.push([x - 1, y]);
            this.queuePosition.push([x - 1, y, previousPos]);
        }
    }

    styleCell(x, y) {
        if (this.currentPosition[0] == x && this.currentPosition[1] == y) {
            return this.currentCellStyle;
        }

        if (<boolean>this.isItemInArray(this.goodRoute, [x, y])) {
            return this.routeCellStyle;
        }
        return <boolean>this.isItemInArray(this.lockCells, [x, y]) == true ? this.lockCellStyle : this.defaultCellStyle;
    }

    randomMap() {
        this.currentPosition = [0, 0];
        this.goodRoute = [];
        this.checkedCells = [];
        this.lockCells = [];

        var lockCell = (this.row * this.col) / 6;
        for (var i = 0; i < lockCell; i++) {
            var ranX = this.getRandomInt(1, this.row - 1);
            var ranY = this.getRandomInt(1, this.col - 1);
            this.lockCells.push([ranX, ranY]);
        }

    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    isItemInArray(array, item) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][0] == item[0] && array[i][1] == item[1]) {
                return true;
            }
        }
        return false;
    }
}
