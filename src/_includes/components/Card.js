const {html} = require('common-tags');

function Card ({title, image, link, linkText, raised}) {

    return html`
    <div class="${`card-container ${raised ? `card-container-active` : ``}`}" style="background-image: url(${image});">
        <h1 class="card-title">${title}</h1>
        <a href="${link}" class="card-link">${linkText}</a>
    </div>
    `
}

module.exports = Card;