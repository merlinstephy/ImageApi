import React  from 'react';
import {Carousel} from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="./bg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 style ={{fontSize : '60px'}}>𝐹𝓇𝑒𝑒 𝐵𝒾𝓇𝒹</h3>
                        <p style ={{fontSize : '40px'}}>𝒫𝒽𝓉𝑜𝓉𝑜 𝒮𝓉𝓊𝒹𝒾𝑜.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="./bg6.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="bg5.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        </>
    )
}

export default Home;