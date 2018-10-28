import React, { Component } from 'react';


class Toto extends Component {
    state = {
        toto : []
    }

    genToto = () => {
        let toto = [];
        while (toto.length < 6) {
            var random = Math.ceil(Math.random() * 49)
            if (!toto.includes(random)) toto.push(random)

        }

        toto = toto.sort(function (a, b) {
            return a - b
        });
        this.setState({
            toto :toto
        })

    }
   
    render() {
        const style = {
            margin: 3,
        }

        const toto = this.state.toto;
        return (
            <div>
                <button onClick={this.genToto} className="btn btn-danger btn-lg">Get Your Lucky Totos</button>
                <br />
                {toto.map(t => {
                    return (<div style={style} className="btn btn-warning btn-lg" >{t}</div>)
                })}
            </div>
        );
    }


}

export default Toto;