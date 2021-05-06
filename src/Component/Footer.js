import React, { Component } from 'react'

import '../Style/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer className="footer-tag" >
                    <ul className="footer-tag" >
                        <li className="footer-li"><p className="footer-p"id="footer-author">by Chris Wade</p></li>
                        <li className="footer-li"><p className="footer-p">Data provided by Marvel. © 2014 Marvel</p></li>
                        <li className="footer-li"><a className="footer-p" id="marvel-link"href="http://marvel.com">Marvel.com</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}


