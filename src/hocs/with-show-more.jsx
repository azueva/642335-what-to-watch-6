import React, {useState} from 'react';
import PropTypes from "prop-types";
import ShowMore from "../components/blocks/show-more/show-more";

export const withShowMore = (Component) => {

  const addShowMore = (propsParameters) => {
    const {listSize} = propsParameters;
    const [shownItems, setShownItems] = useState(listSize);
    const [isHideButton, setIsHideButton] = useState(false);

    const handleShowedAll = (isShowedAll) => {
      setIsHideButton(isShowedAll);
    };

    const handleShowMoreClick = () => setShownItems((prevShownItem) =>
      prevShownItem + listSize
    );

    return (
      <React.Fragment>

        <Component
          {...propsParameters}
          listSize={shownItems}
          checkShowedAll={handleShowedAll}
        >
        </ Component>

        {!isHideButton && <ShowMore onClick={handleShowMoreClick} />}

      </React.Fragment>
    );
  };

  addShowMore.propTypes = {
    listSize: PropTypes.number.isRequired,
  };

  return addShowMore;
};

export default withShowMore;
