import type { Article } from "../../types/article";

interface ArticleListProps {
  hits: Article[];
}

export default function ArticleList({ hits }: ArticleListProps) {
  return (
    <ul>
      {hits.map((hit) => (
        <li key={hit.objectID}>
          <a href={hit.url} target="_blank">
            {hit.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
