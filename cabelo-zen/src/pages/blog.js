import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Comentarios from "../Components/Comentarios";
import Image from "next/image";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { getLatestPosts } from "../lib/api";

export default function Blog({ posts }) {
  console.log(posts);
  return (
    <div>
      <Header />
      <div className="dg-grid-blog">
        <div className="blog">
          {posts.nodes.map((post) => {
            return (
              <div className="blog">
                <div key={post.slug} className="posts">
                  <div>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    <article
                      dangerouslySetInnerHTML={{ __html: post.excerpt }}
                    ></article>
                    <div className="botao-blog">
                      <Link href={`/posts/${post.slug}`}>Ler post</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="side">
          <div className="sidebar">
            <p>Destaques</p>
          </div>
        </div>
      </div>

      <Comentarios />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://wordpress.esteticaecabelozen.com.br/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
    }),
  });

  const json = await res.json();

  return {
    props: {
      posts: json.data.posts,
    },
  };
}
