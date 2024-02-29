import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html'
})
export class VirtualComponent {
  @ViewChild( CdkVirtualScrollViewport ) viewport!: CdkVirtualScrollViewport;
  personas = Array(500).fill(0);

  constructor() {}

  irFinal(){
    this.viewport.scrollToIndex( this.personas.length );
  }

  irInicio(){
    this.viewport.scrollToIndex( 0 );
  }

  irMedio(){
    this.viewport.scrollToIndex( this.personas.length / 2 );
  }
}
