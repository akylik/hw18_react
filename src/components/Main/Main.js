import React from 'react';
import './main.css';

export default function Main() {
  const DB = [
    {
      title: "«Звёздные войны: Пробуждение силы»",
      pic: 'https://media.kg-portal.ru/movies/s/starwars7/posters/starwars7_12.jpg',
      text: "Фильм установил исторические рекорды сборов: в первый уикенд проката в США ($248 млн) и во всем мире ($529 млн), мировые сборы $1 млрд за двенадцать дней. На 2019 год фильм является четвёртым в списке самых кассовых фильмов за всю историю кинематографа, а также одним из пяти фильмов, собравших в прокате больше $2 млрд. По сборам в Северной Америке «Пробуждение силы» занял первое место в истории, обойдя и «Титаник», и «Аватар», первым преодолев отметки в 800 и 900 млн долларов.",
    },
    {
      title: "«Звёздные войны: Последние джедаи»",
      pic: "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/filefield_paths/swtlj_dlb.jpg",
      text: "Фильму потребовалось всего две недели со дня мировой премьеры, чтобы войти в список самых кассовых фильмов, заработав более 700 миллионов долларов и три недели мирового проката, чтобы заработать более миллиарда долларов. Занимает 14 место в списке самых кассовых фильмов в мире за всю историю кинематографа и является самым кассовым фильмом 2017 года со сборами в $1 332 539 889.",
    },
    {
      title: "«Звёздные войны: Скайуокер. Восход»",
      pic: "https://media.kg-portal.ru/movies/s/starwars9/posters/starwars9_51.jpg",
      text: "Фильм заработал в прокате более $1 млрд, став восьмой самой кассовой картиной 2019 года и 35-й самой успешной лентой за всю историю кинематографа (без учёта инфляции). Ожидалось, что фильм соберёт не меньше, чем предыдущие фильмы новой трилогии «Пробуждение силы» (2,0 млрд) и «Последние джедаи» (1,3 млрд), но прокат был сокращён из-за пандемии COVID-19 в первой половине 2020 года.",
    },
  ];

  return (
    <div className="film_container">
       {
        DB.map(main =>
          <>
            <div className="film">
              <div className="film_title">
                {main.title}
              </div>
              <div>
                <img src={main.pic} className="film_pic" />
              </div>
              <div className="film_text">
                {main.text}
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}