import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";

type Blog = {

};
export default function Blog( {posts}: { posts: any,post:any } ){
  return (
    
    <div >
    <Header/>
    <div className="dg-grid-blog">
    {
      
      posts.nodes.map((post: { slug: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; excerpt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
       
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
  