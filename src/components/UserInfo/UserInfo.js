import React from "react";
import styles from './UserInfo.module.scss';

const UserInfo = ({ time, avatar, name, icon, repuScore, gold, silver, bronze }) => {
    return (
        <div className={styles.user-info}>
            <div className={styles["time"]}>
                <a href="" className={styles["blue-text"]}>{time}</a>
            </div>

            <img src={avatar}></img>

            <div className={styles["author-info"]}>
                <div className={styles["author"]}>
                    <a href="">{name}</a>
                    <span>{icon}</span> ♦
                </div>
                <div className={styles["repu-score"]}>
                    <p>{repuScore}</p>
                    <img src=""></img> /*hard code gold img*/
                    <p>{gold}</p>
                    <img src=""></img>
                    <p>{silver}</p>
                    <img src=""></img>
                    <p>{bronze}</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;