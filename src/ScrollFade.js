export default async function ScrollFade() {
    console.log('Inside scrollFade')

    document.querySelectorAll('.scroll-fade').forEach(element => {
        window.addEventListener('scroll', function() {
            
            var elementRect = element.getBoundingClientRect()
            // console.log(element.id, elementRect.top, elementRect.right, elementRect.bottom, elementRect.left);

            var windowRect = document.body.getBoundingClientRect()
            // console.log(windowRect.top, windowRect.right, windowRect.bottom, windowRect.left)

            let offset = elementRect.top - windowRect.top

            console.log("offset", offset)
            console.log("window scrollY", window.scrollY)

            const threshold = elementRect.height / 2
            const speed = 2
            
            if (window.scrollY < offset) {
                element.style.opacity = (1 - (Math.abs(window.scrollY-offset)/(window.innerHeight))) * speed
            } else {
                element.style.opacity = 1
            }

        })
    })
}