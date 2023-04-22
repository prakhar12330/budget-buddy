import React from "react";
import './home.css';


const Home = () => {
    return (
        <div className="container">
            <marquee direction="up" scrollamount="20" className="left" >Budget Buddy</marquee>
            <div className="right">Budget Buddy is a marketplace for buying imported goods off a stranger
                <br /><br />It can be the latest iPhone which is available for less in a different country,
                a pair of Jordan's or any food item that is not available near you<br /><br />

                Our job is to connect you with the people who are travelling abroad and are willing to bring them for you at a price much less than what importer charge (import duty excluded).<br /><br />
                To explore our marketplace- XX "Prakhar Add Link here" xx</div>
        </div>
    );
};

export default Home;