import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
    <section id="home" class="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <!-- Enhanced Background System with Parallax and Starfield -->
      <div class="absolute inset-0 z-0">
        <!-- Starfield Background -->
        <div class="absolute inset-0 starfield">
          <div class="star star-1"></div>
          <div class="star star-2"></div>
          <div class="star star-3"></div>
          <div class="star star-4"></div>
          <div class="star star-5"></div>
        </div>

        <!-- Parallax SVG Wave Layers -->
        <svg class="absolute inset-0 w-full h-full opacity-25 parallax-layer" data-depth="0.2" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:rgba(59,130,246,0.4)" />
              <stop offset="100%" style="stop-color:rgba(6,182,212,0.3)" />
            </linearGradient>
          </defs>
          <path d="M0,100 C320,150 640,50 960,100 L960,0 L0,0 Z" fill="url(#waveGradient1)" class="wave-path-1" />
        </svg>
        <svg class="absolute inset-0 w-full h-full opacity-20 parallax-layer" data-depth="0.4" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:rgba(6,182,212,0.3)" />
              <stop offset="100%" style="stop-color:rgba(147,51,234,0.2)" />
            </linearGradient>
          </defs>
          <path d="M0,150 C300,200 660,100 960,150 L960,0 L0,0 Z" fill="url(#waveGradient2)" class="wave-path-2" />
        </svg>

        <!-- Animated gradient meshes -->
        <div class="absolute inset-0 bg-gradient-radial from-blue-900/35 via-transparent to-transparent animate-pulse-slow"></div>
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-conic from-blue-600/25 via-cyan-500/20 to-purple-600/25 animate-spin-slower"></div>

        <!-- Floating orbs with sparkle effects -->
        <div class="absolute top-16 right-16 w-80 h-80 bg-gradient-to-r from-blue-500/35 to-cyan-500/25 rounded-full blur-4xl animate-float-1 transition-all duration-500 ease-out orb" data-orb="1">
          <div class="sparkle-overlay"></div>
        </div>
        <div class="absolute bottom-16 left-16 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/25 rounded-full blur-4xl animate-float-2 transition-all duration-500 ease-out orb" data-orb="2">
          <div class="sparkle-overlay"></div>
        </div>
        <div class="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-cyan-500/25 to-blue-500/30 rounded-full blur-4xl animate-float-3 transition-all duration-500 ease-out orb" data-orb="3">
          <div class="sparkle-overlay"></div>
        </div>

        <!-- Subtle grid pattern -->
        <div class="absolute inset-0 opacity-[0.05] animate-pulse-slow">
          <div class="grid-pattern-advanced"></div>
        </div>

        <!-- Enhanced particle system with cartoony sparkles -->
        <div class="absolute inset-0">
          <div class="particle particle-1 sparkle shadow-glow"></div>
          <div class="particle particle-2 sparkle shadow-glow"></div>
          <div class="particle particle-3 sparkle shadow-glow"></div>
          <div class="particle particle-4 sparkle shadow-glow"></div>
          <div class="particle particle-5 sparkle shadow-glow"></div>
        </div>

        <!-- Lens flare effect -->
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-white/7 via-transparent to-transparent animate-pulse-slower"></div>
      </div>

      <!-- Main Content -->
      <div class="max-w-7xl mx-auto text-center z-10 relative">
        <!-- Enhanced Glassmorphism Container -->
        <div class="about-card group relative bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-800/60 backdrop-blur-4xl rounded-3xl border border-slate-700/60 p-6 sm:p-8 md:p-12 transition-all duration-700 hover:border-blue-400/70 hover:shadow-2xl hover:shadow-blue-500/25 animate-slideUp">
          <!-- Cartoony Speech Bubble -->
          <div class="absolute -top-16 left-1/2 transform -translate-x-1/2 w-64 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-2xl p-4 text-white text-sm font-cartoon animate-bounce-cartoon shadow-glow">
            <span class="tagline">Crafting Code with Creativity！

