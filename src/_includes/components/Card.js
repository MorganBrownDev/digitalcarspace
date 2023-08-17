const {html} = require('common-tags');

function Card ({title, image, link, linkText, raised}) {

    return html`
    <div class="${`card_container ${raised ? `card_container-active` : ``}`}" style="background-image: url(${image});">
        <h1 class="card_title">${title}</h1>
        <a href="${link}" class="card_link">${linkText}</a>
    </div>
    `
}

module.exports = Card;