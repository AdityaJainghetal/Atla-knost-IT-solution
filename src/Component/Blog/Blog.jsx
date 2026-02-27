// // // import React, { useState, useEffect } from 'react';
// // // import { Link } from 'react-router-dom';

// // // const Blog = () => {
// // //   const [activeCategory, setActiveCategory] = useState("All");
// // //   const [categories, setCategories] = useState(["All"]);
// // //   const [blogPosts, setBlogPosts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);

// // //   // Fetch categories
// // //   useEffect(() => {
// // //     const fetchCategories = async () => {
// // //       try {
// // //         const res = await fetch("https://atla-knots-admin.onrender.com/api/blogcategory");
// // //         if (!res.ok) throw new Error("Categories fetch failed");
// // //         const data = await res.json();

// // //         if (data.success) {
// // //           const catNames = ["All", ...data.data.map(c => c.name)];
// // //           setCategories(catNames);
// // //         } else {
// // //           setError(data.message || "Failed to load categories");
// // //         }
// // //       } catch (err) {
// // //         setError("Error loading categories");
// // //         console.error(err);
// // //       }
// // //     };

// // //     fetchCategories();
// // //   }, []);

// // //   // Fetch blog posts
// // //   useEffect(() => {
// // //     const fetchPosts = async () => {
// // //       try {
// // //         setLoading(true);
// // //         const res = await fetch("https://atla-knots-admin.onrender.com/api/product"); // ← CHANGE TO YOUR REAL BLOG ENDPOINT
// // //         if (!res.ok) throw new Error("Posts fetch failed");
// // //         const data = await res.json();

// // //         if (data.success) {
// // //           setBlogPosts(data.data || []);
// // //         } else {
// // //           setError(data.message || "Failed to load posts");
// // //         }
// // //       } catch (err) {
// // //         setError("Error loading blog posts");
// // //         console.error(err);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchPosts();
// // //   }, []);

// // //   const filteredPosts =
// // //     activeCategory === "All"
// // //       ? blogPosts
// // //       : blogPosts.filter((post) => post.category?.name === activeCategory);

// // //   if (loading) {
// // //     return (
// // //       <div className="min-h-screen bg-black flex items-center justify-center text-white">
// // //         <div className="text-2xl animate-pulse">Loading content...</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
// // //         <div className="text-xl text-center">{error}</div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-black text-white font-sans">

// // //       <header className="border-b border-gray-800 sticky top-0 z-10 bg-black/80 backdrop-blur-md">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// // //           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
// // //             {categories.map((cat) => (
// // //               <button
// // //                 key={cat}
// // //                 onClick={() => setActiveCategory(cat)}
// // //                 className={`
// // //                   px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
// // //                   ${
// // //                     activeCategory === cat
// // //                       ? "bg-red-900/40 border-red-600 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
// // //                       : "bg-gray-900/80 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50 hover:text-white"
// // //                   }
// // //                 `}
// // //               >
// // //                 {cat}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// // //         {filteredPosts.length === 0 ? (
// // //           <div className="text-center py-24 text-gray-400 text-2xl">
// // //             No posts found in <span className="text-red-400">"{activeCategory}"</span>
// // //           </div>
// // //         ) : (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
// // //             {filteredPosts.map((post, index) => (
// // //               <Link
// // //                 to={`/blog/${post._id}`}
// // //                 key={post._id}
// // //                 className={`group bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden
// // //                   hover:border-red-600/60 transition-all duration-500
// // //                   hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]
// // //                   animate-fade-in block`}
// // //                 style={{ animationDelay: `${index * 80}ms` }}
// // //               >
// // //                 <div className="h-52 relative overflow-hidden">
// // //                   {post.images?.[0] ? (
// // //                     <img
// // //                       src={post.images[0]}
// // //                       alt={post.title || post.name}
// // //                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // //                     />
// // //                   ) : (
// // //                     <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-gray-600">
// // //                       No Image
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div className="p-6">
// // //                   <span className="inline-block px-3 py-1 mb-3 text-xs bg-gray-800/80 rounded-full text-gray-300">
// // //                     {post.category?.name || "Uncategorized"}
// // //                   </span>

// // //                   <h2 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors line-clamp-2 mb-3">
// // //                     {post.title || post.name || "Untitled"}
// // //                   </h2>

// // //                   <p className="text-gray-400 line-clamp-3 mb-4">
// // //                     {post.description || post.excerpt || "No description available..."}
// // //                   </p>

