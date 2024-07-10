import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: 'https://api.studio.thegraph.com/query/77714/nov-holesky/v0.0.4',
})

export const graphqlClient =
  <TData, TVariables = unknown>(
    query: string,
    variables?: TVariables,
    options?: RequestInit['headers'],
  ) =>
  async () => {
    const res = await axiosInstance<{ data: TData }>({
      url: '',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
      data: { query, variables },
    })

    return res.data['data']
  }
