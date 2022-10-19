import React from 'react';
import {StlViewer} from "react-stl-viewer";
import uri from '../models2/hot.STL'

// const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"

const style = {
    top: 0,
    left: 0,
    width: '50vw',
    height: '50vh',
}

function Try() {
    return (
        <StlViewer
            style={style}
            orbitControls
            shadows
            url={uri}
        />
    );
}
export default Try;