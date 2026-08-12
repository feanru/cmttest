const categories = [
  { id: "refrigerador", name: "Refrigerador", description: "Soluciones de refrigeración para vivienda o punto comunitario." },
  { id: "estufa", name: "Estufa", description: "Equipamiento de cocina para preparación segura de alimentos." },
  { id: "lavadora", name: "Lavadora", description: "Soluciones de lavado para apoyo doméstico y familiar." },
  { id: "microondas", name: "Microondas", description: "Equipamiento compacto para preparación rápida de alimentos." },
  { id: "aire-acondicionado", name: "Aire acondicionado", description: "Soluciones de climatización para espacios habitables." }
];

const solutions = [
  {
    id: "estufa-piso-50-negra-mabe",
    name: "Estufa de Piso 50 cm (20 pulgadas) Negra Mabe",
    category: "estufa",
    cubicaje: 30,
    image: "img/Articulos/estufa.png",
    description: "Solución de estufa para preparación de alimentos."
  },
  {
    id: "estufa-gas-50-iem-sil",
    name: "ESTUFA GAS 50 CM IEM SIL",
    category: "estufa",
    cubicaje: 30,
    image: "img/Articulos/estufa.png",
    description: "Solución de estufa para preparación de alimentos."
  },
  {
    id: "estufa-gas-50-mabe-neg",
    name: "ESTUFA GAS 50 CM MABE NEG",
    category: "estufa",
    cubicaje: 30,
    image: "img/Articulos/estufa.png",
    description: "Solución de estufa para preparación de alimentos."
  },
  {
    id: "estufa-gas-76-iem-sil",
    name: "ESTUFA GAS 76 CM IEM SIL",
    category: "estufa",
    cubicaje: 30,
    image: "img/Articulos/estufa.png",
    description: "Solución de estufa para preparación de alimentos."
  },
  {
    id: "estufa-piso-76-plata-mercury-iem",
    name: "Estufa de Piso 76 cm (30 pulgadas) Plata Mercury IEM",
    category: "estufa",
    cubicaje: 30,
    image: "img/Articulos/estufa.png",
    description: "Solución de estufa para preparación de alimentos."
  },
  {
    id: "lavadora-manual-16-easy-ver",
    name: "LAVADORA MANUAL 16 KG EASY VER",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "lavadora-manual-19-easy-mor",
    name: "LAVADORA MANUAL 19 KG EASY MOR",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "lavadora-2-tinas-13-mabe-bla",
    name: "LAVADORA 2 TINAS 13 KG MABE BLA",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "lavadora-2-tinas-16-mabe-bla",
    name: "LAVADORA 2 TINAS 16 KG MABE BLA",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "lavadora-2-tinas-18-mabe-bla",
    name: "LAVADORA 2 TINAS 18 KG MABE BLA",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "lav-aut-car-sup-infusor-16-mabe-blan",
    name: "LAV AUT CAR SUP INFUSOR 16KG MABE BLAN",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "lavadora-aut-18-mabe-bla",
    name: "LAVADORA AUT 18 KG MABE BLA",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "lavadora-automatica-16-blanco",
    name: "LAVADORA AUTOMATICA 16 KG BLANCO",
    category: "lavadora",
    cubicaje: 20,
    image: "img/Articulos/lavadora.png",
    description: "Solución de lavado para apoyo doméstico."
  },
  {
    id: "refrigerador-1pta-manual-210-grafito-mabe",
    name: "Refrigerador Una puerta manual 210 L Grafito Mabe",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-manual-210-black-stainless-mabe",
    name: "Refrigerador Manual 210 L Black Stainless Steel Mabe",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-automatico-251-inoxidable-mate",
    name: "REFRIGERADOR AUTOMÁTICO 251.19 L INOXIDABLE MATE",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-tmnf-302-mabe-sil",
    name: "REFRIGERADOR TMNF 302 L MABE SIL",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-tmnf-302-mabe-b-eco",
    name: "REFRIGERADOR TMNF 302 L MABE B/ECO",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-automatico-360-inoxidable-mate",
    name: "REFRIGERADOR AUTOMÁTICO 360L INOXIDABLE MATE",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-automatico-400-acero-inoxidable",
    name: "REFRIGERADOR AUTOMÁTICO 400 L ACERO INOXIDABLE",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-tmnf-513-mabe-inx",
    name: "REFRIGERADOR TMNF 513 L MABE INX",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "refrigerador-1pta-93-mabe-bla",
    name: "REFRIGERADOR 1PTA 93L MABE BLA",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de refrigeración para vivienda o punto comunitario."
  },
  {
    id: "enfriador-top-load-mabe-neg",
    name: "ENFRIADOR TOP LOAD MABE NEG",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de enfriamiento para vivienda o punto comunitario."
  },
  {
    id: "enfriador-top-load-mabe-bla",
    name: "ENFRIADOR TOP LOAD MABE BLA",
    category: "refrigerador",
    cubicaje: 30,
    image: "img/Articulos/refrigerador.png",
    description: "Solución de enfriamiento para vivienda o punto comunitario."
  },
  {
    id: "microondas-compacto",
    name: "Microondas compacto",
    category: "microondas",
    cubicaje: 12,
    image: "img/Articulos/microondas.png",
    description: "Equipo compacto para preparación rápida en vivienda o comedor."
  },
  {
    id: "microondas-familiar",
    name: "Microondas familiar",
    category: "microondas",
    cubicaje: 16,
    image: "img/Articulos/microondas.png",
    description: "Capacidad ampliada para preparación de alimentos en el hogar."
  },
  {
    id: "aire-acondicionado-1t",
    name: "Aire acondicionado 1 tonelada",
    category: "aire-acondicionado",
    cubicaje: 28,
    image: "img/Articulos/aireacondicionado.png",
    description: "Climatización para habitaciones o espacios pequeños."
  },
  {
    id: "aire-acondicionado-2t",
    name: "Aire acondicionado 2 toneladas",
    category: "aire-acondicionado",
    cubicaje: 34,
    image: "img/Articulos/aireacondicionado.png",
    description: "Solución de climatización para espacios de mayor capacidad."
  }
];

