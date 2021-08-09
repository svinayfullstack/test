import React from 'react'
import style from './style'
import { group331, logo, mail, phone, fb, twitter, instagram, linkedin } from '../../assets/images'
import Form from '../../components/Form'
import Button from '../../components/Button'

const HomePg = () => {

    const { title, description, registrationTitle, registrationForm, socialMedia, space, footerTxt, footer, formContainer, txtContainer } = style


    const gridStyle = {
        padding: '0 7%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(11rem, 1fr))',
        marginTop: '7%',

    };


    return (
        <div>
            {/* section 1  */}
            <section style={txtContainer}>
                <div style={{ width: '90%' }}>
                    <div style={title}>
                        The Completely Powerful Booking System for Barbers
                    </div>

                    <div style={description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maecenas sed faucibus volutpat id eleifend quis elementum.                     </div>
                    <Button label="Get Started" />
                </div>

                <div style={{ marginTop: '15%' }}>
                    <img src={group331} style={{ width: '100%' }}></img>
                </div>
            </section>



            {/*section 2 */}
            <section style={gridStyle} >
                <div style={formContainer}><Form /></div>


                <div style={registrationForm}>
                    <div style={registrationTitle}>
                        Complete the registration form to get started
                    </div>

                    <div style={description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maecenas sed faucibus volutpat id eleifend quis elementum.
                        <br></br>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maecenas sed faucibus volutpat id eleifend quis elementum.
                        <br></br>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque maecenas sed faucibus volutpat id eleifend quis elementum.
                    </div>
                </div>

            </section >


            {/* Footer */}
            < footer style={footer} className="footer" >
                <div>
                    <div style={space}>
                        <img src={logo} alt="logo" />
                    </div>
                    <span style={footerTxt}>So much more than a booking system</span>
                    <div style={space}>
                        <img src={phone} alt="phone" />
                        <span style={footerTxt}> 01 606 277 565</span>
                    </div>
                    <div style={space}>
                        <img src={mail} alt="mail" />
                        <span style={footerTxt}>Email Us</span>

                    </div>
                </div>

                <div style={{ marginTop: '7%', width: '40%' }}>
                    <p style={socialMedia}>
                        Social Media
                    </p>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <img src={fb} alt="fb" />
                        <img src={instagram} alt="instagram" />
                        <img src={twitter} alt="twitter" />
                        <img src={linkedin} alt="linkedin" />

                    </div >
                </div >

            </footer >


        </div >
    )
}


export default HomePg