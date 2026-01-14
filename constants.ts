
import { Course } from './types';

export const COLORS = {
  course: '#6a041a',
  checkpoint: '#9a0526',
  accent: '#ab022f',
};

export const COURSES: Course[] = [
  {
    id: 1,
    title: "Informática Aplicada (Redes)",
    officialName: "Tecsup – Introducción a la Ciberseguridad",
    links: [
      {
        name: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/es/courses/introduction-to-cybersecurity?courseLang=es-XL&instance_id=0d50742d-45ba-4a91-87b7-3a10282bcd2c"
      }
    ],
    description: "Fundamentos de amenazas, ataques, defensa y principios de seguridad informática.",
    certification: "Cisco Networking Academy – Introducción a la Ciberseguridad"
  },
  {
    id: 2,
    title: "Programación básica para redes",
    officialName: "Tecsup – Fundamentos de Python 1",
    links: [
      {
        name: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/courses/python-essentials-1?courseLang=es-XL&instance_id=8e897e8c-3cc4-43be-8440-485e0e356a51"
      }
    ],
    description: "Sintaxis básica de Python, estructuras de control, funciones y manejo de archivos.",
    certification: "Cisco Networking Academy – Python Essentials 1"
  },
  {
    id: 3,
    title: "Electrónica y Hardware de Computadoras",
    officialName: "Tecsup – Conceptos Básicos de Hardware de Computadora",
    links: [
      {
        name: "Ver curso en Cisco NetAcad",
        url: "https://www.netacad.com/es/courses/computer-hardware-basics?courseLang=es-XL&instance_id=bccb74b2-494d-4ded-9c09-259ae2429c18"
      }
    ],
    description: "Componentes internos de una PC, ensamblaje, mantenimiento y diagnóstico básico.",
    certification: "Cisco Networking Academy – Computer Hardware Basics"
  },
  {
    id: 4,
    title: "Implementación de Redes",
    officialName: "Paquete de Redes y Packet Tracer",
    links: [
      {
        name: "Ver curso: Conceptos Básicos de Redes",
        url: "https://www.netacad.com/es/courses/networking-basics?courseLang=es-XL&instance_id=33f06ed4-d7e7-427c-91f1-f8d5ff8d15cb"
      },
      {
        name: "Ver curso: Introducción a Cisco Packet Tracer",
        url: "https://www.netacad.com/courses/getting-started-cisco-packet-tracer?courseLang=es-XL&instance_id=4b05e405-c08a-4482-a8c7-cda3d7ca39c2"
      },
      {
        name: "Ver curso: Exploración de redes con Cisco Packet Tracer",
        url: "https://www.netacad.com/courses/exploring-networks-with-cisco-packet-tracer?courseLang=es-XL"
      }
    ],
    description: "Fundamentos de redes TCP/IP, topologías, direccionamiento IP y simulación avanzada con Packet Tracer.",
    certification: "Cisco Networking Academy – Networking Basics + Cisco Packet Tracer Essentials"
  }
];
