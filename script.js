/* ============================================================
   OURA & CO. — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Services accordion ---------- */
  var services = [
    {
      title: 'DESIGN PROJECT DEVELOPMENT',
      body: 'We create a complete design concept, carefully balancing style and functionality to reflect your vision in every detail.',
      photo: 'assets/img/svc-1.jpg'
    },
    {
      title: 'INTERIOR DECORATION',
      body: 'Styling the finished space — textiles, art, lighting and objects chosen to give the room its final character.',
      photo: 'assets/img/svc-2.jpg'
    },
    {
      title: 'PROJECT VISUALIZATION',
      body: 'Photorealistic renders of every room so you can walk the space and approve materials before work begins.',
      photo: 'assets/img/svc-3.jpg'
    },
    {
      title: 'SELECTION AND PURCHASE OF MATERIALS AND FURNITURE',
      body: 'Sourcing, specifying and procuring everything on the plan, with trade pricing and delivery managed end to end.',
      photo: 'assets/img/svc-4.jpg'
    },
    {
      title: 'PROJECT MANAGEMENT',
      body: 'Contractor coordination, schedule and budget control, site supervision from demolition to final handover.',
      photo: 'assets/img/about-still.webp'
    },
    {
      title: 'REPAIR AND RECONSTRUCTION',
      body: 'Structural changes, re-planning and full renovation carried out by our vetted construction partners.',
      photo: 'assets/img/concept-sofa.webp'
    }
  ];

  var openIndex = 0; // first item open by default (matches original)
  var list = document.getElementById('services-list');

  function pad(n) { return String(n).padStart(2, '0'); }

  function render() {
    if (!list) return;
    var html = '';
    services.forEach(function (s, i) {
      var isOpen = openIndex === i;
      var panelId = 'svc-panel-' + i;
      html +=
        '<div class="svc' + (isOpen ? ' is-open' : '') + '" data-index="' + i + '" ' +
             'role="button" tabindex="0" ' +
             'aria-expanded="' + (isOpen ? 'true' : 'false') + '" ' +
             'aria-controls="' + panelId + '">' +
          '<span class="svc__num">' + pad(i + 1) + '</span>' +
          '<div>' +
            '<h3 class="svc__title">' + s.title + '</h3>' +
            '<div class="svc__panel" id="' + panelId + '">' +
              '<div><div class="svc__inner">' +
                '<p>' + s.body + '</p>' +
                '<div class="svc__photo"><img src="' + s.photo + '" alt="' + s.title + '" loading="lazy"></div>' +
              '</div></div>' +
            '</div>' +
          '</div>' +
          '<span class="svc__sign" aria-hidden="true">' + (isOpen ? '–' : '+') + '</span>' +
        '</div>';
    });
    html += '<div class="end-line"></div>';
    list.innerHTML = html;
  }

  function toggle(i) {
    openIndex = openIndex === i ? -1 : i;
    render();
    // Re-focus the row that was activated (render() replaces the DOM).
    var next = list.querySelector('.svc[data-index="' + i + '"]');
    if (next) next.focus();
  }

  if (list) {
    render();
    list.addEventListener('click', function (e) {
      var row = e.target.closest('.svc');
      if (!row) return;
      toggle(parseInt(row.getAttribute('data-index'), 10));
    });
    // Keyboard support: Enter / Space activate the focused row.
    list.addEventListener('keydown', function (e) {
      if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
      var row = e.target.closest('.svc');
      if (!row) return;
      e.preventDefault();
      toggle(parseInt(row.getAttribute('data-index'), 10));
    });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (note) {
        note.hidden = false;
        note.textContent = 'Thanks — we’ll be in touch about your project shortly.';
      }
      form.reset();
    });
  }
})();
