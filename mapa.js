// Interacción básica del PNG: ajuste proporcional, zoom y arrastre.
(() => {
  const viewport = document.getElementById('map-viewport');
  const image = document.getElementById('map-image');
  const content = document.getElementById('map-content');
  const plus = document.getElementById('zoom-in');
  const minus = document.getElementById('zoom-out');
  const value = document.getElementById('zoom-value');
  let zoom = 1, x = 0, y = 0, drag = null;

  function draw() {
    if (!image.naturalWidth) return;
    const fit = Math.min((viewport.clientWidth - 24) / image.naturalWidth,
      (viewport.clientHeight - 24) / image.naturalHeight);
    const scale = fit * zoom;
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    const limitX = Math.max(0, (width - viewport.clientWidth) / 2);
    const limitY = Math.max(0, (height - viewport.clientHeight) / 2);
    x = Math.max(-limitX, Math.min(limitX, x));
    y = Math.max(-limitY, Math.min(limitY, y));
    content.style.width = `${image.naturalWidth}px`;
    content.style.height = `${image.naturalHeight}px`;
    content.style.transform = `translate(${x - width / 2}px, ${y - height / 2}px) scale(${scale})`;
    content.classList.add('is-ready');
    value.textContent = `${Math.round(zoom * 100)}%`;
    plus.disabled = zoom === 4;
    minus.disabled = zoom === 1;
  }

  function changeZoom(factor) {
    zoom = Math.max(1, Math.min(4, zoom * factor));
    draw();
    document.getElementById('map-status').textContent = `Zoom: ${Math.round(zoom * 100)}%.`;
  }
  plus.onclick = () => changeZoom(1.25);
  minus.onclick = () => changeZoom(1 / 1.25);
  viewport.addEventListener('wheel', event => {
    if (event.target.closest('.zoom-controls')) return;
    event.preventDefault();
    changeZoom(event.deltaY < 0 ? 1.1 : 1 / 1.1);
  }, { passive: false });

  viewport.onpointerdown = event => {
    if (!event.isPrimary || event.button !== 0 || event.target.closest('.zoom-controls')) return;
    viewport.focus({ preventScroll: true });
    viewport.setPointerCapture(event.pointerId);
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
    viewport.classList.add('is-dragging');
  };
  viewport.onpointermove = event => {
    if (!drag || drag.id !== event.pointerId) return;
    x += event.clientX - drag.x;
    y += event.clientY - drag.y;
    drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
    draw();
  };
  viewport.onlostpointercapture = viewport.onpointercancel = viewport.onpointerup = event => {
    if (drag?.id !== event.pointerId) return;
    drag = null;
    viewport.classList.remove('is-dragging');
  };
  viewport.onkeydown = event => {
    if (event.target !== viewport) return;
    if (['+', '=', '-'].includes(event.key)) changeZoom(event.key === '-' ? 1 / 1.25 : 1.25);
    else if (['0', 'Home'].includes(event.key)) { zoom = 1; x = y = 0; draw(); }
    else if (event.key.startsWith('Arrow')) {
      x += event.key === 'ArrowLeft' ? 40 : event.key === 'ArrowRight' ? -40 : 0;
      y += event.key === 'ArrowUp' ? 40 : event.key === 'ArrowDown' ? -40 : 0;
      draw();
    } else return;
    event.preventDefault();
  };
  image.onload = draw;
  image.onerror = () => {
    document.getElementById('map-error').hidden = false;
    plus.disabled = minus.disabled = true;
  };
  if (image.complete) { if (image.naturalWidth) draw(); else image.onerror(); }
  new ResizeObserver(draw).observe(viewport);
})();
