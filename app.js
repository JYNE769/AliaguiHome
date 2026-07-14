
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
//Partie affichage
////////////////////////////////////////////////

// Tableau de 20 produits
const produits = [
    {
        imagePrincipale: "img/drap-antique.png", imageFond: "img/drapfond-antique.jpg", categorie: "Drap", collection: "antique", prix: "50 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique1.png", imageFond: "img/drapfond-antique1.jpg", categorie: "Drap", collection: "antique", prix: "52 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique2.png", imageFond: "img/drapfond-antique2.jpg", categorie: "Drap", collection: "antique", prix: "18 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique3.png", imageFond: "img/drapfond-antique3.jpg", categorie: "Drap", collection: "antique", prix: "20 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique4.png", imageFond: "img/drapfond-antique4.jpg", categorie: "Drap", collection: "antique", prix: "35 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique5.png", imageFond: "img/drapfond-antique5.jpg", categorie: "Drap", collection: "antique", prix: "38 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique6.png", imageFond: "img/drapfond-antique6.jpg", categorie: "Drap", collection: "antique", prix: "25 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique7.png", imageFond: "img/drapfond-antique7.jpg", categorie: "Drap", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique8.png", imageFond: "img/drapfond-antique8.jpg", categorie: "Drap", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique9.png", imageFond: "img/drapfond-antique9.jpg", categorie: "Drap", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-antique10.png", imageFond: "img/drapfond-antique10.jpg", categorie: "Drap", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-flora.png", imageFond: "img/drapfond-flora.jpg", categorie: "Drap", collection: "flora", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-ivoire.png", imageFond: "img/drapfond-ivoire.jpg", categorie: "Drap", collection: "ivoire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-ivoire1.png", imageFond: "img/drapfond-ivoire1.jpg", categorie: "Drap", collection: "ivoire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-middle.png", imageFond: "img/drapfond-middle.jpg", categorie: "Drap", collection: "middle", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-ordinaire.png", imageFond: "img/drapfond-ordinaire.jpg", categorie: "Drap", collection: "ordinaire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-ordinaire1.png", imageFond: "img/drapfond-ordinaire1.jpg", categorie: "Drap", collection: "ordinaire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/drap-ordinaire2.png", imageFond: "img/drapfond-ordinaire2.jpg", categorie: "Drap", collection: "ordinaire", prix: "28 000 FCFA"
    },

    ///oreillers
    {
        imagePrincipale: "img/oreiller-antique.png", imageFond: "img/oreillerfond-antique.jpeg", categorie: "Oreiller", collection: "antique", prix: "50 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique1.png", imageFond: "img/oreillerfond-antique1.jpeg", categorie: "Oreiller", collection: "antique", prix: "52 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique2.png", imageFond: "img/oreillerfond-antique2.jpeg", categorie: "Oreiller", collection: "antique", prix: "18 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique3.png", imageFond: "img/oreillerfond-antique3.jpeg", categorie: "Oreiller", collection: "antique", prix: "20 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique4.png", imageFond: "img/oreillerfond-antique4.jpeg", categorie: "Oreiller", collection: "antique", prix: "35 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique5.png", imageFond: "img/oreillerfond-antique5.jpeg", categorie: "Oreiller", collection: "antique", prix: "38 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique6.png", imageFond: "img/oreillerfond-antique6.jpeg", categorie: "Oreiller", collection: "antique", prix: "25 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique7.png", imageFond: "img/oreillerfond-antique7.jpeg", categorie: "Oreiller", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique8.png", imageFond: "img/oreillerfond-antique8.jpeg", categorie: "Oreiller", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique9.png", imageFond: "img/oreillerfond-antique9.jpeg", categorie: "Oreiller", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-antique10.png", imageFond: "img/oreillerfond-antique10.jpeg", categorie: "Oreiller", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-flora.png", imageFond: "img/oreillerfond-flora.jpeg", categorie: "Oreiller", collection: "flora", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-ivoire.png", imageFond: "img/oreillerfond-ivoire.jpeg", categorie: "Oreiller", collection: "ivoire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-ivoire1.png", imageFond: "img/oreillerfond-ivoire1.jpeg", categorie: "Oreiller", collection: "ivoire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-middle.png", imageFond: "img/oreillerfond-middle.jpeg", categorie: "Oreiller", collection: "middle", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-ordinaire.png", imageFond: "img/oreillerfond-ordinaire.jpeg", categorie: "Oreiller", collection: "ordinaire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-ordinaire1.png", imageFond: "img/oreillerfond-ordinaire1.jpeg", categorie: "Oreiller", collection: "ordinaire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/oreiller-ordinaire2.png", imageFond: "img/oreillerfond-ordinaire2.jpeg", categorie: "Oreiller", collection: "ordinaire", prix: "28 000 FCFA"
    },

    ///art de table
    {
        imagePrincipale: "img/table-antique.png", imageFond: "img/tablefond-antique.jpeg", categorie: "Art de table", collection: "antique", prix: "50 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique1.png", imageFond: "img/tablefond-antique1.jpeg", categorie: "Art de table", collection: "antique", prix: "52 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique2.png", imageFond: "img/tablefond-antique2.jpeg", categorie: "Art de table", collection: "antique", prix: "18 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique3.png", imageFond: "img/tablefond-antique3.jpeg", categorie: "Art de table", collection: "antique", prix: "20 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique4.png", imageFond: "img/tablefond-antique4.jpeg", categorie: "Art de table", collection: "antique", prix: "35 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique5.png", imageFond: "img/tablefond-antique5.jpeg", categorie: "Art de table", collection: "antique", prix: "38 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique6.png", imageFond: "img/tablefond-antique6.jpeg", categorie: "Art de table", collection: "antique", prix: "25 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique7.png", imageFond: "img/tablefond-antique7.jpeg", categorie: "Art de table", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique8.png", imageFond: "img/tablefond-antique8.jpeg", categorie: "Art de table", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique9.png", imageFond: "img/tablefond-antique9.jpeg", categorie: "Art de table", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-antique10.png", imageFond: "img/tablefond-antique10.jpeg", categorie: "Art de table", collection: "antique", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-flora.png", imageFond: "img/tablefond-flora.jpeg", categorie: "Art de table", collection: "flora", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-ivoire.png", imageFond: "img/tablefond-ivoire.jpeg", categorie: "Art de table", collection: "ivoire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-ivoire1.png", imageFond: "img/tablefond-ivoire1.jpeg", categorie: "Art de table", collection: "ivoire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-middle.png", imageFond: "img/tablefond-middle.jpeg", categorie: "Art de table", collection: "middle", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-ordinaire.png", imageFond: "img/tablefond-ordinaire.jpeg", categorie: "Art de table", collection: "ordinaire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-ordinaire1.png", imageFond: "img/tablefond-ordinaire1.jpeg", categorie: "Art de table", collection: "ordinaire", prix: "28 000 FCFA"
    },
    {
        imagePrincipale: "img/table-ordinaire2.png", imageFond: "img/tablefond-ordinaire2.jpeg", categorie: "Art de table", collection: "ordinaire", prix: "28 000 FCFA"
    }
];

