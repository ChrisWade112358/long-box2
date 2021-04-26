import React, { Component } from 'react'

import '../Style/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <footer class="footer-tag" >
                    <ul class="footer-tag" >
                        <li class="footer-li"><p className="footer-p"id="footer-author">by Chris Wade</p></li>
                        <li class="footer-li"><p className="footer-p">Data provided by Marvel. © 2014 Marvel</p></li>
                        <li class="footer-li"><a className="footer-p" id="marvel-link"href="http://marvel.com">Marvel.com</a></li>
                    </ul>
                </footer>
            </div>
        )
    }
}

