import React,{Fragment,useState, useEffect}from 'react';
import {Card,Button} from 'react-bootstrap'
import { useHistory } from 'react-router-dom';

const Main = ()=>{
    const [pizza,setPizza] = useState(true)
    const [coke,setCoke] = useState(true)
    const history = useHistory()
    const ws = new WebSocket('ws://prescribe-server.herokuapp.com/')
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
    const reset =()=>{
        ws.send(JSON.stringify({pizza:true,coke:true}))
    }
    const logout =()=>{
        localStorage.removeItem('token')
        history.push('/')
    }
    return(
        <Fragment>
        <div className={'root'}> 
            <div className={'item-container'}>       
            <Card style={{ width: '30rem', margin:'1rem'}} >
                <Card.Img src='pizza.png' className='item-img'></Card.Img>
                <Card.Text>
                <Button variant={'success'} onClick={selectPizza} style={{fontSize:'20px' }} disabled={!pizza} className ='item-button'> Pizza</Button>
                </Card.Text>  
            </Card>
         
            <Card style={{ width: '30rem', margin:'1rem' }}>
            <Card.Img src='coke.jpg' className='item-img' ></Card.Img>
             <Card.Text>
                <Button variant='success' onClick={selectCoke} style={{fontSize:'20px' }}  disabled={!coke} className ='item-button' > Coke</Button>
            </Card.Text>  
            </Card>
            </div>
            <div className={'reset-button'}>
            <Button variant="danger" style={{fontSize:'20px' }} onClick={reset}>Reset</Button>
            <Button variant="danger" style={{fontSize:'20px' }} onClick={logout}>Logout</Button>
            </div>
        </div> 
        </Fragment>
    )
}


export default Main;