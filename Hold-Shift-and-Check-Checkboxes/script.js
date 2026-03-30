const boxes = document.querySelectorAll('input[type="checkbox"]');
let lastChecked = null;

function handleClick(e) {
    if(e.shiftKey && lastChecked) {
        let inBetween = false;
        boxes.forEach(box => {
            if(box === this || box === lastChecked) {
                inBetween = !inBetween;
            };
            if(inBetween) {
                box.checked = true;
            };
        })
    }
    lastChecked = this;
};

boxes.forEach(box => box.addEventListener('click', handleClick));