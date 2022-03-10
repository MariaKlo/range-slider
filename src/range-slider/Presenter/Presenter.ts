const slider: HTMLElement = document.querySelector('.range-slider') as HTMLElement;
const thumb: HTMLElement = document.querySelector('.range-slider__thumb') as HTMLElement;

export default thumb.onmousedown = function (event: MouseEvent): void {
    event.preventDefault();

    const shiftX = event.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onmousemove);
    document.addEventListener('mouseup', onmouseup);

    function onmousemove(event: MouseEvent): void {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
        if (newLeft < 0) {
            newLeft = 0;
        }

        const rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }
        thumb.style.left = newLeft + 'px';
    }

    function onmouseup(): void {
        document.removeEventListener('mouseup', onmouseup);
        document.removeEventListener('mousemove', onmousemove);
    }

    thumb.ondragstart = function() {
        return false;
    }
}