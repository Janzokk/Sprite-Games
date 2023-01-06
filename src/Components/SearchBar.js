import React, {useState} from "react";
import "./SearchBar.css";

function SearchBar({placeholder, data}) {
    const [filteredData, setsFilteredData] = useState([]);
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) =>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        setsFilteredData(newFilter);
    }
    return(
        <div id="search">
            <div className="search  Inputs">
                <input type="text" placeholder={placeholder} onChange={handleFilter}/>
            </div>
            {filteredData.length != 0 && (
               <div className="dataResult">
               {filteredData.map((value, key)=>{
                   return <a className="dataItem" href={value.link} target="_blank"><p>{value.title}</p> </a>
               })}
               </div>
            )}
            
        </div>
    )
}
export default SearchBar