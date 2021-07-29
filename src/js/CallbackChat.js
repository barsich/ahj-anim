export default class CallbackChat {
  constructor(container) {
    this.container = container;
    this.chat = null;
    this.callChatButton = null;
    this.closeChatButton = null;

    this.callChat = this.callChat.bind(this);
    this.closeChat = this.closeChat.bind(this);
  }

  init() {
    this.buildIt();
    this.callChatButton = document.querySelector('.call-chat-button');
    this.closeChatButton = document.querySelector('.chat-form__close-button');
    this.chat = document.querySelector('.chat-form');

    this.callChatButton.addEventListener('click', this.callChat);
    this.closeChatButton.addEventListener('click', this.closeChat);
    this.callChatButton.addEventListener('click', this.elemfaded);
    this.closeChatButton.addEventListener('click', this.elemfaded);
  }

  buildIt() {
    // chat
    const chat = document.createElement('form');
    chat.classList.add('chat-form', 'hidden');
    const title = document.createElement('h2');
    title.classList.add('chat-title');
    title.textContent = 'Напишите нам';
    const input = document.createElement('textarea');
    input.classList.add('chat-form__input');
    const submit = document.createElement('button');
    submit.classList.add('chat-form__submit-button', 'button');
    submit.textContent = 'Отправить';
    const close = document.createElement('button');
    close.classList.add('chat-form__close-button', 'button');
    close.textContent = '\u2573';

    this.container.appendChild(chat);
    chat.appendChild(title);
    chat.appendChild(input);
    chat.appendChild(submit);
    chat.appendChild(close);

    // button
    const callChatButton = document.createElement('button');
    callChatButton.classList.add('call-chat-button', 'visible', 'button');

    this.container.appendChild(callChatButton);
  }

  // eslint-disable-next-line class-methods-use-this
  changeVisability(elemToHide, elemToShow) {
    elemToHide.classList.add('hidden');
    elemToHide.classList.remove('visible');
    elemToShow.classList.add('visible');
    elemToShow.classList.remove('hidden');
  }

  callChat() {
    this.changeVisability(this.callChatButton, this.chat);
  }

  closeChat(event) {
    event.preventDefault();
    this.changeVisability(this.chat, this.callChatButton);
  }
}
