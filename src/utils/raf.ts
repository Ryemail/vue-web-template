// @ts-nocheck
let prev = Date.now();

function fallback(fn: () => void) {
    const curr = Date.now(),
        ms = Math.max(0, 16.7 - (curr - prev)),
        id = setTimeout(fn, ms);
    prev = curr + ms;
    return id;
}

function clearRaf(id: number) {
    clearTimeout(id);
}

function polyfill() {
    const vendors: string[] = ['ms', 'moz', 'webkit', 'o'];

    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
            window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    window.requestAnimationFrame = window.requestAnimationFrame || fallback;

    window.cancelAnimationFrame = window.cancelAnimationFrame || clearRaf;
}

polyfill();
