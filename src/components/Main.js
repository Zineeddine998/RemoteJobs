import React, { useState } from "react";
import useDimensions from "react-use-dimensions";
import listings from "../data";
import Listing from "./Listing";
import Button from "./Button";
import FilterButton from "./FilterButton";


const Main = () => {
    const [filters, setFilters] = useState([]);
    const [filteredListings, setFilteredListings] = useState(listings);
    const [filterRowRef, filterRowSize] = useDimensions();

    const filterRowHeight = filterRowSize.height;
    let transform, paddingTop, paddingBottom, paddingBottomAdjusted;
    if (window.innerWidth > 900) {
        transform = "translateY(-" + filterRowHeight / 2 + "px)";
        paddingTop = "76px";
        paddingBottom = "120px";
        paddingBottomAdjusted = "calc(" + paddingBottom + " - " + filterRowHeight / 2 + "px)";
    }
    else {
        transform = "translateY(-30px)";
        paddingTop = "60px";
        paddingBottom = "34px";
        paddingBottomAdjusted = "calc(" + paddingBottom + " - 30px)";
    }

    const handleFilter = selection => {
        if (!filters.includes(selection)) {
            const newFilters = [...filters, selection];
            setFilters(newFilters);
            setFilteredListings(listings.filter(listing => isMatchingFilters(listing, newFilters)));
        }
    };

    const handleRemoveFilter = selection => {
        const newFilters = filters.filter(item => item !== selection);
        setFilters(newFilters);
        setFilteredListings(listings.filter(listing => isMatchingFilters(listing, newFilters)));
    };

    const handleClear = () => {
        setFilters([]);
        setFilteredListings(listings);
    };

    const isMatchingFilters = (listing, selections) => {
       // const combined = [listing.role, listing.level, ...listing.languages, ...listing.tools];
       // const matching = selections.every(value => combined.indexOf(value) >= 0);
        //return matching;
    };

    return (
        <main className="main" style={{
            transform: filters.length === 0 ? null : transform,
            paddingTop: filters.length === 0 ? paddingTop : 0,
            paddingBottom: filters.length === 0 ? paddingBottom : paddingBottomAdjusted
        }}>
            {filters.length === 0 ? null : (
                <div className="filter-row" ref={filterRowRef}>
                    <div className="filter-row__buttons">
                        {filters.map(filter => (
                            <FilterButton text={filter} key={filter} clicked={handleRemoveFilter} />
                        ))}
                    </div>
                    <div className="button button--clear" onClick={handleClear}>
                        <span>Clear</span>
                    </div>
                </div>
            )}

            {filteredListings.map(listing => {
                const arr = String(listing.labels).split(',');
                return (
                <Listing
                    key={listing.id}
                    logo={listing.logo}
                    company={listing.company}
                   link={listing.link}
                   labels={listing.labels}
                    title={listing.position}
                    posted={listing.date}
                   // contract={listing.contract}
                    location={listing.location}
                    buttons={
                        arr.map(selector => (
                                <Button text={selector} key={selector} clicked={handleFilter} />
                            ))
                    }
                />
                )
            }




            )}
        </main>
    )
}

export default Main;
