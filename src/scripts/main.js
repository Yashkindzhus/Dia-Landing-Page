'use strict';

const list = document.querySelector('.slider__list');
const prev = document.querySelector('.slider__prev');
const next = document.querySelector('.slider__next');

let position = 0;

move(0);

next.addEventListener('click', function() {
  move(1);
});

prev.addEventListener('click', function() {
  move(-1);
});

function move(shift) {
  const count = list.children.length;

  position += shift;

  next.disabled = position >= count - 1;
  prev.disabled = position <= 0;

  position = (position + count) % count;

  list.style.transform = `translateX(${-position * 100}%)`;
}

const body = document.querySelector('.page__body');
const menuOpener = document.querySelector('.menu-toggler--opener');
const menu = document.querySelector('.menu');

menuOpener.addEventListener('click', function() {
  body.classList.add('page__body--with-menu');
});

menu.addEventListener('click', () => {
  body.classList.remove('page__body--with-menu');
});
