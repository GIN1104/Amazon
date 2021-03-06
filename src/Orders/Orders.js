import React, { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';
import "./Orders.css";
import Order from '../Order/Order';


function Orders() {
    const [{  user }] = useStateValue();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        if (user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    }, [user])
    return (
        <div className="orders">
            <div className="orders__order">

                { user && orders !== [] ?
                    orders?.map(order => (
                        <Order key={order.id} order={order} />
                    ))
                    : <h2>No Orders Yet, Please Sign In and make an Order</h2>
            }
            </div>
        </div>
    )
}

export default Orders
