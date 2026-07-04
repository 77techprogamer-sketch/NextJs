import { db, LeadRecord } from './leadDatabase';

export const leadService = {
  async submitLead(payload: any, source: string) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, source })
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return { success: true };
    } catch (error) {
      console.error('Submission failed:', error);
      throw error;
    }
  }
};
