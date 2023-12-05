import React from 'react';
import styles from "./Trackers.module.scss";

const LinearTracker = ({text, percentage}) => {
    return (
            <svg height='140' width='200'>
                <text x="100" y="15" className={styles.text}>{text}</text>
                <path className={styles.lineBg}
                      d="M20 50
                            l 160 0"/>
                <path className={styles.line}
                      strokeDasharray="70, 160"
                      d="M20 50
                            l 160 0"/>
                <text x="100" y="110" className={styles.percentage}>{percentage}</text>
            </svg>
    )
}
export default LinearTracker;