## Goals: 
1. Create a website for online presence where I can demonstrate my projects.
2. Familiarize myself with web development.
3. Maintain the wesbite with as little effort as possible.
\n
## Approach:
In order to keep the website low-maintenance, I decided to:

* create a backend server that communicates with GitHub periodically, fetching my public repositories
* design some form of modular front-end that would require little to no effort to present new projects.

I had some experience working with Nodejs, so I went ahead with that and used the [GraphQL API of GitHub](https://developer.github.com/v4/) to update my projects collection stored in a MongoDB database. 


For the frontend, I had very little idea about what to do. Upon browsing some popular routes, I decided to go with React library because it allowed me to break down the problem into self-contained modules and came with many functional third-party packages. 

One of those packages, [react-markdown](https://rexxars.github.io/react-markdown/) is crucial to my website as it allowed me to render Markdown files (like README.md that display when browsing a GitHub repo). This let me quickly generate new project pages on my website by completing a REPORT.md file in the repository and not have to worry about going back to the source code of my website and add the new content manually.

## Outcome:
Well, my webpage is now live, updating the projects collection from GitHub every night and serving their reports dynamically via React. All my goals are accomplished and hope you enjoy the website :)