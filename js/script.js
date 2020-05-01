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