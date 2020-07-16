import React, {useEffect, useState} from "react";
import useDimensions from "react-use-dimensions";
import Listing from "./Listing";
import Button from "./Button";
import FilterButton from "./FilterButton";
import axios from 'axios'
let listings;
let i = 0;
const Main = () =>  {

  /*  axios({
        method: 'post',
        url: 'https://jsonbox.io/box_f1bd2310a97a7faaa9ea',
        headers: {'content-type' : 'application/json'},
        data: JSON.stringify([
            {
                "position": "Guest Support Agent",
                "date": "06/15/2020",
                "location": "Anywhere",
                "labels": "#tech, #support, #anywhere, #Contract, #Freelance, #Full Time, #Part Time",
                "company": "http://www.cityami.com",
                "link": "https://workew.com/job/guest-support-agent-cityami/"
            },

            {
                "position": "Training Coordinator",
                "date": "06/15/2020",
                "location": "Anywhere in US",
                "labels": "#non-tech, #other, #anywhere, #Full Time",
                "company": "https://www.powerschool.com/",
                "link": "https://workew.com/job/training-coordinator-powerschool/"
            },

            {
                "position": "Paid Acquisition Marketer",
                "date": "06/08/2020",
                "location": "Anywhere",
                "labels": "#sales-marketing, #marketing, #anywhere, #Full Time",
                "company": "https://biteable.com/",
                "link": "https://workew.com/job/paid-acquisition-marketer-biteable/"
            },
            {
                "position": "Product Marketing Manager",
                "date": "06/13/2020",
                "location": "Anywhere",
                "labels": "#sales-marketing, #marketing, #anywhere, #Full Time",
                "company": "https://www.healthgrades.com/",
                "link": "https://workew.com/job/product-marketing-manager-healthgrades/"
            },

            {
                "position": "Customer Operations Manager",
                "date": "06/12/2020",
                "location": "Anywhere",
                "labels": "#tech, #support, #anywhere, #Full Time",
                "company": "https://www.getkisi.com/",
                "link": "https://workew.com/job/customer-operations-manager-kisi/"
            },
            {
                "position": "MetaLab"
            },
            {
                "position": "Director of Marketing",
                "date": "06/11/2020",
                "location": "Anywhere",
                "labels": "#sales-marketing, #marketing, #anywhere, #Full Time",
                "company": "http://metalab.co/",
                "link": "https://workew.com/job/director-of-marketing-metalab/"
            },
            {
                "position": "flowkey"
            },
            {
                "position": "Freelance German translator / copywriter ??",
                "date": "06/11/2020",
                "location": "Anywhere",
                "labels": "#non-tech, #writing, #anywhere, #Contract",
                "company": "https://www.flowkey.com/",
                "link": "https://workew.com/job/freelance-german-translator-copywriter-flowkey/"
            },

            {
                "position": "Educational Content Creator",
                "date": "06/09/2020",
                "location": "Anywhere",
                "labels": "#non-tech, #other, #anywhere, #Full Time",
                "company": "https://www.sketch.com/",
                "link": "https://workew.com/job/educational-content-creator-sketch/"
            },

            {
                "position": "Regional Partner Manager",
                "date": "06/09/2020",
                "location": "Anywhere",
                "labels": "#sales-marketing, #sales, #anywhere, #Part Time",
                "company": "http://epicelite.com",
                "link": "https://workew.com/job/regional-partner-manager-epic-elite/"
            },

            {
                "position": "Underwriter",
                "date": "06/09/2020",
                "location": "Anywhere in US",
                "labels": "#non-tech, #writing, #anywhere",
                "company": "https://better.com/",
                "link": "https://workew.com/job/underwriter-better/"
            },
            {
                "position": "Outschool"
            },
            {
                "position": "Class Quality Specialist",
                "date": "06/08/2020",
                "location": "Anywhere in Australia , Anywhere in US/Canada",
                "labels": "#non-tech, #other, #anywhere, #Full Time",
                "company": "https://outschool.com/",
                "link": "https://workew.com/job/class-quality-specialist-outschool/"
            },
            {
                "position": "Domestika"
            },
            {
                "position": "Support Agent (Native English)",
                "date": "06/08/2020",
                "location": "Anywhere",
                "labels": "#tech, #support, #anywhere, #Full Time",
                "company": "https://www.domestika.org/",
                "link": "https://workew.com/job/support-agent-native-english-domestika/"
            },
            {
                "position": "ZSA Technology Labs"
            },
            {
                "position": "A designer with taste and passion",
                "date": "06/11/2020",
                "location": "Kitchener-Waterloo, Ontario, Canada",
                "labels": "#design, #Full-Time, #Design, #Anywhere (100% Remote) Only",
                "company": "https://ergodox-ez.com",
                "link": "https://weworkremotely.com/remote-jobs/zsa-technology-labs-a-designer-with-taste-and-passion"
            },
            {

                "position": "WordPress Support Engineer",
                "date": "06/09/2020",
                "location": "Fully Distributed",
                "labels": "#engineering, #Full-Time, #Programming, #Front-End, #Anywhere (100% Remote) Only",
                "company": "https://wpvip.com/",
                "link": "https://weworkremotely.com/remote-jobs/wordpress-vip-wordpress-support-engineer-1"
            },
            {
                "position": "Rhino"
            },
            {

                "position": "Customer Success Manager",
                "date": "06/15/2020",
                "location": "Anywhere",
                "labels": "#tech, #support, #anywhere, #Full Time",
                "company": "https://www.sayrhino.com/",
                "link": "https://workew.com/job/customer-support-associate-rhino/"
            },
            {
                "position": "Flux Academy"
            },
            {

                "position": "Growth Marketer",
                "date": "06/17/2020",
                "location": "Anywhere",
                "labels": "#sales-marketing, #marketing, #anywhere, #Full Time",
                "company": "http://flux-academy.com/",
                "link": "https://workew.com/job/growth-marketer-flux-academy/"
            },
            {
                "position": "Good Money"
            },
            {

                "position": "IT Support Associate",
                "date": "06/17/2020",
                "location": "Anywhere in US",
                "labels": "#tech, #support, #anywhere, #Full Time",
                "company": "https://goodmoney.com/",
                "link": "https://workew.com/job/it-support-associate-good-money/"
            },
            {
                "position": "Talent Inc"
            },
            {

                "position": "Resume Writer",
                "date": "06/17/2020",
                "location": "Anywhere in US",
                "labels": "#non-tech, #writing, #anywhere, #Freelance",
                "company": "https://www.talentinc.com/",
                "link": "https://workew.com/job/resume-writer-talent/"
            },
            {
                "position": "Rosetta Stone"
            },
            {

                "position": "Customer Success Specialist",
                "date": "06/17/2020",
                "location": "Anywhere in US",
                "labels": "#tech, #support, #anywhere, #Full Time",
                "company": "https://www.rosettastone.com/",
                "link": "https://workew.com/job/customer-success-specialist-rosetta-stone/"
            },
            {
                "position": "Empresa En Estonia OÜ"
            },
            {

                "position": "Full Stack Javascript Developer",
                "date": "06/16/2020",
                "location": "Anywhere",
                "labels": "#engineering, #development, #anywhere, #Full Time",
                "company": "https://yourcompanyinestonia.com",
                "link": "https://workew.com/job/full-stack-javascript-developer-empresa-en-estonia/"
            },
            {
                "position": "Quest Analytics"
            },
            {

                "position": "Data Scientist",
                "date": "06/11/2020",
                "location": "Anywhere in US",
                "labels": "#non-tech, #operations, #anywhere, #Full Time",
                "company": "https://questanalytics.com/",
                "link": "https://workew.com/job/data-scientist-quest-analytics/"
            },
            {
                "position": "Dgraph"
            },
            {

                "position": "Technical Writer",
                "date": "06/16/2020",
                "location": "Anywhere",
                "labels": "#non-tech, #writing, #anywhere, #Full Time",
                "company": "https://dgraph.io/",
                "link": "https://workew.com/job/technical-writer-dgraph/"
            },
            {
                "position": "MURAL"
            },
            {

                "position": "Market Development Representative",
                "date": "06/16/2020",
                "location": "Anywhere in US",
                "labels": "#sales-marketing, #sales, #anywhere, #Full Time",
                "company": "https://mural.co/",
                "link": "https://workew.com/job/market-development-representative-mural/"
            },
        ])
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    });
*/



    const [filters, setFilters] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    async function getData() {
        let res = await fetch("https://jsonbox.io/box_f1bd2310a97a7faaa9ea");
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
        return selections.every(value => combined.indexOf(value) >= 0);
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
