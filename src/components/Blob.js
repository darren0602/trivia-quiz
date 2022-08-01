import React from 'react'

export default function Blob() {
    // To display the coloured blobs on the top left and bottom right of main page
    // Only meant for aesthetic purposes
    return (
        <div>
            <div className="blob yellow top-right"></div>
            <div className="blob yellow bottom-left"></div>
            <div className="blob blue top-left"></div>
            <div className="blob blue bottom-right"></div>
        </div>
    )
}