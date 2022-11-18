import {useSelector} from 'react-redux'
import Briefcase from '../BriefCase/BriefcaseModal';
import InfoCoinContent from './InfoCoinContent';
import NotFoundPage from '../NOTFOUND/NotFoundPage';


function InfoCoin() {

  const activeCoin = useSelector((store)=>store.data.activeCoin)
  const stateModalBriefCase = useSelector((state)=>state.data.stateModalBriefCase)

  return (
    <div>
      {activeCoin.length===0?<NotFoundPage/>:<InfoCoinContent/>}
      {stateModalBriefCase?<Briefcase/>:''}
    </div>
  )
}

export default InfoCoin