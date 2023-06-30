import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Comentarios from "../Components/Comentarios";
import Image from "next/image";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import {getLatestPosts} from '../lib/api';


type Blog = {
excerpt: string;
};
export default function Blog( {posts}: { posts: any,post:any } ){
  return (
    
    <div >
    <Header/>
    <div className="dg-grid-blog">
    {
      posts.nodes.map((post: { slug: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; excerpt: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => {
        return(
          
   
          <div className="blog">
          <div key={post.slug} className="posts">
            <div>
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
             <div className="">{post.excerpt}</div>
                <div className="botao-blog">
                <Link href={`/posts/${post.slug}`}>Ler post</Link>
                </div>
            </div>
            <div>
                <img
              className="w-full"
              src={post.featuredImage?.node.sourceUrl}
              />
            </div>
          </div>
          <div className="sidebar">

          </div>
          </div>
        )
      })
    }
    </div>
    <Comentarios/>
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
                  excerpt(format: RAW)
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
  

