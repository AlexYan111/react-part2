import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import APIClient from "../services/apiClient";
import { CACHE_KEY_TODOS } from "../constants";

const apiClient = new APIClient<Todo>("/todos");

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  
  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    // queryFn: apiClient.getAll.bind(apiClient), // this solves the endpoint undefined issue, or to use arrow function in our apiClient
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000, // 10s, Per query Query Setting
  });
}

export default useTodos;