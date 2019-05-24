import React from 'react';

const showPost = (props) => {
    console.log('from showpost',this.props)
    return (
        <div>
            <h4>Recents Activity</h4>
            {props.children} 
        </div>
    );
};

export default showPost;