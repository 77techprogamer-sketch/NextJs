import { client } from '@/lib/management-api'
import { useQuery } from '@tanstack/react-query'

const getProjectApiKeys = async (projectRef: string) => {
    const { data, error } = await client.GET('/v1/projects/{ref}/api-keys', {
        params: {
            path: {
                ref: projectRef,
            },
        },
    })
    if (error) {
        throw error
    }

    return data
}

export const useProjectApiKeys = (projectRef: string) => {
    return useQuery({
        queryKey: ['api-keys', projectRef],
        queryFn: () => getProjectApiKeys(projectRef),
        enabled: !!projectRef,
    })
}
