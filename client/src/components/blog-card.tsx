import { Card, type CardProps } from "@/components/card";

const BlogCard = (props: Readonly<CardProps>) => (
  <Card {...props} basePath="blog" />
);

export default BlogCard;
