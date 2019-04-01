import React from 'react';

const Header = ( {headerName} ) => {    
    return (
        // <div>{this.props.headerName}</div>
        <div className="text-center mt-2 mb-5">
            <h1 className="">{headerName}</h1>
        </div>
    )
}

export default Header;