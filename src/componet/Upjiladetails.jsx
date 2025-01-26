import PropTypes from "prop-types";
import cartImage from "../assets/images/0000.jpeg";
const Upjiladetails = ({
  title,
  Area,
  Population,
  AdministrativeUnits,
  Union,
  KeyFeatures,
  isPremium,
}) => {
  return (
    <div>
      <h2 className="font-bold text-lg capitalize text-green-500">
        title: {title}
      </h2>
      <p>
        <span>{cartImage}</span>
      </p>
      <p>
        <span className="font-semibold">Area: </span>
        {Area}
      </p>
      <p>
        <span className="font-semibold"> Population: </span>
        {Population}
      </p>
      <p>
        <span className="font-semibold">AdministrativeUnits: </span>
        {AdministrativeUnits}
      </p>
      <p>
        <span className="font-semibold">Union: </span>
        {Union}
      </p>
      <p>
        <span className="font-semibold">KeyFeatu: </span>
        {KeyFeatures}
      </p>
      <p>
        <span className="font-semibold">isPremium: </span>
        {isPremium ? "Yes" : "No"}
      </p>
    </div>
  );
};
Upjiladetails.propTypes = {
  title: PropTypes.string.isRequired,
  Area: PropTypes.string.isRequired,
  Population: PropTypes.number.isRequired,
  AdministrativeUnits: PropTypes.string.isRequired,
  KeyFeatures: PropTypes.string.isRequired,
  Union: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
};

export default Upjiladetails;
