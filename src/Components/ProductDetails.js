import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);

  //   fetch
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/products/${id}`
        );
        // console.log(response);
        let myProds = await [response.data];
        setDatas(myProds);
      } catch (error) {
        console.log(error);
      }
    }
    getUserData();
  }, [id]);
  // console.log(datas);
  // console.log(prod);

  return (
    <div className="grid">
      {datas.map((e, index) => {
        return (
          <div
            key={e.id}
            style={{
              padding: "15px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <div>
              <>
                <img
                  style={{ height: "200px", width: "170px" }}
                  src={e.image}
                />
                <h5>{e.title}</h5>
                <h4>${e.price}</h4>
                <p>{e.description}</p>
              </>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductDetails;
