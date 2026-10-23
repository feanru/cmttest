// Comportamiento visual de filtros. Sistemas conecta mapfilterschange a sus datos.
(() => {
  const root = document.getElementById('territory-explorer');
  const form = document.getElementById('map-filters');
  const fields = form.elements;
  const mobile = document.getElementById('mobile-filters');
  const feedback = document.getElementById('filter-feedback');

  function showGroup(id, show) {
    const group = document.getElementById(id);
    group.hidden = !show;
    group.querySelectorAll('input, select, fieldset').forEach(field => { field.disabled = !show; });
  }
  function updateFields() {
    const scope = fields.scope.value;
    showGroup('state-field', scope !== 'country');
    fields.state.required = scope !== 'country';
    showGroup('municipality-field', scope === 'municipality');
    fields.municipality.required = scope === 'municipality';
    showGroup('active-fields', fields.active.checked);
    showGroup('period-fields', fields.active.checked && fields.hasManagement.checked);
  }
  function setPanel(open) {
    root.classList.toggle('filters-open', open);
    mobile.setAttribute('aria-expanded', String(open));
    mobile.querySelector('use').setAttribute('href', open ? '#icon-close' : '#icon-filters');
    mobile.querySelector('span').textContent = open ? 'Cerrar filtros' : 'Filtros';
  }
  function selection() {
    const data = new FormData(form);
    return { ...Object.fromEntries(data), chain: data.getAll('chain') };
  }
  function emitFilters() {
    root.dispatchEvent(new CustomEvent('mapfilterschange', { bubbles: true, detail: selection() }));
  }

  form.onchange = updateFields;
  form.oninput = () => { feedback.hidden = true; };
  form.addEventListener('invalid', event => { event.target.closest('details').open = true; }, true);
  form.onsubmit = event => {
    event.preventDefault();
    const filters = selection();
    document.getElementById('scope-label').textContent = filters.scope === 'country' ? 'Todo México'
      : filters.scope === 'state' ? filters.state : `${filters.municipality}, ${filters.state}`;
    const count = form.querySelectorAll('input[type="checkbox"]:enabled:checked').length
      + (filters.scope !== 'country' ? 1 : 0) + (filters.solution ? 1 : 0);
    const badge = document.getElementById('filter-count');
    badge.textContent = count;
    badge.hidden = count === 0;
    feedback.textContent = 'Filtros seleccionados.';
    feedback.hidden = false;
    emitFilters();
    if (window.matchMedia('(max-width: 760px)').matches) { setPanel(false); mobile.focus(); }
  };
  form.onreset = () => requestAnimationFrame(() => {
    updateFields();
    document.getElementById('scope-label').textContent = 'Todo México';
    document.getElementById('filter-count').hidden = true;
    feedback.hidden = true;
    emitFilters();
  });
  mobile.onclick = () => setPanel(!root.classList.contains('filters-open'));
  root.onkeydown = event => {
    if (event.key === 'Escape' && root.classList.contains('filters-open')) { setPanel(false); mobile.focus(); }
  };
  updateFields();
})();
