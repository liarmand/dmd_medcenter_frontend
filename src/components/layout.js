import {Layout, Menu, Breadcrumb, Card} from 'antd';
import {Component} from "react";
import React from "react";
import { withRouter, Link} from 'react-router-dom';

const { Header, Content, Footer } = Layout;


class CustomLayout extends Component {
    render() {

        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" >
                        Name of the Organization
                    </div>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['3']}
                        style={{ lineHeight: '64px', float:'right' }}
                    >
                        <Menu.Item key="1" onClick={()=>{this.props.history.push('/login/');}}>LogIn</Menu.Item>
                        <Menu.Item key="2" onClick={()=>{this.props.history.push('/signup/');}}>SignUp</Menu.Item>
                        <Menu.Item key="3" onClick={()=>{this.props.history.push('/');}}>Info</Menu.Item>
                    </Menu>

                </Header>
                {/*<img src={image1} style={{width:"100%", position:"absolute", zIndex:0, margin:"64px 0 0 0"}}/>*/}

                <Content style={{ padding: '0 50px', background:"white", zIndex:1}}>


                    {this.props.children}
                </Content>
            </Layout>
        );
    }
}

export default withRouter(CustomLayout);