'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton'
import {
  useCreateSecrets,
  useDeleteSecrets,
  useGetSecrets,
} from '@/hooks/use-secrets'
import { secretsSchema } from '@/lib/secrets'
import { zodResolver } from '@hookform/resolvers/zod'
import { AlertTriangle, Minus, PlusIcon, Key } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function SecretsManager({ projectRef }: { projectRef: string }) {
  const { data: secrets, isLoading, error } = useGetSecrets(projectRef)
  const { mutate: createSecrets, isPending: isCreating } = useCreateSecrets()
  const { mutate: deleteSecrets, isPending: isDeleting } = useDeleteSecrets()
  const form = useForm<z.infer<typeof secretsSchema>>({
    resolver: zodResolver(secretsSchema),
    defaultValues: {
      secrets: [{ name: '', value: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'secrets',
  })

  const handleCreateSecrets = (formData: z.infer<typeof secretsSchema>) => {
    createSecrets(
      {
        projectRef,
        secrets: formData.secrets as { name: string; value: string }[],
      },
      {
        onSuccess: () => {
          form.reset({ secrets: [{ name: '', value: '' }] })
        },
      }
    )
  }

  const handleDeleteSecret = (secretName: string) => {
    if (window.confirm(`Are you sure you want to delete the secret "${secretName}"?`)) {
      deleteSecrets({
        projectRef,
        secretNames: [secretName],
      })
    }
  }

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-12 space-y-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-full" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="mx-6 lg:mx-8 mt-8">
        <Alert variant="destructive">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error loading secrets</AlertTitle>
          <AlertDescription>
            There was a problem loading your secrets configuration.
          </AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-6 pt-4 lg:p-12 lg:pt-12">
      <div className="mb-16">
        <h2 className="text-base lg:text-xl font-semibold mb-1">Add New Secret</h2>
        <p className="text-muted-foreground mb-6 text-sm lg:text-base">
          Add sensitive information like API keys that your app needs to work securely.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateSecrets)} className="space-y-2">
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end bg-slate-50/50 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/50 transition-all hover:bg-white dark:hover:bg-slate-900 shadow-sm mb-4">
                <FormField
                  control={form.control}
                  name={`secrets.${index}.name`}
                  render={({ field }) => (
                    <FormItem className="md:col-span-5">
                      <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Secret Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="e.g. STRIPE_KEY"
                          className="h-11 bg-white dark:bg-slate-950 rounded-xl border-slate-200 dark:border-slate-800 transition-all font-mono text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`secrets.${index}.value`}
                  render={({ field }) => (
                    <FormItem className="md:col-span-5">
                      <FormLabel className="text-xs font-bold uppercase tracking-wider text-slate-500">Value</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="••••••••••••"
                          className="h-11 bg-white dark:bg-slate-950 rounded-xl border-slate-200 dark:border-slate-800 transition-all font-mono text-sm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="md:col-span-2 flex justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                    disabled={fields.length <= 1}
                    className="h-11 w-11 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
                  >
                    <Minus className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-between mt-8 border-t border-slate-100 dark:border-slate-800 pt-8">
              <Button
                type="button"
                variant="outline"
                size="default"
                onClick={() => append({ name: '', value: '' })}
                className="h-12 px-6 rounded-xl border-dashed border-2 hover:border-primary hover:text-primary transition-all font-semibold"
              >
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Another Secret
              </Button>

              <Button
                type="submit"
                disabled={isCreating}
                className="h-12 px-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold shadow-lg transition-all active:scale-[0.98]"
              >
                {isCreating ? 'Creating...' : 'Save Secrets'}
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div>
        <h2 className="font-semibold mb-4 lg:text-lg">Existing secrets</h2>
        {secrets && secrets.length > 0 ? (
          secrets.map((secret: { name: string; updated_at?: string }) => (
            <div
              key={secret.name}
              className="flex items-center justify-between py-4 border-b last:border-b-0"
            >
              <div>
                <p className="font-mono text-sm tracking-wider">{secret.name}</p>
                {secret.updated_at && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Last updated: {new Date(secret.updated_at).toLocaleString()}
                  </p>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDeleteSecret(secret.name)}
                disabled={isDeleting}
              >
                Delete
              </Button>
            </div>
          ))
        ) : (
          <Alert>
            <Key className="h-4 w-4" />
            <AlertTitle>No secrets found</AlertTitle>
            <AlertDescription>No secrets found for this project.</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}
