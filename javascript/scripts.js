// ------- animations au survol des cercles -------

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

document.addEventListener('DOMContentLoaded', () => {
  const btn   = document.getElementById('kamehameha');
  const rayon = document.getElementById('rayon');
  const sound = document.getElementById('kame-sound');

  btn.addEventListener('click', () => {

    btn.style.display = 'none';

    // remet le rayon à l'état initial
    rayon.style.width = '0';
    rayon.style.display = 'block';

    // Joue le son
    sound.currentTime = 0;
    sound.play();

    // On attend que la durée du son soit connue (si pas déjà chargée)
    if (isNaN(sound.duration)) {
      sound.addEventListener('loadedmetadata', startAnimation);
    } else {
      startAnimation();
    }

    function startAnimation() {
      const duree = sound.duration; // secondes
      // applique la durée directement dans le style
      rayon.style.animation = `kamehameha ${duree}s forwards`;

      // quand l'animation se termine
      rayon.addEventListener('animationend', () => {
        rayon.style.display = 'none';
        rayon.style.animation = '';
        btn.style.display = 'inline-block';
      }, { once: true });
    }
  });
});
