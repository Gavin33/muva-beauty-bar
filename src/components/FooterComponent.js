// This one was almost directly ported from the bootstrap version.
export default function Footer() {
    return (
        <footer className="text-center mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 col-sm-2 offset-1">
                        {/* Links */}
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/home">Home</a></li>
                            <li><a href="/aboutus">About</a></li>
                            <li><a href="/faq">FAQs</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/">How to Apply and Remove</a></li>
                            <li><a href="/">Sizing Chart</a></li>
                            <li><a href="/">Return/Shipping Policies</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-3 text-center">
                        {/* Socials */}
                        <h5>Catch us on Social Media</h5>
                        <a className="btn btn-social-icon" href="http://instagram.com/b.pressd"><i
                            className="fa fa-instagram"></i></a>
                        <a className="btn btn-social-icon" href="https://www.facebook.com/muvabeautybarllc/"><i
                            className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon" href="http://twitter.com/tiny_t0t"><i
                            className="fa fa-twitter"></i></a>
                    </div>
                    {/* Contact */}
                    <div className="col-sm-4 text-center">
                        <h5>Contact Us</h5>
                        <a role="button" className="btn btn-link" href="tel:+19174998947"><i className="fa fa-phone"></i> (917)
                            499-8947</a><br />
                        <a role="button" className="btn btn-link" href="mailto:muvabeautybar817@gmail.com"><i
                            className="fa fa-envelope-o"></i> muvabeautybar817@gmail.com</a>
                    </div>
                </div>
            </div>
            {/* Copyright */}
            <p>Copyright &copy; 2022 All rights reserved by Muva Beauty Bar, LLC.</p>
        </footer>
    )
}