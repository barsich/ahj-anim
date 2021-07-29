/* eslint-disable no-unused-expressions */
export default class Collapse {
  constructor(container) {
    this.container = container;
    this.collapseBlock = null;
    this.button = null;

    this.collapseToggle = this.collapseToggle.bind(this);
  }

  init() {
    this.buildIt();
    this.collapseBlock = document.querySelector('.collapsible');
    this.button = document.querySelector('.collapse-button');
    this.button.addEventListener('click', this.collapseToggle);
    this.collapseBlock.style.height = '0px';
  }

  buildIt() {
    const button = document.createElement('button');
    button.classList.add('collapse-button', 'button');
    button.textContent = 'Collapse';
    const collapsible = document.createElement('div');
    collapsible.classList.add('collapsible');
    const lorem = document.createElement('div');
    lorem.classList.add('lorem');
    lorem.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda sed beatae,
    adipisci vel suscipit placeat veniam, autem atque quo dolores fuga iste eligendi. Ab deleniti enim libero labore
    animi.
    Unde reprehenderit pariatur consectetur porro enim cupiditate sapiente incidunt quibusdam. Optio porro commodi
    voluptates officia modi excepturi soluta quis! Iste aspernatur dolorum asperiores accusantium incidunt odit
    ipsam
    praesentium ipsum dolor?
    Perferendis saepe fuga corrupti ratione alias ad, consectetur minima quae doloribus quam nemo molestias commodi
    vel ex voluptatibus officia recusandae molestiae laboriosam, nobis consequuntur blanditiis animi officiis rem
    assumenda. Minima!`;
    this.container.appendChild(button);
    this.container.appendChild(collapsible);
    collapsible.appendChild(lorem);
  }

  collapseToggle() {
    this.collapseBlock.style.height === '0px'
      ? (this.collapseBlock.style.height = `${this.collapseBlock.scrollHeight}px`)
      : (this.collapseBlock.style.height = '0');
  }
}
