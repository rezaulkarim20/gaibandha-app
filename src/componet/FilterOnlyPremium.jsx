import PropTypes from "prop-types";
const FilterOnlyPremium = ({ onChecker, CheckPremium }) => {
  return (
    <div>
      <input
        type="checkbox"
        id="premium"
        checked={CheckPremium}
        onChange={onChecker}
      />
      <label htmlFor="premium"> Who Premium Only </label>
    </div>
  );
};
FilterOnlyPremium.propTypes = {
  CheckPremium: PropTypes.bool.isRequired,
  onChecker: PropTypes.func.isRequired,
};
export default FilterOnlyPremium;
