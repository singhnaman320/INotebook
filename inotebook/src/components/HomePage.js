import {React, useRef} from 'react'
import emailjs from '@emailjs/browser';

const HomePage = (props) => {

  // For email

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_go5yrao', 'template_xp4vl7j', form.current, 'h4v6wzs4qfIrM1yfp')
      .then((result) => {

          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <>
      <div className='container' id='homepage'> 
        {/* <h1 style={{color : "blue", textAlign :"center"}}>Welcome to Exporters World</h1> */}
        <div className="row">    
          <marquee behavior="" direction="right">
            <h1 className='text1'>Exporters Worlds</h1>
            <h3 className='text2'>Exports flows seamlessly</h3>
          </marquee>
        </div>
      </div>

      <div className='top-head'>
        <p>Products we sell..</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4" id='homepage-sec'>
        <div className="col ">
          <div className="card h-100 border-success mb-3">
            <img src="https://freepngimg.com/thumb/grocery/41629-3-groceries-png-download-free.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Groceries</h5>
              <p className="card-text">Our range of choices, with high-quality ingredients at prices you can get down with, makes shopping so much more than tossing the basics in your bag. 
              Discover more low prices in store now (you're gonna need a bigger basket)....</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-success mb-3">
            <img src="https://th.bing.com/th/id/OIP.wpiBqZo06nMYrMx-yKJ7GAHaGL?pid=ImgDet&rs=1" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Fruits and vegetables</h5>
              <p className="card-text">We sell fresh fruits and vegetables for you...</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-success mb-3">
            <img src="https://th.bing.com/th/id/OIP.rUPBc4d4c4aJOklgCJdbXgHaHa?pid=ImgDet&rs=1" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Beauty produces</h5>
              <p className="card-text">The best beauty products for you which fits your skin...</p>
            </div>
          </div>
        </div>
        <div className="col ">
          <div className="card h-100 border-success mb-3">
            <img src="https://freepngimg.com/thumb/toy/33754-7-toy-transparent-background.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Baby Toys</h5>
              <p className="card-text">You will always be your child's favorite toy. Dream of a world where children can laugh and play and not be blown up by a mine they thought was a toy. To a child, often the box a toy came in is more appealing than the toy itself....</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-success mb-3">
            <img src="https://files.sitebuilder.name.tools/enom37479/image/pulses_primacy.png" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Pulses and Beans</h5>
              <p className="card-text">We sell fresh pulses and bean with proper nutrients for you...</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 border-success mb-3">
            <img src="https://th.bing.com/th/id/OIP.PYNkkJlXLtnN1w4T-JbHcgHaHa?pid=ImgDet&rs=1" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Water Bottles</h5>
              <p className="card-text">Bottled water is water that's intended for human consumption and sealed in bottles or other containers...</p>
            </div>
          </div>
        </div>
      </div>

      
        <div id="contact">
        <h1 className="sub-title top-head">Contact us directly on..</h1>

          <div className="container">
              <div className="row">
            
                  <div className="contact-left">
                      <p id="contact-email"><i className="fa-solid fa-paper-plane"></i>contactus@exportersworld.com</p>
                      <p id="contact-phone"><i className="fa-solid fa-square-phone"></i> +91-7017225589</p>
                      <div className="social-icons">
                          <a id="contact-linkedin" href="https://www.linkedin.com/in/exporters-worlds-best-b2b-portal-in-india/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                      </div>
                  </div>
                  <div className="contact-right">
                      <form name="submit-to-google-sheet" onSubmit={sendEmail} ref={form}>
                          <input type="email" name="Email" placeholder="Your Email" required/>
                          <input type="text" name="Name" placeholder=" Your query" required/>
                          <textarea name="Message" rows="6" placeholder="Your query description"></textarea>
                          <button type="submit"  className="btn2">Submit</button>
                      </form>
                      <span id="msg"></span>
                  </div>
              </div>
          </div>
        </div>
    </>
  )
}

export default HomePage
