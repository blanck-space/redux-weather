import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function avg(data){
  return _.round(_.sum(data)/data.length)
}

const Sparkline = ({ data, color="blue", units="" }) => {
    if (!data){
      return(
        <p>Information Not Available</p>
      )
    }
    return(
      <div>
        <span>{avg(data)} {units}</span>
        <Sparklines data={data} width={240} height={200}>
          <SparklinesLine color={ color } />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
      </div>
    );
};

export default Sparkline;