const state = {
  category: null,
  query: "",
  draftQuantities: new Map(),
  selected: new Map()
};

const els = {
  mobileMenuToggle: document.getElementById("mobileMenuToggle"),
  mainMenu: document.getElementById("mainMenu"),
  categoryTabs: document.getElementById("categoryTabs"),
  productsGrid: document.getElementById("productsGrid"),
  productSearch: document.getElementById("productSearch"),
  resetFilters: document.getElementById("resetFilters"),
  cubicajeList: document.getElementById("cubicajeList"),
  clearButton: document.getElementById("clearButton"),
  heroTotal: document.getElementById("heroTotal"),
  ringTotal: document.getElementById("ringTotal"),
  capacityRing: document.getElementById("capacityRing"),
  capacityFill: document.getElementById("capacityFill"),
  capacityWarning: document.getElementById("capacityWarning"),
  totalItems: document.getElementById("totalItems"),
  totalCategories: document.getElementById("totalCategories"),
  remainingCapacity: document.getElementById("remainingCapacity")
};

function normalize(value) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function getCategoryName(categoryId) {
  return categories.find((category) => category.id === categoryId)?.name || "Solución";
}

function getCategoryCount(categoryId) {
  return solutions.filter((solution) => solution.category === categoryId).length;
}

function getDraftQuantity(solutionId) {
  return state.draftQuantities.get(solutionId) || 1;
}

function setDraftQuantity(solutionId, quantity) {
  state.draftQuantities.set(solutionId, Math.max(1, quantity));
}

function getFilteredSolutions() {
  const query = normalize(state.query.trim());

  return solutions.filter((solution) => {
    const matchesCategory = !state.category || solution.category === state.category;
    const searchable = normalize(`${solution.name} ${solution.description} ${getCategoryName(solution.category)}`);
    const matchesQuery = !query || searchable.includes(query);
    return matchesCategory && matchesQuery;
  });
}

