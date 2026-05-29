/* ==========================================================================
   DATOS DE PRODUCTOS
   ========================================================================== */
   const products = [
    {
        id: 1,
        code: 'POL-001',
        name: 'Pollera Flamenca Carmesí',
        category: 'Polleras',
        sizes: ['S', 'M', 'L'],
        colors: ['Rojo', 'Negro'],
        shortDesc: 'Pollera de ensayo y escenario con amplio vuelo y volantes asimétricos.',
        fullDesc: 'Confeccionada en punto de seda de alta calidad. Su diseño permite un movimiento fluido y espectacular, ideal para giros y zapateados intensos. Cintura alta reforzada.',
        status: 'Disponible',
        featured: true,
        image: './assets/img/catalogo_polleras.png'
    },
    {
        id: 2,
        code: 'BOD-001',
        name: 'Body Sevilla Negro',
        category: 'Bodies',
        sizes: ['XS', 'S', 'M', 'L'],
        colors: ['Negro'],
        shortDesc: 'Body clásico con escote en V y espalda descubierta.',
        fullDesc: 'Pieza fundamental para cualquier bailaora. Tejido elástico que se adapta perfectamente al cuerpo, forro interior y cierre con broches. Mangas 3/4.',
        status: 'Disponible',
        featured: true,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 3,
        code: 'MAN-001',
        name: 'Mantón Granada',
        category: 'Mantones',
        sizes: ['Único'],
        colors: ['Negro', 'Rojo', 'Blanco'],
        shortDesc: 'Mantón de manila bordado a máquina con flecos artesanales.',
        fullDesc: 'Dimensiones: 140x140cm. Bordado floral tradicional en hilos de seda. Flecos anudados a mano de 30cm. Peso ideal para el manejo en escena.',
        status: 'A pedido',
        featured: true,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 4,
        code: 'VES-001',
        name: 'Vestido Lunares Andalucía',
        category: 'Vestidos',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Blanco', 'Negro'],
        shortDesc: 'Vestido enterizo con estampado de lunares clásicos.',
        fullDesc: 'Corte entallado hasta la cadera baja, abriendo en una cascada de volantes. Incluye enaguas incorporadas para mayor volumen. Ideal para ferias y tablaos.',
        status: 'A pedido',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 5,
        code: 'BLU-001',
        name: 'Blusa Cádiz',
        category: 'Blusas',
        sizes: ['S', 'M', 'L'],
        colors: ['Blanco', 'Vino'],
        shortDesc: 'Blusa flamenca cruzada con volantes en las mangas.',
        fullDesc: 'Confeccionada en crespón ligero. Escote cruzado que estiliza la figura y mangas al codo terminadas en doble volante. Perfecta para combinar con faldas de ensayo.',
        status: 'Disponible',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 6,
        code: 'POL-002',
        name: 'Falda Ensayo Negra',
        category: 'Polleras',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Negro'],
        shortDesc: 'Falda básica de ensayo con 6 quillas.',
        fullDesc: 'El básico imprescindible. Mucho vuelo, tejido resistente al roce y lavados frecuentes. Cintura elástica adaptable.',
        status: 'Disponible',
        featured: true,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 7,
        code: 'ACC-001',
        name: 'Peineta Clásica',
        category: 'Accesorios',
        sizes: ['Único'],
        colors: ['Dorado', 'Negro'],
        shortDesc: 'Peineta calada de acetato.',
        fullDesc: 'Diseño tradicional calado. Ligera y resistente, se sujeta firmemente al moño. Altura: 15cm.',
        status: 'Disponible',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 8,
        code: 'ACC-002',
        name: 'Accesorio Flor Roja',
        category: 'Accesorios',
        sizes: ['Único'],
        colors: ['Rojo', 'Vino'],
        shortDesc: 'Flor grande de tela para el pelo.',
        fullDesc: 'Rosa abierta de 12cm de diámetro. Pétalos texturizados que mantienen su forma. Incluye pinza y broche.',
        status: 'Disponible',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 9,
        code: 'VES-002',
        name: 'Vestido Escenario Rojo',
        category: 'Vestidos',
        sizes: ['S', 'M'],
        colors: ['Rojo'],
        shortDesc: 'Vestido de alta costura flamenca para solistas.',
        fullDesc: 'Diseño exclusivo con encaje en mangas y escote. Cuerpo entallado y falda de gran amplitud con volantes de organdí. Presencia escénica inigualable.',
        status: 'A pedido',
        featured: true,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 10,
        code: 'BOD-002',
        name: 'Body Encaje Córdoba',
        category: 'Bodies',
        sizes: ['S', 'M', 'L'],
        colors: ['Negro', 'Blanco'],
        shortDesc: 'Body con mangas largas de encaje elástico.',
        fullDesc: 'Elegancia pura. Cuerpo opaco y mangas completas en encaje floral. Cuello perkins y cierre trasero invisible.',
        status: 'Disponible',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 11,
        code: 'POL-003',
        name: 'Pollera Volantes Blanca',
        category: 'Polleras',
        sizes: ['M', 'L'],
        colors: ['Blanco'],
        shortDesc: 'Falda de estilo rociero con múltiples volantes.',
        fullDesc: 'Ideal para romerías. Tejido fresco de algodón mezcla. Adornada con pasamanería al tono en cada volante.',
        status: 'A pedido',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 12,
        code: 'MAN-002',
        name: 'Mantón Bordado Oro',
        category: 'Mantones',
        sizes: ['Único'],
        colors: ['Negro'],
        shortDesc: 'Mantón premium negro con bordados en hilo dorado.',
        fullDesc: 'Pieza de colección. Seda sintética de alto gramaje, bordado tupido y brillante. Flecos de 40cm.',
        status: 'A pedido',
        featured: true,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 13,
        code: 'BLU-002',
        name: 'Blusa Mangas Farol',
        category: 'Blusas',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Negro', 'Rojo'],
        shortDesc: 'Blusa de popelín con mangas abullonadas.',
        fullDesc: 'Corte romántico y favorecedor. Escote cuadrado y mangas farol que aportan volumen a la parte superior.',
        status: 'Disponible',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 14,
        code: 'POL-004',
        name: 'Falda Cola de Sirena',
        category: 'Polleras',
        sizes: ['S', 'M'],
        colors: ['Vino', 'Negro'],
        shortDesc: 'Falda entallada hasta la rodilla con apertura inferior.',
        fullDesc: 'Diseño sensual y elegante. Marca la silueta y abre en la parte baja para permitir el movimiento de pies.',
        status: 'A pedido',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 15,
        code: 'ACC-003',
        name: 'Castañuelas Profesionales',
        category: 'Accesorios',
        sizes: ['Único'],
        colors: ['Negro'],
        shortDesc: 'Castañuelas de fibra de vidrio.',
        fullDesc: 'Sonido limpio y potente. Caja de resonancia doble. Incluye funda protectora.',
        status: 'Disponible',
        featured: true,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 16,
        code: 'VES-003',
        name: 'Vestido Ensayo Básico',
        category: 'Vestidos',
        sizes: ['S', 'M', 'L'],
        colors: ['Negro'],
        shortDesc: 'Vestido enterizo de punto para clases.',
        fullDesc: 'Comodidad absoluta. Sin mangas, cuello redondo y falda de capa entera. Secado rápido.',
        status: 'Disponible',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 17,
        code: 'BOD-003',
        name: 'Body Terciopelo Vino',
        category: 'Bodies',
        sizes: ['S', 'M'],
        colors: ['Vino'],
        shortDesc: 'Body de terciopelo elástico para invierno.',
        fullDesc: 'Textura rica y suntuosa. Escote barco y espalda media. Ideal para actuaciones en climas fríos.',
        status: 'A pedido',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    },
    {
        id: 18,
        code: 'ACC-004',
        name: 'Pendientes Lágrima Dorada',
        category: 'Accesorios',
        sizes: ['Único'],
        colors: ['Dorado'],
        shortDesc: 'Aros flamencos clásicos en forma de lágrima.',
        fullDesc: 'Metal ligero en tono oro envejecido. Cierre de presión. No pesan en la oreja durante el baile.',
        status: 'Disponible',
        featured: false,
        image: 'https://placehold.co/600x800/111111/FDFBF7?text=Foto+de+Referencia'
    }
];

