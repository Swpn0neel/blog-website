import React from "react";

const PostByAuthorMapping = ({ filteredPosts }) => {
  const AuthorName = filteredPosts[0].node.ppmaAuthorName;

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold mb-8 text-slate-900 bg-gradient-to-r from-orange-200 to-orange-100 bg-[length:100%_20px] bg-no-repeat bg-left-bottom font-bold tracking-tighter leading-tight w-max">
        Posts by {AuthorName}
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredPosts.map(({ node }) => (
          <li key={node.slug} className="mb-8">
            <a href={`/blog/${node.categories.edges[0].node.name}/${node.slug}`}>
              <div className="group rounded-lg border border-transparent px-5 py-4 transition duration-300 ease-in-out transform hover:scale-105 transition-colors hover:border-accent-2 hover:dark:bg-neutral-400/30">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg sm:text-xl font-bold mb-2 text-slate-600 mr-4">
                    {node.title}
                  </h2>
                </div>
                <img
                  src={node.featuredImage.node.sourceUrl}
                  alt={node.title}
                  className="w-full h-32 object-cover mb-4 rounded-md"
                />
                <p className="text-gray-400 mb-2">Author: {node.ppmaAuthorName}</p>
                <p className="text-gray-500 mb-4">
                  Category: {node.categories.edges[0].node.name}
                </p>
                {/* Additional details can be added based on your needs */}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostByAuthorMapping;
