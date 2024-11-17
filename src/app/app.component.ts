import { Component, ElementRef, HostBinding } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BanerComponent } from './baner/baner.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ResponsiveDirective } from './responsive.directive';
import { BrowserModule } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    BanerComponent,
    ContactComponent,
    EducationComponent,
    PersonalInformationComponent,
    ProjectsComponent,
    SkillsComponent,
    WorkExperienceComponent,
    ResponsiveDirective,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
  // @HostBinding('class.pc') isPcMode = false;

  // constructor(private elRef: ElementRef, private breakPointObserver: BreakpointObserver) {
  //   this.breakPointObserver.observe([Breakpoints.HandsetLandscape, Breakpoints.WebLandscape, Breakpoints.Large])
  //     .subscribe({
  //       next: (result) => {
  //         console.log(Object.keys(result.breakpoints))
  //         for (let breakpoint of Object.keys(result.breakpoints)) {
  //           if (result.breakpoints[breakpoint]) {
  //             if (breakpoint === Breakpoints.WebLandscape || breakpoint === Breakpoints.Large) {
  //               this.isPcMode = true
  //             }
  //             if (breakpoint === Breakpoints.HandsetLandscape) {
  //               this.isPcMode = false;
  //             }
  //           }
  //         }
  //       }
  //     })
  // }
}
