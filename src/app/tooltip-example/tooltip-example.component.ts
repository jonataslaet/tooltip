import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent implements OnInit {
  public visible = false;
  public mouse = {x: 0, y: 0}
  constructor() { }

  ngOnInit(): void {
  }

  alteraPosicaoDaTooltip(x: number, y: number){
    this.mouse = {x, y};
  }
  
  exibeToolTip(){
    this.visible = true;
  }

  escondeToolTip(){
    this.visible = false;
  }
}
