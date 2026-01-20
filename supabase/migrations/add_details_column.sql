-- Add 'details' JSONB column to 'customers' table to store dynamic form fields
ALTER TABLE customers ADD COLUMN IF NOT EXISTS details JSONB DEFAULT '{}'::jsonb;

-- Add a comment explaining the column's purpose
COMMENT ON COLUMN customers.details IS 'Stores dynamic form fields for various insurance types (e.g., vehicle details, event specifics)';
