import { client } from '@/lib/management-api'
import { useQuery } from '@tanstack/react-query'
import { useProjectApiKeys } from './use-api-keys'

// GET Buckets
const getBuckets = async (projectRef: string) => {
  const { data, error } = await client.GET('/v1/projects/{ref}/storage/buckets', {
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

export const useGetBuckets = (projectRef: string) => {
  return useQuery({
    queryKey: ['buckets', projectRef],
    queryFn: () => getBuckets(projectRef),
    enabled: !!projectRef,
    retry: false,
  })
}

// LIST Objects
const listObjects = async ({
  projectRef,
  bucketId,
  serviceRoleKey,
}: {
  projectRef: string
  bucketId: string
  serviceRoleKey: string
}) => {
  const response = await fetch(
    `https://${projectRef}.supabase.co/storage/v1/object/list/${bucketId}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${serviceRoleKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prefix: '',
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      }),
    }
  )

  if (!response.ok) {
    throw new Error('Failed to list objects')
  }

  return response.json()
}

export const useListObjects = (projectRef: string, bucketId: string) => {
  const { data: apiKeys } = useProjectApiKeys(projectRef)
  const serviceRoleKey = apiKeys?.find((key: any) => key.name === 'service_role')?.api_key

  return useQuery({
    queryKey: ['objects', projectRef, bucketId],
    queryFn: () => listObjects({ projectRef, bucketId, serviceRoleKey: serviceRoleKey! }),
    enabled: !!projectRef && !!bucketId && !!serviceRoleKey,
  })
}
