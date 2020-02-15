import React, {Component} from 'react';
import './Header.css'


class Header extends Component {
    render() {
        const {count,index} = this.props;
        return (
            <div className={'header d-flex'}>
                <div className={'top-panel d-flex'}>
                    <div className={'logo'}>
                    </div>
                    <h5>Score:
                        <span className={'score'}>
                            {count}
                        </span>
                    </h5>
                </div>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="/#" className={`page-link ${index===0?'active':''}`}>Разминка</a>
                    </li>
                    <li className="page-item">
                        <a href="/#" className={`page-link ${index===1?'active':''}`}>Воробьиные</a>
                    </li>
                    <li className="page-item">
                        <a href="/#" className={`page-link ${index===2?'active':''}`}>Лесные птицы</a>
                    </li>
                    <li className="page-item">
                        <a href="/#" className={`page-link ${index===3?'active':''}`}>Певчие птицы</a>
                    </li>
                    <li className="page-item">
                        <a href="/#" className={`page-link ${index===4?'active':''}`}>Хищные птицы</a>
                    </li>
                    <li className="page-item">
                        <a href="/#" className={`page-link ${index===5?'active':''}`}>Морские птицы</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;