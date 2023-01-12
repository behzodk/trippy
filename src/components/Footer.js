import './FooterStyles.css'

function Footer(){
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>VisitUzbekistan</h1>
                    <p>Choose Your Favourite Destination.</p>
                </div>
                <div>
                    <a href="/">
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a href="/">
                        <i className='fab fa-telegram'></i>
                    </a>
                    <a href="/">
                        <i className='fab fa-youtube'></i>
                    </a>
                    <a href="/">
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            </div>
            
            <div className="bottom">
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All versions</a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
            <p className='copyright'>&#169;Behzod Musurmonqulov</p>
        </div>
    )
}

export default Footer