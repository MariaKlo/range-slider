addEventListener('input', (event: Event) => {
    const parents = ( <HTMLElement>event.target ).parentElement;
    const t = event.target;
    parents.style.setProperty(`--${t.id}`, + t.value)
}, false);