import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../constants";
import todoService, { Todo } from "../services/todoService";

const useTodos = () => {
  
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    // queryFn: apiClient.getAll.bind(apiClient), // this solves the endpoint undefined issue, or to use arrow function in our apiClient
    queryFn: todoService.getAll,
    staleTime: 10 * 1000, // 10s, Per query Query Setting
  });
}

export default useTodos;