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
    description: `
        <p>Ce projet consiste en la création d'une capsule vidéo verticale portant sur l'évolution du commerce numérique sur les réseaux sociaux. L'objectif était de transformer un sujet actuel et riche en information en un contenu clair, structuré et engageant, adapté aux codes des plateformes sociales.</p>

      <div class="video-wrapper vertical-video" style="display:flex;align-items:center;justify-content:center;color:white;font-weight:bold;">
    TEST VIDEO
</div>

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
            title: "Optimisation du référencement",
            category: "SEO",
            date: "2025",
            description: `
                <p>Contribution à l'amélioration de la visibilité numérique d'une entreprise locale grâce à une approche orientée référencement naturel.</p>
                <h4>Interventions</h4>
                <ul>
                    <li>Observation des contenus existants.</li>
                    <li>Amélioration de certains textes et angles de communication.</li>
                    <li>Réflexion autour de la visibilité en ligne et de la pertinence du contenu.</li>
                </ul>
                <h4>Compétences démontrées</h4>
                <p>SEO, analyse marketing, amélioration de contenu, visibilité numérique.</p>
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
                modalBody.innerHTML = `
                    <span class="portfolio-category">${project.category}</span>
                    <h2>${project.title}</h2>
                    <p class="portfolio-date"><i class="fas fa-calendar"></i> ${project.date}</p>
                    <div class="modal-project-content">
                        ${project.description}
                    </div>
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
