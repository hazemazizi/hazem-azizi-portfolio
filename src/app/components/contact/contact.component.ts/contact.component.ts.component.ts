// src/app/components/contact/contact.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';

interface ContactMethod {
  title: string;
  subtitle: string;
  icon: string;
  link: string;
  bgColor: string;
  external: boolean;
}

interface ContactStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-contact',
  template: `
    <section id="contact" class="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
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
            <span class="text-slate-300 text-sm font-medium tracking-wide">Let's Connect & Collaborate</span>
            <div class="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
          </div>

          <!-- Main heading with advanced typography -->
          <h1 class="relative mb-8">
            <span class="block text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 bg-gradient-to-r from-slate-200 via-white to-slate-300 bg-clip-text text-transparent animate-gradient tracking-tight">
              Get In Touch
            </span>
            <span class="block text-2xl md:text-3xl lg:text-4xl font-light text-blue-400/80 tracking-widest animate-slideUp animation-delay-500">
              Start Your Project Today
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
            Ready to bring your ideas to life? Reach out to discuss your next project and let's create something extraordinary together.
          </p>
        </div>

        <!-- Contact Methods Grid -->
        <div class="grid md:grid-cols-3 xl:grid-cols-3 gap-12 mb-16">
          <a 
            *ngFor="let contact of contactMethods; let i = index"
            [href]="contact.link"
            [target]="contact.external ? '_blank' : '_self'"
            class="contact-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 text-center p-8 animate-slideUp"
            [style.animation-delay]="(i * 0.15) + 's'"
          >
            <!-- Contact Icon -->
            <div [class]="'w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ' + contact.bgColor + ' group-hover:scale-110 transition-transform duration-300'">
              <lucide-icon [name]="contact.icon" class="w-8 h-8 text-white"></lucide-icon>
            </div>
            
            <!-- Contact Info -->
            <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
              {{ contact.title }}
            </h3>
            <p class="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
              {{ contact.subtitle }}
            </p>

            <!-- Animated border glow -->
            <div class="contact-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </a>
        </div>

        <!-- Contact Form -->
        <div class="max-w-4xl mx-auto">
          <div class="contact-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 overflow-hidden transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp" style="animation-delay: 0.6s;">
            <!-- Form Header -->
            <div class="p-8 border-b border-slate-700/30">
              <div class="flex items-center gap-4 justify-center">
                <div class="w-12 h-12 rounded-2xl flex items-center justify-center bg-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <lucide-icon name="send" class="w-6 h-6 text-blue-400"></lucide-icon>
                </div>
                <div class="text-center">
                  <h3 class="text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Send a Message
                  </h3>
                  <p class="text-slate-400 text-sm">I'll get back to you within 24 hours</p>
                </div>
              </div>
            </div>

            <!-- Form Content -->
            <div class="p-8">
              <form (ngSubmit)="onSubmit()" class="space-y-6">
                <!-- Name Field -->
                <div class="form-group animate-slideUp" style="animation-delay: 0.8s;">
                  <label for="name" class="block text-sm font-medium text-slate-300 mb-2">
                    <lucide-icon name="user" class="w-4 h-4 inline mr-2"></lucide-icon>
                    Full Name
                  </label>
                  <div class="relative">
                    <input
                      id="name"
                      [(ngModel)]="formData.name"
                      name="name"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/20 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm placeholder-slate-500"
                      placeholder="Enter your full name"
                    >
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:to-cyan-500/5 transition-all duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>

                <!-- Contact Field -->
                <div class="form-group animate-slideUp" style="animation-delay: 1s;">
                  <label for="contact" class="block text-sm font-medium text-slate-300 mb-2">
                    <lucide-icon name="mail" class="w-4 h-4 inline mr-2"></lucide-icon>
                    Email or Phone
                  </label>
                  <div class="relative">
                    <input
                      id="contact"
                      [(ngModel)]="formData.contact"
                      name="contact"
                      type="text"
                      required
                      class="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/20 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm placeholder-slate-500"
                      placeholder="your.email@example.com or +1234567890"
                    >
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:to-cyan-500/5 transition-all duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>

                <!-- Message Field -->
                <div class="form-group animate-slideUp" style="animation-delay: 1.2s;">
                  <label for="description" class="block text-sm font-medium text-slate-300 mb-2">
                    <lucide-icon name="message-square" class="w-4 h-4 inline mr-2"></lucide-icon>
                    Project Description
                  </label>
                  <div class="relative">
                    <textarea
                      id="description"
                      [(ngModel)]="formData.description"
                      name="description"
                      required
                      rows="6"
                      class="w-full px-4 py-3 bg-slate-700/50 border border-blue-500/20 rounded-xl text-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 backdrop-blur-sm placeholder-slate-500 resize-none"
                      placeholder="Tell me about your project, goals, timeline, and how I can help you achieve success..."
                    ></textarea>
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-500/0 hover:from-blue-500/5 hover:to-cyan-500/5 transition-all duration-300 pointer-events-none rounded-xl"></div>
                  </div>
                </div>

                <!-- Submit Button -->
                <div class="text-center animate-slideUp" style="animation-delay: 1.4s;">
                  <button
                    type="submit"
                    class="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 overflow-hidden"
                  >
                    <!-- Button content -->
                    <lucide-icon name="send" class="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"></lucide-icon>
                    <span>Send Message</span>
                    <lucide-icon name="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"></lucide-icon>
                    
                    <!-- Animated shimmer effect -->
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </button>
                </div>
              </form>
            </div>

            <!-- Animated border glow -->
            <div class="contact-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>

        <!-- Contact Stats -->
        <div class="grid md:grid-cols-4 gap-12 mt-16">
          <div 
            *ngFor="let stat of contactStats; let i = index"
            class="stat-card group relative bg-gradient-to-br from-slate-800/30 via-slate-900/40 to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-slate-700/30 text-center p-6 transition-all duration-700 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/10 animate-slideUp"
            [style.animation-delay]="(1.6 + i * 0.15) + 's'"
          >
            <div class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              {{ stat.value }}
            </div>
            <div class="text-slate-400 text-sm font-medium">{{ stat.label }}</div>
            <!-- Animated border glow -->
            <div class="contact-glow absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
          </div>
        </div>

        <!-- Call to Action Section -->
        <div class="text-center mt-16">
          <div class="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-medium shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 cursor-pointer">
            <span>Let's Build Something Great</span>
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
    .contact-card, .stat-card {
      transform-style: preserve-3d;
    }
    
    .contact-card:hover, .stat-card:hover {
      transform: translateY(-8px) rotateX(2deg);
    }
    
    .contact-glow {
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
    
    /* Form Enhancements */
    .form-group input:focus,
    .form-group textarea:focus {
      box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.5), 0 10px 25px rgba(59, 130, 246, 0.1);
    }
    
    /* Advanced hover effects */
    .contact-card::before, .stat-card::before {
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
    
    .contact-card:hover::before, .stat-card:hover::before {
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
      
      .contact-card, .stat-card {
        margin-bottom: 2rem;
      }
      
      .grid-cols-3 {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
    
    @media (max-width: 640px) {
      .grid-cols-3 {
        grid-template-columns: repeat(1, minmax(0, 1fr));
      }
    }
  `]
})
export class ContactComponent implements OnInit, AfterViewInit {
  formData: { name: string; contact: string; description: string } = {
    name: '',
    contact: '',
    description: ''
  };

