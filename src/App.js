import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch, NavLink } from 'react-router-dom';
import { Redirect } from "react-router";
import "./components/Router/router.css";
import Post from "./components/Post/index";
import Contacts from "./components/Contact/Contacts";
import "./components/Contact/contacts.css";
import Main from "./components/Main/Main";
import Photo from "./components/Photo/Photo";
import ViewContact from "./components/ViewContact/ViewContact";


export default function App() {
  return (
    <Router basename={"/hw18_react/"}>
      <div>
        <nav className="navigator">
          <span>
            <NavLink className="nav_button" to={"/"}>Main</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/post"}>Post</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/photo"}>Photo</NavLink>
          </span>
          <span>
            <NavLink className="nav_button" to={"/contact"}>Contact</NavLink>
          </span>
        </nav>

        <Switch>
          <Route exact path={"/"}>
            <Main />
          </Route>
          <Route exact path={"/post"}>
            <Post />
          </Route>
          <Route exact path={"/photo"}>
            <Photo />
          </Route>
          <Route exact path={"/contact"}>
            <Contacts />
          </Route>
          <Route exact path={"/contact/:id"}
                 component={ViewContact}>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

/*
Завдання Basic:
  Зверху сторінок буде меню, через яке здійснюється навігація.
  Створення простої SPA з навігацією. Зробіть 4 сторінки:
  - головна (зображення і текст),
  - сторінка публікацій (візьміть з першої домашки та зробіть кілька публікацій),
  - сторінка з фотографіями (просто плитка зображень умовний Інстаграм),
  - сторінка з контактами з другої домашки.

  Завдання Advanced:
  - Додайте сторінку одного контакту з детальною інформацією про нього (стать, номер, телефон, опис, умовна переписка).
  - Потрапити на цю сторінку можна, натиснувши по контакту на сторінці контактів. Зверніть увагу, що інформація повинна
    бути актуальною, а посилання змінюється на /contacts/test.
    Де test – username у вашому масиві contacts
*/