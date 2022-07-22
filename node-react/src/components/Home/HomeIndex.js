import React, { useEffect, useState } from "react";
import api from "../../firebaseApi";

const HomeIndex = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await api.get("/events");
      setData(response?.data);
    })()
  }, []);
    return <React.Fragment>
        { data.map(ev => <div key={ev.title}>{ev.title}</div>) }
    </React.Fragment>
}

export default HomeIndex;