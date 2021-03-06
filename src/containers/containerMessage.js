import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import  Message from './../components/Message';
class containersMessage extends Component {

    render() {
        var message=this.props.message;
        return (
            <Message message={message} />
        );
    }
}
containersMessage.propTypes={
    message:PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
    return {
        message:state.message
    }
}

export default connect(mapStateToProps, null)(containersMessage);
