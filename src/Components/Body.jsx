import React from "react";
import { connect } from 'react-redux';
import {incrementCount, decrementCount} from '../store/actions/count'

class Body extends React.Component{
    render(){
        return(
            <div>
                <button onClick={()=>this.props.incrementCount(this.props.count+1)}>Increase Count</button>
                <button onClick={()=>this.props.decrementCount(this.props.count-1)}>Decrease Count</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        count: state.count
    }
}
const mapDispatchToProps =(dispatch)=> {
    return{
        // incrementCount: (newCount)=>dispatch({type:'increment count', payload:newCount}),
        incrementCount: (newCount)=>dispatch(incrementCount(newCount)),
        decrementCount: (newCount)=>dispatch(decrementCount(newCount)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);
