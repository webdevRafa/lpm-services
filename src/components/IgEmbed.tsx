import { useEffect } from 'react';

export const IgEmbed: React.FC = () => {
  const embedHtml = `
    <blockquote 
      class="instagram-media" 
      data-instgrm-permalink="https://www.instagram.com/p/POST_ID_HERE/" 
      data-instgrm-version="14"
    ></blockquote>
    <script async src="https://www.instagram.com/embed.js"></script>
  `;

  useEffect(() => {
    // Reload Instagram embed script when component mounts
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="instagram-embed"
      dangerouslySetInnerHTML={{ __html: embedHtml }}
    />
  );
};
