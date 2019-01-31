import React, { Component } from "react";
import Button from './../../components/uielements/button';
class Adminspiderrankings extends Component   {

  render() {
    return(  <div>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/scoring')}>
          Scoring
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/tff')}>
          TFF
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/togreen')}>
          TO GREEN
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/grs')}>
          GRS
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/putting')}>
          PUTTING
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/sg')}>
          SG
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/proximity')}>
          PROXIMITY
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/impact')}>
          IMPACT
        </Button>
        <Button onClick={()=>this.props.redirect('/dashboard/'+this.props.url+'/wasted')}>
          WASTED
        </Button>
      </div>)
  }

}

export default Adminspiderrankings;
