import React, { Component } from "react";

// export const Main = (props) => {
//   return (
//     <div>Main</div>
//   )
// }


export default class Main extends Component {
     render () {
        return (
            <h1>Welcome to {this.props.type} component</h1>
        )
     }
}