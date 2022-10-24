import React,{ useEffect,useState} from 'react'
import axios from 'axios';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import {useSelector,useDispatch} from 'react-redux'

function Graphs() {
    const activeCoin = useSelector((store)=>store.data.activeCoin);
    const [coins, setCoins] = useState([])

    useEffect(()=>{
        axios.get(`https://api.coincap.io/v2/assets/${activeCoin.id}/history?interval=d1`).then(res=>{
          setCoins(res.data.data);
        })
       },[])
  
       function msToTime(date) {
       let data  =  new Date(Date.parse(date))
       return data.getDate()
      }
      msToTime()
  return (
    <div>
        <XYPlot
                width={350}
                height={200}>
                <HorizontalGridLines /> 
                <LineSeries
                    data={ 
                        coins.slice(-10).map(item=>{
                        return {x:msToTime(item.date), y:(+item.priceUsd).toFixed(2)}
                        })
                    }/>
                <XAxis />
                <YAxis />
        </XYPlot> 

              
    </div>
  )
}

export default Graphs