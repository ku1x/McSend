import React, { useReducer, useState } from 'react'
import Cart from './components/Cart/Cart'
import FilterMeals from './components/FilterMeals/FilterMeals'
import Meals from './components/Meals/Meals'
import Meals_Data from './Data/Meals_Data'
import CartContext from './store/cart-context'

//定义cartRudecer
const cartReducer = (state,action)=>{

  const newCart = {...state};

  switch (action.type){
    default:
      return state;
    case 'ADD':
      if(newCart.items.indexOf(action.meal) === -1){
        //将meal添加到购物车中
       newCart.items.push(action.meal);
       //修改商品数量,同时于meal对象中添加amount属性
       action.meal.amount = 1;
      }else{
        //增加数量
        action.meal.amount +=1;
      }  
      newCart.totalAmount += 1;
      newCart.totalPrice += action.meal.price;
      //重新设置购物车
      return newCart;
    case 'REMOVE':
        action.meal.amount -=1;
      if(action.meal.amount === 0){
        newCart.items.splice(newCart.items.indexOf(action.meal),1)
      }
      //
      newCart.totalAmount -= 1;
      newCart.totalPrice -= action.meal.price;
      //重新设置购物车
      return newCart;
    case 'CLEAR':
      newCart.items.forEach(item =>delete item.amount);
      newCart.items=[];
      newCart.totalAmount=0;
      newCart.totalPrice=0;  
      return newCart;
  }
}
const App = () => {

  const [mealsData, setMealsData] = useState(Meals_Data);

  //创建一个state存储购物车数据
  /**
   *  1商品[]
   *  2总价 totalAmount
   *  3总数 totalPrice
   */
 /* const [cartData, setCartData] = useState ({
        items:[],
        totalAmount:0,
        totalPrice:0
  });

  //向购物车中添加商品
  const addItem = (meal) =>{
      //meal 要添加进购物车中的商品
    //对购物车进行复制
    const newCart = {...cartData};

    //判断购物车中是否存在该商品
    //meal.testText = "nihao!"；
    if(newCart.items.indexOf(meal) === -1){
      //将meal添加到购物车中
     newCart.items.push(meal);
     //修改商品数量,同时于meal对象中添加amount属性
     meal.amount = 1;
    }else{
      //增加数量
      meal.amount +=1;
    }  

    //
    newCart.totalAmount += 1;
    newCart.totalPrice += meal.price;

    //重新设置购物车

    setCartData(newCart);
  }

  const clearItem = ()=>{
    const newCart = {...cartData};
    //将购物车中meal数量清零!!!
    newCart.items.forEach(item =>delete item.amount);

    newCart.items=[];
    newCart.totalAmount=0;
    newCart.totalPrice=0;
    
    setCartData(newCart);
  }

    //减
    const removeItem = (meal) =>{
      //meal 要添加进购物车中的商品
    //对购物车进行复制
    const newCart = {...cartData};

    meal.amount -=1;

    if(meal.amount === 0){
      newCart.items.splice(newCart.items.indexOf(meal),1)
    }

    //
    newCart.totalAmount -= 1;
    newCart.totalPrice -= meal.price;

    //重新设置购物车

    setCartData(newCart);
  }
  */

  const [cartData, cartDispatch] = useReducer(cartReducer,{
      items:[],
      totalAmount:0,
      totalPrice:0
   });

  const filterHandler= (keyword)=>{
    const filterMealsData = Meals_Data.filter(item => item.title.indexOf(keyword) !==-1 || item.desc.indexOf(keyword) !==-1 )
    setMealsData(filterMealsData);
  }



  return (
    //<div style={{width:'750rem', height:200, backgroundColor:'#bfa'}}>
    <CartContext.Provider value={{...cartData, cartDispatch}}>
      <div>
        <FilterMeals onFilter = {filterHandler}/>
        <Meals 
        mealsData = {mealsData}
        />
        <Cart />
      </div>
    </CartContext.Provider>
  )
}

export default App
