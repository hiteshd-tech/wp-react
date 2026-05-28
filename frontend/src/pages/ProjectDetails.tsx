import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {

  const { slug } = useParams();

  const [project, setProject] = useState<any>(null);

  useEffect(() => {

    fetch(
      `http://localhost/wp-react/wp-json/wp/v2/projects?slug=${slug}`
    )
      .then((response) => response.json())
      .then((data) => {

        if (data.length > 0) {
          setProject(data[0]);
        }

      })
      .catch((error) => {
        console.log(error);
      });

  }, [slug]);



  if (!project) {
    return <h2>Loading...</h2>;
  }

  return (

    <section className="project-details py-5">

      <div className="container">

        {/* Title */}
        <h1
          dangerouslySetInnerHTML={{
            __html: project.title.rendered,
          }}
        />

        {/* Featured Image */}
        {project.featured_image_url && (

          <img
            src={project.featured_image_url}
            alt={project.title.rendered}
            className="img-fluid mb-4"
          />

        )}

        {/* Content */}
        <div
          dangerouslySetInnerHTML={{
            __html: project.content.rendered,
          }}
        />

      </div>

    </section>
  );
};

export default ProjectDetails;