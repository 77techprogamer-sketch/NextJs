import Dexie, { Table } from 'dexie';

export interface LeadRecord {
  id?: number;
  payload: any;
  status: 'pending' | 'syncing' | 'failed' | 'completed';
  retries: number;
  createdAt: number;
  lastAttempt?: number;
  error?: string;
  source: string;
  metadata?: any;
}

export class LeadDatabase extends Dexie {
  leads!: Table<LeadRecord>;

  constructor() {
    super('LeadCaptureDB');
    this.version(2).stores({
      leads: '++id, status, source, createdAt'
    });
  }
}

export const db = new LeadDatabase();
