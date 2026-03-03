import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {isLoadData} from "../../store/action";
import {HANDLER_TYPES} from "../../prop-types/prop-types";

const NotFoundPage = ({onLinkClick}) => {
  const clickHandler = () => onLinkClick();
  return (
    <>
      <h2>
        404 Not Found
      </h2>
      <Link to="/" onClick={clickHandler}>
        Нажмите, чтобы перейти на главную страницу
      </Link>
    </>
  );
};

NotFoundPage.propTypes = {
  onLinkClick: HANDLER_TYPES,
};

const mapDispatchToProps = (dispatch) => ({
  onLinkClick() {
    dispatch(isLoadData(false));
  }
});

export {NotFoundPage};
export default connect(null, mapDispatchToProps)(NotFoundPage);
