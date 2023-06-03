import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBtxDirective } from "ngx-ds";

@Component({
  selector: 'library-nx-welcome',
  standalone: true,
  imports: [ CommonModule, NgxBtxDirective ],
  template: `
    <button libraryNgxBtx>
      tetastas
    </button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
