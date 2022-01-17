const about = document.getElementById('about')
const contact = document.getElementById('contact')
const aboutContent = document.getElementById('about-content')
const contactContent = document.getElementById('contact-content')

const aboutTitle = "About me"
const contactTitle = "Contact"

about.onclick = function () {
    newBox(aboutTitle, aboutContent, 10)
}

contact.onclick = function () {
    newBox(contactTitle, contactContent, 30)
}

function newBox(title, content, position) {
    new WinBox({
        title: title,
        width: '300px',
        height: '300px',
        top: position,
        left: position, /* For a little bit different position when created */
        right: 10,
        bottom: 10,
        mount: content,
        onfocus: function () {
            this.setBackground('#16c60c')
        },
        onblur: function () {
            this.setBackground('#777')
        },
    })
}