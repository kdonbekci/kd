
export const prettyProject = (projectName) => {
   return projectName
        .replace(/-/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .toLowerCase();
}