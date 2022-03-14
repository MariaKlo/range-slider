addEventListener('input', (event: Event) => {
    const parents = ( <HTMLElement>event.target ).parentElement;
    const t = event.target as Element;
    const inputValue = (<HTMLInputElement>document.getElementById('a')).value;
    parents?.style.setProperty(`--${t.id}`, inputValue);
}, false);

// JavaScript version
// addEventListener('input', e => {
//     let t = e.target;
//     t.parentNode.style.setProperty(`--${t.id}`, +t.value)
//   }, false);