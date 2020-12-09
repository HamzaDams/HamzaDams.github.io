import React from 'react';
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";
import {CopyToClipboard} from "react-copy-to-clipboard";
import SocialNetwork from "../components/SocialNetwork";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";


const Contact = () => {

    const variants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 300
        }
    }

    const transition = {
        ease: [.03, .87, .73, .9],
        duration : .6
    }

    return (
        <main>
            <Mouse />
            <motion.div className="contact"
                        exit="out"
                        animate="in"
                        initial="out"
                        variants={variants}
                        transition={transition}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>e-mail</h4>
                            <CopyToClipboard text="damenehamza4@gmail.com" className="hover">
                                <p style={{cursor: 'pointer'}} className="clipboard" onClick={()=> {
                                    alert("Email Copié");
                                }}>damenehamza4@gmail.com</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <p>0781886905</p>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className={"credits"}>
                        <p>Damene Hamza - 2020</p>
                    </div>
                </div>
            </motion.div>
        </main>
    );
};

export default Contact;