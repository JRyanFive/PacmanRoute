export namespace Pacman {

    export enum eCellType {
        DEFAULT,
        CURRENT,
        LOCKED,
        ROUTED
    }

    export class Cell {
        currentCellStyle = "#3f7f00";
        routedCellStyle = "#58b200";
        defaultCellStyle = "whitesmoke";
        lockedCellStyle = "black";

        public X: number;
        public Y: number;
        public Type: eCellType = eCellType.DEFAULT;
        public get Stype(): string {
            switch (this.Type) {
                case eCellType.CURRENT:
                    return this.currentCellStyle;
                case eCellType.LOCKED:
                    return this.lockedCellStyle;
                case eCellType.ROUTED:
                    return this.routedCellStyle;
                default:
                    return this.defaultCellStyle;
            }
        }
    }

    export class Node {
        constructor(cell) {
            this.Cell = cell;
        }

        public Cell: Cell;
        public PreviousNode: Node;

        public h: any;
        public g: any;
        public f: any;
    }

    export class PacmanRoute {
        //currentPosition = [0, 0];       
        //goodRoute = [];
        openNodes: Array<Node>;
        closeNodes: Array<Node>;
        //lockCells = [];
        // queuePosition = [];

        row: number;
        col: number;

        public Map = [];
        public CurrentCell: Cell;

        constructor() {
        }

        public Main(): void {
            console.log("start app with A* algorithm!");
            this.Init();
            return;
        }

        public Init(row?: number, col?: number) {
            this.col = col == null ? 15 : col;
            this.row = row == null ? 30 : row;;

            this.RandomMap();
        }

        public RandomMap() {
            this.Map = [];
            var lockCells = [];

            var lockCell = (this.row * this.col) / 6;
            for (var i = 0; i < lockCell; i++) {
                var ranX = this.getRandomInt(1, this.row - 1);
                var ranY = this.getRandomInt(1, this.col - 1);
                lockCells.push([ranX, ranY]);
            }

            for (var r = 0; r < this.row; r++) {
                var rowCells = [];
                for (var c = 0; c < this.col; c++) {
                    var cell = new Cell();
                    cell.X = c;
                    cell.Y = r;
                    if (<boolean>this.isItemInArray(lockCells, [cell.X, cell.Y])) {
                        cell.Type = eCellType.LOCKED;
                    }
                    rowCells.push(cell);
                }
                this.Map.push(rowCells);
            }


            this.CurrentCell = this.findCell(0, 0);
            this.CurrentCell.Type = eCellType.CURRENT;
        }

        public FindRoute(cellTarget: Cell) {
            this.openNodes = [];
            this.closeNodes = [];

            var currentNode = new Node(this.CurrentCell)
            currentNode.g = 0;
            currentNode.h = this.distance(this.CurrentCell, cellTarget);
            currentNode.f = currentNode.g + currentNode.h;

            this.openNodes.push(currentNode);

            while (this.openNodes.length != 0) {
                var currentIndex = 0;
                var current = this.openNodes[currentIndex];

                for (var i = 0; i < this.openNodes.length; i++) {
                    if (current.f < this.openNodes[i].f) {
                        current = this.openNodes[i];
                        currentIndex = i;
                    }
                }

                //remove item in open queue
                this.openNodes.slice(currentIndex, 1);
                this.closeNodes.push(current);

                if (current.Cell.X == cellTarget.X && current.Cell.Y == cellTarget.Y) {

                    break;
                } else {

                }
            }
        }

        enQueue(node: Node, cellTarget: Cell) {
            var xCoordinates = [1, 0, -1, 0];
            var yCoordinates = [0, 1, 0, -1];

            for (var i = 0; i < 4; i++) {
                var x = node.Cell.X + xCoordinates[i]
                var y = node.Cell.Y + yCoordinates[i]
                if (x < 0 || x >= this.col || y < 0 || y >= this.row) {
                    continue;
                }
                var nextCell = this.findCell(x, y);
                if (nextCell.Type == eCellType.LOCKED) {
                    continue;
                }

                var newNode = new Node(nextCell);
                newNode.PreviousNode = node;
                newNode.g = this.distance(this.CurrentCell, nextCell);
                newNode.h = this.distance(nextCell, cellTarget);
                newNode.f = newNode.g + newNode.h;
                this.openNodes.push(newNode);
            }
        }

        distance(source: Cell, target: Cell) {
            return Math.abs(source.X - target.X) + Math.abs(source.Y - target.Y)
        }

        findCell(x, y): Cell {
            return this.Map[x][y];
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
}