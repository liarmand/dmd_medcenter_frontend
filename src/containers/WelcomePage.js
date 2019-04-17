import React, { Component } from 'react';
import image1 from '../main_background.JPG';
import { Button } from 'antd';

class WelcomePage extends Component {

    handleClick = (path) =>{
        this.props.history.push(path);
    };


    render() {

        return (
                <div style={{ background: 'white', padding: '8% 10px 10px 10px'}}>

                    <div className="texting">
                        <p style={{font: 'normal 30px/1 "gentium-book-basic", Helvetica, sans-serif'}}>Welcome<br/> to the Hospital Management System!</p>
                        We are group from BS 17-08. Here you will see the information
                            about the hospital, e.g. working hours, address etc.
                    </div>


                    <div style={{width:'50%',display:'inline-block',padding:'3%'}}>
                        <img style={{width:'100%'}} src="http://inno-clinic.ru/upload/medialibrary/03b/03b31acf04e2fe177a220c558b5d6a41.jpg" />
                    </div>



                    <div>
                    </div>





                </div>
        );
    }
}

export default WelcomePage;
