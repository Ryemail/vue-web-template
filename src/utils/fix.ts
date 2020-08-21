window.addEventListener('resize', function() {
    const activeElement = document.activeElement as Element;
    if (['INPUT', 'TEXTAREA'].includes(activeElement.tagName)) {
        activeElement.scrollIntoView(true);
    }
});
