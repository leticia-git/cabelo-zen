import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";

export default function Blog( {posts}: { posts: any}){
  return (
    <div >
    <Header/>
    <div className="dg-grid-blog">
    {
      posts.nodes.map(post => {
        return(
          <div key={post.slug} className="posts">
            <div>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                <p> {post.excerpt}</p> 
            </div>
          </div>
        )
      })
    }
    </div>
       <Footer/>
  </div>
  );
  
}

export async function getStaticProps(){

    const res = await fetch('https://wordpress.cabelozen.com.br/graphql', {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            query: `
            query HomePageQuery {
              posts {
                nodes {
                  slug
                  title
                    excerpt
                }
              }
            }
            `,
        })
    })
  
    const json = await res.json()
  
    return {
      props: {
          posts: json.data.posts,
          
      },
    }
  
  }
  