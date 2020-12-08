import React from 'react';
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import ButtonsSlide from "../components/ButtonsSlide";
import Mouse from "../components/Mouse";

const Home = () => {
    return (
        <main>
            <Mouse />
            <div className="home">
            <Navigation />
            <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>Damene Hamza</h1>
                        <h2>
                            <DynamicText />
                        </h2>
                    </div>
                </div>
                <ButtonsSlide right={"/project-1"} />
            </div>
        </main>
    );
};

export default Home;