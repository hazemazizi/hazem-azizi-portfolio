// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="relative py-12 px-6 border-t border-blue-500/20 bg-gradient-to-t from-slate-950 to-slate-900 overflow-hidden z-10">
      <!-- Background Elements -->
      <div class="absolute inset-0 z-0 pointer-events-none">
        <!-- Animated gradient meshes -->
        <div class="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-conic from-blue-600/5 via-cyan-500/3 to-purple-600/5 animate-spin-slow"></div>
        
        <!-- Floating orbs -->
        <div class="absolute top-10 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-float-1"></div>
        <div class="absolute bottom-10 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-float-2"></div>
        
        <!-- Dynamic grid pattern -->
        <div class="absolute inset-0 opacity-[0.02]">
          <div class="grid-pattern-advanced"></div>
        </div>
        
        <!-- Particle system -->
        <div class="absolute inset-0">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
        </div>
      </div>

      <div class="max-w-8xl mx-auto text-center relative z-10">
        <!-- Glassmorphism Container -->
        <div class="about-card group bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-blue-400/30 p-8 shadow-2xl shadow-blue-500/10 transition-all duration-700 hover:border-blue-400/40 hover:shadow-blue-500/20 animate-slideUp">
          <!-- Footer Content -->
          <p class="text-slate-300 text-sm md:text-base font-medium mb-4">
            © 2025 Hazem Azizi. Crafted with <span class="text-blue-400">passion</span> and <span class="text-cyan-400">precision</span>.
          </p>
          
          <!-- Social Links -->
          <div class="flex justify-center gap-4 mb-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              class="group relative p-3 bg-slate-800/20 backdrop-blur-xl rounded-full border border-blue-400/20 text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 animate-slideUp" 
              style="animation-delay: 0.2s;"
            >
              <lucide-icon name="github" class="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"></lucide-icon>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              class="group relative p-3 bg-slate-800/20 backdrop-blur-xl rounded-full border border-blue-400/20 text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 animate-slideUp" 
              style="animation-delay: 0.4s;"
            >
              <lucide-icon name="linkedin" class="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"></lucide-icon>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              class="group relative p-3 bg-slate-800/20 backdrop-blur-xl rounded-full border border-blue-400/20 text-slate-300 hover:text-white hover:bg-blue-500/20 hover:border-blue-400/30 transition-all duration-300 animate-slideUp" 
              style="animation-delay: 0.6s;"
            >
              <lucide-icon name="twitter" class="w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300"></lucide-icon>
              <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>
          
          <!-- Navigation Links -->
          <div class="flex justify-center gap-4 flex-wrap">
            <a 
              *ngFor="let item of navItems; let i = index"
              (click)="scrollToSection(item.id)"
              class="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-300 cursor-pointer animate-slideUp"
              [style.animation-delay]="(0.8 + i * 0.1) + 's'"
            >
              {{ item.label }}
            </a>
          </div>
          
          <!-- Animated border glow -->
          <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* Advanced Animation System */
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes float-1 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
      33% { transform: translate(30px, -30px) scale(1.1); opacity: 0.2; }
      66% { transform: translate(-20px, 20px) scale(0.9); opacity: 0.15; }
    }
    
    @keyframes float-2 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
      50% { transform: translate(-40px, -50px) scale(1.2); opacity: 0.25; }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes particle-float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      50% { transform: translateY(-100px) translateX(50px); opacity: 0.8; }
    }
    
    /* Animation Classes */
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
    .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
    .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
    .animate-slideUp { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
    
    /* Advanced Background Patterns */
    .bg-gradient-radial {
      background: radial-gradient(circle at center, var(--tw-gradient-stops));
    }
    
    .bg-gradient-conic {
      background: conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops));
    }
    
    .grid-pattern-advanced {
      background-image: 
        linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
        linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px);
      background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
      width: 100%;
      height: 100%;
    }
    
    /* Particle System */
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      pointer-events: none;
      animation: particle-float 6s ease-in-out infinite;
    }
    
    .particle-1 {
      top: 20%;
      left: 10%;
      background: rgba(59, 130, 246, 0.6);
      animation-delay: 0s;
    }
    
    .particle-2 {
      bottom: 30%;
      right: 15%;
      background: rgba(6, 182, 212, 0.6);
      animation-delay: 2s;
    }
    
    /* Component Styles */
    .about-card {
      transform-style: preserve-3d;
    }
    
    .about-card:hover {
      transform: translateY(-8px) rotateX(2deg);
    }
    
    .about-glow {
      background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.1) 0%, 
        rgba(6, 182, 212, 0.1) 50%, 
        rgba(147, 51, 234, 0.1) 100%
      );
      filter: blur(20px);
    }
    
    /* Enhanced Glassmorphism */
    .backdrop-blur-2xl {
      backdrop-filter: blur(40px);
    }
    
    /* Advanced Hover Effects */
    .about-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent);
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
      z-index: 1;
    }
    
    .about-card:hover::before {
      opacity: 1;
    }
    
    /* Custom Scrollbar Styling */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.3);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #3b82f6, #06b6d4);
      border-radius: 4px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #2563eb, #0891b2);
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .text-base { font-size: 0.875rem; }
    }
  `]
})
export class FooterComponent {
  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
