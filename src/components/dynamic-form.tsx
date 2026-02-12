import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z, ZodTypeAny } from 'zod'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect, useRef } from 'react'

interface DynamicFormProps<T extends z.ZodRawShape = z.ZodRawShape> {
  schema: z.ZodObject<T>
  onSubmit: (data: z.infer<z.ZodObject<T>>) => void
  isLoading?: boolean
  initialValues?: Partial<z.infer<z.ZodObject<T>>>
  labels?: Record<string, string | { label: string; options?: Record<string, string> }>
  columnInfo?: Record<string, { data_type: string; is_nullable: boolean }>
}

const getZodDef = (schema: ZodTypeAny): Record<string, any> =>
  (schema as any)._def || (schema as any).def

const unwrapZodType = (fieldSchema: ZodTypeAny): ZodTypeAny => {
  if (
    !fieldSchema ||
    typeof getZodDef(fieldSchema) !== 'object' ||
    getZodDef(fieldSchema) === null
  ) {
    throw new Error(
      `unwrapZodType received an invalid Zod schema object. Check the console for the problematic schema/key.`
    )
  }
  let currentSchema = fieldSchema

  // Support both old (typeName) and new (type) Zod formats
  const getTypeName = (def: Record<string, any>) => def.typeName || def.type

  while (
    getTypeName(getZodDef(currentSchema)) === 'ZodOptional' ||
    getTypeName(getZodDef(currentSchema)) === 'optional' ||
    getTypeName(getZodDef(currentSchema)) === 'ZodDefault' ||
    getTypeName(getZodDef(currentSchema)) === 'default' ||
    getTypeName(getZodDef(currentSchema)) === 'ZodNullable' ||
    getTypeName(getZodDef(currentSchema)) === 'nullable' ||
    getTypeName(getZodDef(currentSchema)) === 'ZodEffects' ||
    getTypeName(getZodDef(currentSchema)) === 'effects'
  ) {
    const typeName = getTypeName(getZodDef(currentSchema))
    if (typeName === 'ZodEffects' || typeName === 'effects') {
      // For ZodEffects, get the schema inside the effect
      currentSchema = getZodDef(currentSchema).schema
    } else {
      currentSchema = getZodDef(currentSchema).innerType
    }
  }
  return currentSchema
}

