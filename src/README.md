# Файл Readme для сайта ТриГрупп

## Оглавление

1. [o-проекте](#o-проекте)
2. [подключение-скриптов-и-стилей](#подключение-скриптов-и-стилей)
3. [главная](#главная)
4. [формы](#формы)
5. [легендарное](#легендарное)
6. [видео-блок](#видео-блок)

## o-проекте

Папка для натяжки app

## подключение-скриптов-и-стилей

Стили хранятся в папке css, подключать вначале vendor.css потом main.css
Скрипы основные которые нужны для проекта лежат в main.js остальные в custom.js (что не получилось достать из main - select, slider, burger) проблем с ними не должно быть, слайдер исользуется один для всего сайта и инициализирован через forEach c классом slider-container

## главная

banner-block и concerts-cards содержат ссылки которые динамически показываются и скрываются в зависимости от колличества, всем ссылкам добавлен класс item-hidden по ним js их будет искать и только кнопке показать еще добавлен класс item-more.

блок social-section нужно через api заполнять карточки, информация с контакта.

## формы

1 в header форма поиска header-bottom\_\_form
2 в header кнопка напишите нам появиться модалка popup с формой main-form, сама модалка лежит за footer перед закрывающимся тегом body https://skr.sh/vOjoaUKkmjo
3 страница афиша концертов https://skr.sh/sOjiOQZwAf8
4 страница концерт https://skr.sh/sOjn2pTjQu8

## легендарное

1 на дестопе в карточках пояляется контент при наведении на мобилке по клику появляется модальное окно https://skr.sh/vOj2HvXQ8ih контент лежит перед закрывающимся тегом body https://skr.sh/sOjyIIBP8oI

## видео-блок
на страницах концерт, артисты внутренняя и легендарное внутренняя https://skr.sh/sOju5BhVMms клиент хочет чтобы можно было вставлять либо фото либо видео, там в принципе все расписал нужно сделать условие и по нему выводить нужный блок

