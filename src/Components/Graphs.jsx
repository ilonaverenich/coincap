import React,{ useEffect,useState} from 'react'
import axios from 'axios';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import {useSelector,useDispatch} from 'react-redux'

function Graphs() {
    const activeCoin = useSelector((store)=>store.data.activeCoin);
    const [coins, setCoins] = useState([])
    const dispatch = useDispatch();
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

    console.log(coins)
  return (
    <div>
        <XYPlot
                width={500}
                height={500}>
                <HorizontalGridLines /> 
                <LineSeries
                    data={ 
                        coins.slice(-10).map(item=>{
                        return {x:(+item.priceUsd).toFixed(0), y:msToTime(item.date)}
                        })
                    }/>
                <XAxis />
                <YAxis />
        </XYPlot> 

              
    </div>
  )
}

export default Graphs