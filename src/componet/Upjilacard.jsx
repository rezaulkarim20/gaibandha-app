import PropTypes from "prop-types";

import Upjiladetails from "./Upjiladetails";

const Upjilacard = ({ upjila }) => {
  const {
    title,
    cartImage,
    Area,
    Population,
    AdministrativeUnits,
    Union,
    KeyFeatures,
    isPremium,
  } = upjila;
  return (
    <div className="bg-white p-4 shadow-md rounded-2xl transition hover:shadow-lg md:p-6">
      <Upjiladetails
        title={title}
        cartImage={cartImage}
        Area={Area}
        Population={Population}
        AdministrativeUnits={AdministrativeUnits}
        Union={Union}
        KeyFeatures={KeyFeatures}
        isPremium={isPremium}
      />
    </div>
  );
};

Upjilacard.propTypes = {
  upjila: PropTypes.shape({
    title: PropTypes.string.isRequired,
    Area: PropTypes.string.isRequired,
    Population: PropTypes.string.isRequired,
    AdministrativeUnits: PropTypes.string.isRequired,
    KeyFeatures: PropTypes.string.isRequired,
    Union: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    cartImage: PropTypes.string.isRequired,
  }),
};

export default Upjilacard;
