import './CommentsList.scss';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import Comment from "../Comment";

export default class CommentsList extends Component {
    static propTypes = {
        comments: PropTypes.arrayOf(
            PropTypes.shape({
                author: PropTypes.string.isRequired,
                message: PropTypes.string.isRequired
            })
        )
    };

    static defaultProps = {
        comments: []
    };

    render() {
        const {comments} = this.props;
        return (
            <ul className="CommentsList">
                {
                    (comments.length > 0) ?
                        comments.map((comment, index) => <li><Comment key={index} {...comment}/></li>)
                        :
                        <p>No comments</p>
                }
            </ul>
        )
    }
}