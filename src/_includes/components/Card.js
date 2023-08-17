const {html} = require('common-tags');

function Card ({title, image, link, raised}) {

    return html`
    <a href="${link}">
        <div class="${`card_container ${raised ? `card_container-active` : ``}`}" style="background-image: url(${image});">
            <h1 class="card_title">${title}</h1>
        </div>
    </a>
    `
}

module.exports = Card;