import { Col, Row } from "react-bootstrap";
import BlogHeader from "../../components/BlogHeader";
import PageLayout from "../../components/PageLayout";
import BlogContent from "../../components/BlogContent";
import { getAllBlogs, getBlogBySlug } from "../../lib/api";

export default function BlogDetail({ blog }) {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog ? blog.title : "Title"}
            subtitle={blog ? blog.subtitle : "Subtitle"}
            coverImage={blog ? blog.coverImage : "coverImage"}
            author={blog ? blog.author : "Author"}
            date={blog ? blog.date : "Date"}
          />
          <hr />
          <BlogContent content={blog ? blog.content : "Title"} />
        </Col>
      </Row>
    </PageLayout>
  );
}

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((b) => ({
    params: { slug: b.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}
