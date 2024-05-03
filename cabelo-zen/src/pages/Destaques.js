// import Link from "next/link";
// import Header from "../Components/Header";
// import Footer from "../Components/Footer";
// import Comentarios from "../Components/Comentarios";

// export default function Destaques( {posts} ){
//   return (
//     <div >
//     <Header/>
//     <div className="dg-grid-blog">
//     {
//       posts.nodes.map(post=> {
//         return(
//           <div className="blog">
//           <div key={post.slug} className="posts">
//             <div>
//               <Link href={`/posts/${post.slug}`}>{post.title}</Link>
//                 <div className="botao-blog">
//                 <Link href={`/posts/${post.slug}`}>Ler post</Link>
//                 </div>
//             </div>
//           </div>

//         <hr></hr>
 
//         </div>
//         )
//       })
//     }
//     </div>
//     <Comentarios/>
//        <Footer/>
//   </div>
//   );
  
// }

// export async function getStaticProps(){

//   const res = await fetch('https://wordpress.esteticaecabelozen.com.br/graphql', {
      
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//           query: `
//           query {
//             categoryBySlug(slug: "noticias") {
//               name
//               posts {
//                 nodes {
//                   title
//                   content
//                 }
//               }
//             }
//           }
//         `,
//       })
//   })

//   const json = await res.json()

//   return {
//     props: {
//         posts: json.data.posts,
        
//     },
//   }

// }
