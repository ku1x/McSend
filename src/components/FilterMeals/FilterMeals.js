import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

function FilterMeals(props) {

    const [keyword, setKeyword] = useState('');

   

    //使用useEffect去除连输入搜索渲染问题

    useEffect(()=>{

      const timer = setTimeout(()=>{
          console.log('执行effect！')
          props.onFilter(keyword);
      },1000)
      
      //在effect中的回调函数中，可以指定一个函数作为返回值
      //该函数称为清理函数。会在下次effect执行前调用
      //可以在这个清理函数中做一下工作清理上次effect执行所带来的影响
      return ()=>{
        console.log('先执行回调函数')
        clearTimeout(timer);
      }
    
    }
    ,[keyword])

    const inputChangeHandler = e =>{
      setKeyword(e.target.value.trim());
    }

  return (
    <div className={classes.FilterMeals}>
        <div className={classes.InputOuter}>
            <input 
            onChange={inputChangeHandler}
            className={classes.SearchInput} 
            type="text" placeholder={'Search with key words'}/>
            <FontAwesomeIcon className={classes.SearchIcon} icon={faSearch}/>
        </div>
    </div>
  )
}

export default FilterMeals
