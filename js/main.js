document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
    const modalClose = document.getElementById("modalClose");
    const portfolioButtons = document.querySelectorAll(".portfolio-btn");
    const contactForm = document.getElementById("contactForm");

    const projectsData = {
        1: {
            title: "Stratégie de contenu pour événements saisonniers",
            category: "Marketing digital",
            date: "2025",
            description: `
                <p>Projet axé sur la création et la planification de contenu promotionnel pour des événements saisonniers, notamment la Fête des Pères et la Saint-Jean-Baptiste.</p>
                <h4>Objectifs</h4>
                <ul>
                    <li>Créer du contenu visuel et textuel engageant pour les réseaux sociaux.</li>
                    <li>Adapter les publications aux temps forts commerciaux et au public cible.</li>
                    <li>Renforcer la visibilité de la marque lors de périodes promotionnelles.</li>
                </ul>
                <h4>Outils utilisés</h4>
                <p>Canva, Meta, Instagram, Facebook.</p>
            `
        },
             2: {
    title: "Capsule vidéo - L'évolution du commerce numérique sur les réseaux sociaux",
    category: "Réseaux sociaux",
    date: "2025",
       watchUrl: "https://youtu.be/cboKAqRs-Zw",
    description: `
        <p>Ce projet consiste en la création d'une capsule vidéo verticale portant sur l'évolution du commerce numérique sur les réseaux sociaux. L'objectif était de transformer un sujet actuel et riche en information en un contenu clair, structuré et engageant, adapté aux codes des plateformes sociales.</p>

        <h4>Objectif du projet</h4>
        <p>Présenter de manière concise et dynamique une tendance actuelle du marketing numérique, tout en démontrant une capacité à effectuer des recherches, à synthétiser l'information et à l'adapter à un format vidéo court.</p>

        <h4>Compétences démontrées</h4>
        <ul>
            <li>Recherche et sélection d'information pertinente</li>
            <li>Synthèse et vulgarisation d'un sujet marketing</li>
            <li>Création de contenu numérique adapté aux réseaux sociaux</li>
            <li>Montage vidéo et structuration d'un message dynamique</li>
        </ul>
    `
},
       3: {
            title: "Audit SEO du site web de la Pâtisserie Noisette & Chocolat",
            category: "SEO",
            date: "2025",
            description: `
                <p>Dans le cadre du stage, réalisation d'un audit technique du site web de l'entreprise à l'aide de Google Analytics et de Google Search Console, afin d'identifier les éléments nuisant à sa visibilité dans les moteurs de recherche et à l'expérience des visiteurs.</p>
 
                <h4>Constats par catégorie</h4>
                <div class="seo-chart">
                    <p class="seo-chart-title">Constats techniques identifiés (7 au total)</p>
                    <svg viewBox="0 0 480 186" role="img" aria-label="Graphique à barres horizontales des constats par catégorie : Référencement SEO 2, Réseaux sociaux 2, Accessibilité et mobile 2, Sécurité 1" preserveAspectRatio="xMinYMin meet" style="width:100%; height:auto; overflow:visible; display:block;">
                        <line x1="150" y1="14" x2="150" y2="172" stroke="#dccab4" stroke-width="1"/>
                        <text x="140" y="30" text-anchor="end" dominant-baseline="middle" font-size="13" fill="#675345">Référencement (SEO)</text>
                        <path d="M150,20 H366 Q370,20 370,24 V36 Q370,40 366,40 H150 Z" fill="#c96f4a"/>
                        <text x="378" y="30" dominant-baseline="middle" font-size="13" font-weight="600" fill="#33261d">2</text>
 
                        <text x="140" y="72" text-anchor="end" dominant-baseline="middle" font-size="13" fill="#675345">Réseaux sociaux</text>
                        <path d="M150,62 H366 Q370,62 370,66 V78 Q370,82 366,82 H150 Z" fill="#c96f4a"/>
                        <text x="378" y="72" dominant-baseline="middle" font-size="13" font-weight="600" fill="#33261d">2</text>
 
                        <text x="140" y="114" text-anchor="end" dominant-baseline="middle" font-size="13" fill="#675345">Accessibilité et mobile</text>
                        <path d="M150,104 H366 Q370,104 370,108 V120 Q370,124 366,124 H150 Z" fill="#c96f4a"/>
                        <text x="378" y="114" dominant-baseline="middle" font-size="13" font-weight="600" fill="#33261d">2</text>
 
                        <text x="140" y="156" text-anchor="end" dominant-baseline="middle" font-size="13" fill="#675345">Sécurité</text>
                        <path d="M150,146 H256 Q260,146 260,150 V162 Q260,166 256,166 H150 Z" fill="#c96f4a"/>
                        <text x="268" y="156" dominant-baseline="middle" font-size="13" font-weight="600" fill="#33261d">1</text>
                    </svg>
                    <p class="seo-chart-caption">Répartition des 7 constats relevés lors de l'audit, entre référencement, partages sociaux, accessibilité mobile et sécurité du domaine.</p>
                </div>
 
                <h4>Constats principaux</h4>
                <ul>
                    <li>Lien brisé (erreur 404) détecté sur une page de catégorie de produits.</li>
                    <li>Absence de méta description sur la page d'accueil, réduisant le taux de clic dans les résultats de recherche.</li>
                    <li>Image Open Graph sous-dimensionnée, limitant la qualité d'affichage lors des partages sur les réseaux sociaux.</li>
                    <li>Balises de partage incomplètes pour certaines plateformes sociales.</li>
                    <li>Politique DMARC du domaine non configurée, exposant le nom de domaine à un risque d'usurpation par courriel.</li>
                    <li>Zones tactiles trop rapprochées sur mobile, nuisant à la navigation.</li>
                    <li>Contraste insuffisant sur le bouton d'appel à l'action « Commander en ligne », sous les standards d'accessibilité web.</li>
                </ul>
 
                <h4>Recommandations formulées</h4>
                <ul>
                    <li>Corriger ou retirer le lien brisé.</li>
                    <li>Rédiger une méta description de 70 à 160 caractères intégrant les mots-clés prioritaires.</li>
                    <li>Agrandir l'image Open Graph au format recommandé et compléter les balises de partage manquantes.</li>
                    <li>Configurer une politique DMARC de quarantaine ou de rejet.</li>
                    <li>Agrandir et espacer les éléments cliquables pour une navigation mobile optimale.</li>
                    <li>Ajuster les couleurs du bouton pour respecter le ratio de contraste requis.</li>
                </ul>
 
                <h4>Compétences démontrées</h4>
                <p>Audit SEO technique, analyse de données web (Google Analytics, Search Console), rigueur d'observation, capacité à vulgariser des recommandations techniques pour une équipe non spécialisée.</p>
            `
        },
        4: {
            title: "Organisation d'événements promotionnels",
            category: "Événementiel",
            date: "2025",
            description: `
                <p>Participation à la préparation d'initiatives promotionnelles en lien avec l'image de marque et les objectifs commerciaux de l'entreprise.</p>
                <h4>Responsabilités</h4>
                <ul>
                    <li>Coordination avec différents fournisseurs.</li>
                    <li>Soutien logistique à la préparation d'événements.</li>
                    <li>Contribution à la mise en valeur des campagnes promotionnelles.</li>
                </ul>
                <h4>Compétences démontrées</h4>
                <p>Coordination, gestion de projet, communication, événementiel.</p>
            `
        },
        5: {
            title: "Analyse de tendances de contenu",
            category: "Analyse marketing",
            date: "2025",
            description: `
                <p>Observation et analyse des tendances afin d'adapter le contenu marketing à différents publics et contextes de diffusion.</p>
                <h4>Démarche</h4>
                <ul>
                    <li>Veille sur les contenus performants.</li>
                    <li>Analyse des approches utilisées par d'autres marques.</li>
                    <li>Réflexion sur l'adaptation du ton, du format et du message.</li>
                </ul>
                <h4>Compétences démontrées</h4>
                <p>Veille, analyse, stratégie de contenu, compréhension des publics.</p>
            `
        },
        6: {
            title: "Communication adaptée à différents publics",
            category: "Création de contenu",
            date: "2025",
            description: `
                <p>Développement de contenus et de messages adaptés à différents contextes de communication, objectifs promotionnels et publics cibles.</p>
                <h4>Forces mobilisées</h4>
                <ul>
                    <li>Capacité d'adaptation du ton et du message.</li>
                    <li>Sens de la clarté et de la pertinence.</li>
                    <li>Volonté de rendre les idées plus accessibles et engageantes.</li>
                </ul>
                <h4>Compétences démontrées</h4>
                <p>Communication, rédaction, création de contenu, stratégie marketing.</p>
            `
        }
    };

    if (navToggle) {
        navToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navMenu) {
                navMenu.classList.remove("active");
            }
        });
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        const sections = document.querySelectorAll("section[id]");
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");
            const currentLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (currentLink) {
                if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                    currentLink.classList.add("active");
                } else {
                    currentLink.classList.remove("active");
                }
            }
        });
    });

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            portfolioItems.forEach(item => {
                const category = item.getAttribute("data-category");

                if (filter === "all" || category.includes(filter)) {
                    item.classList.remove("hidden");
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });

    portfolioButtons.forEach(button => {
        button.addEventListener("click", function () {
            const projectId = this.getAttribute("data-project");
            const project = projectsData[projectId];

                        if (project) {
                const watchButton = project.watchUrl
                    ? `<a href="${project.watchUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary portfolio-link">
                            <i class="fas fa-play"></i> Voir la vidéo
                       </a>`
                    : "";

                modalBody.innerHTML = `
                    <span class="portfolio-category">${project.category}</span>
                    <h2>${project.title}</h2>
                    <p class="portfolio-date"><i class="fas fa-calendar"></i> ${project.date}</p>
                    <div class="modal-project-content">
                        ${project.description}
                    </div>
                    ${watchButton}
                `;
                modal.classList.add("active");
                document.body.style.overflow = "hidden";
            }
        });
    });

    function closeModal() {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", function (e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message prêt à envoyer';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                contactForm.reset();
            }, 2500);
        });
    }
        const aproposTabs = document.querySelectorAll(".apropos-tab");
    const aproposContents = document.querySelectorAll(".apropos-tab-content");

    aproposTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const target = this.getAttribute("data-tab");

            aproposTabs.forEach(item => item.classList.remove("active"));
            aproposContents.forEach(content => content.classList.remove("active"));

            this.classList.add("active");
            document.getElementById(`tab-${target}`).classList.add("active");
        });
    });
});