// // //                   <div className="text-sm text-gray-500 flex justify-between">
// // //                     <span>
// // //                       {post.createdAt
// // //                         ? new Date(post.createdAt).toLocaleDateString('en-US', {
// // //                             month: 'short', day: 'numeric', year: 'numeric'
// // //                           })
// // //                         : "Recent"}
// // //                     </span>
// // //                     <span>· 6 min read</span>
// // //                   </div>
// // //                 </div>
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Blog;

// // // src/pages/Blog.tsx

// // // import React, { useEffect } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   fetchCategories,
// // //   fetchBlogPosts,
// // //   setActiveCategory,
// // //   // assuming your slice file exports these
// // // } from "../Redux/Blog/blogSlice.js"; // ← adjust path to your slice

// // // const Blog = () => {
// // //   const dispatch = useDispatch();

// // //   const {
// // //     categories,
// // //     posts: blogPosts,
// // //     activeCategory,
// // //     status,
// // //     error,
// // //   } = useSelector((state) => state.blog); // assuming reducer mounted as 'blog'

// // //   // Fetch data only if not already loaded / succeeded
// // //   useEffect(() => {
// // //     if (status === "idle") {
// // //       dispatch(fetchCategories());
// // //       dispatch(fetchBlogPosts());
// // //     }
// // //   }, [status, dispatch]);

// // //   const filteredPosts =
// // //     activeCategory === "All"
// // //       ? blogPosts
// // //       : blogPosts.filter((post) => post.category?.name === activeCategory);

// // //   // You can show loading if either is still pending, but since both are fast → combined status
// // //   if (status === "loading") {
// // //     return (
// // //       <div className="min-h-screen bg-black flex items-center justify-center text-white">
// // //         <div className="text-2xl animate-pulse">Loading content...</div>
// // //       </div>
// // //     );
// // //   }

// // //   if (status === "failed") {
// // //     return (
// // //       <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
// // //         <div className="text-xl text-center">
// // //           {error || "Something went wrong"}
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-black text-white font-sans">
// // //       <header className="border-b border-gray-800 sticky top-0 z-10 bg-black/80 backdrop-blur-md">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// // //           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
// // //             {categories.map((cat) => (
// // //               <button
// // //                 key={cat}
// // //                 onClick={() => dispatch(setActiveCategory(cat))}
// // //                 className={`
// // //                   px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
// // //                   ${
// // //                     activeCategory === cat
// // //                       ? "bg-red-900/40 border-red-600 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
// // //                       : "bg-gray-900/80 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50 hover:text-white"
// // //                   }
// // //                 `}
// // //               >
// // //                 {cat}
// // //               </button>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </header>

// // //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// // //         {filteredPosts.length === 0 ? (
// // //           <div className="text-center py-24 text-gray-400 text-2xl">
// // //             No posts found in{" "}
// // //             <span className="text-red-400">"{activeCategory}"</span>
// // //           </div>
// // //         ) : (
// // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
// // //             {filteredPosts.map((post, index) => (
// // //               <Link
// // //                 to={`/blog/${post._id}`}
// // //                 key={post._id}
// // //                 className={`group bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden
// // //                   hover:border-red-600/60 transition-all duration-500
// // //                   hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]
// // //                   animate-fade-in block`}
// // //                 style={{ animationDelay: `${index * 80}ms` }}
// // //               >
// // //                 <div className="h-52 relative overflow-hidden">
// // //                   {post.images?.[0] ? (
// // //                     <img
// // //                       src={post.images[0]}
// // //                       alt={post.title || post.name}
// // //                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// // //                     />
// // //                   ) : (
// // //                     <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-gray-600">
// // //                       No Image
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 <div className="p-6">
// // //                   <span className="inline-block px-3 py-1 mb-3 text-xs bg-gray-800/80 rounded-full text-gray-300">
// // //                     {post.category?.name || "Uncategorized"}
// // //                   </span>

// // //                   <h2 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors line-clamp-2 mb-3">
// // //                     {post.title || post.name || "Untitled"}
// // //                   </h2>

// // //                   <p className="text-gray-400 line-clamp-3 mb-4">
// // //                     {post.description ||
// // //                       post.excerpt ||
// // //                       "No description available..."}
// // //                   </p>

