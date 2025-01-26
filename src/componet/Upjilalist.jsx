import PropTypes from "prop-types";

import Upjilacard from "./Upjilacard";

const Upjilalist = ({ searchTerm, upjilas, CheckPremium }) => {
  const jila = [];
  upjilas.forEach((upjila) => {
    if (upjila.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    if (CheckPremium && !upjila.isPremium) {
      return;
    }
    jila.push(<Upjilacard key={upjila.id} upjila={upjila} />);
  });
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 p-2 ">
      {jila}
    </div>
  );
};
Upjilalist.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  upjila: PropTypes.string.isRequired,
  upjilas: PropTypes.string.isRequired,
  CheckPremium: PropTypes.bool.isRequired,
};
export default Upjilalist;
