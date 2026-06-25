export const translations = {
  es: {
    navbar: {
      productos: 'Productos',
      nosotros: 'Nosotros',
      contacto: 'Contacto',
    },
    hero: {
      title: 'Construimos sistemas que transforman la manera en que las empresas operan',
      subtitle: 'Inteligencia artificial aplicada al mundo real.',
      cta: 'Conocé nuestros productos',
    },
    mision: {
      heading: 'Por qué',
      accent: 'existimos',
      body: 'Hay negocios que sobreviven y negocios que escalan. La diferencia no es el esfuerzo, sino la tecnología que tienen detrás. Construimos para achicar esa diferencia.',
    },
    productos: {
      heading: 'Nuestros productos',
      badge: 'Disponible ahora',
      desc: 'Chatbot de WhatsApp con IA + CRM para negocios de servicios. Agendamiento automático, seguimiento de clientes y reportes en tiempo real.',
      link: 'Conocer Wendly →',
    },
    fundador: {
      role: 'Founder & CEO — Symeia',
      bio: 'Analista de Sistemas, Programador y Experto en IA, recorrió mercados y observó de cerca cómo los negocios latinoamericanos crecen. Con esa visión fundó Symeia, apostando a que la inteligencia artificial puede ser el motor de la próxima generación de empresas de la región.',
      linkedin: 'Ver perfil en LinkedIn →',
      linkedinHref: 'https://www.linkedin.com/in/pablomperezaguilar/?locale=es',
    },
    contacto: {
      heading: 'Hablemos',
      body: 'Ya sea que quieras usar nuestros productos, explorar una alianza o conversar sobre inversión — estamos disponibles.',
      btn1: 'Soy inversor',
      btn1Subject: 'Inversión%20-%20Symeia',
      btn2: 'Quiero trabajar con Symeia',
      btn2Subject: 'Trabajo%20-%20Symeia',
    },
    footer: {
      contacto: 'Contacto',
      copy: '© 2026 Symeia. Todos los derechos reservados.',
    },
  },
  pt: {
    navbar: {
      productos: 'Produtos',
      nosotros: 'Sobre nós',
      contacto: 'Contato',
    },
    hero: {
      title: 'Construímos sistemas que transformam a forma como as empresas operam',
      subtitle: 'Inteligência artificial aplicada ao mundo real.',
      cta: 'Conheça nossos produtos',
    },
    mision: {
      heading: 'Por que',
      accent: 'existimos',
      body: 'Há negócios que sobrevivem e negócios que escalam. A diferença não é o esforço, mas a tecnologia por trás. Construímos para reduzir essa diferença.',
    },
    productos: {
      heading: 'Nossos produtos',
      badge: 'Disponível agora',
      desc: 'Chatbot de WhatsApp com IA + CRM para negócios de serviços. Agendamento automático, acompanhamento de clientes e relatórios em tempo real.',
      link: 'Conhecer Wendly →',
    },
    fundador: {
      role: 'Fundador & CEO — Symeia',
      bio: 'Analista de Sistemas, Programador e Especialista em IA, percorreu mercados e observou de perto como os negócios latino-americanos crescem. Com essa visão fundou a Symeia, apostando que a inteligência artificial pode ser o motor da próxima geração de empresas da região.',
      linkedin: 'Ver perfil no LinkedIn →',
      linkedinHref: 'https://www.linkedin.com/in/pablomperezaguilar/?locale=pt_BR',
    },
    contacto: {
      heading: 'Vamos conversar',
      body: 'Seja para usar nossos produtos, explorar uma parceria ou conversar sobre investimento — estamos disponíveis.',
      btn1: 'Sou investidor',
      btn1Subject: 'Investimento%20-%20Symeia',
      btn2: 'Quero trabalhar com a Symeia',
      btn2Subject: 'Trabalho%20-%20Symeia',
    },
    footer: {
      contacto: 'Contato',
      copy: '© 2026 Symeia. Todos os direitos reservados.',
    },
  },
}

export type Lang = keyof typeof translations
export type T = typeof translations.es
