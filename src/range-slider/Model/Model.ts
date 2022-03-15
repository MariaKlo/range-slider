// store values in labels
addEventListener('input', (event: Event) => {
    const parents = ( <HTMLElement>event.target ).parentElement;
    const t = event.target as HTMLInputElement;
    parents?.style.setProperty(`--${t.id}`, t.value);
}, false);