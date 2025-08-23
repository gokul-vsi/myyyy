import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useMediaQuery } from "react-responsive";

export const Pie = ({a,b,c}) => {
     const isMobile = useMediaQuery({ maxWidth: 640 });
  return (
    <div>
         <PieChart
         colors={['red', 'blue', 'green']}
      series={[
        {
          data: [
            { id: 0, value: a, label: 'INCOME', color:'green'},
            { id: 1, value: b, label: 'EXPENSE',color:'red' },
            { id: 2, value: c, label: 'INVESTMENT',color:'blue' },
          ],
        },
      ]}
      width={isMobile ? 100 : 200}
      height={isMobile ? 100 : 200}
    />
    </div>
  )
}
