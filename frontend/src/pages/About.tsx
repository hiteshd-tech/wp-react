import { useEffect, useState } from "react";
import { getPageBySlug } from "../api/wp";

export default function Home() {
  const [page, setPage] = useState<any>(null);

  useEffect(() => {
    getPageBySlug("about").then(setPage);
  }, []);

  if (!page) return <p>About Loading...</p>;
  const acf = page.acf;

  return (
    <div>
      <h1 dangerouslySetInnerHTML={{ __html: page.title.rendered }} />
      <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
      
    </div>
  );
}