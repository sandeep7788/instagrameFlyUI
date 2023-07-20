import React, { Component, useEffect, useState } from "react";
import DemoFun from "./DemoFun";

export default class Demo extends Component {

    constructor() {
        super();
        console.warn("constructor");

        this.state = {
            name: ""
        };
    }

    componentDidMount() {
        console.warn("component did mount");
    }

    componentDidUpdate() {
        console.warn("component did update");
    }

    componentDidCatch() {
        console.warn("component did catch");
    }

    componentWillUnmount() {
        console.warn("component will unmount");

    }

    shouldComponentUpdate() {

        return true;
    }

    render() {
        return (
            <div>
                <h1>hello world.....{this.state.name}</h1>
                <button onClick={()=> this.setState({name:'data'})}> .......</button>
                <DemoFun/>
            </div>
        );
    }
}