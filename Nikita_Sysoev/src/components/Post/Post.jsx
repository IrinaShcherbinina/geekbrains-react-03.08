import './Post.scss';

import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button} from 'reactstrap';

export default class Post extends Component {
    static propTypes = {};
    static defaultProps = {};

    render() {
        return (
            <div className="Post">
                <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap"/>
                <div className="card-body">
                    <h2 className="card-title">Post Title</h2>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
                        aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi
                        vero voluptate voluptatibus possimus, veniam magni quis!</p>
                    <Button color="primary">Read More →</Button>
                </div>
                <div className="card-footer text-muted">
                    Posted on January 1, 2017 by
                </div>
            </div>
        )
    }
}