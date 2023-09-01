export async function getPosts() {
    const response = await fetch(
      process.env.REACT_APP_API_URL!
    );
    const body = await response.json() as unknown;
    return body;
  }

  export function assertIsPosts(
    postsData: unknown
  ): asserts postsData is PostData[] {
    if (!Array.isArray(postsData)) {
        throw new Error("posts isn't an array");
      }
      if (postsData.length === 0) {
        return;
      }

      postsData.forEach((post) => {
        if (!('id' in post)) {
          throw new Error("post doesn't contain id");
        }
        if (typeof post.id !== 'number') {
          throw new Error('id is not a number');
        }
      });
  }

