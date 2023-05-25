import * as React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import style from './Header.module.scss';

const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <>
      <Link to="/" className={style.menu__link}>
        <div className={style.logo}>
          <div className={style.logo__image}>
            <img src={'/icons/logo.svg'} alt="logo" />
          </div>
          <div className={style.logo__text}>Novitravel</div>
        </div>
      </Link>

      <nav className={style.menu}>
        <ul className={style.menu__list}>
          <li className={style.menu__item}>
            <Link to="/map" className={style.menu__link}>
              <Text className={style.menu__text}>Карта</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/extraordinary" className={style.menu__link}>
              <Text className={style.menu__text}>Уникальные места</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/reserve" className={style.menu__link}>
              <Text className={style.menu__text}>Забронировать отель</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/stories" className={style.menu__link}>
              <Text className={style.menu__text}>Тревел истории</Text>
            </Link>
          </li>

          <li className={style.menu__item}>
            <Link to="/dashboard" className={style.menu__link}>
              <Text className={style.menu__text}>Помощь</Text>
            </Link>
          </li>

          <li className={style.menu__item_login}>
            <Link to="/login" className={style.menu__link}>
              <Text className={style.menu__text_login}>Войти</Text>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
