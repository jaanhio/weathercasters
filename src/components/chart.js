import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  return(
    <div className="charts">
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean"/>
      </Sparklines>
      <div className="chartDes">
        {average(props.data)} {props.units}
      </div>
    </div>
  )
}
