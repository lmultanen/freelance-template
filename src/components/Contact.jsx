import React from 'react';

const Contact = () => {
    return(
        <div id="contact-page">
            <div className="nav-buffer"/>
            <h2>Put contact information here and/or link to socials!</h2>
            <br/>
            <div>
                <div className='contact-container'>
                    <div className='contact-link'>          
                        <img className="small-logo" src="/LinkedIn_icon.svg.png" alt="Logo" /> 
                    </div>
                    <div className='contact-link'> 
                        <img className="small-logo" src="/GitHub-Mark-120px-plus.png" alt="Logo" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;