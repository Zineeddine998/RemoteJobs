import React, { useState, useEffect } from "react";
import useDimensions from "react-use-dimensions";
import Listing from "./Listing";
import Button from "./Button";
import FilterButton from "./FilterButton";
import API from '../data'
import axios from 'axios'

let listings;
let i = 0;












let request = require('request');

let headers = {
    'content-type': 'application/json'
};

var dataString = [{
    "position":"Chief Technology Officer",
    "date":"06/09/2020",
    "labels":"#exec",
    "link":"https://remoteok.io/remote-jobs/86169-remote-chief-technology-officer-chaturbate"
},
    {
        "position":"Affinitiv"
    },
    {

        "position":"Software Engineer",
        "date":"06/09/2020",
        "labels":"#engineering, #dev, #engineer, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/86168-remote-software-engineer-affinitiv"
    },
    {
        "position":"Likvido"
    },
    {

        "position":"Senior Frontend Developer",
        "date":"06/09/2020",
        "labels":"#Design, #SaaS, #JavaScript, #Vue.js, #Css, #HTML",
        "link":"https://remoteok.io/remote-jobs/85720-remote-senior-frontend-developer-likvido"
    },
    {
        "position":"Paubox"
    },
    {

        "position":"Senior Software Engineer",
        "date":"06/11/2020",
        "labels":"#engineering, #dev, #senior, #engineer, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/86212-remote-senior-software-engineer-paubox"
    },
    {
        "position":"AppNeta"
    },
    {

        "position":"Technical Account Manager",
        "date":"06/08/2020",
        "labels":"#exec",
        "link":"https://remoteok.io/remote-jobs/85692-remote-technical-account-manager-appneta"
    },
    {
        "position":"InReach Ventures"
    },
    {

        "position":"ML Engineer",
        "date":"06/08/2020",
        "labels":"#Machine Learning, #AI, #Data, #Data Science, #Data Pipeline",
        "link":"https://remoteok.io/remote-jobs/85681-remote-ml-engineer-inreach-ventures"
    },
    {
        "position":"Interpersonal Frequency"
    },
    {
        "position":"Software Development Manager",
        "date":"06/08/2020",
        "labels":"#engineering, #dev, #exec, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/85679-remote-software-development-manager-interpersonal-frequency"
    },
    {
        "position":"Mindvalley"
    },
    {

        "position":"Full Stack Developer",
        "date":"06/07/2020",
        "labels":"#engineering, #full stack, #dev, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/85673-remote-full-stack-developer-mindvalley"
    },
    {
        "position":"Castr"
    },
    {

        "position":"Product Manager",
        "date":"06/07/2020",
        "labels":"#engineering, #product manager, #dev, #digital nomad, #exec",
        "link":"https://remoteok.io/remote-jobs/85671-remote-product-manager-castr"
    },
    {
        "position":"Awesome Maps"
    },
    {

        "position":"B2B Outreach / Strategy / Support",
        "date":"06/07/2020",
        "labels":"#b2b, #key account manager, #sales, #exec",
        "link":"https://remoteok.io/remote-jobs/85663-remote-b2b-outreach-strategy-support-awesome-maps"
    },
    {
        "position":"Lovevery"
    },
    {

        "position":"Senior Data Architect",
        "date":"06/06/2020",
        "labels":"#architecture, #senior",
        "link":"https://remoteok.io/remote-jobs/85655-remote-senior-data-architect-lovevery"
    },
    {
        "position":"Formstack"
    },
    {

        "position":"Full Stack Javascript Developer",
        "date":"06/05/2020",
        "labels":"#engineering, #full stack, #dev, #javascript, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/85646-remote-full-stack-javascript-developer-formstack"
    },
    {
        "position":"GPM Corp"
    },
    {

        "position":"Software Development Manager",
        "date":"06/05/2020",
        "labels":"#engineering, #dev, #exec, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/85640-remote-software-development-manager-gpm-corp"
    },
    {
        "position":"FineTune Learning"
    },
    {

        "position":"Senior Full Stack Software Engineer",
        "date":"06/11/2020",
        "labels":"#engineering, #full stack, #dev, #senior, #engineer, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/86202-remote-senior-full-stack-software-engineer-finetune-learning"
    },
    {
        "position":"SpotMe"
    },
    {

        "position":"Full Stack AngularJS Node.js Developer",
        "date":"06/11/2020",
        "labels":"#engineering, #full stack, #dev, #javascript, #node js, #angularjs, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/86214-remote-full-stack-angularjs-node-js-developer-spotme"
    },
    {
        "position":"Ledgerscope Services"
    },
    {

        "position":".NET Developer",
        "date":"06/16/2020",
        "labels":"#engineering, #dev, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/86327-remote-net-developer-ledgerscope-services"
    },
    {
        "position":"Hiveway"
    },
    {

        "position":"Golang Backend Engineer",
        "date":"06/15/2020",
        "labels":"#engineering, #golang, #engineer, #backend",
        "link":"https://remoteok.io/remote-jobs/86285-remote-golang-backend-engineer-hiveway"
    },
    {
        "position":"PeopleDoc"
    },
    {

        "position":"Java Developer",
        "date":"06/16/2020",
        "labels":"#engineering, #dev, #java, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/86325-remote-java-developer-peopledoc"
    },
    {
        "position":"Ultimate Software"
    },
    {

        "position":"Senior Software Engineer",
        "date":"06/16/2020",
        "labels":"#engineering, #dev, #senior, #engineer, #digital nomad",
        "link":"https://remoteok.io/remote-jobs/86324-remote-senior-software-engineer-ultimate-software"
    },
];

var options = {
    url: 'https://jsonbox.io/box_5f911fe0f93d53ea7b18',
    method: 'PUT',
    headers: headers,
    body: JSON.stringify(dataString)
};

function callback(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log(body);
    }else {
        console.log(error);
    }
}
request(options, callback);


















const Main = () =>  {
    const [filters, setFilters] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    async function getData() {
        let res = await fetch("https://jsonbox.io/box_5f911fe0f93d53ea7b18");
        res.json().then(res => {
            res.map(
                (element, index) => {
                    if (!element.date) res.splice(index, 1);
                    if (element.labels) {
                        element.labels = element.labels.split(",");
                    } else {
                        res.splice(index, 1);
                    }
                    element.id = i;
                    i++;
                }
            );
            setFilteredListings(res);
            listings = res;
        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() =>{
        getData();
    },[]);

    const [filterRowRef, filterRowSize] = useDimensions();
    const filterRowHeight = filterRowSize.height;
    let transform, paddingTop, paddingBottom, paddingBottomAdjusted;
    if (window.innerWidth > 900) {
        transform = "translateY(-" + filterRowHeight / 2 + "px)";
        paddingTop = "76px";
        paddingBottom = "120px";
        paddingBottomAdjusted = "calc(" + paddingBottom + " - " + filterRowHeight / 2 + "px)";
    } else {
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
    const isMatchingFilters = (filtered, selections) => {
        const combined = String(filtered.labels).split(',');
        const matching = selections.every(value => combined.indexOf(value) >= 0);
        return matching;
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
                        { filters ? filters.map(filter => (
                            <FilterButton text={filter} key={filter} clicked={handleRemoveFilter}/>
                        )) : null}
                    </div>
                    <div className="button button--clear" onClick={handleClear}>
                        <span>Clear</span>
                    </div>
                </div>
            )}
            { filteredListings ? filteredListings.map(listing => {
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
                                    <Button text={selector} key={selector} clicked={handleFilter}/>
                                ))
                            }
                        />
                    )
                }
            ) : null}
        </main>
    )
};

export default Main;
