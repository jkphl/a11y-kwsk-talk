/**
 * Focus the IFrame with the first website
 *
 * @param {Element} prev Last slide
 * @param {Element} next Next slide
 */
// SlideshowAction.focusWww = function (prev, next) {
//     // window.frames.www.focus();
// }

var labelsStrings = {
    html: 'HTML',
    aria: 'WAI-ARIA',
    css: 'CSS',
    javascript: 'JavaScript',
    content: 'Inhalt'
};
var labelSlides = document.querySelectorAll('li.html, li.aria, li.css, li.javascript, li.content');
for (var s = 0; s < labelSlides.length; ++s) {
    var labels = document.createElement('ul');
    labels.classList.add('labels');
    for (var l in labelsStrings) {
        if (labelSlides[s].classList.contains(l)) {
            var label = document.createElement('li');
            label.classList.add(l);
            label.textContent = labelsStrings[l];
            labels.appendChild(label);
        }
    }
    labelSlides[s].insertBefore(labels, labelSlides[s].firstChild);
}
