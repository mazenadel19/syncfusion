/* eslint-disable no-template-curly-in-string */
import { Category, ChartComponent, DataLabel, Highlight, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingBarSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import React from "react";

const data = [
    { x: 'Jan', y: 1292.88, y1: 20.966666666666666, y2: 0, y3: 0, y4: 0}
];
export const StackedBar = () => {

    return (<div className='control-pane'>
        <div className='control-section'>
            <ChartComponent
                id='charts'
                style={{ textAlign: "center" }}
                legendSettings={{ enableHighlight: true }}
                primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 }, majorTickLines: { width: 0 } }}
                primaryYAxis={{ edgeLabelPlacement: 'Shift', title: 'Sales (In Percentage)', majorTickLines: { width: 0 }, lineStyle: { width: 0 } }}
                width={'900px'}
                chartArea={{ border: { width: 0 } }}
                tooltip={{ enable: true, format: '${point.x} : <b>${point.y} (${point.percentage}%)</b>' }}>
                <Inject services={[ StackingBarSeries, Legend, Tooltip, DataLabel, Category, Highlight ]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={data} xName='x' yName='y' name='Apple' border={{ width: 1, color: "white" }} columnWidth={0.6} type='StackingBar100' />
                    <SeriesDirective dataSource={data} xName='x' yName='y1' name='Orange' border={{ width: 1, color: "white" }} columnWidth={0.6} type='StackingBar100' />
                    <SeriesDirective dataSource={data} xName='x' yName='y2' name='Wastage' border={{ width: 1, color: "white" }} columnWidth={0.6} type='StackingBar100' />
                    <SeriesDirective dataSource={data} xName='x' yName='y3' name='test1' border={{ width: 1, color: "white" }} columnWidth={0.6} type='StackingBar100' />
                    <SeriesDirective dataSource={data} xName='x' yName='y4' name='test2' border={{ width: 1, color: "white" }} columnWidth={0.6} type='StackingBar100' />
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    </div>);
};