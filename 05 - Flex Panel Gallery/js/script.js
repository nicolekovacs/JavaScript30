const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('hello');
    this.classList.toggle('open'); // 2. When it's clicked, it will open - triggering our CSS
}

function toggleActive(e) {
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active'); // 4. ..and that's when it will toggle open-active
    }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); // 1. Listening for a click on each panel
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); // 3. Transition end will fire.. 