export function DynamicForm<T extends z.ZodRawShape = z.ZodRawShape>({
  schema,
  onSubmit,
  isLoading = false,
  initialValues,
  labels,
  columnInfo,
}: DynamicFormProps<T>) {
  const isInitializingRef = useRef(true)

  const defaultValues = Object.keys(schema.shape).reduce(
    (acc, key) => {
      const originalFieldSchema = schema.shape[key]
      if (typeof originalFieldSchema === 'undefined') {
        throw new Error(
          `Schema error: schema.shape['${key}'] is undefined. Check schema definition.`
        )
      }

      // Support both old (typeName) and new (type) Zod formats
      const getTypeName = (def: Record<string, any>) => def.typeName || def.type

      if (
        getTypeName(getZodDef(originalFieldSchema as any)) === 'ZodDefault' ||
        getTypeName(getZodDef(originalFieldSchema as any)) === 'default'
      ) {
        acc[key] = getZodDef(originalFieldSchema as any).defaultValue()
        return acc
      }

      const baseType = unwrapZodType(originalFieldSchema as any)

      switch (getTypeName(getZodDef(baseType))) {
        case 'ZodString':
        case 'string':
          acc[key] = ''
          break
        case 'ZodBoolean':
        case 'boolean':
          acc[key] = false // Default optional booleans to false
          break
        case 'ZodEnum':
        case 'enum': {
          // For enums, use the first enum value as default
          const enumValues = getZodDef(baseType).values || []
          acc[key] = enumValues.length > 0 ? enumValues[0] : ''
          break
        }
        case 'ZodNumber':
        case 'number':
          acc[key] = 0 // Default optional numbers to 0
          break
        case 'ZodArray':
        case 'array':
          acc[key] = [] // Default arrays to empty array
          break
        default:
          acc[key] = undefined // For other types, or if truly no default makes sense
          break
      }
      return acc
    },
    {} as Record<string, any>
  )

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema as any),
    defaultValues: defaultValues as any,
  })

  useEffect(() => {
    if (initialValues) {
      isInitializingRef.current = true
      const schemaKeys = Object.keys(schema.shape)
      const processedInitialValues = schemaKeys.reduce(
        (acc, key) => {
          const fieldDefFromSchema = schema.shape[key]
          if (typeof fieldDefFromSchema === 'undefined') {
            throw new Error(`Schema error in useEffect: schema.shape['${key}'] is undefined.`)
          }
          const value = initialValues.hasOwnProperty(key) ? (initialValues as any)[key] : undefined
          const baseFieldType = unwrapZodType(fieldDefFromSchema as any)

          // Support both old (typeName) and new (type) Zod formats
          const getTypeName = (def: Record<string, any>) => def.typeName || def.type

          const fieldTypeName = getTypeName(getZodDef(baseFieldType))
          if (fieldTypeName === 'ZodBoolean' || fieldTypeName === 'boolean') {
            acc[key] = !!value
          } else if (fieldTypeName === 'ZodString' || fieldTypeName === 'string') {
            acc[key] = value === null || value === undefined ? '' : String(value)
          } else if (fieldTypeName === 'ZodEnum' || fieldTypeName === 'enum') {
            const enumValues = getZodDef(baseFieldType).values || []
            acc[key] =
              value === null || value === undefined || !enumValues.includes(value)
                ? enumValues[0] || ''
                : String(value)
          } else if (fieldTypeName === 'ZodNumber' || fieldTypeName === 'number') {
            const num = Number(value)
            acc[key] = isNaN(num) ? 0 : num
          } else if (fieldTypeName === 'ZodArray' || fieldTypeName === 'array') {
            // For arrays, the value should already be an array from the database
            // Handle null values properly
            if (Array.isArray(value)) {
              acc[key] = value
            } else if (value === null || value === undefined) {
              acc[key] = []
            } else if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
              // Parse PostgreSQL array format like {ONE,TWO} into JavaScript array
              try {
                const innerContent = value.slice(1, -1) // Remove { and }
                if (innerContent.trim() === '') {
                  acc[key] = []
                } else {
                  // Split by comma and trim whitespace
                  acc[key] = innerContent.split(',').map((item: string) => item.trim())
                }
              } catch {
                // If parsing fails, default to empty array
                acc[key] = []
              }
            } else {
              acc[key] = []
            }
          } else {
            acc[key] = value
          }
          return acc
        },
        {} as Record<string, any>
      )
      form.reset(processedInitialValues as any)
      setTimeout(() => {
        isInitializingRef.current = false
      }, 0)
    } else {
      isInitializingRef.current = false
    }
  }, [initialValues, form, schema])

  const renderField = (fieldName: string, fieldSchema: ZodTypeAny) => {
    const baseType = unwrapZodType(fieldSchema as any)
    // Support both old (typeName) and new (type) Zod formats
    const getTypeName = (def: Record<string, any>) => def.typeName || def.type
    const typeName = getTypeName(getZodDef(baseType))
    const description = fieldSchema.description

    return (
      <FormField
        key={fieldName}
        control={form.control as any}
        name={fieldName as any}
        render={({ field }) => {
          const labelConfig = labels?.[fieldName]
          const label =
            typeof labelConfig === 'string' ? labelConfig : labelConfig?.label || fieldName
          const typeDisplay = columnInfo?.[fieldName]?.data_type || ''
          switch (typeName) {
            case 'ZodString':
            case 'string':
              return (
                <FormItem className="py-5 border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                    <div className="lg:col-span-1">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</FormLabel>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">{typeDisplay}</div>
                      {description && <FormDescription className="text-xs mt-1">{description}</FormDescription>}
                    </div>
                    <div className="lg:col-span-2">
                      <FormControl>
                        <Input
                          placeholder={`Enter ${fieldName}`}
                          className="h-11 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border-slate-200 dark:border-slate-800 focus:ring-primary/20 transition-all font-mono text-sm"
                          {...field}
                          value={String(field.value || '')}
                        />
                      </FormControl>
                      <FormMessage className="mt-2" />
                    </div>
                  </div>
                </FormItem>
              )
            case 'ZodNumber':
            case 'number':
              return (
                <FormItem className="py-5 border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                    <div className="lg:col-span-1">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</FormLabel>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">{typeDisplay}</div>
                      {description && <FormDescription className="text-xs mt-1">{description}</FormDescription>}
                    </div>
                    <div className="lg:col-span-2">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder={`Enter value`}
                          className="h-11 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border-slate-200 dark:border-slate-800 focus:ring-primary/20 transition-all font-mono text-sm"
                          {...field}
                          value={String(field.value ?? '')}
                          onChange={(e) => {
                            const value = e.target.value
                            const num = parseInt(value, 10)
                            field.onChange(isNaN(num) ? undefined : num)
                          }}
                        />
                      </FormControl>
                      <FormMessage className="mt-2" />
                    </div>
                  </div>
                </FormItem>
              )
            case 'ZodBoolean':
            case 'boolean':
              return (
                <FormItem className="py-5 border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <div className="flex flex-row items-center justify-between gap-8">
                    <div>
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</FormLabel>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">{typeDisplay}</div>
                      {description && <FormDescription className="text-xs mt-1">{description}</FormDescription>}
                    </div>
                    <FormControl>
                      <Switch checked={!!field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                  </div>
                  <FormMessage className="mt-2" />
                </FormItem>
              )
            case 'ZodEnum':
            case 'enum': {
              const options = getZodDef(baseType).values
              const optionLabels = typeof labelConfig === 'object' ? labelConfig.options : undefined
              return (
                <FormItem className="py-5 border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
                    <div className="lg:col-span-1">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</FormLabel>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">{typeDisplay}</div>
                      {description && <FormDescription className="text-xs mt-1">{description}</FormDescription>}
                    </div>
                    <div className="lg:col-span-2">
                      <Select
                        onValueChange={(value) => {
                          if (!isInitializingRef.current) {
                            field.onChange(value)
                          }
                        }}
                        value={String(field.value || '')}
                      >
                        <FormControl>
                          <SelectTrigger className="h-11 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border-slate-200 dark:border-slate-800 transition-all font-mono text-sm">
                            <SelectValue placeholder={`Select ${fieldName}`} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="rounded-xl border-slate-200 dark:border-slate-800">
                          {options.map((option: string) => (
                            <SelectItem key={option} value={option} className="font-mono text-sm">
                              {optionLabels?.[option] || option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage className="mt-2" />
                    </div>
                  </div>
                </FormItem>
              )
            }
            case 'ZodArray':
            case 'array':
              return (
                <FormItem className="py-5 border-b border-slate-100 dark:border-slate-800/50 last:border-0">
                  <div className="space-y-3">
                    <div className="flex flex-col">
                      <FormLabel className="text-sm font-semibold text-slate-700 dark:text-slate-300">{label}</FormLabel>
                      <div className="text-[10px] uppercase tracking-wider font-bold text-slate-400 mt-0.5">
                        {typeDisplay} • Enter as JSON array: [&quot;item1&quot;, &quot;item2&quot;]
                        {columnInfo?.[fieldName]?.is_nullable && ' (leave empty for null)'}
                      </div>
                      {description && <FormDescription className="text-xs mt-1">{description}</FormDescription>}
                    </div>
                    <FormControl>
                      <Input
                        placeholder={
                          columnInfo?.[fieldName]?.is_nullable
                            ? `["item1", "item2"] or leave empty for null`
                            : `["item1", "item2"]`
                        }
                        className="h-11 bg-slate-50/50 dark:bg-slate-900/50 rounded-xl border-slate-200 dark:border-slate-800 focus:ring-primary/20 transition-all font-mono text-sm"
                        {...field}
                        value={
                          field.value === null || field.value === undefined
                            ? ''
                            : Array.isArray(field.value)
                              ? JSON.stringify(field.value)
                              : String(field.value || '')
                        }
                        onChange={(e) => {
                          const value = e.target.value
                          if (value.trim() === '') {
                            field.onChange(null)
                          } else {
                            try {
                              const parsed = JSON.parse(value)
                              if (Array.isArray(parsed)) {
                                field.onChange(parsed)
                              } else {
                                field.onChange(value)
                              }
                            } catch {
                              field.onChange(value)
                            }
                          }
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                </FormItem>
              )
            default:
              return <></>
          }
        }}
      />
    )
  }



  return (
    <Form {...form}>
      <motion.form
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        onSubmit={form.handleSubmit(onSubmit as any)}
      >
        <motion.div layout className="grid grid-cols-1 gap-2">
          {Object.keys(schema.shape).map((fieldName) =>
            renderField(fieldName, schema.shape[fieldName] as any)
          )}
        </motion.div>
        <div className="pt-8 flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="px-8 h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
          >
            {isLoading ? 'Saving...' : 'Save Changes'}
          </Button>
        </div>
      </motion.form>
    </Form>
  )
}
