import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { Calendar, Mail, Send } from 'lucide-react';

const data: Data = {
  name: 'Joaquín Martínez',
  lastUpdatedAt: new Date(),
  status: {
    color: 'active',
    label: 'Disponible',
  },
  location: 'San Justo, Santa Fe, ARG',
  bio: 'Desarrollador',
  summary:
    'Mi nombre es Joaquín Martínez y soy un apasionado por crear soluciones eficientes, con habilidades en desarrollo front-end y back-end. Enfocado en el aprendizaje continuo, la resolución de problemas, y la mejora del rendimiento en cada proyecto. Comprometido con la calidad del código y el trabajo en equipo.',
  avatarUrl: getAssetPath() + '/locale/es/profile.jpg',
  skills: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Node.Js', 'Laravel', 'PHP', 'Git'],
  education: [
    {
      school: 'ISP Nº20 "Sdor Nestor J.Zamaro"',
      degree: `Tecnico Superior en Desarrollo de Softaware`,
      start: '2020',
      end: '2023',
    },
  ],
  work: [
    {
      company: 'brunobeltran.com.ar',
      link: 'https://www.brunobeltran.com.ar/',
      badges: ['Astro', 'Tailwind CSS', 'Git'],
      title: 'Pagina web estatica',
      start: '',
      end: '',
      description:
        'Se tomó la decisión de usar Astro y Tailwind CSS para obtener la flexibilidad y rapidez que proporcionan estas tecnologías en contraste con otras (WordPress). Con esto se lograron muy buenos resultados en https://pagespeed.web.dev/ \n(99 Rendimiento, 91 Accesibilidad, 99 Prácticas Recomendadas y 99 SEO).\n\n• Compra de dominio en nic.ar. \n• Desarrollo de la página. \n• Instalación de Ubuntu 20.04 en VPS junto con Coolify(mediante terminal) para el despliegue de la página.',
    },
    {
      company: 'Panel administrador y apps moviles',
      link: '',
      badges: ['Laravel/PHP', 'Flutter', 'MySql', 'Git'],
      title: 'Implementación de nuevas características',
      start: '',
      end: '',
      description: `Un proyecto existente constaba de un panel administrador y una API desarrollados en Laravel, junto con dos aplicaciones móviles: una para clientes y otra para comercios, desarrolladas en Flutter, utilizando la pasarela de pagos de MercadoPago y una base de datos compartida en MySQL. El funcionamiento de este proyecto era similar a plataformas como Rappi o PedidosYa: cuando un cliente realizaba una compra en un comercio y efectuaba el pago, el dinero se transfería a una única cuenta de MercadoPago (la del administrador). Los comercios debían solicitar al administrador retiros de sus ventas, y este realizaba manualmente las transferencias a cada comercio que lo solicitaba.\n\n Con esta premisa, se me contrató para modificar la forma en que el proyecto gestionaba los cobros. El requerimiento consistía en que, al realizar una compra, el pago se dividiera automáticamente entre la comisión del administrador y las ganancias del comercio. Para lograr esto, ya que el proyecto utilizaba la pasarela de pagos de MercadoPago, se implementó una solución que ellos mismos ofrecen, conocida como "Split de pagos", que cuenta con escasa documentación.\n\n •Se modificó la aplicación de los comercios para integrar el proceso de autorización OAuth (requerido por MercadoLibre para procesar este tipo de pagos). \n•Se crearon dos endpoints en la API: uno para guardar encriptados los tokens obtenidos de los comercios al realizar el OAuth, y otro para verificar periódicamente si el comercio poseía los tokens de autorización, permitiendo o no la realización de ventas. \n•Se modificó el cURL existente que realizaba el POST a MercadoPago, de modo que ahora dividiera los pagos como se requería. \n•Se realizaron modificaciones adicionales en el panel administrativo para mostrar qué comercios estaban habilitados para realizar ventas.`,
    },
    {
      company: 'Aplicación para Android',
      link: 'https://play.google.com/store/apps/details?id=com.whiterabbit.small_notes',
      badges: ['React Native EXPO'],
      title: 'App de notas',
      start: '',
      end: '',
      description:
        'Desarrollo sencillo para adquirir experiencia en el uso y depliegue con la Android Developers Console.',
    },
  ],
  contacts: [
    {
      label: 'joam177@live.com',
      href: 'mailto:joam177@live.com',
      icon: Mail,
      toolbar: true,
    },
  ],
  projects: [
    {
      title: 'EcoTrack',
      techStack: [
        'Side Project',
        'JavaScript',
        'React',
        'Node.js',
        'MongoDB',
        'REST API',
      ],
      description:
        'An environmental impact tracking app for individuals and small businesses',
      link: {
        label: 'ecotrack.app',
        href: 'https://wmda.info',
      },
    },
    {
      title: 'CodeCollab',
      techStack: ['Side Project', 'Python', 'Flask', 'WebSocket', 'Docker'],
      description:
        'A real-time collaborative coding platform for remote pair programming',
      link: {
        label: 'codecollab.io',
        href: 'https://wmda.info',
      },
    },
  ],
  links: [
    {
      label: 'XXX',
      href: 'https://twitter.com/WMDA_office',
      icon: SiGithub,
    },
    {
      label: 'XXX',
      href: 'https://twitter.com/WMDA_office',
      icon: SiX,
    },
  ],
};

export default data;
