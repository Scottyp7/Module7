import styles from '../page.module.css'

export default async function Post(){

        let limit = document.getElementBid('limitValue').value

const postFetch = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=`+ limit)
    const postData= await postFetch.json() //This is an array of the posts    
    
    const PostList = postData.map(posts => { 

        return( 
        <div key={posts.id}>
        <h1> {posts.title}</h1> 
        <div> {posts.body} </div> 
        </div>
        )                
    })


    const handleChange = (e) => {
        let limit = (event.target.value);
      };
    return (

    <main className={styles.main}>            
            <select onChange={handleChange(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
            </select>
        <h1>Here is a List of Posts</h1>
        <p>{PostList}</p>
    </main>    
    )
}