import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'


export default function Footer () {
    return (
        <div className="footer-icons">
            <i class="far fa-comment"></i>
            <div className="refresh">
                <i class="fas fa-sync"></i> 6
            </div>
            <div className="like">
                <i class="far fa-heart"></i> 4
            </div>
            <i class="far fa-envelope"></i>
        </div>
    )
}

