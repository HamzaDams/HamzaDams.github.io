import React from 'react';
import Navigation from "../components/Navigation";
import ButtonsSlide from "../components/ButtonsSlide";
import Logo from "../components/Logo";

export const Project1 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                Project 1
                <ButtonsSlide left={'/'} right={'/project-2'} />
            </div>
        </main>
    )
}
export const Project2 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                Project 2
                <ButtonsSlide left={'/project-1'} right={'/project-3'} />
            </div>
        </main>
    )
}
export const Project3 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                Project 3
                <ButtonsSlide left={'/project-2'} right={'/project-4'} />
            </div>
        </main>
    )
}
export const Project4 = () => {
    return (
        <main>
            <div className="project">
                <Navigation />
                <Logo />
                Project 4
                <ButtonsSlide left={'/project-3'} right={'/contact'} />
            </div>
        </main>
    )
}
