ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 9,
        controls: ['routePanelControl']
    });

    // Получение ссылки на панель маршрутизации.
    var control = myMap.controls.get('routePanelControl');

    // Задание состояния для панели маршрутизации.
    control.routePanel.state.set({
        // Адрес начальной точки.
        from: 'Москва, Льва Толстого 16',
        // Адрес конечной точки.
        to: 'метро Черемушки'
    });
});
