// Sélectionne tous les cercles
const cercles = document.querySelectorAll('.cercle');

// Pour chaque cercle, ajoute des écouteurs d'événements
cercles.forEach(cercle => {
  // Au survol : applique une rotation de 50 degrés
  cercle.addEventListener('mouseenter', () => {
    console.log('Survol !');

    cercle.style.transform = 'rotate(50deg)';
  });

  // Quand la souris quitte : remet la rotation à zéro
  cercle.addEventListener('mouseleave', () => {
    cercle.style.transform = 'rotate(0deg)';
  });
});