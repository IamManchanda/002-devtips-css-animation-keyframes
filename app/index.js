/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// ================================
// START YOUR APP HERE
// ================================

// Box
const box = document.querySelector('.box');
['click'].forEach((event) => {
  box.addEventListener(event, function () {
    this.classList.contains('is-box-active') ? this.classList.remove('is-box-active') : this.classList.add('is-box-active');
  });
});

// Text
// const text = document.querySelector('.text');
// ['click'].forEach((event) => {
//   text.addEventListener(event, function () {
//     this.classList.contains('is-text-active') ? this.classList.remove('is-text-active') : this.classList.add('is-text-active');
//   });
// });
