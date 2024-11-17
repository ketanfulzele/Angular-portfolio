import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ResponsiveDirective } from '../responsive.directive';

@Component({
  selector: 'app-baner',
  standalone: true,
  imports: [],
  templateUrl: './baner.component.html',
  styleUrl: './baner.component.css'
})
export class BanerComponent implements OnInit {

  // @HostBinding('class.pc') pcMode = false;

  constructor(private breakPointObserver: BreakpointObserver) { }

  ngOnInit(): void {

  }
}
