import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import style from './Category.module.scss'
// import { useGetCatsQuery } from '../../services/catsSlice'

const Category = () => {
    // const { data, error, loadind } = useGetCatsQuery()

    const dispatch = useDispatch()

    const [categories, setCaegories] = useState([])

    React.useEffect(() => {
        async function getCategories() {
            let data = await fetch("https://api.thecatapi.com/v1/categories")
                .then(res => res.json()
                    .then(json => dispatch(setCaegories(json)))
                )
        }
        getCategories()
    }, [])
    // console.log(style);
    return (
        <div className={style.categoryContainer}>
            {categories.map((category, i) => <div key={i} classNames={style.catContainer} onClick={()=> setCaegories(i)}>{category.name}</div>)}
        </div>
    )
}

export default Category