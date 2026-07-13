
/////////////////////////////////////////////////
//Partie navbar
////////////////////////////////////////////////
function ouvrirMenu() {
    const menu = document.getElementById("mobile-menu");

    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}

function changerNavbar() {
    const navbar = document.getElementById("navbar");
    const logoBlanc = document.getElementById("logo-blanc");
    const logoNoir = document.getElementById("logo-noir");

    if (window.scrollY > 50) {
        navbar.classList.add("bg-white", "text-black", "shadow-lg");
        navbar.classList.remove("text-white");

        logoBlanc.classList.add("hidden");
        logoNoir.classList.remove("hidden");
    } else {
        navbar.classList.remove("bg-white", "text-black", "shadow-lg");
        navbar.classList.add("text-white");

        logoBlanc.classList.remove("hidden");
        logoNoir.classList.add("hidden");
    }
}

window.addEventListener("scroll", changerNavbar);
window.addEventListener("load", changerNavbar);


/////////////////////////////////////////////////
//Partie sidebar
////////////////////////////////////////////////
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('openSidebar');

// Fonction pour ouvrir
function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    sidebar.classList.add('translate-x-0');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
    overlay.classList.add('opacity-100', 'pointer-events-auto');
    document.body.classList.add('overflow-hidden');
}

// Fonction pour fermer
function closeSidebar() {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-x-full');
    overlay.classList.remove('opacity-100', 'pointer-events-auto');
    overlay.classList.add('opacity-0', 'pointer-events-none');
    document.body.classList.remove('overflow-hidden');
}

// Ouvrir au clic sur le bouton
openBtn.addEventListener('click', openSidebar);

// Fermer au clic sur l’overlay
overlay.addEventListener('click', closeSidebar);

/////////////////////////////////////////////////
//Partie trie
////////////////////////////////////////////////

        function appliquerTri() {

            const produits = document.querySelectorAll(".produit");

            const collections = [
                "antique",
                "flora",
                "ordinaire",
                "ketchene",
                "tradition",
                "indigo"
            ];

            const categories = [
                "drap",
                "oreiller",
                "artDeTable",
                "soie"
            ];

            // Collections cochées
            const collectionsChoisies = collections.filter(classe => {
                return document.querySelector(`#${classe} input`).checked;
            });

            // Catégories cochées
            const categoriesChoisies = categories.filter(classe => {
                return document.querySelector(`#${classe} input`).checked;
            });

            produits.forEach(produit => {

                // Vérifie la collection
                const okCollection =
                    collectionsChoisies.length === 0 ||
                    collectionsChoisies.some(classe =>
                        produit.classList.contains(classe)
                    );

                // Vérifie la catégorie
                const okCategorie =
                    categoriesChoisies.length === 0 ||
                    categoriesChoisies.some(classe =>
                        produit.classList.contains(classe)
                    );

                // Les deux doivent être vraies
                if (okCollection && okCategorie) {
                    produit.classList.remove("hidden");
                } else {
                    produit.classList.add("hidden");
                }

            });
            closeSidebar()
        }