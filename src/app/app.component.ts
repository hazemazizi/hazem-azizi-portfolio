// ===============================
// src/app/app.component.ts
// ===============================
import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <div class="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden">
      <!-- Animated Background -->
      <div class="fixed inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-black/60"></div>
        <div 
          class="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse transition-all duration-300 ease-out"
          [style.left.px]="mousePosition.x - 192"
          [style.top.px]="mousePosition.y - 192">
        </div>
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-bounce"></div>
        <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <app-header></app-header>
      <app-hero></app-hero>
      <app-about></app-about>
      <app-projects></app-projects>
      <app-skills></app-skills>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  mousePosition = { x: 0, y: 0 };

  ngOnInit() {
    // Initialize any startup logic
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mousePosition = { x: event.clientX, y: event.clientY };
  }
}