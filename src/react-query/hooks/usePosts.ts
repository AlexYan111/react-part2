import { Query, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = ({pageParam = 1}) =>
    axios
      .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
        params: { 
          _start: (pageParam - 1) * query.pageSize, // _start is the index of the first item to return
          _limit: query.pageSize,
         },
      })
      .then((res) => res.data);
 
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 60 * 1000, // 1m, Per query Query Setting
    keepPreviousData: true, // this will keep the previous data when the query is invalidated
    getNextPageParam: (lastPage, allPages) => {
      // 1->2
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    }
  });
}

export default usePosts;