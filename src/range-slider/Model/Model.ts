const slider = (<HTMLInputElement>document.getElementById('range-slider'));
const maxValue: HTMLElement = document.querySelector(".label__max-value") as HTMLElement;
const minValue: HTMLElement = document.querySelector(".label__min-value") as HTMLElement;

const update = () => {
    maxValue.innerHTML = slider.value;
    minValue.innerHTML = slider.value;
}

slider.addEventListener('click', update);
update();