// // //                   <div className="text-sm text-gray-500 flex justify-between">
// // //                     <span>
// // //                       {post.createdAt
// // //                         ? new Date(post.createdAt).toLocaleDateString("en-US", {
// // //                             month: "short",
// // //                             day: "numeric",
// // //                             year: "numeric",
// // //                           })
// // //                         : "Recent"}
// // //                     </span>
// // //                     <span>· 6 min read</span>
// // //                   </div>
// // //                 </div>
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // export default Blog;

// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { Link } from "react-router-dom";
// // import DOMPurify from "dompurify"; // ← added

// // import {
// //   fetchCategories,
// //   fetchBlogPosts,
// //   setActiveCategory,
// // } from "../Redux/Blog/blogSlice.js"; // adjust path if needed

// // const Blog = () => {
// //   const dispatch = useDispatch();

// //   const {
// //     categories,
// //     posts: blogPosts,
// //     activeCategory,
// //     status,
// //     error,
// //   } = useSelector((state) => state.blog);

// //   useEffect(() => {
// //     if (status === "idle") {
// //       dispatch(fetchCategories());
// //       dispatch(fetchBlogPosts());
// //     }
// //   }, [status, dispatch]);

// //   const filteredPosts =
// //     activeCategory === "All"
// //       ? blogPosts
// //       : blogPosts.filter((post) => post.category?.name === activeCategory);

// //   if (status === "loading") {
// //     return (
// //       <div className="min-h-screen bg-black flex items-center justify-center text-white">
// //         <div className="text-2xl animate-pulse">Loading content...</div>
// //       </div>
// //     );
// //   }

// //   if (status === "failed") {
// //     return (
// //       <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
// //         <div className="text-xl text-center">
// //           {error || "Something went wrong"}
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen bg-black text-white font-sans">
// //       <header className="border-b border-gray-800 sticky top-0 z-10 bg-black/80 backdrop-blur-md">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
// //           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
// //             {categories.map((cat) => (
// //               <button
// //                 key={cat}
// //                 onClick={() => dispatch(setActiveCategory(cat))}
// //                 className={`
// //                   px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
// //                   ${
// //                     activeCategory === cat
// //                       ? "bg-red-900/40 border-red-600 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
// //                       : "bg-gray-900/80 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50 hover:text-white"
// //                   }
// //                 `}
// //               >
// //                 {cat}
// //               </button>
// //             ))}
// //           </div>
// //         </div>
// //       </header>

// //       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
// //         {filteredPosts.length === 0 ? (
// //           <div className="text-center py-24 text-gray-400 text-2xl">
// //             No posts found in{" "}
// //             <span className="text-red-400">"{activeCategory}"</span>
// //           </div>
// //         ) : (
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
// //             {filteredPosts.map((post, index) => {
// //               // Sanitize description HTML (safe from XSS)
// //               const sanitizedDescription = DOMPurify.sanitize(
// //                 post.description || post.excerpt || "<p>No description available...</p>"
// //               );

// //               return (
// //                 <Link
// //                   to={`/blog/${post._id}`}
// //                   key={post._id}
// //                   className={`group bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden
// //                     hover:border-red-600/60 transition-all duration-500
// //                     hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]
// //                     animate-fade-in block`}
// //                   style={{ animationDelay: `${index * 80}ms` }}
// //                 >
// //                   <div className="h-52 relative overflow-hidden">
// //                     {post.images?.[0] ? (
// //                       <img
// //                         src={post.images[0]}
// //                         alt={post.title || post.name || "Blog post"}
// //                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
// //                       />
// //                     ) : (
// //                       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-gray-600">
// //                         No Image
// //                       </div>
// //                     )}
// //                   </div>

// //                   <div className="p-6">
// //                     <span className="inline-block px-3 py-1 mb-3 text-xs bg-gray-800/80 rounded-full text-gray-300">
// //                       {post.category?.name || "Uncategorized"}
// //                     </span>

// //                     <h2 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors line-clamp-2 mb-2">
// //                       {post.title || post.name || "Untitled"}
// //                     </h2>

// //                     {/* Author name added here */}
// //                     <p className="text-sm text-gray-400 mb-3">
// //                       By <span className="text-gray-200">{post.author || "Anonymous"}</span>
// //                     </p>

// //                     {/* Description rendered as HTML (sanitized) */}
// //                     <div
// //                       className="text-gray-400 line-clamp-3 mb-4 prose prose-invert prose-sm"
// //                       dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
// //                     />

