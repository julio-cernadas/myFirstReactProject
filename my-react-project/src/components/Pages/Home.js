import React, { Component } from 'react';
import Header from '../Common/Header';
import image from '../assets/img/o.jpg';

// RE-USUABLE COMPONENTS
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline'
import Team from '../Common/Team';

class Home extends Component {
    render() {
        /* ================================= HEADER ================================= */
        return (
            <div>
                <Header
                    title="Welcome To Our Studio!"
                    subtitle="It's Nice To Meet You"
                    buttonText="Tell Me More"
                    link="/services"
                    showButton={true}
                    image={image}
                />

                <Services />

                <Portfolio />

                <Timeline />

                <Team />

            </div>
        )
    }
}

export default Home;