"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/posts";
import Link from "next/link";

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  return (
    <section id="blog" className="py-20 px-4 bg-white relative z-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Leadership Insights</h2>
            <p className="text-slate-600 max-w-2xl text-lg font-light">
              Thoughts on enterprise architecture, scaling engineering teams, and navigating the modern threat landscape.
            </p>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-50 border border-dashed border-slate-300 rounded-2xl">
            <p className="text-slate-500 font-light text-lg">No articles published yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.id}`}
                  className="group flex flex-col h-full bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:border-cyan-300 hover:shadow-lg transition-all"
                >
                  {post.coverImage && (
                    <div className="w-full h-48 overflow-hidden bg-slate-200 border-b border-slate-200">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6 sm:p-8 flex-grow flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-mono">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-700 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 font-light text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/60">
                      <span className="text-sm font-medium text-slate-500">{post.date}</span>
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200 group-hover:bg-cyan-50 group-hover:border-cyan-200 transition-colors">
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 group-hover:-rotate-45 transition-all" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
