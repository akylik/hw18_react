import React from 'react';
import './photo.css';

export default function Photo() {
  const starWars = [
      "https://cdn.onebauer.media/one/media/5ddc/ffc7/0a4e/c494/e8f7/62f2/star-wars-rise-skywalker-kylo-rey.jpg?quality=50&width=960&height=540&ratio=16-9&resizeStyle=aspectfill&format=jpg",
      "https://static.wikia.nocookie.net/starwars/images/c/c3/Rey_vs_Kylo_Ren.png/revision/latest?cb=20160303172711",
      "https://specials-images.forbesimg.com/imageserve/5d63e26168cb0a0008c06817/960x0.jpg?fit=scale",
      "https://assets.2ser.com/wp-content/uploads/2019/12/19223004/rise-of-skywalker-685x368.jpg",
      "https://images7.alphacoders.com/105/thumb-1920-1058783.jpg",
      "https://telegraf.com.ua/files/2019/10/989888802570.jpg",
      "https://wallpaperscave.ru/images/original/17/11-21/movies-star-wars-the-last-jedi-1717.jpg",
      "https://images4.alphacoders.com/105/thumb-1920-1058791.jpg",
  ];

  return (
    <div className="photo_container">
       {
        starWars.map(main =>
          <>
            <div className="photo">
              <img src={main} className="photo_pic" />
            </div>
          </>
        )
      }
    </div>
  )
}