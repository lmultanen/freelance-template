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
                        <a target={'_blank'} href='https://linkedin.com'>   
                            <img className="small-logo" src="/LinkedIn_icon.svg.png" alt="Logo" /> 
                        </a> 
                    </div>
                    <div className='contact-link'> 
                        <a target={'_blank'} href='https://instagram.com'>   
                            <img className="small-logo" src="/Instagram_logo_2016.svg" alt="Logo" />
                        </a>
                    </div>
                    <div className='contact-link'> 
                        <a target={'_blank'} href='https://github.com'>   
                            <img className="small-logo" src="/GitHub-Mark-120px-plus.png" alt="Logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;