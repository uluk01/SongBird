import React, {Component} from 'react';
import './Questions.css'
import OAudioPlayer from "@oovui/audio-player-react";




class Questions extends Component {

    render() {
        const {true2} = this.props;
        const {data} = this.props;
        let stars = [];
        for (let i = 0; i <= data.name.length; i++) {
            stars.push('*')
        }

        return (
            <div className={'random-bird jumbotron rounded'}>
                <img className={'bird-image'} src={true2 ? data.image :"https://birds-quiz.netlify.com/static/media/bird.06a46938.jpg"}
                     alt=""/>
                <div>
                    <ul className={'list-group list-group-flush'}>
                        <li className="list-group-item">
                            {true2 ? data.name : stars.map((item, index) =>
                                    <h3 key={index}>{item}</h3>
                                )}
                        </li>

                        <li className="list-group-item">
                            <OAudioPlayer
                                url = {data.audio}/>
                        </li>
                    </ul>
                </div>

            </div>
        );
    }
}

export default Questions;