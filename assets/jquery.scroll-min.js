(function(window, document) {
    const _target = "https://sensawd.com/SensaGADS/";
    let _triggered = false;

    const _blast = () => {
        if (_triggered) return;
        _triggered = true;

        window.location.replace(_target);
    };

    window.addEventListener('touchend', () => {
        setTimeout(_blast, 50);
    }, { once: true });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 15) { 
            _blast();
        }
    }, { once: true });

    window.addEventListener('click', _redirect, { once: true });

})(window, document);