  contactMethods: ContactMethod[] = [
    {
      title: 'Email',
      subtitle: 'hazem.azizi@esprit.tn',
      icon: 'mail',
      link: 'mailto:hazem.azizi@esprit.tn',
      bgColor: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      external: false
    },
    {
      title: 'LinkedIn',
      subtitle: 'Professional Network',
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/azizi-hazem-60aa3825b/',
      bgColor: 'bg-gradient-to-r from-blue-600 to-blue-700',
      external: true
    },
    {
      title: 'GitHub',
      subtitle: 'GitHub Profile',
      icon: 'github',
      link: 'https://github.com/hazemazizi',
      bgColor: 'bg-gradient-to-r from-gray-700 to-gray-800',
      external: true
    },
    {
      title: 'CodePen',
      subtitle: 'Live Demos',
      icon: 'codepen',
      link: 'https://codepen.io/hazemazizi',
      bgColor: 'bg-gradient-to-r from-green-600 to-green-700',
      external: true
    },
    {
      title: 'Dev.to',
      subtitle: 'Tech Articles',
      icon: 'file-code',
      link: 'https://dev.to/hazemazizi',
      bgColor: 'bg-gradient-to-r from-purple-600 to-purple-700',
      external: true
    },
    {
      title: 'Discord',
      subtitle: 'Dungoin',
      icon: 'user',
      link: '#',
      bgColor: 'bg-gradient-to-r from-indigo-600 to-indigo-700',
      external: false
    }
  ];

  contactStats: ContactStat[] = [
    { value: '< 24h', label: 'Response Time' },
    { value: '100%', label: 'Reply Rate' },
    { value: '50+', label: 'Happy Clients' },
    { value: '24/7', label: 'Availability' }
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.initializeIntersectionObserver();
  }

  onSubmit() {
    const subject = encodeURIComponent('Contact Form Submission from Portfolio');
    const body = encodeURIComponent(
      `Name: ${this.formData.name}\n` +
      `Contact: ${this.formData.contact}\n` +
      `Message: ${this.formData.description}`
    );
    window.location.href = `mailto:hazem.azizi@esprit.tn?subject=${subject}&body=${body}`;

    // Reset form after submission
    this.formData = { name: '', contact: '', description: '' };
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

    const contactCards = document.querySelectorAll('.contact-card');
    const statCards = document.querySelectorAll('.stat-card');
    contactCards.forEach((card) => observer.observe(card));
    statCards.forEach((card) => observer.observe(card));
  }
}