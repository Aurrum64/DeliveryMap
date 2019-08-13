ymaps.ready(init);

function init() {
    var map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10,
        controls: ['zoomControl']
    });

    map.geoObjects
        .add(new ymaps.Placemark([55.684758, 37.738521], {
            hintContent: 'Сидоров',
            balloonContent: 'Доставляет заказ',
            iconCaption: 'Курьер №1'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }))
        .add(new ymaps.Placemark([55.833436, 37.715175], {
            hintContent: 'Иванов',
            balloonContent: 'Нажрался и отрубился в лесу, нужно забрать!',
            iconCaption: 'Курьер №2'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#735184'
        }))
        .add(new ymaps.Placemark([55.687086, 37.529789], {
            hintContent: 'Петров',
            balloonContent: 'Доставляет заказ',
            iconCaption: 'Курьер №3'
        }, {
            preset: 'islands#circleIcon',
            iconColor: '#3caa3c'
        }))
        .add(new ymaps.Placemark([55.782392, 37.614924], {
            hintContent: 'Пупкин',
            balloonContent: 'Отправлен за курьером №2',
            iconCaption: 'Курьер №4'
        }, {
            preset: 'islands#circleDotIcon',
            iconColor: 'yellow'
        }))
        .add(new ymaps.Placemark([55.642063, 37.656123], {
            hintContent: 'Формочкин',
            balloonContent: 'Заскочил в качалку',
            iconCaption: 'Курьер №5'
        }, {
            preset: 'islands#redSportIcon'
        }))
        .add(new ymaps.Placemark([55.826479, 37.487208], {
            hintContent: 'Степанов',
            balloonContent: 'Свободен',
            iconCaption: 'Курьер №6'
        }, {
            preset: 'islands#governmentCircleIcon',
            iconColor: '#3b5998'
        }))
        .add(new ymaps.Placemark([55.694843, 37.435023], {
            hintContent: 'Гусев',
            balloonContent: 'Доставляет заказ',
            iconCaption: 'Курьер №7'
        }, {
            preset: 'islands#greenDotIconWithCaption'
        }))
        .add(new ymaps.Placemark([55.790139, 37.814052], {
            hintContent: 'Калинин',
            balloonContent: 'Свободен',
            iconCaption: 'Курьер №8'
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '100'
        }));
}
