class View {
    $label: HTMLDivElement;
    $rangeSlider: HTMLInputElement;
    constructor($label: HTMLDivElement, $rangeSlider: HTMLInputElement) {
        this.$label = $label;
        this.$rangeSlider = $rangeSlider;
    }
    storeValues (): void {
        this.$rangeSlider.addEventListener('input', () => {
            this.$label.innerHTML = (<HTMLInputElement>this.$rangeSlider).value;
        });
    } 
}

export { View };