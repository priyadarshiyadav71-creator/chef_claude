import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

export default function ClaudeRecipe(props) {
  return (
    <section className="suggest-recipe recipe-panel">
      <h1 className="ingredients-heading">Chef Claude Recommendation : </h1>
     <div className="recipe-content">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        components={customStyles}
      >
        {props.recipe}
      </ReactMarkdown>
    </div>
    </section>
  );
}

// Custom styles to map Markdown elements to styled JSX elements
const customStyles = {
  h1: ({ node, ...props }) => <h1 style={{ color: '#c0392b', marginBottom: '10px' }} {...props} />,
  h2: ({ node, ...props }) => <h2 style={{ color: '#2c3e50', marginTop: '20px', fontSize: '24px', fontWeight: 'bold' }} {...props} />,
  h3: ({ node, ...props }) => <h3 style={{ marginTop: '20px', fontSize: '24px', fontWeight: 700 }} {...props} />,
  p: ({ node, ...props }) => <p style={{ lineHeight: '1.6', color: '#333' }} {...props} />,
  hr: ({ node, ...props }) => <hr style={{ border: '0', borderTop: '1px solid #ddd', margin: '20px 0' }} {...props} />,
  ol: ({ node, ...props }) => <ol style={{ paddingLeft: '20px', lineHeight: '1.6' }} {...props} />,
  ul: ({ node, ...props }) => <ul style={{ paddingLeft: '20px', listStyleType: 'disc', marginBottom: '10px' }} {...props} />,
  li: ({ node, ...props }) => <li style={{ marginBottom: '5px' }} {...props} />,
  table: ({ node, ...props }) => <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', marginBottom: '15px' }} {...props} />,
  thead: ({ node, ...props }) => <thead style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #ddd' }} {...props} />,
  tr: ({ node, ...props }) => <tr style={{ borderBottom: '1px solid #eee' }} {...props} />,
  th: ({ node, ...props }) => <th style={{ textAlign: 'left', padding: '10px', fontWeight: 'bold' }} {...props} />,
  td: ({ node, ...props }) => <td style={{ padding: '10px' }} {...props} />,
};