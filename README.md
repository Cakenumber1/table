## Задача:  
Реализовать spa в соответствии с предложенным макетом,  в котором будет представлена таблица с данными пользователей и возможностью сортировки и поиска.
  
## Общие требования
Приложение должно работать в chrome и firefox. _[Mui supported-platforms](https://mui.com/material-ui/getting-started/supported-platforms/)_  
Разрешается использовать UI фреймворки по типу bootstrap. _(Mui)_  
Код должен быть чистым и читабельным. _Eslint + airbnb_  
Не должно быть необоснованного дублирования, всё должно распределяться по компонентам.  
Код должен быть отформатирован в едином стиле. _Eslint + airbnb_  
Вёрстка должна совпадать с макетами figma. _Если делать пиксельперфектно прям по макету, то не помещаются 10 записей(561/87 < 10). Растянул немного по ширине и высоте, пропорции остались._   
Приложение должно быть написано на vue.js или react.  
Плюсом будет использование глобального state менеджера vuex (для vue.js) или redux (для react).

## Описание API:
Список данных : https://jsonplaceholder.typicode.com/posts  

## Описание приложения:
При входе на страницу отображается таблица с данными.  
На одной странице таблицы показывается только 10 записей. _Слишком быстро данные подружаются, часто получает страницу до того как обновляет redux_ 
Под таблицей располагаются элементы, показывающие количество страниц таблицы. _10(5 постоянно)_   
Кнопки “Назад” и “Далее” переключают страницы таблицы.  
Переключение между страницами происходит без перезагрузки.  
При нажатии на заголовки столбцов происходит сортировка записей (от большего к меньшему или по алфавиту).  
В строке поиска можно ввести любое значение, и в таблице отобразится запись, в которой данное значение присутствует. _Находит и выводит первые 1-10, где в любом из полей было совпадение, чтобы выйти из поиска можно страницу или фильтр переключить_  
Страница таблицы должна отображаться в URL браузера. _Страница, критерий сортировки, убывание/возрастание_

## Макет Figma:
[линка](https://www.figma.com/file/amcWeZhjaZ0eSyYiSNG6vN/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82-%D1%82%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D1%8B?node-id=0%3A1)  

## Vercel:  
[сайт](https://table-pi0sas9i0-cakenumber1.vercel.app/)

