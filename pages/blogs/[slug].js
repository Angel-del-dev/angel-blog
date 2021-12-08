import { Col, Row } from "react-bootstrap";
import BlogHeader from "../../components/BlogHeader";
import PageLayout from "../../components/PageLayout";
import BlogContent from "../../components/BlogContent";
import { getAllBlogs, getBlogBySlug } from "../../lib/api";

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={blog.coverImage}
            author={blog.author}
            date={blog.date}
          />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
    </PageLayout>
  );
};

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

export default BlogDetail;
