import React from "react";
import images from '../Models/cats.json';
import RankView from '../Views/RankView';

class RankController extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }


componentDidMount() {
var catslist = images["images"]
for (var i=0; i<catslist.length; i++){
    catslist[i].id='cat_'+i;
}
}

    render(){
        return <RankView
        catslist = {images["images"]}

        />}
}

export default RankController;