const catalogue = document.getElementById("catalogue");
const PAR_PAGE = 12;

let produitsFiltres = [...produits];

let pageCourante = 1;

function afficherProduits() {

    catalogue.innerHTML = "";

    const debut = (pageCourante - 1) * PAR_PAGE;
    const fin = debut + PAR_PAGE;

    const produitsPage = produitsFiltres.slice(debut, fin);

    let html = "";

    produitsPage.forEach(produit => {

        html += `
        <div class="mb-10">

            <div class="bg-[#F5F5F5] justify-center items-end lg:rounded-xl flex pb-5 hover:pb-0 h-[30svh] lg:h-85 relative group overflow-hidden">

                <img
                    class="h-[20svh] lg:h-45 group-hover:hidden"
                    src="${produit.imagePrincipale}"
                    alt="${produit.categorie}">

                <div
                    class="absolute opacity-0 h-full w-full group-hover:opacity-100 transition-all duration-700 bg-cover bg-center"
                    style="background-image:url('${produit.imageFond}')">
                </div>

            </div>

            <p class="lg:text-xl font-medium">${produit.categorie}</p>
            <p>${produit.collection}</p>
            <p class="text-sm">${produit.prix}</p>

        </div>
        `;
    });

    catalogue.innerHTML = html;
}

// Affichage initial
afficherProduits();

/////////////////////////////////////////////////
//Partie trie
////////////////////////////////////////////////

function appliquerTri() {

    const collections = [
        "antique",
        "flora",
        "ordinaire",
        "middle",
        "ivoire",
    ];

    const categories = [
        { id: "drap", valeur: "Drap" },
        { id: "oreiller", valeur: "Oreiller" },
        { id: "artDeTable", valeur: "Art de table" }
    ];

    const collectionsChoisies = collections.filter(nom =>
        document.querySelector(`#${nom} input`).checked
    );

    const categoriesChoisies = categories
        .filter(c => document.querySelector(`#${c.id} input`).checked)
        .map(c => c.valeur);

    produitsFiltres = produits.filter(produit => {

        const collectionOK =
            collectionsChoisies.length === 0 ||
            collectionsChoisies.includes(produit.collection);

        const categorieOK =
            categoriesChoisies.length === 0 ||
            categoriesChoisies.includes(produit.categorie);

        return collectionOK && categorieOK;

    });

    pageCourante = 1;

    afficherProduits();

    mettreAJourPagination();
    closeSidebar();
}



document.getElementById("suivant").addEventListener("click", e => {

    e.preventDefault();

    const nbPages = Math.ceil(produitsFiltres.length / PAR_PAGE);

    if (pageCourante < nbPages) {

        pageCourante++;

        afficherProduits();

        mettreAJourPagination();
    }

});

document.getElementById("precedent").addEventListener("click", e => {

    e.preventDefault();

    if (pageCourante > 1) {

        pageCourante--;

        afficherProduits();
        mettreAJourPagination();

    }

});
function mettreAJourPagination() {
    const precedent = document.getElementById("precedent");
    const suivant = document.getElementById("suivant");

    const nbPages = Math.ceil(produitsFiltres.length / PAR_PAGE);

    precedent.classList.toggle("opacity-50", pageCourante === 1);
    suivant.classList.toggle("opacity-50", pageCourante === nbPages);
}