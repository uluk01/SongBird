import React, {Component} from 'react';
import './Birds.css'
import {Howl} from "howler";
import lose from "../../audio/false.mp3";
import corect from '../../audio/true.mp3'


class Birds extends Component {
    coun = 5;


    clickResult(item, e) {
        this.props.answerClick(item);
        if (e.target.innerText === this.props.data[this.props.index][this.props.randomBird].name) {
            e.target.className += ' success';
            this.props.answerCount(this.coun);
            this.coun = 5;
            const sound = new Howl({
                src: [corect],
                autoplay: false,
                loop: false,
                volume: 0.5,
            });
            sound.play();
        } else {
            if (!this.props.error) {
                const sound = new Howl({
                    src: [lose],
                    autoplay: false,
                    loop: false,
                    volume: 0.5,
                });
                sound.play();
                e.target.className += ' error';
                this.count(e.target.className)
            }
        }

    }

    count(count) {
        if (count === 'list-group-item error') {
            this.coun--;
        }


    }

    render() {
        const data = this.props.data[this.props.index];
        console.log(this.props.data[this.props.index][this.props.randomBird].name);
        return (
            <ul className="item-list list-group">
                {data.map((item) => (
                    <li className={`list-group-item`}
                        key={item.id}
                        onClick={(e) => this.clickResult(item, e)}>
                      <span className={'li-btn'}>
                      </span>
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }
}

export default Birds;