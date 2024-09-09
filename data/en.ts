import { getAssetPath } from '@/app/lib/utils';
import { Data } from '@/types/data';
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { Calendar, Mail, Send } from 'lucide-react';

const data: Data = {
  name: 'Joaquín Martínez',
  lastUpdatedAt: new Date(),
  status: {
    color: 'active',
    label: 'Available',
  },
  location: 'San Justo, Santa Fe, ARG',
  bio: 'Developer',
  summary:
    'My name is Joaquin Martinez and Im a passionate about creating efficient and scalable solutions, with skills in both front-end and back-end development. Focused on continuous learning, solving complex problems, and improving performance in every project. Committed to code quality and teamwork.',
  avatarUrl: getAssetPath() + '/locale/es/profile.jpg',
  skills: ['Next.js', 'Tailwind CSS', 'JavaScript', 'Node.Js', 'Laravel', 'PHP', 'Git'],
  education: [
    {
      school: 'ISP Nº20 "Sdor Nestor J.Zamaro"',
      degree: `Advanced Technician in Software Development`,
      start: '2020',
      end: '2023',
    },
  ],
  work: [
    {
      company: 'brunobeltran.com.ar',
      link: 'https://www.brunobeltran.com.ar/',
      badges: ['Astro', 'Tailwind CSS', 'Git'],
      title: 'Static web site',
      start: '',
      end: '',
      description:
        'The decision was made to use Astro and Tailwind CSS to achieve the flexibility and speed provided by these technologies in contrast to others (WordPress). This resulted in very good scores on https://pagespeed.web.dev/ \n(99 Performance, 91 Accessibility, 99 Best Practices, and 99 SEO).\n\n• Domain purchase at nic.ar. \n• Website development. \n• Installation of Ubuntu 20.04 on VPS along with Coolify (via terminal) for the deployment of the website.',
    },
    {
      company: 'Admin panel and mobile apps',
      link: '',
      badges: ['Laravel/PHP', 'Flutter', 'MySql', 'Git'],
      title: 'Implementación de nuevas características',
      start: '',
      end: '',
      description: `An existing project consisted of an admin panel and an API developed in Laravel, along with two mobile applications: one for customers and another for merchants, developed in Flutter, using the MercadoPago payment gateway and a shared MySQL database. The operation of this project was similar to platforms like Rappi or PedidosYa: when a customer made a purchase at a merchant and completed the payment, the money was transferred to a single MercadoPago account (the administrator's). Merchants had to request withdrawals from the administrator for their sales, and the administrator manually transferred the funds to each merchant that requested a withdrawal.\n\n With this premise, I was hired to modify the way the project handled payments. The requirement was that, when a purchase was made, the payment would be automatically split between the administrator's commission and the merchant's earnings. To achieve this, since the project used the MercadoPago payment gateway, a solution they offer, known as "Split Payments," which has limited documentation, was implemented.\n\n • The merchants' application was modified to integrate the OAuth authorization process (required by MercadoLibre to process this type of payment). \n• Two endpoints were created in the API: one to store encrypted tokens obtained from merchants during OAuth, and another to periodically check if the merchant had authorization tokens, thus allowing or not allowing sales. \n• The existing cURL that performed POST requests to MercadoPago was modified to split payments as required. \n• Additional modifications were made to the admin panel to show which merchants were enabled to make sales.`,
    },
    {
      company: 'Android aplication',
      link: 'https://play.google.com/store/apps/details?id=com.whiterabbit.small_notes',
      badges: ['React Native EXPO'],
      title: 'Notes app',
      start: '',
      end: '',
      description:
        'Simple development to gain experience in using and deploying with the Android Developers Console.',
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
