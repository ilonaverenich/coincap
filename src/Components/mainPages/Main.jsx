import {useSelector} from 'react-redux'
import AddedCoinModule from '../modalPages/AddedCoinModal';
import Briefcase from '../BriefCase/BriefcaseModal';
import MainTable from './MainTable';



function Main() {

  const stateList = useSelector((state)=>state.data.stateModalAdd)
  const stateModalBriefCase = useSelector((state)=>state.data.stateModalBriefCase)


  return (
    <div className='main'>
             {stateModalBriefCase && <Briefcase/>}
             {stateList && <AddedCoinModule />}
             <section className={stateList || stateModalBriefCase? 'content transpatent fixed':'content'}> 
                <div className='content__table '>
                   <MainTable />
                </div>
    </section>
    </div>
     
  )
}

export default Main
