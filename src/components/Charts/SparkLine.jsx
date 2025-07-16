import React from 'react'
import { SparklineComponent,Inject,SparklineTooltip } from '@syncfusion/ej2-react-charts';
function SparkLine({ id, height, width, color, data, type, currentColor }) {
  return (
    <SparklineComponent

      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{  
        visible: true,
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true,
          color: currentColor,
          width: 1
        }
      }}
      border={{ color: currentColor, width: 2 }}
    >
            <Inject services={[SparklineTooltip]} />
          </SparklineComponent>
        );
      }
      
      export default SparkLine;
