import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "inicio",
        loadComponent: () => import('./pages/inicio/inicio.component'),
        title: "AP&P Inicio"
    },
    {
        path: "nosotros",
        loadComponent: () => import('./pages/nosotros/nosotros.component'),
        title: "AP&P Nosotros"
    },
    {
        path: "servicios",
        loadComponent: () => import('./pages/inicio/nues-adn/nues-adn.component'),
        title: "AP&P Nuestro ADN"
    },
    {
        path: "proyectos",
        loadComponent: () => import('./pages/inicio/proyectos/proyectos.component'),
        title: "AP&P Proyectos"
    },
    {
        path: "equipo",
        loadComponent: () => import('./pages/inicio/miembros/miembros.component'),
        title: "AP&P Equipo de trabajo"
    },
    {
        path: "contacto",
        loadComponent: () => import('./pages/inicio/contacto/contacto.component'),
        title: "AP&P Contacto"
    },
    {
        path: "aviso-privacidad",
        loadComponent: () => import('./pages/aviso-privacidad/aviso-privacidad.component'),
        title: "AP&P Aviso de Privacidad"
    },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: "inicio",
    },
];