function renderCategories() {
  if (!state.category && !state.query.trim()) {
    els.categoryTabs.innerHTML = "";
    return;
  }

  const activeCategory = state.category ? getCategoryName(state.category) : "Resultados";
  els.categoryTabs.innerHTML = `
    <button class="category-tab" type="button" data-view-categories>
      <span>Ver categorías</span>
    </button>
    <button class="category-tab is-active" type="button">
      <span>${activeCategory}</span>
      <span class="category-tab__count">${getFilteredSolutions().length}</span>
    </button>
  `;
}

function renderCategoryCards() {
  els.productsGrid.innerHTML = categories.map((category) => `
    <button class="category-card" type="button" data-category="${category.id}">
      <span>${getCategoryCount(category.id)} soluciones</span>
      <strong>${category.name}</strong>
      <small>Ver soluciones</small>
    </button>
  `).join("");
}

function renderSolutions() {
  if (!state.category && !state.query.trim()) {
    renderCategoryCards();
    return;
  }

  const filteredSolutions = getFilteredSolutions();

  if (!filteredSolutions.length) {
    els.productsGrid.innerHTML = `
      <div class="catalog-empty">
        No encontramos soluciones con esa búsqueda. Prueba otra palabra o cambia de categoría.
      </div>
    `;
    return;
  }

  els.productsGrid.innerHTML = filteredSolutions.map((solution) => `
    <article class="cubicaje-product">
      <div class="cubicaje-product__media">
        <img src="${solution.image}" alt="${solution.name}" loading="lazy" />
      </div>
      <div class="cubicaje-product__body">
        <span class="cubicaje-product__kicker">${getCategoryName(solution.category)}</span>
        <h3>${solution.name}</h3>
      </div>
      <div class="cubicaje-product__footer">
        <div class="qty-control solution-qty" aria-label="Cantidad para agregar de ${solution.name}">
          <button type="button" data-draft-decrease="${solution.id}" aria-label="Restar ${solution.name}">-</button>
          <span>${getDraftQuantity(solution.id)}</span>
          <button type="button" data-draft-increase="${solution.id}" aria-label="Sumar ${solution.name}">+</button>
        </div>
        <button class="add-product" type="button" data-add-solution="${solution.id}">Agregar</button>
      </div>
    </article>
  `).join("");
}

function getSummary() {
  const selectedSolutions = [...state.selected.entries()].map(([solutionId, quantity]) => {
    const solution = solutions.find((item) => item.id === solutionId);
    return { ...solution, quantity };
  });

  const total = selectedSolutions.reduce((sum, solution) => sum + solution.cubicaje * solution.quantity, 0);
  const quantity = selectedSolutions.reduce((sum, solution) => sum + solution.quantity, 0);
  const selectedCategories = new Set(selectedSolutions.map((solution) => solution.category));

  return {
    selectedSolutions,
    total,
    quantity,
    categoryCount: selectedCategories.size,
    remaining: Math.max(0, 100 - total)
  };
}

function renderSummary() {
  const summary = getSummary();
  const cappedTotal = Math.min(summary.total, 100);
  const capacityDegrees = Math.round((cappedTotal / 100) * 360);

  els.heroTotal.textContent = `${summary.total}%`;
  els.ringTotal.textContent = `${summary.total}%`;
  els.capacityRing.style.setProperty("--capacity", `${capacityDegrees}deg`);
  els.capacityFill.style.setProperty("--fill", `${cappedTotal}%`);
  els.totalItems.textContent = summary.quantity;
  els.totalCategories.textContent = summary.categoryCount;
  els.remainingCapacity.textContent = `${summary.remaining}%`;
  els.capacityWarning.classList.toggle("is-visible", summary.total > 100);

  if (!summary.selectedSolutions.length) {
    els.cubicajeList.innerHTML = `
      <div class="cubicaje-empty">
        Agrega soluciones desde soluciones integrales para calcular el cubicaje.
      </div>
    `;
    return;
  }

  els.cubicajeList.innerHTML = summary.selectedSolutions.map((solution) => `
    <article class="cubicaje-item">
      <img src="${solution.image}" alt="" aria-hidden="true" />
      <div class="cubicaje-item__body">
        <div class="cubicaje-item__top">
          <strong title="${solution.name}">${solution.name}</strong>
          <span>${solution.cubicaje}% por solución · ${solution.cubicaje * solution.quantity}% agregado</span>
        </div>
        <div class="cubicaje-item__actions">
          <div class="qty-control" aria-label="Cantidad de ${solution.name}">
            <button type="button" data-decrease="${solution.id}" aria-label="Restar ${solution.name}">-</button>
            <span>${solution.quantity}</span>
            <button type="button" data-increase="${solution.id}" aria-label="Sumar ${solution.name}">+</button>
          </div>
          <button class="remove-item" type="button" data-remove="${solution.id}" aria-label="Quitar ${solution.name}">&times;</button>
        </div>
      </div>
    </article>
  `).join("");
}

