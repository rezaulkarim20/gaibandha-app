import PropTypes from "prop-types";
import FilterOnlyPremium from "./FilterOnlyPremium";

const Searce = ({ searchTerm, onSearchUpjila, onChecker, CheckPremium }) => {
  return (
    <from>
      <h1 className="text-2xl text-green-500 capitalize mt-4 mb-4 bg-slate-500 p-2 text-center lg:text-left ">
        all upjila informetions
      </h1>
      <div className="flex flex-col sm:flex-row items-center gap-3 mt-3">
        <input
          className="border rounded-md outline-none px-3 py-2 w-full sm:w-auto focus:ring-2 focus:ring-blue-400  "
          type="text"
          value={searchTerm}
          placeholder="Searce hear..."
          onChange={(event) => onSearchUpjila(event.target.value)}
        />
        <FilterOnlyPremium CheckPremium={CheckPremium} onChecker={onChecker} />
      </div>
    </from>
  );
};

Searce.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchUpjila: PropTypes.string.isRequired,
  CheckPremium: PropTypes.bool.isRequired,
  onChecker: PropTypes.func.isRequired,
};
export default Searce;
