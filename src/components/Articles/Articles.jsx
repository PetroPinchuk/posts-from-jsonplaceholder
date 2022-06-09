import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Articles.module.scss'
import { Link } from 'react-router-dom'

const Articles = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)


//   useEffect з методом fetch

//   useEffect(() => {
//     const fetchData = async () => {
//        try { 
//            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//            const data = await response.json()
//            setPosts(data)
//         } catch (error) {
//             console.log(error);
//         }

//         setLoading(false)
//     }

//     fetchData()
//   }, [])


  useEffect(() => {
    const fetchData = async () => {
       try { 
           const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
           setPosts(data)
        } catch (error) {
            console.log(error);
        }
        setLoading(false)
    }

    fetchData()
  }, [])

  return (
        <div style={{padding: '20px 40px'}}>
            <h1>Articles</h1>

            {loading && 'Завантаження...'}

            <div className={styles.wrapper}>
                {posts.map(post => (
                    <div key={post.id} className={styles.card}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                        <Link to="/">Read now</Link>
                    </div>
                ))}
            </div>

        </div>
  )
}

export default Articles