import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { useRouter } from "next/router";

import type { GetStaticProps, GetStaticPaths } from "next";

interface Props {
  mdxSource: MDXRemoteSerializeResult;
}

export default function RemoteMdxPage({ mdxSource }: Props) {
  return <MDXRemote {...mdxSource} />;
}

export const getStaticProps = (async (context) => {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...

  console.log(context)

  const res = await fetch(
    "https://r2.chingc.cc/zh-cn/1.1-%E8%AF%A6%E7%BB%86%E4%BB%8B%E7%BB%8D.md"
  );
  const mdxText = await res.text();
  const mdxSource = await serialize(mdxText);

  return { props: { mdxSource } };
}) satisfies GetStaticProps<{
  mdxSource: MDXRemoteSerializeResult
}>

export const getStaticPaths = (async () => {
  return {
    paths: [
      {
        params: {
          paths: ['zh-cn', '1.1-详细介绍.md']
        }
      }
    ],
    fallback: false,
  };
}) satisfies GetStaticPaths;
