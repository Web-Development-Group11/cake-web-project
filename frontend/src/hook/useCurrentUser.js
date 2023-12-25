import useSWR from 'swr'
import { fetcher } from '../api/fetcher'

export const useCurrentUser = () => {
	const { data, isLoading, error, mutate } = useSWR('/user', fetcher, {
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
		revalidateIfStale: false,
	});

	return {
		data,
		isLoading,
		error,
		mutate
	}
}