(()=>{"use strict";function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t,this.collapseBlock=null,this.button=null,this.collapseToggle=this.collapseToggle.bind(this)}var i,n,a;return i=e,(n=[{key:"init",value:function(){this.buildIt(),this.collapseBlock=document.querySelector(".collapsible"),this.button=document.querySelector(".collapse-button"),this.button.addEventListener("click",this.collapseToggle),this.collapseBlock.style.height="0px"}},{key:"buildIt",value:function(){var t=document.createElement("button");t.classList.add("collapse-button","button"),t.textContent="Collapse";var e=document.createElement("div");e.classList.add("collapsible");var i=document.createElement("div");i.classList.add("lorem"),i.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore assumenda sed beatae,\n    adipisci vel suscipit placeat veniam, autem atque quo dolores fuga iste eligendi. Ab deleniti enim libero labore\n    animi.\n    Unde reprehenderit pariatur consectetur porro enim cupiditate sapiente incidunt quibusdam. Optio porro commodi\n    voluptates officia modi excepturi soluta quis! Iste aspernatur dolorum asperiores accusantium incidunt odit\n    ipsam\n    praesentium ipsum dolor?\n    Perferendis saepe fuga corrupti ratione alias ad, consectetur minima quae doloribus quam nemo molestias commodi\n    vel ex voluptatibus officia recusandae molestiae laboriosam, nobis consequuntur blanditiis animi officiis rem\n    assumenda. Minima!",this.container.appendChild(t),this.container.appendChild(e),e.appendChild(i)}},{key:"collapseToggle",value:function(){"0px"===this.collapseBlock.style.height?this.collapseBlock.style.height="".concat(this.collapseBlock.scrollHeight,"px"):this.collapseBlock.style.height="0"}}])&&t(i.prototype,n),a&&t(i,a),e}();function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.chat=null,this.callChatButton=null,this.closeChatButton=null,this.callChat=this.callChat.bind(this),this.closeChat=this.closeChat.bind(this)}var e,n,a;return e=t,(n=[{key:"init",value:function(){this.buildIt(),this.callChatButton=document.querySelector(".call-chat-button"),this.closeChatButton=document.querySelector(".chat-form__close-button"),this.chat=document.querySelector(".chat-form"),this.callChatButton.addEventListener("click",this.callChat),this.closeChatButton.addEventListener("click",this.closeChat),this.callChatButton.addEventListener("click",this.elemfaded),this.closeChatButton.addEventListener("click",this.elemfaded)}},{key:"buildIt",value:function(){var t=document.createElement("form");t.classList.add("chat-form","hidden");var e=document.createElement("h2");e.classList.add("chat-title"),e.textContent="Напишите нам";var i=document.createElement("textarea");i.classList.add("chat-form__input");var n=document.createElement("button");n.classList.add("chat-form__submit-button","button"),n.textContent="Отправить";var a=document.createElement("button");a.classList.add("chat-form__close-button","button"),a.textContent="╳",this.container.appendChild(t),t.appendChild(e),t.appendChild(i),t.appendChild(n),t.appendChild(a);var o=document.createElement("button");o.classList.add("call-chat-button","visible","button"),this.container.appendChild(o)}},{key:"changeVisability",value:function(t,e){t.classList.add("hidden"),t.classList.remove("visible"),e.classList.add("visible"),e.classList.remove("hidden")}},{key:"callChat",value:function(){this.changeVisability(this.callChatButton,this.chat)}},{key:"closeChat",value:function(t){t.preventDefault(),this.changeVisability(this.chat,this.callChatButton)}}])&&i(e.prototype,n),a&&i(e,a),t}();function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var o=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e,this.button=null,this.animationOption=null,this.previousOption=null,this.showHeart=this.showHeart.bind(this)}var e,i,n;return e=t,(i=[{key:"init",value:function(){this.buildIt(),this.button=document.querySelector(".like-button"),this.button.addEventListener("click",this.showHeart)}},{key:"buildIt",value:function(){var t=document.createElement("button");t.classList.add("like-button","button"),t.textContent="Like!",this.container.appendChild(t)}},{key:"showHeart",value:function(){var t=document.createElement("span");t.classList.add("heart"),t.textContent="💜";do{this.animationOption=Math.ceil(4*Math.random())}while(this.animationOption===this.previousOption);this.previousOption=this.animationOption,this.container.appendChild(t),t.style.animationName="fly-option-".concat(this.animationOption),t.addEventListener("animationend",this.removeHeart)}},{key:"removeHeart",value:function(t){t.target.remove(),t.target.removeEventListener("animationend",this.removeHeart)}}])&&a(e.prototype,i),n&&a(e,n),t}();new e(document.querySelector(".collapse-container")).init(),new n(document.querySelector(".chat-container")).init(),new o(document.querySelector(".liker-container")).init()})();