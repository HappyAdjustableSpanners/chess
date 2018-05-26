import { Component, OnInit, OnChanges } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-chessboard',
  templateUrl: './chessboard.component.html',
  styleUrls: ['./chessboard.component.css'],
  animations: [

    // Define animations here.

    trigger('movePiece0', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece1', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece2', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece3', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece4', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece5', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece6', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece7', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece8', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( ${this.moveAnimX}%) translateY( ${this.moveAnimY}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
      transition('static => move', animate('500ms ease-in-out')),
    ]),
    trigger('movePiece9', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece10', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece11', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece12', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece13', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece14', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece15', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece16', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece17', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece18', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece19', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece20', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece21', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece22', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece23', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece24', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece25', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece26', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece27', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece28', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece29', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece30', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece31', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece32', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece33', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece34', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece35', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece36', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece37', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece38', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece39', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece40', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece41', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece42', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece43', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece44', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece45', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece46', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece48', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece49', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece50', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece51', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece52', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece53', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece54', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece55', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece56', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece57', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece58', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece59', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece60', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece61', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece62', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
    trigger('movePiece63', [
      state('static', style({
        transform: 'translateX(0%) translateY(0%)',
      })),
      state('move', style({ transform: 'translateX( {{moveAnimX}}%) translateY( {{moveAnimY}}%)'}), {params: {moveAnimX: 0, moveAnimY: 0} }),
    ]),
  ]
})
export class ChessboardComponent implements OnInit {

  constructor() { }

  state0: string = "static";
  state1: string = "static";
  state2: string = "static";
  state3: string = "static";
  state4: string = "static";
  state5: string = "static";
  state6: string = "static";
  state7: string = "static";
  state8: string = "static";
  state9: string = "static";
  state10: string = "static";
  state11: string = "static";
  state12: string = "static";
  state13: string = "static";
  state14: string = "static";
  state15: string = "static";
  state16: string = "static";
  state17: string = "static";
  state18: string = "static";
  state19: string = "static";
  state20: string = "static";
  state21: string = "static";
  state22: string = "static";
  state23: string = "static";
  state24: string = "static";
  state25: string = "static";
  state26: string = "static";
  state27: string = "static";
  state28: string = "static";
  state29: string = "static";
  state30: string = "static";
  state31: string = "static";
  state32: string = "static";
  state33: string = "static";
  state34: string = "static";
  state35: string = "static";
  state36: string = "static";
  state37: string = "static";
  state38: string = "static";
  state39: string = "static";
  state40: string = "static";
  state41: string = "static";
  state42: string = "static";
  state43: string = "static";
  state44: string = "static";
  state45: string = "static";
  state46: string = "static";
  state47: string = "static";
  state48: string = "static";
  state49: string = "static";
  state50: string = "static";
  state51: string = "static";
  state52: string = "static";
  state53: string = "static";
  state54: string = "static";
  state55: string = "static";
  state56: string = "static";
  state57: string = "static";
  state58: string = "static";
  state59: string = "static";
  state60: string = "static";
  state61: string = "static";
  state62: string = "static";
  state63: string = "static";


  rowLength = 8;
  moveDelay = 2;
  moveAnimX:string;
  moveAnimY:string;

  @Input() boardLayout = [
    'castle-brown', 'knight-brown', 'bishop-brown', '', '', 'castle-brown', '', '', 
    'pawn-brown', '', '', '', 'bishop-brown', 'pawn-brown', 'king-brown', 'pawn-brown',
    '', 'pawn-brown', 'pawn-brown', 'queen-brown', '', '', '', 'knight-white', 
    '', '', '', '', '', '', 'pawn-brown', '',
    'queen-white', '', '', '', '', '', '', '', 
    '', '', 'pawn-white', '', '', '', 'pawn-white', '',
    'pawn-white', '', '', '', '', 'pawn-white', 'bishop-white', 'pawn-white',
    'castle-white', '', 'bishop-white', '', '', 'castle-white', 'king-white', '', 
  ]


