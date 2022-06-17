import React, { useState } from 'react';
import './MainPage.css'

import Jsondata from '../data-json/example_data.json';
import Thumnail from './Thumnail';

const MainPage = () => {
    const [category, setCategory] = useState("restaurant");
    const [searchName, setSearchname] = useState("");
    //const [selectStore, setSelectStore] = useState("");
    const d = new Date();
    let day = d.getDay() - 1;
    if(day < 0)
    {
        day = 6;
    }

    const valuechange = (e) => {
        setCategory(e.target.value);
    }

    return (
        <div className="Main-page">
            <div className="main-header">
                <div className="Topic">
                    <h4>Place List</h4>
                </div>
                <div className="Search">
                    <select className="ui selector-left" value={category} onChange={e => valuechange(e)}>
                        <option value="restaurant">Restaurant</option>
                        <option value="bakery">Bakery</option>
                        <option value="cafe">Cafe</option>
                    </select>
                    <div className="border" />
                    <input className="ui input-right"
                        type="text"
                        placeholder="Search name.."
                        value={searchName}
                        onChange={(e) => setSearchname(e.target.value)}
                    />
                </div>
            </div>
            <div className="main-thumnail">
                {
                    Jsondata.filter((filterCategory) => {
                        return filterCategory.categories.includes(category);
                    }).filter((filterName) => {
                        return filterName.name.toLowerCase().includes(searchName.toLowerCase());
                    }).map(data => {
                        return (
                            <Thumnail
                                profile_image_url={data.profile_image_url}
                                categories={data.categories}
                                name={data.name}
                                open_time={data.operation_time[day].time_open}
                                close_time={data.operation_time[day].time_close}
                                rating={data.rating}
                                /*images01={data.images[0]}
                                images02={data.images[1]}
                                images03={data.images[2]}*/
                                picture={data.images}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default MainPage;