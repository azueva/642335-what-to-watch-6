import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {TabNames} from "../../../const";

const TabsList = ({activeTab, onTabClick}) => {

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {
          TabNames.map((tab) =>
            (
              <li className={`movie-nav__item` + (activeTab === tab ? ` movie-nav__item--active` : ``)}
                key={tab}
              >
                <Link to="#" className="movie-nav__link"
                  onClick = {(evt) => {
                    evt.preventDefault();
                    onTabClick(tab);
                  }}
                >
                  {tab}
                </Link>
              </li>
            )
          )
        }
      </ul>
    </nav>
  );
};

TabsList.propTypes = {
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

export default TabsList;
