import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FcList } from "react-icons/fc";

import styles from "./LeftBar.module.css";
function FiltePart() {
  return <></>;
}

export default function LeftBar({ pt, categories ,setSearch,search}) {
  const { categoryname, created_at, id, image_id } = categories;

  const [selectid, setId] = useState();

  useEffect(()=>{
    return ()=>{
      setSearch("")
    }
  },[categories])
  return (
    <div className={`col-lg-${pt}`}>
      <div
        className="card my-5 p-3"
        style={{
          minHeight: "500px",
        }}
      >
        <header className="d-flex justify-content-between">
          <h4>Categories</h4>
          <FcList className="fs-2 text-green" />
        </header>
        <hr />
        <ul class="list-group my-1 border-0">
        {categories.map((category, index) => (
  <>
    {index === 0 && (
       <li className="list-group-item" key={category.id}>
       <Link
         className="nav-link"
         to={`/product`}
       >
          All Product
       </Link>
     </li>
    )}
    <li className="list-group-item" key={category.id}>
      <Link
        className="nav-link"
        to={`/product/category/${category.id}`}
      >
        {category.categoryname}
      </Link>
    </li>
  </>
))}

        </ul>
      </div>
    </div>
  );
}
