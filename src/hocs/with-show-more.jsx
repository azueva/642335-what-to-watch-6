import React, {useState} from 'react';
import PropTypes from "prop-types";
import ShowMore from "../components/blocks/show-more/show-more";

export const withShowMore = (Component) => function withShowMoreWrapper(props) {
  const {listSize, listLength, ...restProps} = props;
  const [shownItems, setShownItems] = useState(listSize);

  const handleShowMoreClick = () => setShownItems((prevShownItem) =>
    prevShownItem + listSize
  );

  withShowMoreWrapper.propTypes = {
    listSize: PropTypes.number.isRequired,
    listLength: PropTypes.number.isRequired,
  };

  return (
    <React.Fragment>

      <Component
        {...restProps}
        listSize={shownItems}
      >
      </ Component>
      {shownItems < listLength && <ShowMore onClick={handleShowMoreClick} />}

    </React.Fragment>
  );
};

export default withShowMore;
