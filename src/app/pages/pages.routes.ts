import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { AddThirdPartySoftwareComponent } from './add-third-party-software/add-third-party-software.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter Page',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Starter Page' },
      ],
    },
  },
  {
    path: 'add-third-party-software',
    component: AddThirdPartySoftwareComponent,
    data: {
      title: 'Add Third-Party Software',
      urls: [
        { title: 'Dashboard', url: '/dashboards/dashboard1' },
        { title: 'Configuration', url: '/pages' },
        { title: 'Add Third-Party Software' },
      ],
    },
  },
];
