import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  title: string;
}

const SEO: React.FC<SEOProps> = ({ title = [] }) => {
  const { site } = useStaticQuery(
    graphql`
      query getSiteMetadata {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = site.siteMetadata.description;

  const metaItems: { name: string; content: string }[] = [
    { name: 'description', content: metaDescription },
    { name: 'og:title', content: title },
    { name: 'og:description', content: metaDescription },
    { name: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:creator', content: site.siteMetadata.author },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: metaDescription }
  ];

  return (
    <>
      <title>{`${title} | ${site.siteMetadata.title}`}</title>
      {metaItems.map(({ name, content }) => (
        <meta key={name} name={name} content={content} />
      ))}
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
    </>
  );
};

export default SEO;
