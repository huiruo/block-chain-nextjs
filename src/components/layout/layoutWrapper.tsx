import { ReactNode } from "react";
import { Layout } from '../../components/layout';

interface Props {
  children: ReactNode;
}

export const LayoutWrapper = ({children}:Props)=>{
  return <div className='wrapper-box'>
    <div className='wrapper-container'>
      <Layout />
      <div className='md-box'>
        {children}
      </div>
    </div>
  </div>
}
