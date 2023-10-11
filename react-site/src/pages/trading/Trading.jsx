import Header from '../../components/Header/Header.jsx'
import StickyFooter from '../../components/footer/footer.jsx'
import './Trading.css'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'


function Trading() {

    return (
      <>
      <Header/>
        <section className="trading-wrapper 
        relative        
        ">
            <div className='bg-[#1c1c1c]
absolute
h-[100%]
w-[100vw]
place-content-center
            '>
            <div className='tradingview'>
                <AdvancedRealTimeChart
                theme='dark'
                width={'70%'}
                height={'70%'}
                symbol='MNQ1!'
                  className='trading
                  '/>
            </div>
            </div>
        </section>
      </>
    )
  }
  
  export default Trading
  