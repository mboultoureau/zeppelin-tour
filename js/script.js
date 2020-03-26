/**
 * Zeppelin Tour
 * https://github.com/mboultoureau/zeppelin-tour
 * Created by Ronan Renoux and Mathis Boultoureau
 */

/* REVIEWS */
const reviews = document.querySelectorAll('.reviews article');
const MAX = reviews.length;
let index = Array.from(reviews).findIndex(review =>
    review.classList.contains('review-current')
);

function updateReviews() {
    reviews.forEach((review, i) => {
        review.classList = '';

        if (index === i) {
            review.classList.add('review-current');
        } else if (index + 1 === i || (index === MAX - 1 && i === 0)) {
            review.classList.add('review-next');
        } else if (index - 1 === i || (index === 0 && i === MAX - 1)) {
            review.classList.add('review-previous');
        } else if (
            i >= index + 2 ||
            (index === MAX - 2 && i === 0) ||
            (index === MAX - 1 && i === 1)
        ) {
            review.classList.add('review-very-next');
        } else {
            review.classList.add('review-very-previous');
        }
    });
}

// Click on "Previous" button
document
    .getElementById('review-previous-button')
    .addEventListener('click', e => {
        e.preventDefault();
        if (index === 0) {
            index = MAX - 1;
        } else {
            index--;
        }

        updateReviews();
    });

// Click on "Next" button
document.getElementById('review-next-button').addEventListener('click', e => {
    e.preventDefault();
    if (index === MAX - 1) {
        index = 0;
    } else {
        index++;
    }

    updateReviews();
});
//         if (index > 0) {
//             // Courant
//             reviews[index].classList.remove('review-current');
//             reviews[index].classList.add('review-next');

//             // Précédent
//             reviews[index - 1].classList.remove('review-previous');
//             reviews[index - 1].classList.add('review-current');

//             // Précédent précédent
//             if (index > 1) {
//                 reviews[index - 2].classList.remove('review-very-previous');
//                 reviews[index - 2].classList.add('review-previous');
//             } else {
//                 reviews[reviews.length - 1].classList.remove(
//                     'review-very-previous'
//                 );
//                 reviews[reviews.length - 1].classList.add('review-previous');
//             }

//             // Suivant
//             reviews[index + 1].classList.remove('review-next');
//             reviews[index + 1].classList.add('review-very-next');

//             if (index == 2) {
//                 reviews[reviews.length - 1].classList.remove(
//                     'review-very-next'
//                 );
//                 reviews[reviews.length - 1].classList.add(
//                     'review-very-previous'
//                 );
//             }
//             index--;
//         } else {
//             // Courant
//             reviews[reviews.length - 1].classList.remove('review-previous');

//             index = reviews.length;
//         }
//     });

// document.getElementById('review-next-button').addEventListener('click', e => {
//     e.preventDefault();
//     if (index < reviews.length - 1) {
//         // Précédent
//         reviews[index - 1].classList.remove('review-previous');
//         reviews[index - 1].classList.add('review-very-previous');

//         // Courant
//         reviews[index].classList.remove('review-current');
//         reviews[index].classList.add('review-previous');

//         // Suivant
//         reviews[index + 1].classList.remove('review-next');
//         reviews[index + 1].classList.add('review-current');

//         // Suivant suivant
//         reviews[index + 2].classList.remove('review-very-next');
//         reviews[index + 2].classList.add('review-next');

//         index++;
//     } else {
//     }
// });
