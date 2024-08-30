import { Servicio } from "../../../models/Servicio";

export const servicios: Servicio[] = [
    {
        id: 1,
        nombre: 'Desarrollo Web',
        subservicios: [
            {
                id: 1,
                nombre: 'Desarrollo de Sitios Web',
                lottie: 'lotties/servicios/web-landing.json',
            },
            {
                id: 2,
                nombre: 'Desarrollo de Tiendas Online',
                lottie: 'lotties/servicios/web-mobile.json',
            },
            {
                id: 3,
                nombre: 'Desarrollo de APIs en la nube (Cloud)',
                lottie: 'lotties/servicios/web-cloud.json',
            },
            {
                id: 4,
                nombre: 'Desarrollo de Sistemas de Seguridad',
                lottie: 'lotties/servicios/web-security.json',
            },
            {
                id: 5,
                nombre: 'Integración de Inteligencia Artificial',
                lottie: 'lotties/servicios/web-ia.json',
            },
        ]
    },
    {
        id: 2,
        nombre: 'Desarrollo Móvil',
        subservicios: [
            {
                id: 1,
                nombre: 'Aplicaciones Comerciales',
                lottie: 'lotties/servicios/mobile-shop.json',
            },
            {
                id: 2,
                nombre: 'Aplicaciones Administrativa',
                lottie: 'lotties/servicios/mobile-data.json',
            },
            {
                id: 3,
                nombre: 'Aplicaciones de Entretenimiento',
                lottie: 'lotties/servicios/mobile-game.json',
            },
            {
                id: 4,
                nombre: 'Paginas hechas a la medida',
                lottie: 'lotties/servicios/mobile-dev.json',
            },
            {
                id: 4,
                nombre: 'Integración de Inteligencia Artificial',
                lottie: 'lotties/servicios/ia.json',
            },
        ]
    },
    {
        id: 3,
        nombre: 'Marketing Digital',
        subservicios: [
            {
                id: 1,
                nombre: 'Analítica Web',
                lottie: 'lotties/servicios/marketing-analisis.json',
            },
            {
                id: 2,
                nombre: 'Campañas de Marketing',
                lottie: 'lotties/servicios/marketing-campana.json',
            },
            {
                id: 3,
                nombre: 'Optimización de Marketing',
                lottie: 'lotties/servicios/marketing-optimizacion.json',
            },
            {
                id: 4,
                nombre: 'Manejo de Redes Sociales',
                lottie: 'lotties/servicios/marketing-social.json',
            },
            {
                id: 5,
                nombre: 'Conceptualización de la Empresa',
                lottie: 'lotties/servicios/marketing-startup.json',
            },
            {
                id: 6,
                nombre: 'Envío Mensajes Personalizados',
                lottie: 'lotties/servicios/marketing-messages.json',
            },
            {
                id: 7,
                nombre: 'SEO y SEM',
                lottie: 'lotties/servicios/marketing-seo.json',
            },
            {
                id: 8,
                nombre: 'Integración de Inteligencia Artificial',
                lottie: 'lotties/servicios/ia.json',
            }
        ]
    },
    {
        id: 4,
        nombre: 'Diseño UI/UX (Interfaz de Usuario)',
        subservicios: [
            {
                id: 1,
                nombre: 'Optimizacion de diseño de Aplicaciones (Web y Móvil)',
                lottie: 'lotties/servicios/diseno.json',
            },
            {
                id: 2,
                nombre: 'Mejora de Experiencia de Usuario',
                lottie: 'lotties/servicios/diseno.json',
            },
            {
                id: 3,
                nombre: 'Diseño responsivo',
                lottie: 'lotties/servicios/diseno.json',
            },
            {
                id: 4,
                nombre: 'Tendencias de Diseño',
                lottie: 'lotties/servicios/diseno.json',
            },
            {
                id: 5,
                nombre: 'Animaciones e Interacciones',
                lottie: 'lotties/servicios/diseno.json',
            },
            {
                id: 6,
                nombre: 'Integración de Inteligencia Artificial',
                lottie: 'lotties/servicios/diseno.json',
            }
        ]
    },
    {
        id: 5,
        nombre: 'Soporte Técnico',
        subservicios: [
            {
                id: 1,
                nombre: 'Soporte 24/7',
                lottie: 'lotties/servicios/2.json',
            },
            {
                id: 2,
                nombre: 'Soporte a Usuarios y Clientes',
                lottie: 'lotties/servicios/4.json',
            },
            {
                id: 3,
                nombre: 'Seguimiento y solución de errores en la aplicación',
                lottie: 'lotties/servicios/2.json',
            },
            {
                id: 4,
                nombre: 'Integración con redes sociales',
                lottie: 'lotties/servicios/4.json',
            },
            {
                id: 5,
                nombre: 'Chatbots (Asistentes virtuales)',
                lottie: 'lotties/servicios/2.json',
            },
            {
                id: 6,
                nombre: 'Soporte a Dispositivos',
                lottie: 'lotties/servicios/4.json',
            }
        ]
    }
];