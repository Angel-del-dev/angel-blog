import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";

export default function PageLayout({children, className}) {


    return (
        <Container>
            <Navbar />

            <div className={`page-wrapper ${className}`}>
                {children}
            </div>

            <footer className="page-footer">
                <div>
                <a href="https://www.udemy.com/course/nextjs-with-sanity-cms-serverless-blog-app-w-vercel/">Created from</a>{' | '}
                <a href="https://github.com/Angel-del-dev?tab=repositories">Github</a>{' | '}
                </div>
            </footer>
        </Container>
    );
}