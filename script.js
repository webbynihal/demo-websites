document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    const badge = card.querySelector('.lang-badge');
    if (badge) {
      badge.style.opacity = '0.9';
      badge.style.transform = 'translateY(0)';
    }

    card.style.animationDelay = `${index * 120}ms`;
    card.style.animation = 'fadeInUp 0.7s ease forwards';
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(18px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
});