// //                     <div className="text-sm text-gray-500 flex justify-between">
// //                       <span>
// //                         {post.createdAt
// //                           ? new Date(post.createdAt).toLocaleDateString("en-US", {
// //                               month: "short",
// //                               day: "numeric",
// //                               year: "numeric",
// //                             })
// //                           : "Recent"}
// //                       </span>
// //                       <span>· 6 min read</span>
// //                     </div>
// //                   </div>
// //                 </Link>
// //               );
// //             })}
// //           </div>
// //         )}
// //       </main>
// //     </div>
// //   );
// // };

// // export default Blog;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import DOMPurify from "dompurify";

// import {
//   fetchCategories,
//   fetchBlogPosts,
//   setActiveCategory,
// } from "../Redux/Blog/blogSlice.js"; // adjust path if needed

// const Blog = () => {
//   const dispatch = useDispatch();

//   const {
//     categories,
//     posts: blogPosts,
//     activeCategory,
//     status,
//     error,
//   } = useSelector((state) => state.blog);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(fetchCategories());
//       dispatch(fetchBlogPosts());
//     }
//   }, [status, dispatch]);

//   const filteredPosts =
//     activeCategory === "All"
//       ? blogPosts
//       : blogPosts.filter((post) => post.category?.name === activeCategory);

//   if (status === "loading") {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center text-white">
//         <div className="text-2xl animate-pulse">Loading content...</div>
//       </div>
//     );
//   }

//   if (status === "failed") {
//     return (
//       <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
//         <div className="text-xl text-center">
//           {error || "Something went wrong"}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white font-sans">
//       <header className="border-b border-gray-800 sticky top-0 z-10 bg-black/80 backdrop-blur-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => dispatch(setActiveCategory(cat))}
//                 className={`
//                   px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
//                   ${
//                     activeCategory === cat
//                       ? "bg-red-900/40 border-red-600 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
//                       : "bg-gray-900/80 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50 hover:text-white"
//                   }
//                 `}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </header>

//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {filteredPosts.length === 0 ? (
//           <div className="text-center py-24 text-gray-400 text-2xl">
//             No posts found in{" "}
//             <span className="text-red-400">"{activeCategory}"</span>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
//             {filteredPosts.map((post, index) => {
//               const sanitizedDescription = DOMPurify.sanitize(
//                 post.description || post.excerpt || "<p>No description available...</p>"
//               );

//               return (
//                 <Link
//                   to={`/blog/${post._id}`}
//                   key={post._id}
//                   className={`group bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden
//                     hover:border-red-600/60 transition-all duration-500
//                     hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]
//                     animate-fade-in block flex flex-col h-full`}
//                   style={{ animationDelay: `${index * 80}ms` }}
//                 >
//                   <div className="h-52 relative overflow-hidden">
//                     {post.images?.[0] ? (
//                       <img
//                         src={post.images[0]}
//                         alt={post.title || post.name || "Blog post"}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
//                     ) : (
//                       <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-gray-600">
//                         No Image
//                       </div>
//                     )}
//                   </div>

//                   <div className="p-6 flex flex-col flex-grow">
//                     <span className="inline-block px-3 py-1 mb-3 text-xs bg-gray-800/80 rounded-full text-gray-300 w-fit">
//                       {post.category?.name || "Uncategorized"}
//                     </span>

//                     <h2 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors line-clamp-2 mb-2">
//                       {post.title || post.name || "Untitled"}
//                     </h2>

//                     <p className="text-sm text-gray-400 mb-3">
//                       By <span className="text-gray-200">{post.author || "Anonymous"}</span>
//                     </p>

//                     <div
//                       className="text-gray-400 line-clamp-3 mb-6 prose prose-invert prose-sm flex-grow"
//                       dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
//                     />

//                     {/* ──────────────── Detail / Read More Button ──────────────── */}
//                     <div className="mt-auto pt-4">
//                       <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-900/30 border border-red-700/50 text-red-300 text-sm font-medium rounded-lg
//                         hover:bg-red-800/50 hover:border-red-600 hover:text-red-200
//                         transition-all duration-300 group-hover:translate-x-1">
//                         Read More
//                         <svg
//                           className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                         >
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </Link>
//               );
//             })}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Blog;

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

import {
  fetchCategories,
  fetchBlogPosts,
  setActiveCategory,
} from "../Redux/Blog/blogSlice.js"; // adjust path if needed

const POSTS_PER_PAGE = 6; // ← you can change this

