import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.setup = function (el) {
    this.init(el)
}

KeywordView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getKeywordHTML(data) : '추천 검색어가 없습니다'
}

KeywordView.getKeywordHTML = function (data) {
    return data.reduce((html, item, index) => {
        html += `<li>
            <span class="number">${index + 1}</span>
            ${item.keyword}
        </li>`
    }, '<ul class="list">') + '</ul>'

    return html
}

export default KeywordView