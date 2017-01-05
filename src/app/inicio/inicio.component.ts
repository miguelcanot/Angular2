import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'inicio',
  styles: [`
  `],
  templateUrl: "./inicio.component.html"
})
export class InicioComponent implements OnInit {

  public localState: any;
  constructor(
    public route: ActivatedRoute
  ) {}

  public ngOnInit() {
    
  }

}
