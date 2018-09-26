const windowResizeListener = (calback) => {
    window.addEventListener('resize', (event) => {
        console.log('window resize to', event);

        if (calback && typeof calback === 'function') {
            calback({
                height: event.target.innerHeight,
                width: event.target.innerWidth,
            })
        }
    })
}

const init = ({
    windowOnresizeCallback,
}) => {
    windowResizeListener(windowOnresizeCallback);
}

export default {
    init,
    windowResizeListener,
}
