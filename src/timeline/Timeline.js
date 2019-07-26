import React, {Component} from 'react';
import TimelineList from './TimelineList'

export default class Timeline extends Component {

    render() {
        const props = this.props;
        return <TimelineList items={props.items}/>
    }
}