const Blog = () => {
  const dispatch = useDispatch();

  const {
    categories,
    posts: blogPosts,
    activeCategory,
    status,
    error,
  } = useSelector((state) => state.blog);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCategories());
      dispatch(fetchBlogPosts());
    }
  }, [status, dispatch]);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category?.name === activeCategory);

  // Pagination logic
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Helper to generate page numbers (with ellipsis)
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
      return pages;
    }

    pages.push(1);

    let start = Math.max(2, currentPage - 1);
    let end = Math.min(totalPages - 1, currentPage + 1);

    if (start > 2) pages.push("...");
    for (let i = start; i <= end; i++) pages.push(i);
    if (end < totalPages - 1) pages.push("...");

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-white">
        <div className="text-2xl animate-pulse">Loading content...</div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center text-red-400">
        <div className="text-xl text-center">
          {error || "Something went wrong"}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <header className="border-b border-gray-800 sticky top-0 z-10 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => dispatch(setActiveCategory(cat))}
                className={`
                  px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border
                  ${
                    activeCategory === cat
                      ? "bg-red-900/40 border-red-600 text-red-300 shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                      : "bg-gray-900/80 border-gray-700 text-gray-300 hover:bg-gray-800 hover:border-red-600/50 hover:text-white"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-24 text-gray-400 text-2xl">
            No posts found in{" "}
            <span className="text-red-400">"{activeCategory}"</span>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-12">
              {currentPosts.map((post, index) => {
                const sanitizedDescription = DOMPurify.sanitize(
                  post.description ||
                    post.excerpt ||
                    "<p>No description available...</p>",
                );

                return (
                  <Link
                    to={`/blog/${post._id}`}
                    key={post._id}
                    className={`group bg-gray-900/70 border border-gray-800 rounded-2xl overflow-hidden 
                      hover:border-red-600/60 transition-all duration-500 
                      hover:shadow-[0_0_30px_rgba(220,38,38,0.15)] 
                      animate-fade-in block flex flex-col h-full`}
                    style={{ animationDelay: `${index * 80}ms` }}
                  >
                    <div className="h-52 relative overflow-hidden">
                      {post.images?.[0] ? (
                        <img
                          src={post.images[0]}
                          alt={post.title || post.name || "Blog post"}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center text-gray-600">
                          No Image
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <span className="inline-block px-3 py-1 mb-3 text-xs bg-gray-800/80 rounded-full text-gray-300 w-fit">
                        {post.category?.name || "Uncategorized"}
                      </span>

                      <h2 className="text-xl font-bold text-red-400 group-hover:text-red-300 transition-colors line-clamp-2 mb-2">
                        {post.title || post.name || "Untitled"}
                      </h2>

                      <p className="text-sm text-gray-400 mb-3">
                        By{" "}
                        <span className="text-gray-200">
                          {post.author || "Anonymous"}
                        </span>
                      </p>

                      <div
                        className="text-gray-400 line-clamp-3 mb-6 prose prose-invert prose-sm flex-grow"
                        dangerouslySetInnerHTML={{
                          __html: sanitizedDescription,
                        }}
                      />

                      <div className="mt-auto pt-4">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-900/30 border border-red-700/50 text-red-300 text-sm font-medium rounded-lg hover:bg-red-800/50 hover:border-red-600 hover:text-red-200 transition-all duration-300 group-hover:translate-x-1">
                          Read More
                          <svg
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* ──────────────── Pagination Controls ──────────────── */}
            {totalPages > 1 && (
              <div className="flex flex-col items-center gap-4 mt-8">
                <nav className="flex items-center gap-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        currentPage === 1
                          ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                          : "bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 hover:border-red-600/50"
                      }`}
                  >
                    ← Previous
                  </button>

                  {getPageNumbers().map((page, idx) => (
                    <button
                      key={idx}
                      onClick={() => typeof page === "number" && goToPage(page)}
                      disabled={page === "..."}
                      className={`min-w-[2.5rem] h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200
                        ${
                          page === "..."
                            ? "text-gray-500 cursor-default"
                            : page === currentPage
                              ? "bg-red-900/60 border border-red-600 text-red-200 shadow-[0_0_15px_rgba(220,38,38,0.25)]"
                              : "bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 hover:border-red-600/50"
                        }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                      ${
                        currentPage === totalPages
                          ? "bg-gray-800/50 text-gray-500 cursor-not-allowed"
                          : "bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 hover:border-red-600/50"
                      }`}
                  >
                    Next →
                  </button>
                </nav>

                <div className="text-sm text-gray-500">
                  Page {currentPage} of {totalPages} • {totalPosts} posts
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Blog;
