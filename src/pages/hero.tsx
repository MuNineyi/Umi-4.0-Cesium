import React, {useEffect, useRef} from 'react';
import styles from './hero.less';
import {Ion, Viewer} from 'cesium';
import { connect } from "umi";
// import hero from "@/models/hero";

function PageProps (state: any){
    return {
        hero: state.hero,
    }
}

export default function Index(props: any) {
    console.log(props.hero);
    Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZDE3YTE1Ni1iYTJjLTRjYjAtYTIyYi0zMDQ0M2UwN2NlNmQiLCJpZCI6NTg3MjcsImlhdCI6MTYyMzM4OTE3NH0.PS43TPHDe7ewqpHVLZXU4rrNC9E132RWas92ql_1jPI';
    let viewer;
    const cesiumViewerDivRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        viewer = new Viewer(cesiumViewerDivRef.current as Element, {
            animation: true, // 动画控制，默认true
        })
        viewer.allowDataSourcesToSuspendAnimation = false;

    })
    return (
        <div>
            <div ref={cesiumViewerDivRef}>

            </div>

        </div>
    )
};
// const Hero: FC<any> = (props) => {
//     console.log(props.hero);
//     return (
//         <div>
//             <h1 className={styles.title}>Page hero</h1>
//             <h2>This is {props.hero.name}</h2>
//         </div>
//     )
// }
//
// export default connect(({ hero } : { hero: HeroModelState }) => ({ hero }))(hero);
