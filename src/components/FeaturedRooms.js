import React, { Component } from 'react';
import {RoomContext} from "../context";
import Loading from "./Loading";
import Rooms from "./Rooms";
import Title from "./Title";

export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {
        const {featuredRooms : rooms} = this.context
        console.log(rooms);
        return (
            <div>
                from featured rooms
                <Rooms />
                <Loading />
            </div>
        ); 
    }
}
