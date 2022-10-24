import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import Show from "../../components/Show/Show";

const Shows = () => {
  const [content, setContent] = useState([])
  const [cntPage, setCntPage] = useState(1)
  const [page, setPage] = useState(1)
  
  const SHOWS_PER_PAGE = 10
  
  const fetchData = async () => {
    try {
      console.log(`https://api.tvmaze.com/shows`)
      let {data} = await axios.get(`https://api.tvmaze.com/shows`)
      console.log(data)
      setContent(data)
      setCntPage(Math.ceil(data.length / SHOWS_PER_PAGE))
      setPage(1)
    } catch {
      console.log("error!")
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <span className="pageTitle">Discover Shows</span>
      
      <div className="shows_result">
        {
          content &&
          content.slice((page - 1) * SHOWS_PER_PAGE, Math.min(page * SHOWS_PER_PAGE, content.length)).map(s => (
            <Show
              title={s.name}
              url={s.officialSite}
              premiered={s.premiered}
              type={s.type}
              poster={s.image}
              genres={s.genres}
              rating={s.rating.average}
              summary={s.summary}
            />
          ))
        }
      </div>
      
      <CustomPagination
        setPage={setPage}
        numOfPages={cntPage}
      />
      
    </div>
  );
};

export default Shows;