  doMove(move: number[])
  {
    // copy value from boardLayout at coordinate1 to coordinate2
    var index1 =  (move[1] * this.rowLength) + move[0] 
    var index2 =  (move[3] * this.rowLength) + move[2]

    //calculate how much to move
    // get x difference
    var xDiff = move[2] - move[0]
    var yDiff = move[3] - move[1]

    this.moveAnimX = ((xDiff * 100).toString());
    this.moveAnimY = ((yDiff * 100).toString());










    
    // do animation 
    switch(index1)
    {
      case 0:
      this.state0 = "move";
      break;
      case 1:
      this.state1 = "move";
      break;
      case 2:
      this.state2 = "move";
      break;
      case 3:
      this.state3 = "move";
      break;
      case 4:
      this.state4 = "move";
      break;
      case 5:
      this.state5 = "move";
      break;
      case 6:
      this.state6 = "move";
      break;
      case 7:
      this.state7 = "move";
      break;
      case 8:
      this.state8 = "move";
      break;
      case 9:
      this.state9 = "move";
      break;
      case 10:
      this.state10 = "move";
      break;


      case 11:
      this.state11 = "move";
      break;
      case 12:
      this.state12 = "move";
      break;
      case 13:
      this.state13 = "move";
      break;
      case 14:
      this.state14 = "move";
      break;
      case 15:
      this.state15 = "move";
      break;
      case 16:
      this.state16 = "move";
      break;
      case 17:
      this.state17 = "move";
      break;
      case 18:
      this.state18 = "move";
      break;
      case 19:
      this.state19 = "move";
      break;
      case 20:
      this.state20 = "move";
      break;


      case 21:
      this.state21 = "move";
      break;
      case 22:
      this.state22 = "move";
      break;
      case 23:
      this.state23 = "move";
      break;
      case 24:
      this.state24 = "move";
      break;
      case 25:
      this.state25 = "move";
      break;
      case 26:
      this.state26 = "move";
      break;
      case 27:
      this.state27 = "move";
      break;
      case 28:
      this.state28 = "move";
      break;
      case 29:
      this.state29 = "move";
      break;
      case 30:
      this.state20 = "move";
      break;


      case 31:
      this.state31 = "move";
      break;
      case 32:
      this.state32 = "move";
      break;
      case 33:
      this.state33 = "move";
      break;
      case 34:
      this.state34 = "move";
      break;
      case 35:
      this.state35 = "move";
      break;
      case 36:
      this.state36 = "move";
      break;
      case 37:
      this.state37 = "move";
      break;
      case 38:
      this.state38 = "move";
      break;
      case 39:
      this.state39 = "move";
      break;
      case 40:
      this.state40 = "move";
      break;


      case 41:
      this.state41 = "move";
      break;
      case 42:
      this.state42 = "move";
      break;
      case 43:
      this.state43 = "move";
      break;
      case 44:
      this.state44 = "move";
      break;
      case 45:
      this.state45 = "move";
      break;
      case 46:
      this.state46 = "move";
      break;
      case 47:
      this.state47 = "move";
      break;
      case 48:
      this.state48 = "move";
      break;
      case 49:
      this.state49 = "move";
      break;


      case 50:
      this.state50 = "move";
      break;
      case 51:
      this.state51 = "move";
      break;
      case 52:
      this.state52 = "move";
      break;
      case 53:
      this.state53 = "move";
      break;
      case 54:
      this.state54 = "move";
      break;
      case 55:
      this.state55 = "move";
      break;
      case 56:
      this.state56 = "move";
      break;
      case 57:
      this.state57 = "move";
      break;
      case 58:
      this.state58 = "move";
      break;
      case 59:
      this.state59 = "move";
      break;
      case 60:
      this.state60 = "move";
      break;

      case 61:
      this.state61 = "move";
      break;
      case 62:
      this.state62 = "move";
      break;
      case 63:
      this.state63 = "move";
      break;

    }

    
    // var val1 = this.boardLayout[index1];
    // var val2 = this.boardLayout[index2];
    // this.boardLayout[index1] = val2;
    // this.boardLayout[index2] = val1;
  }

  ngOnInit() {

    console.log(this.boardLayout)
    var move = [0, 1, 0, 2, 0, 2, 0, 4];
    var numMoves = move.length / 4;

    for(let i = 0; i < numMoves; i++)
    {
      var delay = (i + 1) * (this.moveDelay * 2000);
      setTimeout(() => {
         this.doMove(move.slice(i, i + 4))
      }, delay);
    }


  }



}
