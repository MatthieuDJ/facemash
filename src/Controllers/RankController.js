import React from "react";
import images from '../Models/cats.json';
import RankView from '../Views/RankView';

class RankController extends React.Component {

    render(){
        return <RankView />;
         }
}

export default RankController;