</span>
            <div class="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-blue-600"></div>
          </div>

          <!-- Status Badge -->
          <div class="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-slate-800/70 backdrop-blur-xl border border-slate-700/80 rounded-full animate-slideDown shadow-glow">
            <div class="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse shadow-glow"></div>
            <span class="text-slate-200 text-sm font-medium tracking-wider font-cartoon">Available for Work</span>
            <div class="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse shadow-glow animation-delay-1000"></div>
          </div>

          <!-- Name and Profile Picture Side by Side -->
          <div class="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 mb-10">
            <div class="order-2 md:order-1">
              <!-- Enhanced Main Heading -->
              <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 bg-gradient-to-r from-slate-100 via-cyan-200 to-blue-300 bg-clip-text text-transparent animate-gradient-text tracking-tight transition-transform duration-500 hover:scale-105 cursor-default font-cartoon">
                Hazem Azizi
              </h1>
              <!-- Typing Animation Subtitle -->
              <div class="mt-4 h-8">
                <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-300/90 typing-animation tracking-widest animate-slideUp font-cartoon" style="animation-delay: 0.6s;">
                  Software Engineering Student
                </p>
              </div>
            </div>

            <!-- Enhanced Profile Picture with Cartoony Frame -->
            <div class="relative animate-float order-1 md:order-2">
              <!-- Glowing rings -->
              <div class="absolute -inset-8 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-blue-500/30 rounded-full opacity-35 blur-3xl animate-spin-slower"></div>
              <div class="absolute -inset-4 bg-gradient-to-r from-cyan-400/40 via-blue-400/40 to-cyan-500/40 rounded-full opacity-45 blur-xl animate-pulse-slower"></div>

              <!-- Cartoony Profile Picture Frame -->
              <div class="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden backdrop-blur-md bg-gradient-to-br from-slate-800/50 to-slate-900/40 border-4 border-blue-400/60 shadow-2xl group-hover:border-blue-400/80 transition-all duration-500">
                <img 
                  src="assets/images/profile.jpg" 
                  alt="Hazem Azizi"
                  class="w-full h-full object-cover transition-all duration-700 hover:scale-110 hover:brightness-125"
                />
                <!-- Cartoony frame overlay -->
                <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" stroke="url(#frameGradient)" stroke-width="4" fill="none" class="animate-spin-slower" />
                  <path d="M50,10 A40,40 0 0,1 90,50 A40,40 0 0,1 50,90 A40,40 0 0,1 10,50 A40,40 0 0,1 50,10 Z" fill="none" stroke="url(#frameGradient)" stroke-width="2" class="animate-pulse-slower" />
                  <defs>
                    <linearGradient id="frameGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style="stop-color:#3b82f6" />
                      <stop offset="100%" style="stop-color:#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <!-- Cartoony particles -->
              <div class="absolute -top-4 -left-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce-cartoon opacity-75 shadow-glow"></div>
              <div class="absolute -bottom-5 -right-5 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce-cartoon opacity-75 shadow-glow animation-delay-1000"></div>
              <div class="absolute top-1/2 -left-6 w-2 h-2 bg-blue-300 rounded-full animate-bounce-cartoon opacity-65 shadow-glow animation-delay-2000"></div>
              <div class="absolute -top-3 right-1/3 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-bounce-cartoon opacity-55 shadow-glow animation-delay-3000"></div>
            </div>
          </div>

          <!-- Enhanced Info Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
            <div class="about-card group relative bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-800/60 backdrop-blur-2xl rounded-2xl border border-slate-700/60 p-4 sm:p-5 transition-all duration-500 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 animate-slideUp" style="animation-delay: 0.8s;">
              <div class="flex items-center justify-center gap-3 text-slate-200">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-glow">
                  <lucide-icon name="map-pin" class="w-5 h-5 text-white"></lucide-icon>
                </div>
                <div class="text-left">
                  <div class="text-xs text-slate-400 uppercase tracking-wider font-cartoon">Location</div>
                  <div class="font-semibold text-white font-cartoon">Tunisia</div>
                </div>
              </div>
              <div class="about-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>

            <div class="about-card group relative bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-800/60 backdrop-blur-2xl rounded-2xl border border-slate-700/60 p-4 sm:p-5 transition-all duration-500 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 animate-slideUp" style="animation-delay: 1s;">
              <div class="flex items-center justify-center gap-3 text-slate-200">
                <div class="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-glow">
                  <lucide-icon name="graduation-cap" class="w-5 h-5 text-white"></lucide-icon>
                </div>
                <div class="text-left">
                  <div class="text-xs text-slate-400 uppercase tracking-wider font-cartoon">Education</div>
                  <div class="font-semibold text-white font-cartoon">Software Engineering Student</div>
                </div>
              </div>
              <div class="about-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>

            <div class="about-card group relative bg-gradient-to-br from-slate-800/60 via-slate-900/70 to-slate-800/60 backdrop-blur-2xl rounded-2xl border border-slate-700/60 p-4 sm:p-5 transition-all duration-500 hover:border-blue-400/70 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 animate-slideUp" style="animation-delay: 1.2s;">
              <div class="flex items-center justify-center gap-3 text-slate-200">
                <div class="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-glow">
                  <lucide-icon name="code" class="w-5 h-5 text-white"></lucide-icon>
                </div>
                <div class="text-left">
                  <div class="text-xs text-slate-400 uppercase tracking-wider font-cartoon">Focus</div>
                  <div class="font-semibold text-white font-cartoon">Software Engineering</div>
                </div>
              </div>
              <div class="about-glow absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>

          <!-- Enhanced Call-to-Action Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              (click)="scrollToProjects()"
              class="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-white font-cartoon transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40 overflow-hidden animate-slideUp animate-squash" style="animation-delay: 1.4s;"
            >
              <span class="relative z-10 flex items-center gap-2">
                <lucide-icon name="eye" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"></lucide-icon>
                View My Work
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer"></div>
              <div class="neon-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>

            <button
              (click)="downloadCV()"
              class="group relative px-8 py-4 bg-transparent border-2 border-blue-400/60 rounded-full font-semibold text-white font-cartoon hover:border-blue-400/80 transition-all duration-500 hover:scale-110 hover:bg-blue-500/25 animate-slideUp animate-squash" style="animation-delay: 1.6s;"
            >
              <span class="flex items-center gap-2">
                <lucide-icon name="download" class="w-5 h-5 group-hover:scale-110 transition-transform duration-300"></lucide-icon>
                Download CV
              </span>
              <div class="neon-glow absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          <!-- Animated border glow -->
          <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>
      </div>

      <!-- Enhanced Scroll Indicator with Cartoony Arrow -->
      <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 animate-slideUp" style="animation-delay: 1.8s;">
        <div class="flex flex-col items-center gap-2 animate-bounce-cartoon">
          <span class="text-xs text-slate-300 uppercase tracking-widest font-cartoon">Scroll Down</span>
          <svg class="w-8 h-12" viewBox="0 0 24 36">
            <path d="M12 4v24m-8-8l8 8 8-8" fill="none" stroke="url(#arrowGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-bounce-cartoon" />
            <circle cx="12" cy="12" r="3" fill="url(#arrowGradient)" class="animate-pulse-slower" />
            <defs>
              <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#3b82f6" />
                <stop offset="100%" style="stop-color:#06b6d4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Enhanced Animation System */
    @keyframes spin-slower {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    @keyframes float-1 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
      33% { transform: translate(40px, -40px) scale(1.25); opacity: 0.35; }
      66% { transform: translate(-30px, 30px) scale(0.85); opacity: 0.3; }
    }
    
    @keyframes float-2 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
      50% { transform: translate(-50px, -60px) scale(1.35); opacity: 0.4; }
    }
    
    @keyframes float-3 {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.25; }
      25% { transform: translate(30px, 40px) scale(0.75); opacity: 0.35; }
      75% { transform: translate(-40px, -30px) scale(1.25); opacity: 0.3; }
    }
    
    @keyframes pulse-slower {
      0%, 100% { opacity: 0.25; transform: scale(1); }
      50% { opacity: 0.45; transform: scale(1.2); }
    }
    
    @keyframes slideDown {
      from { opacity: 0; transform: translateY(-40px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(50px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes gradient-text {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-150%); }
      100% { transform: translateX(150%); }
    }
    
    @keyframes wave {
      0% { transform: translateY(0); }
      50% { transform: translateY(-25px); }
      100% { transform: translateY(0); }
    }
    
    @keyframes bounce-cartoon {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-12px) scale(1.15); }
    }
    
    @keyframes squash {
      0%, 100% { transform: scale(1, 1); }
      50% { transform: scale(1.1, 0.9); }
    }
    
    @keyframes sparkle {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.6; }
      50% { transform: scale(1.6) rotate(180deg); opacity: 1; }
    }
    
    @keyframes twinkle {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 0.8; }
    }
    
    /* Animation Classes */
    .animate-spin-slower { animation: spin-slower 30s linear infinite; }
    .animate-float-1 { animation: float-1 9s ease-in-out infinite; }
    .animate-float-2 { animation: float-2 11s ease-in-out infinite; }
    .animate-float-3 { animation: float-3 13s ease-in-out infinite; }
    .animate-pulse-slower { animation: pulse-slower 5s ease-in-out infinite; }
    .animate-slideDown { animation: slideDown 1s ease-out; }
    .animate-slideUp { animation: slideUp 1s ease-out forwards; opacity: 0; }
    .animate-gradient-text { 
      background-size: 400% 400%;
      animation: gradient-text 10s ease infinite; 
    }
    .animate-shimmer {
      animation: shimmer 2.5s infinite;
    }
    .animate-wave {
      animation: wave 10s ease-in-out infinite;
    }
    .wave-path-1 { animation: wave 8s ease-in-out infinite; }
    .wave-path-2 { animation: wave 12s ease-in-out infinite reverse; }
    .animate-bounce-cartoon {
      animation: bounce-cartoon 2s ease-in-out infinite;
    }
    .animate-squash {
      animation: squash 0.5s ease-in-out infinite;
    }
    
    /* Animation Delays */
    .animation-delay-500 { animation-delay: 0.5s; }
    .animation-delay-1000 { animation-delay: 1s; }
    .animation-delay-2000 { animation-delay: 2s; }
    .animation-delay-3000 { animation-delay: 3s; }
    
    /* Starfield */
    .starfield {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    
    .star {
      position: absolute;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10%);
      border-radius: 50%;
      animation: twinkle 5s ease-in-out infinite;
    }
    
    .star-1 { top: 10%; left: 15%; width: 3px; height: 3px; animation-delay: 0s; }
    .star-2 { top: 30%; left: 60%; width: 4px; height: 4px; animation-delay: 1s; }
    .star-3 { top: 50%; left: 25%; width: 2px; height: 2px; animation-delay: 2s; }
    .star-4 { top: 70%; left: 80%; width: 3px; height: 3px; animation-delay: 3s; }
    .star-5 { top: 20%; left: 40%; width: 2px; height: 2px; animation-delay: 4s; }
    
    /* Advanced Background Patterns */
    .bg-gradient-radial {
      background: radial-gradient(circle at center, var(--tw-gradient-stops));
    }
    
    .bg-gradient-conic {
      background: conic-gradient(from 0deg at 50% 50%, var(--tw-gradient-stops));
    }
    
    .grid-pattern-advanced {
      background-image: 
        linear-gradient(rgba(59, 130, 246, 0.18) 1px, transparent 1px),
        linear-gradient(90deg, rgba(59, 130, 246, 0.18) 1px, transparent 1px),
        linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
      background-size: 120px 120px, 120px 120px, 24px 24px, 24px 24px;
      width: 100%;
      height: 100%;
    }
    
    /* Enhanced Particle System with Cartoony Sparkles */
    .particle {
      position: absolute;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      pointer-events: none;
      animation: sparkle 7s ease-in-out infinite;
    }
    
    .sparkle::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255,255,255,0.9) 10%, transparent 10%);
      transform: translate(-50%, -50%) rotate(45deg);
    }
    
    .particle-1 {
      top: 15%;
      left: 12%;
      background: rgba(59, 130, 246, 0.9);
      animation-delay: 0s;
    }
    
    .particle-2 {
      top: 55%;
      left: 22%;
      background: rgba(6, 182, 212, 0.9);
      animation-delay: 1.5s;
    }
    
    .particle-3 {
      top: 35%;
      right: 18%;
      background: rgba(147, 51, 234, 0.9);
      animation-delay: 3s;
    }
    
    .particle-4 {
      bottom: 25%;
      right: 28%;
      background: rgba(236, 72, 153, 0.9);
      animation-delay: 0.5s;
    }
    
    .particle-5 {
      top: 75%;
      left: 65%;
      background: rgba(34, 197, 94, 0.9);
      animation-delay: 2.5s;
    }
    
    /* Sparkle Overlay for Orbs */
    .sparkle-overlay::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(255,255,255,0.7) 10%, transparent 10%);
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .orb:hover .sparkle-overlay::before {
      opacity: 1;
    }
    
    /* Glow Effect */
    .shadow-glow {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(6, 182, 212, 0.5);
    }
    
    /* Neon Glow Effect */
    .neon-glow {
      box-shadow: 0 0 15px rgba(59, 130, 246, 0.8), 0 0 30px rgba(6, 182, 212, 0.6);
      filter: blur(10px);
    }
    
    /* Typing Animation */
    .typing-animation {
      overflow: hidden;
      border-right: 3px solid #22d3ee;
      white-space: nowrap;
      animation: typing 4s steps(40, end), blink-caret 0.8s step-end infinite;
    }
    
    @keyframes blink-caret {
      from, to { border-color: transparent; }
      50% { border-color: #22d3ee; }
    }
    
    /* Cartoony Font */
    .font-cartoon {
      font-family: 'Comic Neue', sans-serif;
    }
    
    /* Component Styles */
    .about-card {
      transition: transform 0.5s ease, box-shadow 0.5s ease;
    }
    
    .about-card:hover {
      transform: translateY(-10px) scale(1.05);
    }
    
    .about-glow {
      background: linear-gradient(135deg, 
        rgba(59, 130, 246, 0.25) 0%, 
        rgba(6, 182, 212, 0.25) 50%, 
        rgba(147, 51, 234, 0.25) 100%
      );
      filter: blur(35px);
    }
    
    /* Enhanced Glassmorphism */
    .backdrop-blur-4xl {
      backdrop-filter: blur(72px);
    }
    
    /* Advanced Hover Effects */
    .about-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.25), transparent);
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 1;
    }
    
    .about-card:hover::before {
      opacity: 1;
    }
    
    /* Orb Hover Effects */
    .orb:hover {
      transform: scale(1.3) !important;
      filter: brightness(1.3);
      box-shadow: 0 0 25px rgba(59, 130, 246, 0.9);
    }
    
    /* Custom Scrollbar Styling */
    ::-webkit-scrollbar {
      width: 10px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(15, 23, 42, 0.6);
      border-radius: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #3b82f6, #06b6d4);
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.25);
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #2563eb, #0891b2);
    }
    
    /* Responsive Design */
    @media (max-width: 1280px) {
      .text-8xl { font-size: 4.5rem; }
      .text-7xl { font-size: 4rem; }
      .text-6xl { font-size: 3.5rem; }
      .text-5xl { font-size: 3rem; }
    }
    
    @media (max-width: 1024px) {
      .text-8xl { font-size: 4rem; }
      .text-7xl { font-size: 3.5rem; }
      .text-6xl { font-size: 3rem; }
      .text-5xl { font-size: 2.5rem; }
    }
    
    @media (max-width: 768px) {
      .text-8xl { font-size: 3.5rem; }
      .text-7xl { font-size: 3rem; }
      .text-6xl { font-size: 2.5rem; }
      .text-5xl { font-size: 2rem; }
      .about-card {
        margin-bottom: 1.5rem;
      }
    }
    
    @media (max-width: 640px) {
      .text-8xl { font-size: 2.75rem; }
      .text-7xl { font-size: 2.5rem; }
      .text-6xl { font-size: 2rem; }
      .text-5xl { font-size: 1.75rem; }
      .grid-cols-2 {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HeroComponent implements OnInit, AfterViewInit {
  private taglines = [
    'Crafting Code with Creativity!',
    'Building the Future, One Line at a Time!',
    'Turning Ideas into Reality!'
  ];
  private currentTaglineIndex = 0;

  ngOnInit() {
    // Load cartoony font
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    // Rotate taglines
    setInterval(() => {
      this.currentTaglineIndex = (this.currentTaglineIndex + 1) % this.taglines.length;
      const taglineElement = document.querySelector('.tagline');
      if (taglineElement) {
        taglineElement.textContent = this.taglines[this.currentTaglineIndex];
      }
    }, 5000);
  }

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
    this.initializeOrbInteractivity();
    this.initializeParallax();
  }

  scrollToProjects() {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/files/Hazem_Azizi_CV.pdf';
    link.download = 'Hazem_Azizi_CV.pdf';
    link.click();
  }

  private initializeIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideUp');
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
      }
    );

    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card) => observer.observe(card));
  }

  private initializeParallax() {
    const layers = document.querySelectorAll('.parallax-layer');
    document.addEventListener('mousemove', (e) => {
      layers.forEach((layer) => {
        const depth = parseFloat(layer.getAttribute('data-depth') || '0');
        const moveX = (e.clientX - window.innerWidth / 2) * depth * 0.05;
        const moveY = (e.clientY - window.innerHeight / 2) * depth * 0.05;
        (layer as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  }

  @HostListener('document:mousemove', ['$event'])
  private initializeOrbInteractivity(event?: MouseEvent) {
    if (!event) return;
    const orbs = document.querySelectorAll('.orb');
    orbs.forEach((orb) => {
      const orbElement = orb as HTMLElement;
      const rect = orbElement.getBoundingClientRect();
      const orbX = rect.left + rect.width / 2;
      const orbY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const distance = Math.sqrt(Math.pow(mouseX - orbX, 2) + Math.pow(mouseY - orbY, 2));
      if (distance < 300) {
        const angle = Math.atan2(mouseY - orbY, mouseX - orbX);
        const moveX = Math.cos(angle) * 20;
        const moveY = Math.sin(angle) * 20;
        orbElement.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.3)`;
        orbElement.style.filter = 'brightness(1.3)';
      } else {
        orbElement.style.transform = 'translate(0, 0) scale(1)';
        orbElement.style.filter = 'brightness(1)';
      }
    });
  }
}