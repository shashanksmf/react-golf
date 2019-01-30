import React, { Component } from "react";
import Button from './../../components/uielements/button';
class Adminspiderrankings extends Component   {

  render() {
    return(  <div>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/scoring')}>
          Scoring
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/tff')}>
          TFF
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/togreen')}>
          TO GREEN
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/grs')}>
          GRS
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/putting')}>
          PUTTING
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/sg')}>
          SG
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/proximity')}>
          PROXIMITY
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/impact')}>
          IMPACT
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/adminspiderrankings/wasted')}>
          WASTED
        </Button>
      </div>)
  }

}

export default Adminspiderrankings;
