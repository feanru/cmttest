    const DATA = [
      {
        id: 'salud',
        name: 'Salud',
        description: 'Soluciones orientadas al bienestar, prevención y atención comunitaria.',
        products: [
          {
            id: 'botiquin',
            name: 'Botiquín comunitario',
            short: 'Insumos esenciales para atención básica.',
            description: 'Agrupa insumos clave para respuesta inmediata, uso comunitario y operación básica.',
            variants: [
              { id: 'botiquin-basico CMT', name: 'Botiquín básico', description: 'Versión inicial para atención primaria.' },
              { id: 'botiquin-extendido CMT', name: 'Botiquín extendido', description: 'Mayor cobertura de insumos y reposición.' },
              { id: 'botiquin-movil CMT', name: 'Botiquín móvil', description: 'Formato portátil para brigadas.' }
            ]
          },
          {
            id: 'equipo-medicion',
            name: 'Equipo de medición',
            short: 'Monitoreo rápido de signos y parámetros básicos.',
            description: 'Permite levantar parámetros de salud de forma sencilla y con trazabilidad básica.',
            variants: [
              { id: 'medicion-presion', name: 'Medición de presión', description: 'Equipo para control rutinario.' },
              { id: 'medicion-glucosa', name: 'Medición de glucosa', description: 'Seguimiento puntual y comunitario.' }
            ]
          },
          {
            id: 'higiene',
            name: 'Kit de higiene',
            short: 'Apoyo preventivo para hogares y comunidades.',
            description: 'Conjunto de elementos preventivos para reforzar hábitos de higiene y cuidado.',
            variants: [
              { id: 'higiene-familiar', name: 'Kit familiar', description: 'Cobertura para uso doméstico.' },
              { id: 'higiene-escolar', name: 'Kit escolar', description: 'Formato adaptado a espacios educativos.' }
            ]
          }
        ]
      },
      {
        id: 'alimentacion',
        name: 'Alimentación',
        description: 'Productos para nutrición, abasto y fortalecimiento alimentario.',
        products: [
          {
            id: 'paquete-alimentario',
            name: 'Paquete alimentario',
            short: 'Canasta con insumos de primera necesidad.',
            description: 'Organiza la oferta alimentaria por cobertura, frecuencia y tipo de beneficiario.',
            variants: [
              { id: 'paquete-basico', name: 'Paquete básico', description: 'Cobertura inicial de alimentos esenciales.' },
              { id: 'paquete-ampliado', name: 'Paquete ampliado', description: 'Incluye mayor variedad y volumen.' }
            ]
          },
          {
            id: 'modulo-conservacion',
            name: 'Módulo de conservación',
            short: 'Apoyo para almacenamiento y manejo.',
            description: 'Facilita mejores condiciones de resguardo y operación alimentaria.',
            variants: [
              { id: 'conservacion-seca', name: 'Conservación seca', description: 'Organización para despensa y resguardo.' },
              { id: 'conservacion-fria', name: 'Conservación fría', description: 'Para productos que requieren cadena térmica.' }
            ]
          }
        ]
      },
      {
        id: 'vivienda',
        name: 'Vivienda',
        description: 'Elementos para mejoramiento, equipamiento y condiciones habitacionales.',
        products: [
          {
            id: 'techo',
            name: 'Sistema de techo',
            short: 'Mejoramiento y sustitución de cubierta.',
            description: 'Permite estructurar opciones de rehabilitación y protección de vivienda.',
            variants: [
              { id: 'techo-ligero', name: 'Techo ligero', description: 'Solución de instalación rápida.' },
              { id: 'techo-termico', name: 'Techo térmico', description: 'Mejor desempeño frente a clima.' }
            ]
          },
          {
            id: 'piso',
            name: 'Piso firme',
            short: 'Intervención para habitabilidad básica.',
            description: 'Agrupa componentes para sustitución y mejora del piso en vivienda.',
            variants: [
              { id: 'piso-inicial', name: 'Piso inicial', description: 'Cobertura mínima de intervención.' },
              { id: 'piso-ampliado', name: 'Piso ampliado', description: 'Mayor área de cobertura.' }
            ]
          }
        ]
      },
      {
        id: 'medio-ambiente',
        name: 'Medio ambiente',
        description: 'Productos orientados a restauración, manejo y cuidado del entorno.',
        products: [
          {
            id: 'reforestacion',
            name: 'Módulo de reforestación',
            short: 'Material para restauración y cobertura vegetal.',
            description: 'Permite armar rutas de implementación por escala y objetivo ambiental.',
            variants: [
              { id: 'reforestacion-barrial', name: 'Cobertura barrial', description: 'Escala urbana o comunitaria.' },
              { id: 'reforestacion-rural', name: 'Cobertura rural', description: 'Intervención de mayor extensión.' }
            ]
          }
        ]
      },
      {
        id: 'energia',
        name: 'Energía',
        description: 'Equipamiento principal y complementario para soluciones energéticas y asociadas.',
        products: [
          {
            id: 'calentador-solar',
            name: 'Calentador solar',
            short: 'Línea de calentadores solares a gravedad para distintos volúmenes.',
            description: 'Calentadores solares a gravedad para distintos volúmenes.',
            variants: [
              { id: 'calentador-gravedad', name: 'Calentador solar a gravedad', description: 'Modelo general de operación por gravedad.' },
              { id: 'calentador-gravedad-80', name: 'Calentador Solar de Gravedad 80 L 8 tubos', description: 'Capacidad de 80 L con 8 tubos.' },
              { id: 'calentador-gravedad-100', name: 'Calentador Solar de Gravedad 100 L 10 tubos', description: 'Capacidad de 100 L con 10 tubos.' },
              { id: 'calentador-gravedad-120', name: 'Calentador Solar de Gravedad 120 L 12 tubos', description: 'Capacidad de 120 L con 12 tubos.' },
              { id: 'calentador-gravedad-150', name: 'Calentador Solar de Gravedad 150 L 15 tubos', description: 'Capacidad de 150 L con 15 tubos.' },
              { id: 'calentador-gravedad-180', name: 'Calentador Solar de Gravedad 180 L 18 tubos', description: 'Capacidad de 180 L con 18 tubos.' },
              { id: 'calentador-gravedad-200', name: 'Calentador Solar de Gravedad 200 L 20 tubos', description: 'Capacidad de 200 L con 20 tubos.' },
              { id: 'calentador-gravedad-240', name: 'Calentador Solar de Gravedad 240 L 24 tubos', description: 'Capacidad de 240 L con 24 tubos.' },
              { id: 'calentador-gravedad-300', name: 'Calentador Solar de Gravedad 300 L 30 tubos', description: 'Capacidad de 300 L con 30 tubos.' }
            ]
          },
          {
            id: 'refacciones',
            name: 'Refacciones',
            short: 'Refacciones y kits para instalación y mantenimiento de calentadores.',
            description: 'Componentes de reemplazo y mantenimiento para calentadores solares de alta y baja presión.',
            variants: [
              { id: 'kit-instalacion', name: 'KIT DE INSTALACIÓN', description: 'Kit base de instalación para calentador solar.' },
              { id: 'kit-empaques-blancos', name: 'KIT 5 EMPAQUES BLANCOS PARA CALENTADOR SOLAR BAJA PRESIÓN', description: 'Paquete de empaques de refacción para baja presión.' },
              { id: 'kit-anillos-cubrepolvos', name: 'KIT 5 ANILLOS CUBREPOLVOS NEGRO PARA TUBO DE CALENTADOR SOLAR ALTA Y BAJA PRESIÓN', description: 'Anillos cubrepolvos para tubos de alta y baja presión.' },
              { id: 'barra-magnesio', name: 'BARRA DE MAGNESIO 3/4 X 30 CM PARA CALENTADOR SOLAR BAJA PRESIÓN', description: 'Barra de protección interna para baja presión.' },
              { id: 'tubo-refaccion', name: 'TUBO DE REFACCIÓN PARA CALENTADOR SOLAR BAJA PRESIÓN', description: 'Tubo de repuesto para calentador solar.' },
              { id: 'kit-mantenimiento-alta-presion', name: 'KIT DE MANTENIMIENTO PARA CALENTADOR DE ALTA PRESIÓN 10 Y 12 TUBOS', description: 'Kit de mantenimiento para equipos de alta presión.' }
            ]
          },
          {
            id: 'bases',
            name: 'Bases',
            short: 'Estructuras de soporte para calentadores solares.',
            description: 'Bases de refacción para configuraciones de alta presión.',
            variants: [
              { id: 'base-refaccion-20', name: 'BASE DE REFACCIÓN PARA CALENTADOR SOLAR ALTA PRESIÓN DE 20 TUBOS', description: 'Base de refacción para calentador de 20 tubos.' }
            ]
          },
          {
            id: 'tinaco-tricapa',
            name: 'Tinaco tricapa',
            short: 'Tinacos para almacenamiento de agua en distintas capacidades.',
            description: 'Incluye línea Tinaco Plus y Tinaco MT Clásico para almacenamiento primario.',
            variants: [
              { id: 'tinaco-plus-2500', name: 'TINACO PLUS 2500 L', description: 'Capacidad de 2500 litros.' },
              { id: 'tinaco-plus-1100', name: 'TINACO PLUS 1100 L', description: 'Capacidad de 1100 litros.' },
              { id: 'tinaco-plus-800', name: 'TINACO PLUS 800 L', description: 'Capacidad de 800 litros.' },
              { id: 'tinaco-plus-450', name: 'TINACO PLUS 450 L', description: 'Capacidad de 450 litros.' },
              { id: 'tinaco-mt-clasico-1100', name: 'TINACO 1100 L MT CLÁSICO', description: 'Modelo MT Clásico de 1100 litros.' },
              { id: 'tinaco-mt-clasico-800', name: 'TINACO 800 L MT CLÁSICO', description: 'Modelo MT Clásico de 800 litros.' },
              { id: 'tinaco-mt-clasico-450', name: 'TINACO 450 L MT CLÁSICO', description: 'Modelo MT Clásico de 450 litros.' }
            ]
          },
          {
            id: 'tamboplas',
            name: 'Tamboplas',
            short: 'Depósitos de almacenamiento complementario.',
            description: 'Línea de tambos para resguardo de agua.',
            variants: [
              { id: 'tamboplas-250', name: 'TAMBOPLAS 250 Lts.', description: 'Tamboplas de 250 litros.' }
            ]
          },
          {
            id: 'refrigerador',
            name: 'Refrigerador',
            short: 'Modelos de refrigeradores para el hogar.',
            description: 'Incluye refrigeradores manuales, automáticos y TMNF en distintas capacidades.',
            variants: [
              { id: 'refri-210-grafito', name: 'Refrigerador Una puerta manual 210 L Grafito Mabe', description: 'Modelo manual de una puerta 210 L color grafito.' },
              { id: 'refri-251-inox-mate', name: 'REFRIGERADOR AUTOMÁTICO 251.19 L INOXIDABLE MATE', description: 'Modelo automático 251.19 L inoxidable mate.' },
              { id: 'refri-tmnf-302-sil', name: 'REFRIGERADOR TMNF 302 L MABE SIL', description: 'Modelo TMNF de 302 L Mabe SIL.' },
              { id: 'refri-360-inox-mate', name: 'REFRIGERADOR AUTOMÁTICO 360L INOXIDABLE MATE', description: 'Modelo automático 360 L inoxidable mate.' },
              { id: 'refri-400-acero-inoxidable', name: 'REFRIGERADOR AUTOMÁTICO 400 L ACERO INOXIDABLE', description: 'Modelo automático 400 L en acero inoxidable.' },
              { id: 'refri-210-black-stainless', name: 'Refrigerador Manual 210 L Black Stainless Steel Mabe', description: 'Modelo manual 210 L Black Stainless Steel.' },
              { id: 'refri-tmnf-302-b-eco', name: 'REFRIGERADOR TMNF 302 L MABE B/ECO', description: 'Modelo TMNF 302 L Mabe B/ECO.' },
              { id: 'refri-tmnf-513-inx', name: 'REFRIGERADOR TMNF 513 L MABE INX', description: 'Modelo TMNF de 513 L Mabe INX.' },
              { id: 'refri-1pta-93-bla', name: 'REFRIGERADOR 1PTA 93L MABE BLA', description: 'Modelo de 1 puerta y 93 L Mabe BLA.' }
            ]
          },
          {
            id: 'cafeteras',
            name: 'Cafeteras',
            short: 'Equipos para molienda y preparación de café.',
            description: 'Catálogo de cafeteras automáticas, espresso, percoladoras y modelos multisistema.',
            variants: [
              { id: 'molino-cafe', name: 'MOLINO DE CAFÉ', description: 'Molino para preparación de café molido.' },
              { id: 'cafetera-12-tazas', name: 'CAFETERA AUTOMÁTICA 12 TAZAS CON FILTRO REUTILIZABLE', description: 'Cafetera automática de 12 tazas.' },
              { id: 'cafetera-inox-15', name: 'Cafetera Inox Automática 15 tazas con filtro reutilizable', description: 'Modelo automático de 15 tazas.' },
              { id: 'maquina-espresso-individual', name: 'Máquina de Espresso Individual', description: 'Equipo espresso de porción individual.' },
              { id: 'cafetera-percoladora-6l', name: 'Cafetera Electrica Percoladora 6 L 40 Tazas', description: 'Percoladora de 6 litros para 40 tazas.' },
              { id: 'maquina-espresso-2', name: 'Maquina Espresso 2 tazas', description: 'Máquina espresso para dos tazas.' },
              { id: 'cafetera-molino-jarra-acero', name: 'CAFETERA CON MOLINO JARRA ACERO INOXIDABLE', description: 'Cafetera con molino y jarra de acero inoxidable.' },
              { id: 'cafetera-automatica-10', name: 'Cafetera Automática 10 tazas', description: 'Modelo automático para 10 tazas.' },
              { id: 'cafetera-multisistema-4en1', name: 'Cafetera multisistema 4 en 1', description: 'Equipo multisistema para distintos métodos.' }
            ]
          },
          {
            id: 'hornos-y-palomeras',
            name: 'Hornos Eléctricos y palomeras',
            short: 'Hornos, freidoras y equipos complementarios.',
            description: 'Línea de hornos tostadores, air fryer oven y equipos para preparación de alimentos.',
            variants: [
              { id: 'horno-tostador-9', name: 'Horno Tostador 9L', description: 'Horno tostador de 9 litros.' },
              { id: 'horno-tostador-20', name: 'Horno Tostador 20L', description: 'Horno tostador de 20 litros.' },
              { id: 'horno-tostador-40', name: 'Horno Tostador 40L', description: 'Horno tostador de 40 litros.' },
              { id: 'air-fryer-oven-25', name: 'AIR FRYER OVEN 25 L', description: 'Freidora tipo horno de 25 litros.' },
              { id: 'olla-presion-electrica-6', name: 'Olla de presión eléctrica de 6 L con 16 programas', description: 'Olla eléctrica programable de 6 litros.' },
              { id: 'maquina-palomitas-rj', name: 'Maquina de Palomitas RJ', description: 'Máquina de palomitas para uso doméstico.' }
            ]
          }
        ]
      },
      {
        id: 'arte-deporte-juventud',
        name: 'Arte, deporte y juventud',
        description: 'Equipamiento y apoyos para expresión, actividad física y participación juvenil.',
        products: [
          {
            id: 'kit-cultural',
            name: 'Kit cultural',
            short: 'Herramientas para talleres y activación comunitaria.',
            description: 'Agrupa componentes para actividades culturales, artísticas y juveniles.',
            variants: [
              { id: 'kit-musica', name: 'Kit de música', description: 'Enfoque en expresión sonora.' },
              { id: 'kit-visual', name: 'Kit visual', description: 'Material para artes visuales.' }
            ]
          }
        ]
      },
      {
        id: 'educacion',
        name: 'Educación',
        description: 'Recursos para aprendizaje, permanencia y operación educativa.',
        products: [
          {
            id: 'paquete-escolar',
            name: 'Paquete escolar',
            short: 'Material base para continuidad educativa.',
            description: 'Estructura apoyos educativos por nivel, uso y volumen.',
            variants: [
              { id: 'escolar-primaria', name: 'Paquete primaria', description: 'Para necesidades de educación básica.' },
              { id: 'escolar-media', name: 'Paquete media superior', description: 'Para continuidad académica.' }
            ]
          }
        ]
      },
      {
        id: 'agua',
        name: 'Agua',
        description: 'Infraestructura y componentes para acceso, almacenamiento y distribución.',
        products: [
          {
            id: 'captacion',
            name: 'Sistema de captación',
            short: 'Soluciones para recolección y aprovechamiento.',
            description: 'Integra piezas y variantes de almacenamiento, conducción y filtrado.',
            variants: [
              { id: 'captacion-basica', name: 'Captación básica', description: 'Configuración inicial de aprovechamiento.' },
              { id: 'captacion-filtrado', name: 'Captación con filtrado', description: 'Incluye tratamiento inicial.' }
            ]
          }
        ]
      },
      {
        id: 'innovacion-gestion',
        name: 'Innovación y gestión del conocimiento',
        description: 'Herramientas para sistematización, transferencia y fortalecimiento operativo.',
        products: [
          {
            id: 'plataforma',
            name: 'Plataforma de gestión',
            short: 'Seguimiento, registro y colaboración.',
            description: 'Permite estructurar oferta digital con variantes por alcance y uso.',
            variants: [
              { id: 'plataforma-base', name: 'Plataforma base', description: 'Operación y trazabilidad inicial.' },
              { id: 'plataforma-colaborativa', name: 'Plataforma colaborativa', description: 'Más capacidades para equipos.' }
            ]
          }
        ]
      },
      {
        id: 'seguridad-humana',
        name: 'Seguridad humana',
        description: 'Equipamiento preventivo y de respuesta para personas y comunidades.',
        products: [
          {
            id: 'kit-prevencion',
            name: 'Kit de prevención',
            short: 'Cobertura para atención y preparación básica.',
            description: 'Organiza soluciones preventivas por contexto y grado de cobertura.',
            variants: [
              { id: 'prevencion-familiar', name: 'Prevención familiar', description: 'Uso en vivienda.' },
              { id: 'prevencion-comunitaria', name: 'Prevención comunitaria', description: 'Uso colectivo o barrial.' }
            ]
          }
        ]
      },
      {
        id: 'inclusion-productiva-financiera',
        name: 'Inclusión productiva y financiera',
        description: 'Apoyos y herramientas para actividad económica y acceso financiero.',
        products: [
          {
            id: 'kit-emprendimiento',
            name: 'Kit de emprendimiento',
            short: 'Base operativa para activación productiva.',
            description: 'Permite estructurar apoyos por giro, escala y madurez del proyecto.',
            variants: [
              { id: 'emprendimiento-inicial', name: 'Kit inicial', description: 'Punto de partida para operación básica.' },
              { id: 'emprendimiento-expansion', name: 'Kit de expansión', description: 'Mayor alcance productivo.' }
            ]
          }
        ]
      }
    ];

    let activeChainId = 'agua';
    let activeProductId = 'captacion';
    let activeVariantId = null;
    let productsSearchQuery = '';
    const activeChainUrl = 'propuesta-soluciones-3.html';
    const selectionPanel = document.getElementById('selectionPanel');
    const selectionClose = document.getElementById('selectionClose');
    const detailPanel = document.getElementById('detailPanel');
    const detailClose = document.getElementById('detailClose');

    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mainMenu = document.getElementById('mainMenu');
    const searchToggle = document.getElementById('searchToggle');
    const searchPanel = document.getElementById('chainsSearchPanel');
    const searchClose = document.getElementById('searchClose');
    const chainsSearch = document.getElementById('chainsSearch');

    const chainsCardGrid = document.getElementById('chainsCardGrid');
    const breadcrumb = document.getElementById('breadcrumb');
    const productsTitle = document.getElementById('productsTitle');
    const productsSubtitle = document.getElementById('productsSubtitle');
    const productsSearch = document.getElementById('productsSearch');
    const productsList = document.getElementById('productsList');
    const detailTitle = document.getElementById('detailTitle');
    const detailDescription = document.getElementById('detailDescription');
    const detailCopyText = document.getElementById('detailCopyText');
    const variantsTitle = document.getElementById('variantsTitle');
    const variantsList = document.getElementById('variantsList');
    const detailsContent = document.getElementById('detailsContent');

    function getActiveChain() {
      return DATA.find(chain => chain.id === activeChainId) || DATA[0];
    }

    function getVisibleProducts(chain) {
      const normalizedQuery = productsSearchQuery.trim().toLowerCase();
      if (!normalizedQuery) {
        return chain.products;
      }
      return chain.products.filter(product => product.name.toLowerCase().includes(normalizedQuery));
    }

    function getActiveProduct() {
      const chain = getActiveChain();
      const visibleProducts = getVisibleProducts(chain);
      return visibleProducts.find(product => product.id === activeProductId) || visibleProducts[0] || null;
    }

    function getActiveVariant() {
      const product = getActiveProduct();
      return product?.variants.find(item => item.id === activeVariantId) || null;
    }

    function isChainDisabled(chainId) {
      return !['agua', 'vivienda'].includes(chainId);
    }

    function getChainDisplayName(chain) {
      const labels = {
        salud: 'Cadena 1. Salud',
        alimentacion: 'Cadena 2. Alimentación',
        vivienda: 'Cadena 3. Vivienda',
        'medio-ambiente': 'Cadena 4. Medio ambiente',
        energia: 'Cadena 5. Energía',
        'arte-deporte-juventud': 'Cadena 6. Arte, deporte y juventud',
        educacion: 'Cadena 7. Educación',
        agua: 'Cadena 8. Agua',
        'innovacion-gestion': 'Cadena 9. Innovación y gestión del conocimiento',
        'seguridad-humana': 'Cadena 10. Seguridad humana',
        'inclusion-productiva-financiera': 'Cadena 11. Inclusión productiva y financiera'
      };
      return labels[chain.id] || chain.name;
    }

    function productTemplate(product, isActive) {
      return `
        <button class="${isActive ? 'product-row is-active' : 'product-row'}" data-product-id="${product.id}">
          <div class="product-row__meta">
            <span class="product-row__title">${product.name}</span>
            <span class="product-row__desc">${product.short}</span>
          </div>
          <span class="product-row__count">${product.variants.length} variantes</span>
        </button>
      `;
    }

    function variantTemplate(variant, isActive) {
      return `
        <button
          type="button"
          class="${isActive ? 'variant-row is-active' : 'variant-row'}"
          data-view-variant="${variant.id}"
          aria-pressed="${isActive ? 'true' : 'false'}"
        >
          <div class="variant-row__top">
            <div class="variant-row__meta">
              <span class="variant-row__title">${variant.name}</span>
              <span class="variant-row__desc">${variant.description}</span>
            </div>
            <span class="variant-row__state">${isActive ? 'Seleccionada' : 'Seleccionar'}</span>
          </div>
        </button>
      `;
    }

    function getProductImage(product, variant) {
      const photoMap = {
        'panel-solar': 'img/Articulos/panel-solar.png',
        'calentador-solar': 'img/Articulos/calentador.png',
        'calentador-gravedad': 'img/Articulos/calentador.png',
        'calentador-gravedad-80': 'img/Articulos/calentador.png',
        'calentador-gravedad-100': 'img/Articulos/calentador.png',
        'calentador-gravedad-120': 'img/Articulos/calentador.png',
        'calentador-gravedad-150': 'img/Articulos/calentador.png',
        'calentador-gravedad-180': 'img/Articulos/calentador.png',
        'calentador-gravedad-200': 'img/Articulos/calentador.png',
        'calentador-gravedad-240': 'img/Articulos/calentador.png',
        'calentador-gravedad-300': 'img/Articulos/calentador.png',
        'tinaco-tricapa': 'img/Articulos/tinaco.png',
        'tinaco-plus-2500': 'img/Articulos/tinaco.png',
        'tinaco-plus-1100': 'img/Articulos/tinaco.png',
        'tinaco-plus-800': 'img/Articulos/tinaco.png',
        'tinaco-plus-450': 'img/Articulos/tinaco.png',
        'tinaco-mt-clasico-1100': 'img/Articulos/tinaco.png',
        'tinaco-mt-clasico-800': 'img/Articulos/tinaco.png',
        'tinaco-mt-clasico-450': 'img/Articulos/tinaco.png',
        tamboplas: 'img/Articulos/tamboplas.png',
        'tamboplas-250': 'img/Articulos/tamboplas.png'
      };

      return photoMap[variant?.id] || photoMap[product?.id] || null;
    }

    function getProductDescription(product, variant) {
      const isCalentadorGravedad = variant?.id === 'calentador-gravedad' || variant?.name === 'Calentador solar a gravedad';
      if (isCalentadorGravedad) {
        return `PANEL SOLAR ECO POWER

PANELES SOLARES Modelo: PSM-550N XT
CARACTERÍSTICAS:
• Color Negro/Plata
• Tecnología monocristalina de alta eficiencia
• Potencia máxima 550 Watts
• Voltaje de operación 41.8 V
• Corriente de operación 13.16 A
• Marco de aluminio anodizado resistente a la corrosión
• Cubierta de vidrio templado de alta transparencia
• Resistencia a lluvia, polvo y exposición solar prolongada
• Compatible con sistemas residenciales y comerciales
• Garantía 10 años en defectos de fabricación

Dimensiones con empaque:
Alto 230 cm
Ancho 115 cm
Profundo 5 cm
Peso 29.800 kg

Dimensiones sin empaque:
Alto 227.8 cm
Ancho 113.4 cm
Profundo 3.5 cm
Peso 27.600 kg

No. de Parte: 12-4550-08-1
Código de Barras: 7504550081236`;
      }
      return variant?.description || product?.description || 'Selecciona una variante para ver sus detalles completos.';
    }

    function detailsTemplate(chain, product, variant) {
      if (!variant) {
        return `
          <div class="step3-empty" role="status" aria-live="polite">
            <h3>Sin variante seleccionada</h3>
            <p>Selecciona una variante para ver montos, condiciones y cantidad.</p>
          </div>
        `;
      }

      const activeName = variant.name;
      const activeDescription = getProductDescription(product, variant);
      const photo = getProductImage(product, variant);
      const photoContent = photo
        ? `<img class="detail-photo__image" src="${photo}" alt="${activeName}" />`
        : '<div class="photo-placeholder">Imagen del producto</div>';

      return `
        <h3 class="detail-product-title">Artículo: ${activeName}</h3>

        <section class="detail-photo">
          ${photoContent}
        </section>

        <div class="detail-info-list">
          <div class="detail-info-card"><strong>Marca:</strong> CMT</div>
          <div class="detail-info-card"><strong>Código:</strong> ${variant.id}</div>
        </div>

        <section class="amounts-summary" aria-label="Resumen de montos">
          <article class="amount-card">
            <span class="amount-card__label">Monto normal</span>
            <strong class="amount-card__value">$1,200.00</strong>
          </article>
          <article class="amount-card">
            <span class="amount-card__label">Subsidio CMT</span>
            <strong class="amount-card__value">$400.00</strong>
          </article>
          <article class="amount-card amount-card--final">
            <span class="amount-card__label">Aportación final</span>
            <strong class="amount-card__value">$800.00</strong>
          </article>
        </section>

        <div class="detail-info-card detail-minimum"><strong>Mínimo para libre a bordo combinado:</strong> 10</div>
        <p class="detail-info-card detail-management">La gestión que tienes seleccionada <strong>(GCE29055-48976)</strong> se dirige a:<br>Oaxaca, Santa Cruz Xoxocotlán, Santa Cruz Xoxocotlán</p>

        <section class="detail-checkout-block" aria-label="Cantidad y envío a gestión">
          <div class="detail-qty">
            <label for="cantidadProducto">Cantidad</label>
            <div class="qty-control">
              <button class="qty-control__button" type="button" data-qty-change="-1" aria-label="Disminuir cantidad">−</button>
              <input id="cantidadProducto" type="number" min="1" value="1" />
              <button class="qty-control__button" type="button" data-qty-change="1" aria-label="Aumentar cantidad">+</button>
            </div>
          </div>
          <button class="action-primary action-primary--block" type="button">Agregar a la gestión</button>
        </section>

        <section class="detail-description">
          <button class="detail-accordion__trigger" type="button" data-description-toggle aria-expanded="false" aria-controls="detailDescriptionPanel">Descripción</button>
          <div class="detail-accordion__panel" id="detailDescriptionPanel" hidden>
            <p>${activeDescription.replaceAll('\n', '<br>')}</p>
          </div>
        </section>

        <button class="action-secondary" type="button">Descargar ficha técnica</button>
      `;
    }

    function renderBreadcrumb(chain, product) {
      breadcrumb.innerHTML = `
        <button data-breadcrumb="chain">${getChainDisplayName(chain)}</button>
        <span>→</span>
        <span class="current">${product ? product.name : 'Sin producto seleccionado'}</span>
      `;
    }

    function renderProducts(chain) {
      const visibleProducts = getVisibleProducts(chain);
      if (!visibleProducts.length) {
        activeProductId = null;
        activeVariantId = null;
      } else if (!visibleProducts.some(product => product.id === activeProductId)) {
        activeProductId = visibleProducts[0].id;
        activeVariantId = null;
      }

      productsTitle.textContent = chain.name;
      productsSubtitle.textContent = chain.description;
      productsList.innerHTML = visibleProducts.length
        ? visibleProducts.map(product => productTemplate(product, product.id === activeProductId)).join('')
        : '<div class="selection-empty">No hay productos que coincidan con la búsqueda.</div>';
    }

    function renderDetail(chain, product) {
      if (!product) {
        detailTitle.textContent = 'Sin resultados';
        detailDescription.textContent = 'Selecciona un producto para ver su detalle.';
        detailCopyText.textContent = 'Selecciona una variante para revisar montos, condiciones y cantidad.';
        variantsTitle.textContent = 'Elige una variante';
        variantsList.innerHTML = '<div class="selection-empty">No hay variantes visibles.</div>';
        return;
      }

      detailTitle.textContent = product.name;
      detailDescription.textContent = product.description;
      detailCopyText.textContent = 'Selecciona una variante para revisar montos, condiciones y cantidad.';
      variantsTitle.textContent = 'Elige una variante';
      const visibleVariants = product.variants;

      variantsList.innerHTML = visibleVariants.length
        ? visibleVariants.map(variant => variantTemplate(variant, variant.id === activeVariantId)).join('')
        : '<div class="selection-empty">No hay variantes disponibles.</div>';
    }

    function renderStep3(chain, product) {
      const variant = getActiveVariant();
      detailsContent.innerHTML = detailsTemplate(chain, product, variant);
    }

    function render() {
      document.body.classList.add('is-chain-dashboard');
      chainsCardGrid?.querySelectorAll('[data-chain-id]').forEach(button => {
        const isDisabled = isChainDisabled(button.dataset.chainId);
        button.classList.toggle('is-disabled', isDisabled);
        button.setAttribute('aria-disabled', String(isDisabled));
        button.tabIndex = isDisabled ? -1 : 0;
      });
    }

    function setActiveProduct(productId) {
      activeProductId = productId;
      activeVariantId = null;
      render();
      openDetail();
    }

    function setActiveChain(chainId) {
      const chain = DATA.find(item => item.id === chainId);
      if (!chain || isChainDisabled(chain.id)) return;

      activeChainId = chain.id;
      productsSearchQuery = '';
      activeProductId = chain.products[0]?.id || null;
      activeVariantId = null;
      if (productsSearch) {
        productsSearch.value = '';
      }
      render();
    }

    function showChainsDashboard() {
      closeDetail();
      closeSelection();
      render();
    }

    function openSelection() {
      selectionPanel.classList.add('is-open');
      document.body.classList.add('selection-open');
    }

    function closeSelection() {
      selectionPanel.classList.remove('is-open');
      document.body.classList.remove('selection-open');
    }

    function openDetail() {
      detailPanel.classList.add('is-open');
      document.body.classList.add('detail-open');
    }

    function closeDetail() {
      detailPanel.classList.remove('is-open');
      document.body.classList.remove('detail-open');
    }

    function isMobileViewport() {
      return window.matchMedia('(max-width: 899px)').matches;
    }

    function isChainsSearchViewport() {
      return window.matchMedia('(max-width: 720px)').matches;
    }


    function openSearch() {
      if (!searchPanel || !isChainsSearchViewport()) return;
      closeMobileMenu();
      searchPanel.classList.add('is-open');
      searchPanel.setAttribute('role', 'dialog');
      searchPanel.setAttribute('aria-modal', 'true');
      searchToggle?.setAttribute('aria-expanded', 'true');
      document.body.classList.add('search-panel-open');
      window.requestAnimationFrame(() => chainsSearch?.focus());
    }

    function closeSearch({ restoreFocus = true } = {}) {
      if (!searchPanel) return;
      const wasOpen = searchPanel.classList.contains('is-open');
      searchPanel.classList.remove('is-open');
      searchPanel.removeAttribute('role');
      searchPanel.removeAttribute('aria-modal');
      searchToggle?.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('search-panel-open');
      if (wasOpen && restoreFocus) searchToggle?.focus();
    }

    selectionClose?.addEventListener('click', closeSelection);
    detailClose?.addEventListener('click', closeDetail);

    function closeMobileMenu() {
      document.body.classList.remove('mobile-menu-open');
      mobileMenuToggle?.setAttribute('aria-expanded', 'false');
    }

    mobileMenuToggle?.addEventListener('click', () => {
      closeSearch({ restoreFocus: false });
      const isOpen = document.body.classList.toggle('mobile-menu-open');
      mobileMenuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    searchToggle?.addEventListener('click', openSearch);
    searchClose?.addEventListener('click', () => closeSearch());


    mainMenu?.addEventListener('click', (event) => {
      const toggle = event.target.closest('[data-menu-group]');
      if (!toggle) return;

      const group = toggle.closest('.main-menu__group');
      if (!group) return;

      const isOpen = group.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));

      mainMenu.querySelectorAll('.main-menu__group.is-open').forEach(item => {
        if (item === group) return;
        item.classList.remove('is-open');
        item.querySelector('[data-menu-group]')?.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (event) => {
      if (document.body.classList.contains('mobile-menu-open') && mainMenu && !mainMenu.contains(event.target) && !mobileMenuToggle?.contains(event.target)) {
        closeMobileMenu();
      }

      if (!mainMenu || mainMenu.contains(event.target)) return;
      mainMenu.querySelectorAll('.main-menu__group.is-open').forEach(group => {
        group.classList.remove('is-open');
        group.querySelector('[data-menu-group]')?.setAttribute('aria-expanded', 'false');
      });
    });

    productsList.addEventListener('click', (event) => {
      const button = event.target.closest('[data-product-id]');
      if (!button) return;
      setActiveProduct(button.dataset.productId);
    });

    chainsCardGrid?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-chain-id]');
      if (!button) return;
      if (isChainDisabled(button.dataset.chainId)) return;
      window.location.href = `${activeChainUrl}?cadena=${encodeURIComponent(button.dataset.chainId)}`;
    });

    breadcrumb?.addEventListener('click', (event) => {
      const button = event.target.closest('[data-breadcrumb="chain"]');
      if (!button) return;
      showChainsDashboard();
    });

    productsSearch?.addEventListener('input', (event) => {
      productsSearchQuery = event.target.value || '';
      const chain = getActiveChain();
      const firstVisibleProduct = getVisibleProducts(chain)[0];
      if (!firstVisibleProduct) {
        activeProductId = null;
        activeVariantId = null;
      } else if (activeProductId !== firstVisibleProduct.id && !getVisibleProducts(chain).some(product => product.id === activeProductId)) {
        activeProductId = firstVisibleProduct.id;
        activeVariantId = null;
      }
      render();
    });

    variantsList.addEventListener('click', (event) => {
      const button = event.target.closest('[data-view-variant]');
      if (!button) return;
      activeVariantId = button.dataset.viewVariant;
      render();
      openSelection();
    });

    detailsContent.addEventListener('click', (event) => {
      const descriptionToggle = event.target.closest('[data-description-toggle]');
      if (descriptionToggle) {
        const panel = detailsContent.querySelector('#detailDescriptionPanel');
        if (!panel) return;
        const isExpanded = descriptionToggle.getAttribute('aria-expanded') === 'true';
        descriptionToggle.setAttribute('aria-expanded', String(!isExpanded));
        panel.hidden = isExpanded;
        return;
      }

      const qtyButton = event.target.closest('[data-qty-change]');
      if (!qtyButton) return;
      const qtyInput = detailsContent.querySelector('#cantidadProducto');
      if (!qtyInput) return;

      const currentValue = Number(qtyInput.value) || 1;
      const minValue = Number(qtyInput.min) || 1;
      const delta = Number(qtyButton.dataset.qtyChange) || 0;
      qtyInput.value = String(Math.max(minValue, currentValue + delta));
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (searchPanel?.classList.contains('is-open')) {
          closeSearch();
          return;
        }
        mainMenu?.querySelectorAll('.main-menu__group.is-open').forEach(group => {
          group.classList.remove('is-open');
          group.querySelector('[data-menu-group]')?.setAttribute('aria-expanded', 'false');
        });
        closeMobileMenu();
        closeDetail();
        closeSelection();
      }
    });

    window.addEventListener('resize', () => {
      if (!isMobileViewport()) {
        closeMobileMenu();
        closeDetail();
        closeSelection();
      }
      if (!isChainsSearchViewport()) closeSearch({ restoreFocus: false });
    });


    render();
