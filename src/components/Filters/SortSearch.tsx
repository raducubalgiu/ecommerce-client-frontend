import React from 'react';
import classes from "../Layout/MainNav.module.css";
import {Filters} from "../../models/filters";

const SortSearch = (props: {filters: Filters; setFilters: (filters: Filters) => void}) => {

    const sortHandler = (sort:string) => {
        props.setFilters({
            ...props.filters,
            sort
        })
    }
    const searchHandler = (s:string) => {
        props.setFilters({
            ...props.filters,
           s
        });
    }

    return (
        <div className="d-flex align-items-center justify-content-between mb-3">
            <div className="input-group">
                <div className="input-group-prepend">
                    <label className="input-group-text bg-light" htmlFor="Sort" style={{fontFamily: 'Poppins', color: 'rgba(0,0,0,.6)', fontSize: '.9rem'}}>Sort by</label>
                </div>
                <select onChange={e => sortHandler(e.target.value)} className={classes['custom-select']} style={{fontFamily: 'Poppins', border: '1px solid #ced4da', color: 'rgba(0,0,0,.6)', fontSize: '.9rem'}}>
                    <option value="latest">Latest</option>
                    <option value="popularity">Popularity</option>
                    <option value="smallest">Smallest Price</option>
                    <option value="biggest">Biggest Price</option>
                </select>
            </div>

            <div className="input-search">
                <input onChange={e => searchHandler(e.target.value)} type="search" className={classes['form-control']} placeholder="Search product..." aria-label="Search" />
            </div>
        </div>
    );
};

export default SortSearch;