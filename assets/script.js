/* Paola Philo — UI behaviors : theme + progression */

(function () {
  'use strict';

  const STORAGE_THEME = 'paola-philo-theme';
  const STORAGE_PROGRESS = 'paola-philo-progress';

  /* ---------- Theme ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☾ Sombre' : '☼ Clair';
  }

  function initTheme() {
    const saved = localStorage.getItem(STORAGE_THEME);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);

    const btn = document.querySelector('.theme-toggle');
    if (btn) {
      btn.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_THEME, next);
        applyTheme(next);
      });
    }
  }

  /* ---------- Progression ---------- */
  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PROGRESS) || '{}');
    } catch (_) {
      return {};
    }
  }
  function setProgress(p) {
    localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(p));
  }

  function initProgress() {
    const progress = getProgress();
    const checkboxes = document.querySelectorAll('.check[data-fiche]');

    checkboxes.forEach(cb => {
      const id = cb.dataset.fiche;
      if (progress[id]) {
        cb.classList.add('checked');
        const li = cb.closest('li');
        if (li) li.classList.add('done');
      }
      cb.addEventListener('click', (e) => {
        e.preventDefault();
        const state = !cb.classList.contains('checked');
        cb.classList.toggle('checked', state);
        const li = cb.closest('li');
        if (li) li.classList.toggle('done', state);
        progress[id] = state;
        setProgress(progress);
        updateBlockProgress();
      });
    });

    updateBlockProgress();
  }

  function updateBlockProgress() {
    const blocks = document.querySelectorAll('.block[data-block]');
    let totalDone = 0;
    let totalAll = 0;

    blocks.forEach(block => {
      const checks = block.querySelectorAll('.check[data-fiche]');
      const done = block.querySelectorAll('.check.checked').length;
      const total = checks.length;
      totalDone += done;
      totalAll += total;

      const label = block.querySelector('.progress-count');
      const fill = block.querySelector('.progress-bar-fill');
      if (label) label.textContent = `${done}/${total}`;
      if (fill) fill.style.width = total ? `${(done / total) * 100}%` : '0%';
    });

    const globalCount = document.querySelector('.global-count');
    const globalFill = document.querySelector('.global-bar-fill');
    if (globalCount) globalCount.textContent = `${totalDone}/${totalAll}`;
    if (globalFill) globalFill.style.width = totalAll ? `${(totalDone / totalAll) * 100}%` : '0%';
  }

  /* ---------- Countdown to exam ---------- */
  function initCountdown() {
    const el = document.querySelector('.countdown .count');
    if (!el) return;
    const exam = new Date('2026-06-15T08:00:00+04:00');
    const now = new Date();
    const diff = exam - now;
    const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
    el.textContent = days;
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initProgress();
    initCountdown();
  });
})();
