import React from 'react';
import {HashRouter, NavLink, Route} from 'react-router-dom';
import './svgs/index.js'
import Home from './Home';
import Stuff from './Stuff';
import Contact from './Contact';
import {ConfigProvider} from 'antd';
import 'antd/dist/antd.css';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import TopNav from "@/components/TopNav";
import Menu from "@/components/Menu";

class Main extends React.Component {
    render () {
        return (
            <ConfigProvider locale={zhCN}>
                <HashRouter>
                    <div className="app-main-container">
                        <TopNav/>
                        <Menu />
                        <h1>Simple SPA</h1>
                        <ul className="header">
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/stuff">Stuff</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact">Contact</NavLink>
                            </li>
                        </ul>

                        <div className="content">
                            <Route exact path="/" component={Home}/>
                            <Route path="/stuff" component={Stuff}/>
                            <Route path="/contact" component={Contact}/>
                        </div>
                    </div>
                </HashRouter>
            </ConfigProvider>
        );

    }

}

export default Main;
