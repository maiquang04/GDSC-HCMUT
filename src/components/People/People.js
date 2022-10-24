//import { Chip } from "@material-ui/core";
import "./People.css"

const People = ({
  name,
  url,
  country,
  birthday,
  poster
}) => {
  country = country ? country.name : ""
  
  return (
    <div className="people">
      <div className="image">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={poster ? poster.medium : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"}
            alt={name}
          />
        </a>
      </div>
      
      <div className="content">
        <h1 className="title">
          <a href={url} className="textlink" target="_blank" rel="noopener noreferrer">{name}</a>
        </h1>
        
        <h3 className="country">{country}</h3>
        <h3 className="birthday">{birthday}</h3>
      </div>
    </div>
  );
};

export default People;