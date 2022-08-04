import axios from "axios";
import React, { useEffect } from "react";

const Content = () => {
  useEffect(() => {
    axios.get(`http://localhost:3001/clothes`).then();
  }, []);
  return <div></div>;
};

export default Content;
