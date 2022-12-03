import React from "react";
import Color from "../HOC/Color.js";
import logo from '../../assets/images/naibee.jpg';

class Home extends React.Component {

    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }
    render() {
        console.log("check props: ", this.props);
        return (
            <>
             <div>
                Hello world from Homepage
            </div>
            <div>
                <img src={logo} alt="" style={{width: '400px', height: '400px', marginTop: '20px'}} />
            </div>
            </>
           
        )
    }
}

// export default withRouter(Home);
export default Color(Home);