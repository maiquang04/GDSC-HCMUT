import People from "../../components/People/People";
import axios from "axios";
import { useEffect, useState } from "react";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Peoples.css"

const Peoples = () => {
  const [content, setContent] = useState([])
  const [cntPage, setCntPage] = useState(1)
  const [page, setPage] = useState(1)

  const SHOWS_PER_PAGE = 50
  
  const fetchData = async () => {
    try {
      console.log(`https://api.tvmaze.com/people`)
      let {data} = await axios.get(`https://api.tvmaze.com/people`)
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
      <span className="pageTitle">Discover People</span>
      
      <div className="people_result">
        {
          content &&
          content.slice((page - 1) * SHOWS_PER_PAGE, Math.min(page * SHOWS_PER_PAGE, content.length)).map(s => (
            <People              
              name={s.name}
              url={s.url}
              country={s.country}
              birthday={s.birthday}
              poster={s.image}
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

export default Peoples;
