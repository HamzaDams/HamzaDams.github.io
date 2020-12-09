import React from 'react';

const anim = () => {
    let navLinks = document.querySelectorAll('.social-network a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', (e) =>{
            let attrX = e.offsetX - 20;
            let attrY = e.offsetY - 13;

            link.style.transform = `translate(${attrX}px, ${attrY}px)`;
        })

        link.addEventListener('mouseleave', () =>{
            link.style.transform = '';
        })
    })
}

const SocialNetwork = () => {
    return (
        <div className="social-network">
            <ul className="content">
                <a href="https://github.com/HamzaDams/" _target="_blank" onMouseOver={anim}>
                    <li><i className="fab fa-github"></i></li>
                </a>
                <a href="https://www.linkedin.com/in/hamza-damene-361887172/">
                    <li><i className="fab fa-linkedin-in"></i></li>
                </a>
                <a href="https://www.linkedin.com/in/hamza-damene-361887172/">
                    <li><i className="fas fa-envelope"></i></li>
                </a>
            </ul>
        </div>
    );
};

export default SocialNetwork;
