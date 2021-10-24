import {PostPage} from '@atomic/templates/PostPage/PostPage';
import {PostHead} from '@atomic/templates/PostPage/PostHead';
import {ErrorPage} from '@atomic/templates/ErrorPage/ErrorPage';
import {usePostBySlug} from '@hooks/posts/usePostsStore';
import {useNextQuery} from '@hooks/next/useNextQuery';
import {RouteQuery} from '@constants/pages';
import {NextPageContext} from 'next';

interface Props {
  postSlug: string;
}

export default function PostRoute({postSlug}: Props): JSX.Element {
  if (!postSlug) {
    return <ErrorPage mod="404" />;
  }

  const post = usePostBySlug(postSlug);
  if (!post) {
    return <ErrorPage mod="404" />;
  }

  return (
    <>
      <PostHead {...post} />
      <PostPage {...post} />
    </>
  );
}

PostRoute.getInitialProps = (ctx: NextPageContext): Props => ({
  postSlug: ctx.query.postSlug as string,
});