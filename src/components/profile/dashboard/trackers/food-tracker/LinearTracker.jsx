import React from 'react';
import styles from "./Trackers.module.scss";

const LinearTracker = ({text, norm, consumed}) => {
    const LINE_LENGTH=160;
    let percent = consumed/norm*160;
    if(percent>LINE_LENGTH){
        percent=LINE_LENGTH;
    }
    console.log(norm, consumed, percent)

    return (
            <svg height='140' width='200'>
                <text x="100" y="15" className={styles.text}>{text}</text>
                <path className={styles.lineBg}
                      d="M20 50
                            l 160 0"/>
                <path className={styles.line}
                      strokeDasharray={`${percent}, ${LINE_LENGTH}`}
                      d="M20 50
                            l 160 0"/>
                <text x="100" y="110" className={styles.percentage}>{`${consumed}/${norm}`}</text>
            </svg>
    )
}
export default LinearTracker;