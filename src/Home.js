import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://bit.ly/2X4FqCB" alt="img"/>
        <div className="home_row" >
        <Product
        id="12321341"
         title="The lean startup" price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg' rating={5} />

        <Product 
        id="12321351" title="Kenwood KMX750RD/ KMix Stand Mixer 1000W " price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/61oscgd0KXL._SL1200_.jpg' rating={5} />
        </div>
        <div className="home_row" >
        <Product id="12467341" title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)" price={99.99} image='https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg' rating={5} />

        <Product id="14321349" title="Lenovo 60.4 cm (23.8-inch) FHD Ultra Slim Near Edgeless Monitor with 75Hz" price={199.99} image='https://images-na.ssl-images-amazon.com/images/I/719Arg-0YFL._SL1500_.jpg' rating={4} />

        <Product id="12329346" title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)" price={829.99} image='https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg' rating={5} />
        </div>
        <div className="home_row" >
        <Product id="12321148" title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Certified Android Smart OLED TV KD-65A8G (Black) (2019 Model)" price={1229.99} image='https://images-na.ssl-images-amazon.com/images/I/71pI6yHN%2BeL._SL1200_.jpg' rating={4} />
        </div>
        </div>
        </div>
    )
}

export default Home;
