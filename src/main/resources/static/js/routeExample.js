ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
        center: [55.751574, 37.573856],
        zoom: 9,
        controls: []
    });

    // Создание экземпляра маршрута.
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        // Точки маршрута.
        // Обязательное поле.
        referencePoints: [
            'Москва, метро Смоленская',
            'Москва, метро Арбатская',
            [55.734876, 37.59308] // улица Льва Толстого.
        ]
    }, {
        // Автоматически устанавливать границы карты так,
        // чтобы маршрут был виден целиком.
        boundsAutoApply: true
    });

    // Добавление маршрута на карту.
    myMap.geoObjects.add(multiRoute);
});