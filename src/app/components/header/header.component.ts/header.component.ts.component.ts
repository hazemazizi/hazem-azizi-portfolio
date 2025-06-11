import { Component, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <!-- Background Elements -->
    <div class="fixed inset-0 z-0 pointer-events-none">
      <!-- Animated gradient meshes -->
      <div class="absolute inset-0 bg-gradient-radial from-blue-900/10 via-transparent to-transparent"></div>
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-conic from-blue-600/5 via-cyan-500/3 to-purple-600/5 animate-spin-slow"></div>
      
      <!-- Floating orbs with advanced animations -->
      <div class="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl animate-float-1"></div>
      <div class="absolute top-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/5 rounded-full blur-3xl animate-float-2"></div>
      <div class="absolute top-32 left-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/10 rounded-full blur-3xl animate-float-3"></div>
      
      <!-- Dynamic grid pattern -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="grid-pattern-advanced"></div>
      </div>
      
      <!-- Particle system simulation -->
      <div class="absolute inset-0">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
      </div>
    </div>

    <nav [class]="'fixed top-0 w-full z-50 transition-all duration-700 ' + (isScrolled ? 'about-card bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl border-b border-blue-400/30 shadow-2xl shadow-blue-500/10' : 'bg-transparent')">
      <div class="max-w-8xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <!-- Brand/Logo Area -->
          <div class="flex items-center gap-6 animate-slideDown">
            <div class="relative group">
              <!-- Animated logo/icon -->
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <lucide-icon name="hexagon" class="w-6 h-6 text-white"></lucide-icon>
                <!-- Glow effect -->
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <!-- Brand text -->
            <div class="hidden sm:block">
              <div class="text-2xl font-black bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent animate-gradient">
                Portfolio
              </div>
              <div class="text-xs text-blue-400/80 font-medium tracking-widest">
                Hazem Azizi
              </div>
            </div>
          </div>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-2">
            <button
              *ngFor="let item of navItems; let i = index"
              (click)="scrollToSection(item.id)"
              [class]="'relative px-6 py-3 rounded-2xl transition-all duration-500 font-medium group overflow-hidden ' + 
                      (activeSection === item.id ? 
                        'text-white about-card bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl border border-blue-400/30 shadow-lg shadow-blue-500/20' : 
                        'text-slate-300 hover:text-white hover:bg-slate-800/20 hover:backdrop-blur-xl hover:border hover:border-blue-400/20')"
              [style.animation-delay]="(i * 0.1) + 's'"
              class="animate-slideDown"
            >
              <!-- Background glow for active item -->
              <div 
                *ngIf="activeSection === item.id"
                class="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-600/10 to-blue-600/10 rounded-2xl animate-pulse-slow">
              </div>
              
              <!-- Icon and Label -->
              <div class="flex items-center gap-3 relative z-10">
                <lucide-icon 
                  [name]="getIconName(item.id)" 
                  class="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
                ></lucide-icon>
                <span>{{ item.label }}</span>
              </div>
              
              <!-- Active indicator -->
              <div 
                *ngIf="activeSection === item.id"
                class="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse">
              </div>
              
              <!-- Hover effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-cyan-600/0 to-blue-600/0 group-hover:from-blue-600/10 group-hover:via-cyan-600/10 group-hover:to-blue-600/10 transition-all duration-700 rounded-2xl"></div>
              
              <!-- Animated border glow -->
              <div class="about-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden relative p-3 rounded-2xl about-card bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl border border-blue-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10 group animate-slideDown"
            (click)="toggleMobileMenu()"
          >
            <!-- Hamburger/Close Animation -->
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span [class]="'bg-blue-400 h-0.5 w-6 rounded-sm transition-all duration-300 ' + (mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '')"></span>
              <span [class]="'bg-blue-400 h-0.5 rounded-sm transition-all duration-300 mt-1 ' + (mobileMenuOpen ? 'w-0' : 'w-6')"></span>
              <span [class]="'bg-blue-400 h-0.5 w-6 rounded-sm transition-all duration-300 mt-1 ' + (mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '')"></span>
            </div>
            
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div 
          [class]="'md:hidden overflow-hidden transition-all duration-700 ease-in-out ' + (mobileMenuOpen ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 mt-0 opacity-0')"
        >
          <div class="about-card bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-blue-400/30 p-6 shadow-2xl shadow-blue-500/10">
            <div class="space-y-3">
              <button
                *ngFor="let item of navItems; let i = index"
                (click)="scrollToSection(item.id); toggleMobileMenu()"
                [class]="'w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 font-medium group ' + 
                        (activeSection === item.id ? 
                          'text-white about-card bg-gradient-to-br from-slate-800/50 via-slate-900/60 to-slate-800/50 backdrop-blur-2xl border border-blue-400/30' : 
                          'text-slate-300 hover:text-white hover:bg-slate-800/20')"
                [style.animation-delay]="(i * 0.1) + 's'"
                class="animate-slideUp"
              >
                <!-- Icon and Label -->
                <lucide-icon 
                  [name]="getIconName(item.id)" 
                  class="w-5 h-5 transition-transform duration-300 group-hover:scale-110"
                ></lucide-icon>
                <span>{{ item.label }}</span>
                
                <!-- Animated border glow -->
                <div class="about-glow absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
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
    
    @keyframes float-3 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.1; }
      25% { transform: translate(20px, 30px) scale(0.8); opacity: 0.2; }
      75% { transform: translate(-30px, -20px) scale(1.1); opacity: 0.15; }
    }
    
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.1; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(1.05); }
    }
    
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100%; }
    }
    
    @keyframes particle-float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      50% { transform: translateY(-10px) translateX(5px); opacity: 0.8; }
    }
    
    /* Animation Classes */
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
    .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
    .animate-float-2 { animation: float-2s ease-in-out infinite; }
    .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
    .animate-slideDown { animation: slideDown 0.8s ease-out; }
    .animate-slideUp { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
    .animate-gradient { 
      background-size: 300% 300%;
      animation: gradient 6s ease infinite; 
    }
    
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
      top: 10%;
      left: 15%;
      background: rgba(59, 130, 246, 0.6);
      animation-delay: 0s;
    }
    
    .particle-2 {
      top: 25%;
      right: 20%;
      background: rgba(6, 182, 212, 0.6);
      animation-delay: 2s;
    }
    
    .particle-3 {
      top: 15%;
      left: 40%;
      background: rgba(147, 51, 234, 0.6);
      animation-delay: 4s;
    }
    
    /* Component Styles */
    .about-card {
      transform-style: preserve-3d;
    }
    
    .about-card:hover {
      transform: translateY(-4px) rotateX(2deg);
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
    
    /* Mobile Menu Animation */
    .max-h-0 {
      max-height: 0;
    }
    
    .max-h-[500px] {
      max-height: 500px;
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
      .text-2xl { font-size: 1.5rem; }
    }
  `]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  activeSection = 'home';
  mobileMenuOpen = false;

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  ngOnInit() {
    this.setupIntersectionObserver();
  }

  ngAfterViewInit() {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  getIconName(sectionId: string): string {
    switch (sectionId) {
      case 'home': return 'home';
      case 'about': return 'user';
      case 'projects': return 'folder';
      case 'skills': return 'award';
      case 'contact': return 'mail';
      default: return 'circle';
    }
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, options);

    setTimeout(() => {
      this.navItems.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
          observer.observe(element);
        }
      });
    }, 100);
  }
}
