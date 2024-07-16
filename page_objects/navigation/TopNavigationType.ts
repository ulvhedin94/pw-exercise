export type InternalLink = "Playwright" | "Docs" | "API" | "Community" 

export type ExternalLink = "Github" | "Discord"

export type Hoverable = "Node.js" | "Python" | "Java" | ".NET"

export type ActionButton = "Color Mode" | "Search"

type TopNavigationType = InternalLink | ExternalLink | Hoverable | ActionButton

export default TopNavigationType;