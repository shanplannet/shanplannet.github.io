import { getPostData, getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const postData = await getPostData(resolvedParams.slug);

  return (
    <main className="bg-slate-50 min-h-screen py-12 md:py-20 px-4">
      <article className="max-w-3xl mx-auto bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-200">
        <Link href="/#blog" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
        
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-bold rounded-full uppercase tracking-wider">
              {postData.category}
            </span>
            <div className="flex items-center gap-1 text-slate-500 text-sm font-mono">
              <Calendar className="w-4 h-4" />
              {postData.date}
            </div>
            <div className="flex items-center gap-1 text-slate-500 text-sm font-mono">
              <Clock className="w-4 h-4" />
              {postData.readTime}
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            {postData.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed border-l-4 border-cyan-200 pl-4 mb-8">
            {postData.excerpt}
          </p>

          {postData.coverImage && (
            <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden bg-slate-100 mb-10 shadow-sm border border-slate-200">
              <img 
                src={postData.coverImage} 
                alt={postData.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </header>

        {/* Prose applies Tailwind Typography styles to the raw HTML */}
        <div 
          className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-cyan-600 hover:prose-a:text-cyan-700 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </main>
  );
}