/* ==========================================================================
   VARIABLES DOM
   ========================================================================== */
const productsGrid = document.getElementById('products-grid');
const emptyState = document.getElementById('empty-state');
const searchInput = document.getElementById('search');
const sortSelect = document.getElementById('sort');
const categorySelect = document.getElementById('category');
const sizeSelect = document.getElementById('size');
const colorSelect = document.getElementById('color');
const resetBtn = document.getElementById('reset-filters');

const modal = document.getElementById('product-modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

const WHATSAPP_NUMBER = '5491150247919';

/* ==========================================================================
   FUNCIONES DE RENDERIZADO
   ========================================================================== */
function generateWhatsAppLink(product) {
    const text = `Hola!%0AQuiero consultar por:%0A${product.code}%0A${product.name}%0A%0ATalle:%0AColor:%0ACantidad:%0A%0A¿Está disponible?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function renderProducts(items) {
    productsGrid.innerHTML = '';
    
    if (items.length === 0) {
        productsGrid.classList.add('hidden');
        emptyState.classList.remove('hidden');
        return;
    }

    productsGrid.classList.remove('hidden');
    emptyState.classList.add('hidden');

    items.forEach(product => {
        const statusClass = product.status === 'A pedido' ? 'a-pedido' : '';
        const waLink = generateWhatsAppLink(product);
        
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img-wrap">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <span class="product-status ${statusClass}">${product.status}</span>
            </div>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <span class="product-code">${product.code}</span>
                <p style="font-size: 0.85rem; color: #666; margin-bottom: 1rem;">${product.shortDesc}</p>
                <div class="product-actions">
                    <button class="btn btn-outline btn-full view-detail" data-id="${product.id}">Ver detalle</button>
                    <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-full">WhatsApp</a>
                </div>
            </div>
        `;
        productsGrid.appendChild(card);
    });

    // Event listeners para botones "Ver detalle"
    document.querySelectorAll('.view-detail').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            openModal(id);
        });
    });
}

