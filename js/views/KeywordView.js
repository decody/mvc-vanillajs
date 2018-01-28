import View from './View.js'

const tag = '[KeywordView]'

const KeywordView = Object.create(View)

KeywordView.messages = {
    NO_KEYWORDS: '추천 검색어가 없습니다'
}

KeywordView.setup = function (el) {
    this.init(el)
    return this
}

KeywordView.render = function (data = []) {
    this.el.innerHTML = data.length ? this.getKeywordHTML(data) : KeywordView.messages.NO_KEYWORDS
    this.bindClickEvent()
    this.show()
    return this
}

KeywordView.getKeywordHTML = function (data) {
    // debugger
    return data.reduce((html, item, index) => {
        html += `<li data-keyword="${item.keyword}"><span class="number">${index + 1}</span>${item.keyword}</li>`
        return html
    }, '<ul class="list">') + '</ul>'
}

KeywordView.bindClickEvent = function () {
    // 유사 배열을 배열로 전환
    Array.from( this.el.querySelectorAll("li") ).forEach(li => {
        li.addEventListener('click', e => this.onClickKeyword(e))
    })
}

KeywordView.onClickKeyword = function (e) {
    // debugger
    const {keyword} = e.currentTarget.dataset
    this.emit('@click', {keyword})
}

export default KeywordView