import BlockContent from '@sanity/block-content-to-react';
import HighLightCode from './HighlightCode';
import { urlFor } from '../lib/api';

const serializers = {
    types: {
      code: ({node: {language, code, fileName}}) => {
        return (
          <HighLightCode language={language}>
              {code}
              <div className="code-filename">{fileName}</div>
          </HighLightCode>
        );
      },
      image: ({node: {asset, alt}}) => {
        return(
          <div className="blog-image">
            <img src={urlFor(asset.url).height(300).fit('max').url()} alt={alt} />
            <div className="image-alt">{alt}</div>
          </div>
        );
      }
    }
  };
const BlogContent = ({content}) => (
  <BlockContent
    serializers={serializers}
    blocks={content}
  />
);

export default BlogContent;
