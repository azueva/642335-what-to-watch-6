import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MovieProp from "../../props/movie.prop";
import ReviewProp from "../../props/review.prop";
import TabsList from "../tabs-list/tabs-list";
import MovieOverview from "../tab-contents/movie-overview/movie-overview";
import MovieDetails from "../tab-contents/movie-details/movie-details";
import MovieReviews from "../tab-contents/movie-reviews/movie-reviews";
import {TabNames} from "../../../const";

const defaultActiveTab = TabNames[0];

const Tabs = ({film, reviews}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const getTabContent = (tabName) => {
    switch (tabName) {
      case `Details`:
        return (
          <MovieDetails
            film={film}>
          </MovieDetails>
        );
      case `Reviews`:
        return (
          <MovieReviews
            reviews={reviews}>
          </MovieReviews>
        );
      case `Overview`:
      default:
        return (
          <MovieOverview
            film={film}>
          </MovieOverview>
        );
    }
  };

  return (
    <div className="movie-card__desc">
      <TabsList
        activeTab={activeTab}
        onTabClick={setActiveTab}
      />
      {getTabContent(activeTab)}
    </div>
  );
};

Tabs.propTypes = {
  film: MovieProp.isRequired,
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
};


const mapStateToProps = (state) => ({
  film: state.film,
  reviews: state.reviews,
});

export {Tabs};
export default connect(mapStateToProps)(Tabs);