/* ==========================================================================
   FILTROS Y BÚSQUEDA
   ========================================================================== */
function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const sortValue = sortSelect.value;
    const categoryValue = categorySelect.value;
    const sizeValue = sizeSelect.value;
    const colorValue = colorSelect.value;

    let filtered = products.filter(product => {
        const matchSearch = product.name.toLowerCase().includes(searchTerm) || product.code.toLowerCase().includes(searchTerm);
        const matchCategory = categoryValue === 'todas' || product.category === categoryValue;
        const matchSize = sizeValue === 'todos' || product.sizes.includes(sizeValue);
        const matchColor = colorValue === 'todos' || product.colors.includes(colorValue);

        return matchSearch && matchCategory && matchSize && matchColor;
    });

    // Ordenamiento
    if (sortValue === 'destacados') {
        filtered.sort((a, b) => (b.featured === a.featured) ? 0 : b.featured ? 1 : -1);
    } else if (sortValue === 'nombre') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === 'codigo') {
        filtered.sort((a, b) => a.code.localeCompare(b.code));
    }

    renderProducts(filtered);
}

// Event Listeners de filtros
searchInput.addEventListener('input', filterProducts);
sortSelect.addEventListener('change', filterProducts);
categorySelect.addEventListener('change', filterProducts);
sizeSelect.addEventListener('change', filterProducts);
colorSelect.addEventListener('change', filterProducts);

resetBtn.addEventListener('click', () => {
    searchInput.value = '';
    sortSelect.value = 'destacados';
    categorySelect.value = 'todas';
    sizeSelect.value = 'todos';
    colorSelect.value = 'todos';
    filterProducts();
});

/* ==========================================================================
   MODAL
   ========================================================================== */
function openModal(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const waLink = generateWhatsAppLink(product);
    const statusClass = product.status === 'A pedido' ? 'color: var(--black); font-weight: 600;' : 'color: var(--wine); font-weight: 600;';

    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="modal-img">
        <div class="modal-info">
            <span class="modal-category">${product.category}</span>
            <h2 class="modal-title">${product.name}</h2>
            <p class="modal-code">${product.code}</p>
            <p class="modal-desc">${product.fullDesc}</p>
            
            <div class="modal-details">
                <p><strong>Talles disponibles:</strong> ${product.sizes.join(', ')}</p>
                <p><strong>Colores:</strong> ${product.colors.join(', ')}</p>
                <p><strong>Estado:</strong> <span style="${statusClass}">${product.status}</span></p>
                <p style="margin-top: 1rem; font-size: 0.85rem; font-style: italic;">* Posibilidad de personalización a medida. Consultar.</p>
            </div>
            
            <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-full" style="margin-top: auto;">Consultar por WhatsApp</a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
});

/* ==========================================================================
   MENÚ MOBILE & SCROLL
   ========================================================================== */
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

/* ==========================================================================
   INICIALIZACIÓN
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Render inicial ordenado por destacados
    filterProducts();
});