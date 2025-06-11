// src/app/components/skills/skills.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
  bgColor: string;
  borderColor: string;
}

@Component({
  selector: 'app-skills',
  template: `
    <section id="skills" class="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <!-- Advanced Background System -->
      <div class="absolute inset-0 z-0">
        <!-- Animated gradient meshes -->
        <div class="absolute inset-0 bg-gradient-radial from-blue-900/20 via-transparent to-transparent"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-conic from-blue-600/10 via-cyan-500/5 to-purple-600/10 animate-spin-slow"></div>
        
        <!-- Floating orbs with advanced animations -->
        <div class="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/10 rounded-full blur-3xl animate-float-1"></div>
        <div class="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/10 rounded-full blur-3xl animate-float-2"></div>
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/15 rounded-full blur-3xl animate-float-3"></div>
        
        <!-- Dynamic grid pattern -->
        <div class="absolute inset-0 opacity-[0.02]">
          <div class="grid-pattern-advanced"></div>
        </div>
        
        <!-- Particle system simulation -->
        <div class="absolute inset-0">
          <div class="particle particle-1"></div>
          <div class="particle particle-2"></div>
          <div class="particle particle-3"></div>
          <div class="particle particle-4"></div>
          <div class="particle particle-5"></div>
        </div>
      </div>

      <div class="max-w-8xl mx-auto relative z-10">
        <!-- Premium Header Section -->
        <div class="text-center mb-24">
          <!-- Status indicator -->
          <div class="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-full animate-slideDown">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-slate-300 text-sm font-medium tracking-wide">Technical Expertise</span>
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>

          <!-- Main heading with advanced typography -->
          <h1 class="relative mb-8">
            <span class="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent animate-gradient tracking-tight">
              Technical Skills
            </span>
            <span class="block text-2xl md:text-3xl lg:text-4xl font-light text-blue-400/80 tracking-widest animate-slideUp animation-delay-500">
              Mastered Technologies
            </span>
          </h1>

          <!-- Enhanced decorative elements -->
          <div class="flex items-center justify-center gap-6 mb-8">
            <div class="flex items-center gap-2">
              <div class="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-slideRight"></div>
              <div class="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            <div class="w-px h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
            <div class="flex items-center gap-2">
              <div class="w-3 h-3 bg-cyan-400 rounded-full animate-pulse animation-delay-500"></div>
              <div class="w-20 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-slideLeft"></div>
            </div>
          </div>

          <!-- Professional description -->
          <p class="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed font-light">
            Comprehensive proficiency in modern development technologies and frameworks, delivering robust and scalable solutions
          </p>
        </div>

        <!-- Filter/Category Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            *ngFor="let category of categories" 
            (click)="filterSkills(category)"
            [class.active]="activeFilter === category"
            class="filter-btn px-6 py-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 font-medium transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-300"
          >
            {{ category }}
          </button>
        </div>

        <!-- Advanced Skills Grid -->
        <div class="grid xl:grid-cols-2 gap-12">
          <div
            *ngFor="let category of filteredSkillCategories; let i = index"
            class="skill-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
            [class.animate-slideUp]="true"
            [style.animation-delay]="(i * 0.15) + 's'"
          >
            <!-- Category Header -->
            <div class="p-8 border-b border-slate-700/30">
              <div class="flex items-center gap-4">
                <div [class]="'w-12 h-12 rounded-2xl flex items-center justify-center ' + category.bgColor + ' group-hover:scale-110 transition-transform duration-300'">
                  <svg class="w-6 h-6" [class]="category.color" fill="currentColor" viewBox="0 0 24 24">
                    <path *ngIf="category.name === 'Frontend'" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    <path *ngIf="category.name === 'Backend'" d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
                    <path *ngIf="category.name === 'Database'" d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zM4 14v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
                    <path *ngIf="category.name === 'Tools'" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {{ category.name }}
                  </h3>
                  <p class="text-slate-400 text-sm">{{ category.skills.length }} Technologies</p>
                </div>
              </div>
            </div>

            <!-- Skills List -->
            <div class="p-8 space-y-6">
              <div
                *ngFor="let skill of category.skills; let skillIndex = index"
                class="skill-item opacity-0 animate-slideUp"
                [style.animation-delay]="((i * 0.15) + (skillIndex * 0.1)) + 's'"
              >
                <!-- Skill Header -->
                <div class="flex items-center justify-between mb-3">
                  <span class="text-lg font-semibold text-white">{{ skill.name }}</span>
                  <span class="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {{ skill.level }}%
                  </span>
                </div>
                
                <!-- Skill Progress Bar -->
                <div class="relative h-2 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                  <!-- Background glow -->
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full"></div>
                  
                  <!-- Progress fill -->
                  <div 
                    class="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-2000 ease-out skill-progress-bar shadow-lg"
                    [style.width]="'0%'"
                    [attr.data-width]="skill.level + '%'"
                  >
                    <!-- Animated shimmer effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                  
                  <!-- Progress indicator dot -->
                  <div 
                    class="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg transition-all duration-2000 ease-out skill-indicator opacity-0"
                    [style.left]="'0%'"
                    [attr.data-left]="skill.level + '%'"
                  ></div>
                </div>
              </div>
            </div>

            <!-- Animated border glow -->
            <div class="skill-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>

        <!-- Call to action section -->
        <div class="text-center mt-16">
          <div class="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-medium shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 cursor-pointer">
            <span>Explore My Expertise</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
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
    
    @keyframes slideRight {
      from { opacity: 0; transform: translateX(-30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes slideLeft {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes particle-float {
      0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
      50% { transform: translateY(-100px) translateX(50px); opacity: 0.8; }
    }
    
    /* Animation Classes */
    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
    .animate-float-1 { animation: float-1 8s ease-in-out infinite; }
    .animate-float-2 { animation: float-2 10s ease-in-out infinite; }
    .animate-float-3 { animation: float-3 12s ease-in-out infinite; }
    .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
    .animate-slideDown { animation: slideDown 0.8s ease-out; }
    .animate-slideUp { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
    .animate-slideRight { animation: slideRight 1s ease-out; }
    .animate-slideLeft { animation: slideLeft 1s ease-out; }
    .animate-gradient { 
      background-size: 300% 300%;
      animation: gradient 8s ease infinite; 
    }
    .animate-shimmer {
      animation: shimmer 2s infinite;
    }
    
    /* Animation Delays */
    .animation-delay-500 { animation-delay: 0.5s; }
    .animation-delay-1000 { animation-delay: 1s; }
    
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
      top: 60%;
      left: 20%;
      background: rgba(6, 182, 212, 0.6);
      animation-delay: 2s;
    }
    
    .particle-3 {
      top: 40%;
      right: 15%;
      background: rgba(147, 51, 234, 0.6);
      animation-delay: 4s;
    }
    
    .particle-4 {
      bottom: 30%;
      right: 25%;
      background: rgba(236, 72, 153, 0.6);
      animation-delay: 1s;
    }
    
    .particle-5 {
      top: 80%;
      left: 60%;
      background: rgba(34, 197, 94, 0.6);
      animation-delay: 3s;
    }
    
    /* Component Styles */
    .filter-btn.active {
      background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2));
      border-color: rgba(59, 130, 246, 0.5);
      color: rgb(147, 197, 253);
      box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
    }
    
    .skill-card {
      transform-style: preserve-3d;
    }
    
    .skill-card:hover {
      transform: translateY(-8px) rotateX(2deg);
    }
    
    .skill-glow {
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
    
    /* Skill Progress Bar Animation */
    .skill-progress-bar {
      transform-origin: left center;
    }
    
    /* Responsive Design */
    @media (max-width: 1024px) {
      .text-6xl { font-size: 3.5rem; }
      .text-7xl { font-size: 4rem; }
      .text-8xl { font-size: 4.5rem; }
      .text-9xl { font-size: 5rem; }
    }
    
    @media (max-width: 768px) {
      .text-6xl { font-size: 2.5rem; }
      .text-7xl { font-size: 3rem; }
      .text-8xl { font-size: 3.5rem; }
      .text-9xl { font-size: 4rem; }
      
      .skill-card {
        margin-bottom: 2rem;
      }
    }
    
    /* Advanced hover effects */
    .skill-card::before {
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
    
    .skill-card:hover::before {
      opacity: 1;
    }
    
    /* Custom scrollbar styling */
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
  `]
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [
    { name: "JavaScript/TypeScript", level: 76, category: "Frontend" },
    { name: "Angular", level: 59.9, category: "Frontend" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "Spring Boot", level: 73, category: "Backend" },
    { name: "PHP", level: 75, category: "Backend" },
    { name: "RESTful APIs", level: 78, category: "Backend" },
    { name: "Python", level: 47, category: "Backend" },
    { name: "MongoDB/MySQL", level: 50, category: "Database" },
    { name: "Git/GitHub", level: 82, category: "Tools" },
    { name: "Docker", level: 25, category: "Tools" }
  ];

  categories: string[] = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];
  activeFilter: string = 'All';
  skillCategories: SkillCategory[] = [];
  filteredSkillCategories: SkillCategory[] = [];

  ngOnInit() {
    this.organizeSkillsByCategory();
    this.filterSkills('All');
  }

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
    setTimeout(() => {
      this.animateSkillBars();
    }, 1000);
  }

  private organizeSkillsByCategory() {
    const categoryColors = {
      'Frontend': { color: 'text-blue-400', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-400/30' },
      'Backend': { color: 'text-green-400', bgColor: 'bg-green-500/20', borderColor: 'border-green-400/30' },
      'Database': { color: 'text-purple-400', bgColor: 'bg-purple-500/20', borderColor: 'border-purple-400/30' },
      'Tools': { color: 'text-orange-400', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-400/30' }
    };

    this.skillCategories = this.categories
      .filter(category => category !== 'All')
      .map(category => ({
        name: category,
        skills: this.skills.filter(skill => skill.category === category),
        ...categoryColors[category as keyof typeof categoryColors]
      }));
  }

  filterSkills(category: string) {
    this.activeFilter = category;
    if (category === 'All') {
      this.filteredSkillCategories = this.skillCategories;
    } else {
      this.filteredSkillCategories = this.skillCategories.filter(cat => cat.name === category);
    }
  }

  private animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    const indicators = document.querySelectorAll('.skill-indicator');
    
    progressBars.forEach((bar, index) => {
      const width = bar.getAttribute('data-width');
      if (width) {
        setTimeout(() => {
          (bar as HTMLElement).style.width = width;
        }, index * 100);
      }
    });

    indicators.forEach((indicator, index) => {
      const left = indicator.getAttribute('data-left');
      if (left) {
        setTimeout(() => {
          (indicator as HTMLElement).style.left = `calc(${left} - 6px)`;
          (indicator as HTMLElement).style.opacity = '1';
        }, index * 100 + 500);
      }
    });
  }

  private initializeIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => observer.observe(card));
  }
}