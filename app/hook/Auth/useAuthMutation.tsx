import {
  QueryClient,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";

/**
 * @typedef {Object} TData - shape of the data returned from endpoint
 * @property {unknown} TData.data - the data returned from the endpoint
 *
 * @typedef {Object} TError - shape of error returned from endpoint
 * @property {unknown} TError.error - the error returned from the endpoint
 *
 * @typedef {Object} TVariables - shape of variables being passed to the mutationfn
 *
 * @typedef {Object} TContext
 */

const useAuthMutation = <
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown
>(
  mutationOptions: UseMutationOptions<TData, TError, TVariables, TContext>,
  queryClient?: QueryClient
) => {
  console.log("mutationOptions:", mutationOptions);
  console.log("queryClient:", queryClient);

  // Ensure mutationFn is correctly casted
  const mutation = useMutation<TData, TError, TVariables, TContext>(
    mutationOptions,
    queryClient
  );

  console.log("mutation:", mutation);

  return mutation;
};

export default useAuthMutation;
