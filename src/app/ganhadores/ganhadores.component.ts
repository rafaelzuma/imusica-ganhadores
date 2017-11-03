import { Component, OnInit } from '@angular/core';
import { GanhadoresService } from './ganhadores.service';

@Component({
  selector: 'imc-ganhadores',
  templateUrl: './ganhadores.component.html',
  styleUrls: ['../../assets/css/ganhadores.component.min.css']
})
export class GanhadoresComponent implements OnInit {

  ganhadoresSemanal;
  saldoSemanal;

  ganhadoresTrimestral;
  saldoTrimestral;

  constructor(private ganhadoresService : GanhadoresService) { }

  ngOnInit() {
    this.ganhadoresSemanal = this.ganhadoresService.listarGanhadores().winners.weekly
    this.saldoSemanal = this.ganhadoresSemanal.award;
    this.ganhadoresSemanal = this.ganhadoresSemanal.users;


    this.ganhadoresTrimestral = this.ganhadoresService.listarGanhadores().winners.quarterly;
    this.saldoTrimestral = this.ganhadoresTrimestral.award
    this.ganhadoresTrimestral = this.ganhadoresTrimestral.users;
    
    }

}
