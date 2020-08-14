import React,{Fragment,useState, useEffect}from 'react';
import {Container,Card, Row,Col,Button} from 'react-bootstrap'

const Main = ()=>{
    const [pizza,setPizza] = useState(true)
    const [coke,setCoke] = useState(true)
    const ws = new WebSocket('ws://localhost:8999/')
    useEffect(()=>{
        ws.onopen =()=>{
            console.log('connected')
        }
        ws.onmessage =(msg)=>{
            const updatedSate=JSON.parse(msg.data)
            setPizza(updatedSate.pizza)
            setCoke(updatedSate.coke)
            console.log(pizza,coke,msg)
        }
    },[])
    const selectPizza =()=>{
        ws.send(JSON.stringify({pizza:false}))
    }
    const selectCoke =()=>{
        ws.send(JSON.stringify({coke:false}))
        

    }
    const updateServer=()=>{
        ws.send(JSON.stringify({pizza:false,coke:false}))
    }
    const reset =()=>{
        ws.send(JSON.stringify({pizza:true,coke:true}))
    }
    return(
        <Fragment>
        <div className={'root'}> 
            <div className={'item-container'}>       
            <Card style={{ width: '16rem', margin:'1rem'}} >
                <Card.Img src='pizza.png' className='item-img'></Card.Img>
                <Card.Text>
                <Button variant={'success'} onClick={selectPizza} disabled={!pizza} className ='item-button'> Pizza</Button>
                </Card.Text>  
            </Card>
         
            <Card style={{ width: '16rem', margin:'1rem' }}>
            <Card.Img src='pizza.png' className='item-img' ></Card.Img>
             <Card.Text>
                <Button variant='success' onClick={selectCoke}  disabled={!coke} className ='item-button' > Coke</Button>
            </Card.Text>  
            </Card>
            </div>
            <div className={'reset-button'}>
            <Button variant="danger" onClick={reset}>Reset</Button>
            </div>
        </div> 
        </Fragment>
    )
}


export default Main;