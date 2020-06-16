import React from 'react'
import SvgIcon from "@/components/SvgIcon";
import style from './index.less'

console.log(style)

class Menu extends React.Component {
    render() {
        return (
            <div className={style["menu-component-container"]}>
                <div className={[style["top-menu"], "flex-column"].join(" ")}>
                    <div className={style["menu-item"]}>
                        <SvgIcon iconClass="index" customClass={style["svg-icon"]}></SvgIcon>
                        <div>首页</div>
                    </div>
                    <div className={style["menu-item"]}>我执行的</div>
                    <div className={style["menu-item"]}>我参与的</div>
                    <div className={style["menu-item"]}>我创建的</div>
                </div>

                <div className={[style["top-menu"], "flex-column"].join(" ")}>
                    <div className={style["menu-item"]}>首页</div>
                    <div className={style["menu-item"]}>我执行的</div>
                    <div className={style["menu-item"]}>我参与的</div>
                    <div className={style["menu-item"]}>我创建的</div>
                </div>

                <div className={[style["top-menu"], "flex-column"].join(" ")}>
                    <div className={style["menu-item"]}>首页</div>
                    <div className={style["menu-item"]}>我执行的</div>
                    <div className={style["menu-item"]}>我参与的</div>
                    <div className={style["menu-item"]}>我创建的</div>
                </div>
            </div>
        )
    }
}

export default Menu
