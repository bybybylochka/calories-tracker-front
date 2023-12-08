import React from 'react';
import styles from "./Trackers.module.scss";

const CircleTracker = ({norm, consumed}) => {
    const CIRCLE_LENGTH = 1256.63706;
    const percent=(consumed/norm)*CIRCLE_LENGTH;
    
    return (
        <div >
                <svg height='440' width='440' className={styles.circularChart+' '+styles.color}>
                    <path className={styles.circleBg}
                          d="M220 20
          a 200 200 0 0 1 0 400
          a 200 200 0 0 1 0 -400"
                    />
                    <path className={styles.circle}
                          strokeDasharray={`${percent}, ${CIRCLE_LENGTH}`}
                          d="M220 420
          a 200 200 0 0 1 0 -400
          a 200 200 0 0 1 0 400"
                    />
                    <text x="220" y="190" className={styles.text}>Осталось</text>
                    <text x="220" y="240" className={styles.percentage}>{`${consumed}/${norm}`}</text>
                </svg>
        </div>
    )
}
export default CircleTracker;