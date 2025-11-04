export const messages = {
  de: {
    "site.title": " – Der Fechtroboter",
    "nav.home": "Startseite",
    "nav.team": "Team",
    "nav.contact": "Kontakt",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "settings.title": "Sprache",
    "settings.de": "Deutsch",
    "settings.en": "English",

    // Home
    "home.idea.h2": "Projektidee",
    "home.idea.p":
      "Botépée ist ein innovativer Fechttrainingsroboter, der speziell für realistische Übungsszenarien im Fechtsport entwickelt wird. Der Roboter ist mit einem beweglichen Arm und Bein ausgestattet, trägt echte Fechtausrüstung und kann über eine Fernbedienung gesteuert werden.",
    "home.why.h2": "Warum Botépée?",
    "home.why.p":
      "Im Fechtsport fehlen dynamische Trainingsgeräte. Bestehende Methoden (z. B. mit Polstern) erlauben keine realistische Bewegung. Botépée simuliert echte Fechtaktionen wie Angriffe, Paraden und Ausfälle.",
    "home.goals.h2": "Ziele des Projekts",
    "home.goals.li1": "Entwicklung eines funktionsfähigen Fechtroboters",
    "home.goals.li2": "Steuerung über Mikrocontroller per Fernbedienung",
    "home.goals.li3": "Beweglicher Arm und Bein mit Servomotoren",
    "home.goals.li4": "Robuste Ausstattung mit echter Fechtausrüstung",
    "home.goals.li5": "Professioneller Webauftritt und Marketing",

    // Team
    "team.h2.team": "Projektteam",
    "team.h2.supervision": "Betreuung",

    // Kontakt
    "contact.h2": "Kontakt",
    "contact.p": "Bei Fragen oder Interesse am Projekt können Sie uns gerne per E-Mail kontaktieren:",
    "contact.p2":"Wir sind auch telefonisch erreichbar unter:",

    // Blog
    "blog.h2": "Blog",
    "blog.subtitle": "Neuigkeiten aus dem Botépée-Projekt.",
    "blog.empty": "Noch keine Beiträge vorhanden.",
    "blog.back": "← Zurück zur Übersicht",

    // FAQ
    "faq.h2": "FAQ – Häufige Fragen",
    "faq.intro": "Hier beantworten wir die häufigsten Fragen rund um Botépée.",
    "faq.group.general": "Allgemein",
    "faq.group.tech": "Technik",
    "faq.group.web": "Website & Medien",
    "faq.group.sponsor": "Sponsoring",
    "faq.notfound.h2": "Beitrag nicht gefunden",
    "faq.notfound.p": "Der angeforderte Beitrag existiert nicht (Slug falsch oder Datei fehlt).",
  },
  en: {
    "site.title": "Botépée – The Fencing Robot",
    "nav.home": "Home",
    "nav.team": "Team",
    "nav.contact": "Contact",
    "nav.blog": "Blog",
    "nav.faq": "FAQ",
    "settings.title": "Language",
    "settings.de": "German",
    "settings.en": "English",

    // Home
    "home.idea.h2": "Project Idea",
    "home.idea.p":
      "Botépée is an innovative fencing training robot designed for realistic practice scenarios. The robot features a movable arm and leg, wears real fencing gear, and can be controlled via remote.",
    "home.why.h2": "Why Botépée?",
    "home.why.p":
      "Dynamic training devices are missing in fencing. Existing methods (e.g., pads) do not allow realistic movement. Botépée simulates real fencing actions like attacks, parries, and lunges.",
    "home.goals.h2": "Project Goals",
    "home.goals.li1": "Develop a functional fencing robot",
    "home.goals.li2": "Control via microcontroller and remote",
    "home.goals.li3": "Movable arm and leg using servos",
    "home.goals.li4": "Robust setup with real fencing equipment",
    "home.goals.li5": "Professional website and marketing",

    // Team
    "team.h2.team": "Project Team",
    "team.h2.supervision": "Supervision",

    // Kontakt
    "contact.h2": "Contact",
    "contact.p": "If you have questions or are interested in the project, feel free to email us:",
    "contact.p2": "We are also available via telephone at:",

    // Blog
    "blog.h2": "Blog",
    "blog.subtitle": "News from the Botépée project.",
    "blog.empty": "No posts yet.",
    "blog.back": "← Back to overview",

    // FAQ
    "faq.h2": "FAQ – Frequently Asked Questions",
    "faq.intro": "Here we answer the most common questions about Botépée.",
    "faq.group.general": "General",
    "faq.group.tech": "Technology",
    "faq.group.web": "Website & Media",
    "faq.group.sponsor": "Sponsoring",
    "faq.notfound.h2": "Post not found",
    "faq.notfound.p": "The requested post does not exist (wrong slug or missing file).",
  },
};

export function t(lang, key) {
  const dict = messages[lang] || messages.de;
  return dict[key] ?? key;
}