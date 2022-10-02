const selector = document.querySelector('[data-mask]');

const im = new Inputmask('+380(99) 999-99-99', {
  placeholder: '-',
});
im.mask(selector);
