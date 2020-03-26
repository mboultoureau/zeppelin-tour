/**
 * Zeppelin Tour
 * https://github.com/mboultoureau/zeppelin-tour
 * Created by Ronan Renoux and Mathis Boultoureau
 */

/* REVIEWS */
const reviews = document.querySelectorAll('.reviews article');
let index = Array.from(reviews).findIndex(review =>
    review.classList.contains('review-current')
);

// Click on "Previous" button
document
    .getElementById('review-previous-button')
    .addEventListener('click', e => {
        e.preventDefault();
        if (index > 0) {
            // Courant
            reviews[index].classList.remove('review-current');
            reviews[index].classList.add('review-next');

            // Précédent
            reviews[index - 1].classList.remove('review-previous');
            reviews[index - 1].classList.add('review-current');

            // Précédent précédent
            if (index > 1) {
                reviews[index - 2].classList.remove('review-very-previous');
                reviews[index - 2].classList.add('review-previous');
            } else {
                reviews[reviews.length - 1].classList.remove(
                    'review-very-previous'
                );
                reviews[reviews.length - 1].classList.add('review-previous');
            }

            // Suivant
            reviews[index + 1].classList.remove('review-next');
            reviews[index + 1].classList.add('review-very-next');

            if (index == 2) {
                reviews[reviews.length - 1].classList.remove(
                    'review-very-next'
                );
                reviews[reviews.length - 1].classList.add(
                    'review-very-previous'
                );
            }
            index--;
        } else {
            // Courant
            reviews[reviews.length - 1].classList.remove('review-previous');

            index = reviews.length;
        }
    });

document.getElementById('review-next-button').addEventListener('click', e => {
    e.preventDefault();
    if (index < reviews.length - 1) {
        // Précédent
        reviews[index - 1].classList.remove('review-previous');
        reviews[index - 1].classList.add('review-very-previous');

        // Courant
        reviews[index].classList.remove('review-current');
        reviews[index].classList.add('review-previous');

        // Suivant
        reviews[index + 1].classList.remove('review-next');
        reviews[index + 1].classList.add('review-current');

        // Suivant suivant
        reviews[index + 2].classList.remove('review-very-next');
        reviews[index + 2].classList.add('review-next');

        index++;
    } else {
    }
});
