import React, {Component} from 'react';
import Navbar from "../components/Navbar/Navbar";
import Branding from "../components/Branding/Branding";
import Text from "../components/Text/Text";
import Brends from "../components/Brends/Brends";
import Card from "../components/Cards/Card";
import ImgLink from "../components/ImgLink/ImgLink";
import Todolist from "../components/Todolist/Todolist";
import Footer from "../components/Footer/Footer";

class BrandingPage extends Component {
    render() {
        const text = "Experience the transformative power of our brand strategy\n" +
            "                    and design thinking services";
        const text1 = "Ready to bring your big idea to life?";

        const obj = [
            {
                number: "01",
                title: "Innovative solutions \n" +
                    "that drive",
                text: "The power of vision allows us to truly understand the limitless potential of your brand. We'll work tirelessly to craft unique and effective strategies that maximize your opportunities and help your brand thrive in a constantly-evolving digital landscape."
            },
            {
                number: "02",
                title: "Uniting your team behind a shared vision",
                text: "We specialize in creating cohesive and purposeful teams. By tapping into the core essence of your brand, we can inspire your leadership to work towards a common goal, maximizing productivity and utilizing resources efficiently."
            },
            {
                number: "03",
                title: "Creating a brand identity to shine",
                text: "It's clear that placing your brand at the heart of your business strategy is crucial for success in today's fast-paced and competitive market. That's why we offer expert guidance to help leaders like you develop a modern and brand-centric mindset."
            },
            {
                number: "04",
                title: "Crafting visually stunning brand experiences",
                text: "Successful branding relies on imaginative thinking, strategic planning, and expertly made designs. This is why we include these principles into each and every project we work on to make absolutely sure that our clients stand out in a crowded market and have a meaningful connection with their audience."
            },
        ];
        return (
            <div>
                <Navbar/>
                <Branding/>
                <Text text={text}/>
                <Card obj={obj}/>
                <Brends/>
                <ImgLink/>
                <Text text1={text1}/>
                <Todolist/>
                <Footer/>
            </div>
        );
    }
}

export default BrandingPage;