import axios from 'axios';

export default axios.create({
    baseURL: `https://jsonbox.io/box_5f911fe0f93d53ea7b18`
});
/*
console.log(listings);
listings.map(
    (element, index) => {
        if (!element.date) listings.splice(index, 1);
        if (element.labels) {
            element.labels = element.labels.split(",");
        } else {
            listings.splice(index, 1);
        }
        element.id = i;
        i++;
    }
)*/