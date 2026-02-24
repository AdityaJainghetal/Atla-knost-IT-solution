// // src/pages/BlogDetail.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams, Link } from 'react-router-dom';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(`https://atla-knots-solution-admin-2.onrender.com/api/product/${id}`); // ← CHANGE TO YOUR REAL SINGLE POST ENDPOINT
//         if (!res.ok) throw new Error("Post not found");
//         const data = await res.json();

//         if (data.success) {
//           setPost(data.data);
//         } else {
//           setError(data.message || "Failed to load post");
//         }
//       } catch (err) {
//         setError("Error loading blog post");
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center text-white">
//         <div className="text-2xl animate-pulse">Loading article...</div>
//       </div>
//     );
//   }

//   if (error || !post) {
//     return (
//       <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
//         <h1 className="text-3xl text-red-400 mb-4">Oops!</h1>
//         <p className="text-xl text-gray-300 mb-8">{error || "Post not found"}</p>
//         <Link
//           to="/blog"
//           className="px-6 py-3 bg-red-900/50 hover:bg-red-800/70 border border-red-600 rounded-lg text-red-300 transition"
//         >
//           ← Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white">

//       {/* Hero / Cover Image */}
//       <div className="relative h-96 md:h-[500px] overflow-hidden">
//         {post.images?.[0] ? (
//           <img
//             src={post.images[0]}
//             alt={post.title || post.name}
//             className="w-full h-full object-cover brightness-75"
//           />
//         ) : (
//           <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
//         )}

//         <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

//         <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto">
//           <span className="inline-block px-4 py-1.5 mb-4 text-sm bg-red-900/60 rounded-full border border-red-700/50 text-red-200">
//             {post.category?.name || "Uncategorized"}
//           </span>
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
//             {post.title || post.name || "Untitled Post"}
//           </h1>
//           <div className="text-gray-400 text-lg md:text-xl">
//             {post.createdAt
//               ? new Date(post.createdAt).toLocaleDateString('en-US', {
//                   month: 'long', day: 'numeric', year: 'numeric'
//                 })
//               : "Recently published"}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
//         <div className="prose prose-invert prose-red max-w-none">
//           <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-10">
//             {post.description || post.excerpt || ""}
//           </p>

//           {/* If you have rich content / full body */}
//           {post.content || post.fullDescription ? (
//             <div
//               className="text-gray-300 leading-relaxed text-lg"
//               dangerouslySetInnerHTML={{ __html: post.content || post.fullDescription }}
//             />
//           ) : (
//             <p className="text-gray-400 italic">
//               Full article content not available in this version.
//             </p>
//           )}

//           {/* Gallery if multiple images */}
//           {post.images?.length > 1 && (
//             <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
//               {post.images.slice(1).map((img, idx) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`${post.title} - image ${idx + 2}`}
//                   className="rounded-xl border border-gray-800 shadow-2xl"
//                 />
//               ))}
//             </div>
//           )}
//         </div>

//         <div className="mt-16 pt-10 border-t border-gray-800 text-center">
//           <Link
//             to="/blog"
//             className="inline-flex items-center px-8 py-4 bg-red-900/50 hover:bg-red-800/70 border border-red-600 rounded-xl text-red-300 font-medium transition text-lg"
//           >
//             ← Back to all articles
//           </Link>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BlogDetail;

// src/pages/BlogDetail.jsx
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchBlogPostById,
  clearCurrentPost,
} from "../Redux/Blog/blogSlice.js"; // adjust path

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentPost, detailStatus, detailError } = useSelector(
    (state) => state.blog,
  );

  useEffect(() => {
    if (!id) {
      navigate("/blog");
      return;
    }

    // Optional: only fetch if we don't already have this post or status is idle/failed
    dispatch(fetchBlogPostById(id));

    // Cleanup when unmounting / leaving page
    return () => {
      dispatch(clearCurrentPost());
    };
  }, [id, dispatch, navigate]);

  if (detailStatus === "loading") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-2xl animate-pulse">Loading article...</div>
      </div>
    );
  }

  if (detailStatus === "failed" || !currentPost) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl text-red-400 mb-4">Oops!</h1>
        <p className="text-xl text-gray-300 mb-8">
          {detailError || "Post not found"}
        </p>
        <Link
          to="/blog"
          className="px-6 py-3 bg-red-900/50 hover:bg-red-800/70 border border-red-600 rounded-lg text-red-300 transition"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const post = currentPost;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero / Cover Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        {post.images?.[0] ? (
          <img
            src={post.images[0]}
            alt={post.title || post.name}
            className="w-full h-full object-cover brightness-75"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950" />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 max-w-5xl mx-auto">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm bg-red-900/60 rounded-full border border-red-700/50 text-red-200">
            {post.category?.name || "Uncategorized"}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {post.title || post.name || "Untitled Post"}
          </h1>
          <div className="text-gray-400 text-lg md:text-xl">
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
              : "Recently published"}
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="prose prose-invert prose-red max-w-none">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-10">
            {post.description || post.excerpt || ""}
          </p>

          {post.content || post.fullDescription ? (
            <div
              className="text-gray-300 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{
                __html: post.content || post.fullDescription,
              }}
            />
          ) : (
            <p className="text-gray-400 italic">
              Full article content not available in this version.
            </p>
          )}

          {post.images?.length > 1 && (
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${post.title || "Post"} - image ${idx + 2}`}
                  className="rounded-xl border border-gray-800 shadow-2xl"
                />
              ))}
            </div>
          )}
        </div>

        <div className="mt-16 pt-10 border-t border-gray-800 text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-red-900/50 hover:bg-red-800/70 border border-red-600 rounded-xl text-red-300 font-medium transition text-lg"
          >
            ← Back to all articles
          </Link>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
