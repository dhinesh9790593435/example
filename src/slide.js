import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import row1_car1 from './row1-car1.jpg';
import row1_car2 from './row1-car2.jpg';
import row1_car3 from './row1-car3.jpg';
import row2_car3 from './row1-car3.jpg';



const Slide = () => {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center',gap:'40px'}} className="swiffy-slider slider-item-show2 slider-item-reveal slider-nav-outside slider-nav-round slider-nav-visible slider-indicators-outside slider-indicators-round slider-indicators-dark slider-nav-animation slider-nav-animation-fadein slider-item-first-visible">

      
       
        <ul className="slider-container py-4" style={{width:'1100px',display:'flex',justifyContent:'space-evenly'}}>
         
         
          <li>
             <Card id="cars-cards" data-aos="fade-up" data-aos-duration="900" style={{ width: '22rem', border: 'none' }}>
                  <Card.Img variant="top" style={{height:'250px'}}  src={row1_car1} />
                  <Card.Body>
                    <Card.Title>Mercedes Grand Sedan</Card.Title>
                    <Card.Text className="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>Cheverolet</p>
                      <p>$500 / day</p>
                    </Card.Text>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Button style={{ background: "#1089ff", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Book now</Button>
                      <Button style={{ background: "#01d28e", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Details</Button>
                    </div>
                  </Card.Body>
                </Card>
          </li>

          <li >
           <Card id="cars-cards" data-aos="fade-up" data-aos-duration="900" style={{ width: '22rem', border: 'none' }}>
                  <Card.Img variant="top" style={{height:'250px'}}  src={row1_car2}  />
                  <Card.Body>
                    <Card.Title>Mercedes Grand Sedan</Card.Title>
                    <Card.Text className="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>Cheverolet</p>
                      <p>$500 / day</p>
                    </Card.Text>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Button style={{ background: "#1089ff", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Book now</Button>
                      <Button style={{ background: "#01d28e", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Details</Button>
                    </div>
                  </Card.Body>
                </Card>
          </li>

          <li>
              <Card id="cars-cards" data-aos="fade-up" data-aos-duration="900" style={{ width: '22rem', border: 'none' }}>
                  <Card.Img variant="top" style={{height:'250px'}} src={row1_car3}  />
                  <Card.Body>
                    <Card.Title>Mercedes Grand Sedan</Card.Title>
                    <Card.Text className="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>Cheverolet</p>
                      <p>$500 / day</p>
                    </Card.Text>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Button style={{ background: "#1089ff", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Book now</Button>
                      <Button style={{ background: "#01d28e", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Details</Button>
                    </div>
                  </Card.Body>
                </Card>
          </li>


          

           <li>
              <Card id="cars-cards" data-aos="fade-up" data-aos-duration="900" style={{ width: '22rem', border: 'none' }}>
                  <Card.Img variant="top" style={{height:'250px'}}  src={row2_car3} />
                  <Card.Body>
                    <Card.Title>Mercedes Grand Sedan</Card.Title>
                    <Card.Text className="card-text" style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <p>Cheverolet</p>
                      <p>$500 / day</p>
                    </Card.Text>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <Button style={{ background: "#1089ff", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Book now</Button>
                      <Button style={{ background: "#01d28e", border: 'none', borderRadius: '3px', width: "160px", padding: '10px' }}>Details</Button>
                    </div>
                  </Card.Body>
                </Card>
          </li>


        </ul>

  

        <div className="slider-indicators">
          <button  className="active" aria-label="Go to slide"></button>
          <button  aria-label="Go to slide"></button>
          <button   aria-label="Go to slide"></button>
          <button aria-label="Go to slide"></button>
          <button  aria-label="Go to slide"></button>
        </div>
      </div>
    </div>
  );
}

export default Slide;
