import { Chip } from "@material-ui/core";
import "./Show.css"

const Show = ({
  title,
  url,
  premiered,
  type,
  poster,
  genres,
  rating,
  summary
}) => {
  // null check for elements
  if (!title) {
    title = ""
  }
  if (!genres) {
    genres = []
  }
  if (!summary) {
    summary = ""
  }
  
  genres = genres.join(", ")
  summary = summary.replace(/<[^>]*>/g, '')
    
  return (
    <div className="show">
      <div className="poster">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={poster ? poster.medium : "https://static.tvmaze.com/images/no-img/no-img-portrait-text.png"}
            alt={title}
          />
        </a>
      </div>
      
      <div className="content">
        <div className="show_detail">
          <h1 className="title">
            <a href={url} className="textlink" target="_blank" rel="noopener noreferrer">{title}</a>
            {
              rating &&
              <Chip
                label={rating}
                color={rating > 6 ? "primary" : "secondary"}
              />
            }
          </h1>
          
          <h3 className="type">{type}</h3>
          <h3 className="premiered">{premiered}</h3>
          <h3 className="genres">{genres}</h3>
        </div>
        
        <p className="show_description">{summary}</p>
      </div>
    </div>
  );
};

export default Show;