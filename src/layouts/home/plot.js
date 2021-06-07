import React, {useState} from "react";
import {
    Crosshair,
    HorizontalGridLines,
    LineMarkSeries,
    LineSeries,
    VerticalGridLines,
    XAxis,
    XYPlot,
    YAxis
} from "react-vis";
import {Header} from "semantic-ui-react";
import {quantityFormat} from "../../utils/quantityFormat";

// const square = {width: 200, height: 200}

const processData = (data) => {
    return data.sort(function (a, b) {
        const dateA = new Date(a["date"]), dateB = new Date(b["date"]);
        return dateA - dateB;
    }).map((currElement, index) => ({
        x: currElement.date.split('-')[2] + "-" + currElement.date.split('-')[1],
        y: quantityFormat(currElement.abs_profit),
    }));
};

const getCenterLineData = (data) => {
    return data.map((currElement, index) => ({
        x: currElement.date.split('-')[2] + "-" + currElement.date.split('-')[1],
        y: 0,
    }));
};

const PlotUI = (props) => {
    const data = (props?.state);
    const processedData = processData(data);
    const centerLineData = getCenterLineData(data);
    const max = Math.max(...processedData.map((r) => r.y));
    const min = Math.min(...processedData.map((r) => r.y));
    const range = Math.max(Math.abs(max), Math.abs(min)) * 1.25;
    const [crossHair, setCrosshair] = useState([]);
    return (
        <div style={{paddingTop: '10px', paddingLeft: '50px'}}>
            <Header as={"h2"}>Daily Profits</Header>
            <XYPlot onMouseLeave={() => setCrosshair([])}
                    width={800}
                    height={600}
                    xType="ordinal"
                    yDomain={[-range, range]}><XAxis title="Date"/><YAxis title="Profit"/>
                <HorizontalGridLines/>
                <VerticalGridLines/>
                <LineMarkSeries
                    onNearestX={v => setCrosshair([v])}
                    data={processedData}
                    lineStyle={{stroke: '#e0e0e0'}}
                    strokeStyle="solid"/>
                <LineSeries
                    // onNearestX={v => setCrosshair([v])}
                    data={centerLineData}
                    lineStyle={{color: '#e0e0e0'}}
                    strokeStyle="solid"/>
                <Crosshair values={crossHair}
                           titleFormat={d => ({
                               title: 'Date',
                               value: (d[0].x),
                           })}
                    // itemsFormat={d => ({
                    //     title: "Profit",
                    //     value: (d[0])
                    // })}
                />
            </XYPlot>
        </div>
    );
};

export default PlotUI;
