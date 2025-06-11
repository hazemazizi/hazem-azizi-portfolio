import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

interface Project {
  id: number;
  title: string;
  subtitle: string;
  tech: string[];
  category: string;
  status: string;
  image: string;
  screenshots: string[]; // Added for multiple screenshots
  description: string;
  demoUrl?: string;
  githubUrl?: string;
  features: string[];
  duration: string;
  teamSize: number;
  completionRate: number;
}

@Component({
  selector: 'app-projects',
  template: `
    <section id="projects" class="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
            <span class="text-slate-300 text-sm font-medium tracking-wide">Portfolio • Available for Projects</span>
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>

          <!-- Main heading with advanced typography -->
          <h1 class="relative mb-8">
            <span class="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent animate-gradient tracking-tight">
              Featured Work
            </span>
            <span class="block text-2xl md:text-3xl lg:text-4xl font-light text-blue-400/80 tracking-widest animate-slideUp animation-delay-500">
              Crafted with Excellence
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
            Showcasing innovative solutions and cutting-edge applications built with modern technologies and best practices
          </p>
        </div>

        <!-- Filter/Category Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <button
            *ngFor="let category of categories"
            (click)="filterProjects(category)"
            [class.active]="activeFilter === category"
            class="filter-btn px-6 py-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 font-medium transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/50 hover:text-blue-300"
          >
            {{ category }}
          </button>
        </div>

        <!-- Advanced Projects Grid -->
        <div class="grid xl:grid-cols-2 gap-12 mb-16">
          <div
            *ngFor="let project of filteredProjects; let i = index"
            class="project-folder group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10"
            [class.animate-slideUp]="true"
            [style.animation-delay]="(i * 0.15) + 's'"
            (click)="toggleFolder(project.id)"
          >
            <!-- Folder Header Section -->
            <div class="relative h-80 overflow-hidden folder-header">
              <!-- Folder Icon and Title -->
              <div class="h-full bg-gradient-to-br from-slate-900/60 via-slate-800/80 to-slate-900/60 flex items-center justify-center relative overflow-hidden">
                <!-- Animated background -->
                <div class="absolute inset-0 bg-gradient-mesh opacity-30 animate-pulse-slow"></div>
                <div class="text-center relative z-10">
                  <div class="w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                    <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
                    </svg>
                  </div>
                  <h3 class="text-xl font-bold text-white mb-2">{{ project.title }}</h3>
                  <p class="text-slate-400 text-sm">{{ project.status }}</p>
                </div>
                <!-- Floating elements -->
                <div class="absolute top-6 left-6 w-3 h-3 bg-blue-400/60 rounded-full animate-bounce"></div>
                <div class="absolute bottom-8 right-8 w-2 h-2 bg-cyan-400/60 rounded-full animate-ping"></div>
                <div class="absolute top-1/3 right-12 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"></div>
              </div>

              <!-- Enhanced status and metrics bar -->
              <div class="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div class="flex flex-col gap-2">
                  <span [class]="getStatusClass(project.status)" class="backdrop-blur-md border shadow-xl">
                    <span class="inline-block w-2 h-2 rounded-full mr-2" [class]="getStatusDotClass(project.status)"></span>
                    {{ project.status }}
                  </span>
                  <div class="flex items-center gap-2 px-3 py-1 bg-slate-900/60 backdrop-blur-md border border-slate-600/30 rounded-full text-xs text-slate-300">
                    <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 2v20M2 12h20"/>
                    </svg>
                    {{ project.duration }}
                  </div>
                </div>
                <div class="flex flex-col items-end gap-2">
                  <div class="px-3 py-1 bg-slate-900/60 backdrop-blur-md border border-slate-600/30 rounded-full text-xs text-slate-300">
                    Team: {{ project.teamSize }}
                  </div>
                  <div class="flex items-center gap-1 px-3 py-1 bg-slate-900/60 backdrop-blur-md border border-slate-600/30 rounded-full text-xs text-slate-300">
                    <div class="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-1000"
                           [style.width.%]="project.completionRate"></div>
                    </div>
                    <span class="ml-1">{{ project.completionRate }}%</span>
                  </div>
                </div>
              </div>

              <!-- Interactive overlay with actions -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
                <div class="flex gap-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <button *ngIf="project.demoUrl" class="action-btn bg-gradient-to-r from-blue-500 to-cyan-500 text-white" (click)="onDemoClick(project, $event)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15,3 21,3 21,9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    Live Demo
                  </button>
                  <button *ngIf="project.githubUrl" class="action-btn bg-gradient-to-r from-slate-600 to-slate-700 text-white" (click)="onGithubClick(project, $event)">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Source Code
                  </button>
                  <button class="action-btn bg-gradient-to-r from-purple-500 to-pink-500 text-white" (click)="toggleFolder(project.id, $event)">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                    </svg>
                    View Screenshots
                  </button>
                </div>
              </div>
            </div>

            <!-- Folder Content Section -->
            <div class="p-8 space-y-6">
              <!-- Header with category -->
              <div class="flex items-start justify-between">
                <div class="flex-1">
                  <div class="flex items-center gap-3 mb-4">
                    <span class="category-badge">{{ project.category }}</span>
                    <div class="flex items-center gap-1 text-xs text-slate-500">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                      </svg>
                      {{ project.duration }}
                    </div>
                  </div>
                  <h3 class="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {{ project.title }}
                  </h3>
                  <p class="text-blue-400/90 text-lg font-medium mb-4 leading-relaxed">{{ project.subtitle }}</p>
                </div>
              </div>

              <!-- Enhanced description -->
              <div class="space-y-4">
                <p class="text-slate-300 leading-relaxed text-base">{{ project.description }}</p>

                <!-- Key features -->
                <div class="space-y-3">
                  <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Key Features
                  </h4>
                  <div class="grid grid-cols-1 gap-2">
                    <div *ngFor="let feature of project.features.slice(0, 3)" class="flex items-center gap-2 text-sm text-slate-400">
                      <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      {{ feature }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Technology stack with enhanced styling -->
              <div class="space-y-4">
                <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
                    <line x1="12" y1="22" x2="12" y2="15.5"/>
                    <polyline points="7,4.5 12,8.5 17,4.5"/>
                  </svg>
                  Technology Stack
                </h4>
                <div class="flex flex-wrap gap-2">
                  <span
                    *ngFor="let tech of project.tech; let techIndex = index"
                    class="tech-badge"
                    [style.animation-delay]="(techIndex * 0.1) + 's'"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Screenshots Gallery -->
              <div *ngIf="isFolderOpen(project.id)" class="screenshots-gallery mt-6 p-6 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-slate-700/30 animate-slideDown">
                <h4 class="text-sm font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2 mb-4">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  Screenshots
                </h4>
                <div class="grid grid-cols-2 gap-4">
                  <div *ngFor="let screenshot of project.screenshots" class="relative group">
                    <img
                      [src]="screenshot"
                      [alt]="project.title + ' screenshot'"
                      class="w-full h-40 object-cover rounded-lg border border-slate-600/30 group-hover:scale-105 transition-transform duration-300"
                      (error)="onImageError($event)"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Animated border glow -->
            <div class="project-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>

        <!-- Call to action section -->
        <div class="text-center">
          <div class="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-medium shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 cursor-pointer">
            <span>View All Projects</span>
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

    .bg-gradient-mesh {
      background:
        linear-gradient(45deg, rgba(59, 130, 246, 0.1) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(6, 182, 212, 0.1) 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, rgba(147, 51, 234, 0.1) 75%),
        linear-gradient(-45deg, transparent 75%, rgba(236, 72, 153, 0.1) 75%);
      background-size: 60px 60px;
      background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
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

    .project-folder {
      transform-style: preserve-3d;
      /* Folder-like styling */
      background: linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%);
      box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.5), 0 4px 20px rgba(0, 0, 0, 0.3);
      border-radius: 12px;
      position: relative;
    }

    .project-folder:hover {
      transform: translateY(-8px) rotateX(2deg);
    }

    .folder-header {
      position: relative;
      border-bottom: 2px solid rgba(59, 130, 246, 0.3);
      background: linear-gradient(to bottom, rgba(59, 130, 246, 0.1), transparent);
    }

    .project-glow {
      background: linear-gradient(135deg,
        rgba(59, 130, 246, 0.1) 0%,
        rgba(6, 182, 212, 0.1) 50%,
        rgba(147, 51, 234, 0.1) 100%
      );
      filter: blur(20px);
    }

    .action-btn {
      @apply px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-sm shadow-lg;
    }

    .action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .category-badge {
      @apply px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold backdrop-blur-sm;
    }

    .tech-badge {
      @apply px-4 py-2 bg-slate-700/40 backdrop-blur-sm border border-slate-600/40 text-slate-300 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-500/20 hover:border-blue-400/40 hover:text-blue-300 cursor-default transform hover:scale-105;
    }

    /* Screenshots Gallery */
    .screenshots-gallery {
      transition: all 0.3s ease;
    }

    /* Enhanced Glassmorphism */
    .backdrop-blur-2xl {
      backdrop-filter: blur(40px);
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

      .project-folder {
        margin-bottom: 2rem;
      }

      .action-btn {
        @apply px-4 py-2 text-xs;
      }

      .screenshots-gallery .grid-cols-2 {
        grid-template-columns: 1fr;
      }
    }

    /* Advanced hover effects */
    .project-folder::before {
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

    .project-folder:hover::before {
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
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('projectsSection', { static: true }) projectsSection!: ElementRef;

  projects: Project[] = [
    {
      id: 1,
      title: "STEG Online Bill Payment",
      subtitle: "Enterprise-Grade Bill Payment & Management System",
      tech: ["Native PHP", "MySQL", "HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
      category: "Enterprise Platform",
      status: "Completed",
      image: "assets/images/stegonline.png",
      screenshots: [
        "assets/images/stegonline-1.png",
        "assets/images/stegonline-2.png",
        "assets/images/stegonline-3.png"
      ],
      description: "A comprehensive enterprise-grade online bill payment platform serving thousands of users. Features secure payment processing, advanced user authentication, comprehensive billing history, automated complaint tracking, and real-time notifications. Built with robust security measures and optimized for high-traffic scenarios.",
      demoUrl: "https://steg-demo.example.com",
      githubUrl: "https://github.com/username/steg-online",
      features: [
        "Secure payment gateway integration",
        "Advanced user authentication & authorization",
        "Real-time billing & payment tracking",
        "Automated complaint management system",
        "Multi-language support",
        "Mobile-responsive design"
      ],
      duration: "8 months",
      teamSize: 4,
      completionRate: 100
    },
    {
      id: 2,
      title: "TimeForge",
      subtitle: "AI-Powered Project Management & Analytics Platform",
      tech: ["Spring Boot", "Angular 15", "MongoDB", "Redis", "Docker", "AWS", "Python", "TensorFlow"],
      category: "Web Application",
      status: "In Development",
      image: "assets/images/timeforge.jpg",
      screenshots: [
        "assets/images/timeforge-1.jpg",
        "assets/images/timeforge-2.jpg",
        "assets/images/timeforge-3.jpg"
      ],
      description: "Next-generation project management platform leveraging AI for intelligent task prioritization, resource optimization, and predictive analytics. Features real-time collaboration, advanced reporting, automated workflow optimization, and machine learning-powered insights for enhanced productivity and project success rates.",
      demoUrl: "https://timeforge-beta.example.com",
      githubUrl: "https://github.com/username/timeforge",
      features: [
        "AI-powered task prioritization",
        "Real-time team collaboration",
        "Predictive project analytics",
        "Automated workflow optimization",
        "Advanced reporting & dashboards",
        "Integration with popular tools"
      ],
      duration: "12 months",
      teamSize: 6,
      completionRate: 75
    },
    {
      id: 3,
      title: "CloudSync Pro",
      subtitle: "Enterprise Cloud Storage & Synchronization",
      tech: ["Node.js", "React", "PostgreSQL", "AWS S3", "WebSocket", "Redis"],
      category: "Cloud Platform",
      status: "Planning",
      image: "/api/placeholder/600/400",
      screenshots: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      description: "Enterprise-grade cloud storage solution with advanced synchronization capabilities, end-to-end encryption, and collaborative features. Designed for businesses requiring secure, scalable, and efficient file management across distributed teams.",
      features: [
        "End-to-end encryption",
        "Real-time file synchronization",
        "Advanced sharing & permissions",
        "Version control & rollback",
        "Team collaboration tools",
        "Enterprise security compliance"
      ],
      duration: "10 months",
      teamSize: 5,
      completionRate: 15
    },
    {
      id: 4,
      title: "EcoTrack Analytics",
      subtitle: "Environmental Impact Monitoring System",
      tech: ["Vue.js", "Python", "FastAPI", "PostgreSQL", "D3.js", "Docker"],
      category: "Analytics Platform",
      status: "Planning",
      image: "/api/placeholder/600/400",
      screenshots: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      description: "Comprehensive environmental monitoring and analytics platform for tracking carbon footprint, energy consumption, and sustainability metrics. Features advanced data visualization, automated reporting, and actionable insights for environmental compliance.",
      features: [
        "Real-time environmental monitoring",
        "Carbon footprint calculation",
        "Advanced data visualization",
        "Compliance reporting automation",
        "Sustainability goal tracking",
        "Integration with IoT sensors"
      ],
      duration: "6 months",
      teamSize: 3,
      completionRate: 5
    },
    {
      id: 5,
      title: "MediConnect",
      subtitle: "Healthcare Management & Telemedicine Platform",
      tech: ["Angular", "Spring Boot", "MySQL", "WebRTC", "Firebase", "Stripe"],
      category: "Healthcare Platform",
      status: "Completed",
      image: "/api/placeholder/600/400",
      screenshots: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      description: "Comprehensive healthcare management system with integrated telemedicine capabilities. Features patient management, appointment scheduling, video consultations, prescription management, and secure medical records storage with HIPAA compliance.",
      demoUrl: "https://mediconnect-demo.example.com",
      githubUrl: "https://github.com/username/mediconnect",
      features: [
        "Video consultation system",
        "Electronic health records",
        "Appointment scheduling",
        "Prescription management",
        "Patient portal access",
        "HIPAA compliant security"
      ],
      duration: "14 months",
      teamSize: 8,
      completionRate: 100
    },
    {
      id: 6,
      title: "FinTech Dashboard",
      subtitle: "Advanced Financial Analytics & Trading Platform",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "Chart.js", "Stripe API"],
      category: "Financial Platform",
      status: "In Development",
      image: "/api/placeholder/600/400",
      screenshots: [
        "/api/placeholder/600/400",
        "/api/placeholder/600/400",
        "/api/placeholder/600/400"
      ],
      description: "Sophisticated financial analytics platform with real-time market data, advanced charting, portfolio management, and algorithmic trading capabilities. Features comprehensive risk analysis, automated reporting, and secure transaction processing.",
      demoUrl: "https://fintech-dashboard-beta.example.com",
      features: [
        "Real-time market data integration",
        "Advanced portfolio analytics",
        "Algorithmic trading support",
        "Risk assessment tools",
        "Secure transaction processing",
        "Customizable dashboards"
      ],
      duration: "16 months",
      teamSize: 7,
      completionRate: 60
    }
  ];

  categories: string[] = ['All', 'Enterprise Platform', 'Web Application', 'Cloud Platform', 'Analytics Platform', 'Healthcare Platform', 'Financial Platform'];
  activeFilter: string = 'All';
  filteredProjects: Project[] = this.projects;
  openFolders: Set<number> = new Set();

  ngOnInit() {
    this.filterProjects('All');
  }

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
  }

  filterProjects(category: string) {
    this.activeFilter = category;
    if (category === 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }

  getStatusClass(status: string): string {
    const baseClass = "px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg ";
    switch (status) {
      case 'Completed':
        return baseClass + "bg-emerald-500/20 border-emerald-400/40 text-emerald-300 backdrop-blur-md";
      case 'In Development':
        return baseClass + "bg-amber-500/20 border-amber-400/40 text-amber-300 backdrop-blur-md";
      case 'Planning':
        return baseClass + "bg-blue-500/20 border-blue-400/40 text-blue-300 backdrop-blur-md";
      default:
        return baseClass + "bg-slate-500/20 border-slate-400/40 text-slate-300 backdrop-blur-md";
    }
  }

  getStatusDotClass(status: string): string {
    switch (status) {
      case 'Completed':
        return "bg-emerald-400 animate-pulse";
      case 'In Development':
        return "bg-amber-400 animate-pulse";
      case 'Planning':
        return "bg-blue-400 animate-pulse";
      default:
        return "bg-slate-400 animate-pulse";
    }
  }

  onImageError(event: any) {
    console.warn('Failed to load project image:', event.target.src);
    event.target.src = '/api/placeholder/600/400';
    event.target.classList.add('image-error');
  }

  toggleFolder(projectId: number, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    if (this.openFolders.has(projectId)) {
      this.openFolders.delete(projectId);
    } else {
      this.openFolders.add(projectId);
    }
  }

  isFolderOpen(projectId: number): boolean {
    return this.openFolders.has(projectId);
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

    const projectFolders = document.querySelectorAll('.project-folder');
    projectFolders.forEach(folder => observer.observe(folder));
  }

  onDemoClick(project: Project, event: Event) {
    event.stopPropagation();
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    }
  }

  onGithubClick(project: Project, event: Event) {
    event.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, '_blank');
    }
  }
}