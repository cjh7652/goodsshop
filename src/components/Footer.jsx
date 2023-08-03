import React from 'react';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <div className='foot-bg'>
            <div className="container">
                <div className="foot-addr">
                    <h3 className='foot-logo'><img src="img/logo.png" alt="logo" /></h3>
                    <address>서울 서초구 서초동  1153 우성 빌딩 10~20층</address>
                    <div className="copy">
                        &copy; 2023 All rights ...
                    </div>                
                </div>
                <div className="foot-menu">
                     <ul>
                        <li><Link to="">About</Link>
                            <ul>
                                <li><Link to="">commpany</Link></li>
                                <li><Link to="">commpany</Link></li>
                                <li><Link to="">commpany</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">blog</Link>
                            <ul>
                                <li><Link to="">blog</Link></li>
                                <li><Link to="">blog</Link></li>
                                <li><Link to="">blog</Link></li>
                                <li><Link to="">blog</Link></li>
                            </ul>
                        </li>
                        <li><Link to="">products</Link>
                            <ul>
                                <li><Link to="">products</Link></li>
                                <li><Link to="">products</Link></li>
                                <li><Link to="">products</Link></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Footer;