function addSolution(solutionId, quantity = 1) {
  state.selected.set(solutionId, (state.selected.get(solutionId) || 0) + quantity);
  renderSummary();
}

function decreaseSolution(solutionId) {
  const nextQuantity = (state.selected.get(solutionId) || 0) - 1;

  if (nextQuantity <= 0) {
    state.selected.delete(solutionId);
  } else {
    state.selected.set(solutionId, nextQuantity);
  }

  renderSummary();
}

function bindEvents() {
  els.mobileMenuToggle?.addEventListener("click", () => {
    const isOpen = els.mainMenu.classList.toggle("is-open");
    els.mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".main-menu__toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".main-menu__group");
      const isOpen = group.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });

  els.categoryTabs.addEventListener("click", (event) => {
    const backButton = event.target.closest("[data-view-categories]");
    if (backButton) {
      state.category = null;
      state.query = "";
      els.productSearch.value = "";
      renderCategories();
      renderSolutions();
      return;
    }

    const button = event.target.closest("[data-category]");
    if (!button) return;
    state.category = button.dataset.category;
    renderCategories();
    renderSolutions();
  });

  els.productSearch.addEventListener("input", (event) => {
    state.query = event.target.value;
    if (state.query.trim()) {
      state.category = null;
    }
    renderCategories();
    renderSolutions();
  });

  els.resetFilters.addEventListener("click", () => {
    state.category = null;
    state.query = "";
    els.productSearch.value = "";
    renderCategories();
    renderSolutions();
  });

  els.productsGrid.addEventListener("click", (event) => {
    const categoryButton = event.target.closest("[data-category]");
    const addButton = event.target.closest("[data-add-solution]");
    const draftIncrease = event.target.closest("[data-draft-increase]");
    const draftDecrease = event.target.closest("[data-draft-decrease]");

    if (categoryButton) {
      state.category = categoryButton.dataset.category;
      state.query = "";
      els.productSearch.value = "";
      renderCategories();
      renderSolutions();
      return;
    }

    if (draftIncrease) {
      const solutionId = draftIncrease.dataset.draftIncrease;
      setDraftQuantity(solutionId, getDraftQuantity(solutionId) + 1);
      renderSolutions();
      return;
    }

    if (draftDecrease) {
      const solutionId = draftDecrease.dataset.draftDecrease;
      setDraftQuantity(solutionId, getDraftQuantity(solutionId) - 1);
      renderSolutions();
      return;
    }

    if (addButton) {
      const solutionId = addButton.dataset.addSolution;
      addSolution(solutionId, getDraftQuantity(solutionId));
    }
  });

  els.cubicajeList.addEventListener("click", (event) => {
    const increase = event.target.closest("[data-increase]");
    const decrease = event.target.closest("[data-decrease]");
    const remove = event.target.closest("[data-remove]");

    if (increase) addSolution(increase.dataset.increase);
    if (decrease) decreaseSolution(decrease.dataset.decrease);
    if (remove) {
      state.selected.delete(remove.dataset.remove);
      renderSummary();
    }
  });

  els.clearButton.addEventListener("click", () => {
    state.selected.clear();
    renderSummary();
  });
}

renderCategories();
renderSolutions();
renderSummary();
bindEvents();
