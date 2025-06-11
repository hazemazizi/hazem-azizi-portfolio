import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LucideAngularModule, ChevronDown, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Calendar, User, Award, Briefcase, Menu, X, Codepen, FileCode, Contact } from 'lucide-angular';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component.ts/header.component.ts.component';
import { HeroComponent } from './components/hero/hero.component.ts/hero.component.ts.component';
import { AboutComponent } from './components/about/about.component.ts/about.component.ts.component';
import { ProjectsComponent } from './components/projects/projects.component.ts/projects.component.ts.component';
import { SkillsComponent } from './components/skills/skills.component.ts/skills.component.ts.component';
import { ContactComponent } from './components/contact/contact.component.ts/contact.component.ts.component';
import { FooterComponent } from './components/footer/footer.component.ts/footer.component.ts.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LucideAngularModule.pick({
      ChevronDown,
      ExternalLink,
      Github,
      Linkedin,
      Mail,
      Phone,
      MapPin,
      Code,
      Database,
      Globe,
      Calendar,
      User,
      Award,
      Briefcase,
      Menu,
      X,
      Contact,
      Codepen,
      FileCode

    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }