// src/app/components/about/about.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <section id="about" class="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
            <span class="text-slate-300 text-sm font-medium tracking-wide">Get to Know Me</span>
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>

          <!-- Main heading with advanced typography -->
          <h1 class="relative mb-8">
            <span class="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent animate-gradient tracking-tight">
              About Me
            </span>
            <span class="block text-2xl md:text-3xl lg:text-4xl font-light text-blue-400/80 tracking-widest animate-slideUp animation-delay-500">
              Innovator & Problem Solver
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
            Passionate about crafting innovative solutions through code, I blend academic excellence with real-world expertise to build impactful applications.
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="grid lg:grid-cols-3 gap-12 mb-16">
          <!-- Professional Journey Card -->
          <div class="lg:col-span-2">
            <div class="about-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp" style="animation-delay: 0.2s;">
              <div class="p-8">
                <div class="flex items-start gap-6">
                  <div class="flex-shrink-0">
                    <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="m22 21-3-3m0 0a5 5 0 1 0-7-7 5 5 0 0 0 7 7z"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-3xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                      Professional Journey
                    </h3>
                    <p class="text-slate-300 leading-relaxed text-lg mb-6">
                      As a Computer Engineering student, I specialize in developing innovative web applications and enterprise solutions. My journey merges rigorous academic training with hands-on project experience, focusing on delivering scalable and user-centric software that solves real-world challenges.
                    </p>
                    <div class="flex flex-wrap gap-2">
                      <span class="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm">Student Developer</span>
                      <span class="px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 rounded-full text-cyan-300 text-sm">Problem Solver</span>
                      <span class="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm">Innovation Focused</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Animated border glow -->
              <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>

          <!-- Quick Stats Card -->
          <div class="space-y-6">
            <div class="about-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp" style="animation-delay: 0.4s;">
              <div class="p-6 text-center">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                  </svg>
                </div>
                <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">2+</div>
                <div class="text-slate-400 text-sm font-medium">Years of Experience</div>
              </div>
              <!-- Animated border glow -->
              <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>

            <div class="about-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp" style="animation-delay: 0.6s;">
              <div class="p-6 text-center">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                </div>
                <div class="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">10+</div>
                <div class="text-slate-400 text-sm font-medium">Projects Completed</div>
              </div>
              <!-- Animated border glow -->
              <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>
        </div>

        <!-- Technical Focus and Core Values Section -->
        <div class="grid xl:grid-cols-2 gap-12 mb-16">
          <!-- Technical Focus Card -->
          <div class="about-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp" style="animation-delay: 0.8s;">
            <div class="p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    Technical Focus
                  </h3>
                  <p class="text-slate-300 leading-relaxed text-lg mb-6">
                    I specialize in full-stack development, leveraging technologies like Angular, Spring Boot, and PHP to create scalable, user-friendly applications with robust backend architectures and seamless frontend experiences.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-slate-300">Full-Stack Development</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-slate-300">Modern Web Technologies</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-slate-300">Enterprise Solutions</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Animated border glow -->
            <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>

          <!-- Core Values Card -->
          <div class="about-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp" style="animation-delay: 1s;">
            <div class="p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0">
                  <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                </div>
                <div class="flex-1">
                  <h3 class="text-3xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                    Core Values
                  </h3>
                  <p class="text-slate-300 leading-relaxed text-lg mb-6">
                    I am committed to writing clean, maintainable code and creating impactful solutions. My passion for continuous learning and adapting to new technologies fuels my drive for excellence in software development.
                  </p>
                  <div class="space-y-3">
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-slate-300">Clean Code Philosophy</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span class="text-slate-300">Continuous Learning</span>
                    </div>
                    <div class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span class="text-slate-300">Problem-First Thinking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Animated border glow -->
            <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>

        <!-- Technology Stack -->
        <div class="about-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp" style="animation-delay: 1.2s;">
          <div class="p-8">
            <div class="text-center mb-8">
              <h3 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technology Stack
              </h3>
              <p class="text-slate-400 text-lg">Technologies I leverage to bring ideas to life</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
              <!-- Frontend Technologies -->
              <div class="group text-center animate-slideUp" style="animation-delay: 1.4s;">
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-400/30 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                  </svg>
                </div>
                <div class="text-sm text-slate-300 font-medium">Angular</div>
              </div>

              <div class="group text-center animate-slideUp" style="animation-delay: 1.5s;">
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.788-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                  </svg>
                </div>
                <div class="text-sm text-slate-300 font-medium">React</div>
              </div>

              <div class="group text-center animate-slideUp" style="animation-delay: 1.6s;">
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-400/30 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c6.628 0 12 5.373 12 12 0 5.623-3.87 10.328-9.092 11.63C12.042 23.642 10.791 24 9.438 24c-4.337 0-7.85-3.513-7.85-7.85 0-1.292.312-2.511.863-3.591C.668 10.984 0 9.075 0 7.019 0 3.14 3.14 0 7.019 0H12z"/>
                  </svg>
                </div>
                <div class="text-sm text-slate-300 font-medium">Node.js</div>
              </div>

              <div class="group text-center animate-slideUp" style="animation-delay: 1.7s;">
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-green-600/20 to-green-700/20 border border-green-500/30 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.64 13.042c.827-.077 1.36-.812 1.36-1.671 0-.86-.533-1.594-1.36-1.671L12 9.581 0.36 9.7c-.827.077-1.36.811-1.36 1.671 0 .859.533 1.594 1.36 1.671L12 13.161l11.64.119z"/>
                  </svg>
                </div>
                <div class="text-sm text-slate-300 font-medium">Spring Boot</div>
              </div>

              <div class="group text-center animate-slideUp" style="animation-delay: 1.8s;">
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-blue-600/20 to-blue-700/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c6.628 0 12 5.373 12 12 0 5.623-3.87 10.328-9.092 11.63C12.042 23.642 10.791 24 9.438 24c-4.337 0-7.85-3.513-7.85-7.85 0-1.292.312-2.511.863-3.591C.668 10.984 0 9.075 0 7.019 0 3.14 3.14 0 7.019 0H12z"/>
                  </svg>
                </div>
                <div class="text-sm text-slate-300 font-medium">PHP</div>
              </div>

              <div class="group text-center animate-slideUp" style="animation-delay: 1.9s;">
                <div class="w-16 h-16 mx-auto bg-gradient-to-br from-orange-500/20 to-orange-600/20 border border-orange-400/30 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c6.628 0 12 5.441.441 0 0 5.641 3.841-0.328-0.092.10C12.042.441 10.891.4 9.438.441-4.337-.513-.0-3-5.851-.01.312-2.511.863-3.631C.668.984 0 9.075 0 7.019. 0 3.14 3.14-0 7.019-Hz"/>
                  </svg>
                </div>
                <div class="text-sm text-slate-300 font-medium">MySQL</div>
              </div>
            </div>
          </div>
          <!-- Animated border glow -->
          <div class="about-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        </div>

      </div>
    </section>
  `,
  styles: [`
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
      
      .about-card {
        margin-bottom: 2rem;
      }
    }
  `]
})
export class AboutComponent implements OnInit, AfterViewInit {
  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
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
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card) => observer.observe(card));
  }
}
function translate(arg0: number, px: any, arg2: number, px1: any) {
  throw new Error('Function not implemented.');
}

