// In a real application, you would fetch data from a blog API or parse an RSS feed.
// This is a placeholder to demonstrate the integration.

interface BlogPost {
  title: string;
  url: string;
  serviceKeywords: string[]; // Keywords to link posts to services
  date: string; // For sorting by latest
}

const mockBlogPosts: BlogPost[] = [
  {
    title: "Understanding Life Insurance: A Comprehensive Guide",
    url: "https://insurancesupportindia.blogspot.com/life-insurance-guide",
    serviceKeywords: ["life_insurance", "life"],
    date: "2023-10-26T10:00:00Z",
  },
  {
    title: "Why Health Insurance is Essential in Today's World",
    url: "https://insurancesupportindia.blogspot.com/health-insurance-benefits",
    serviceKeywords: ["health_insurance", "health"],
    date: "2023-11-15T11:30:00Z",
  },
  {
    title: "Term Insurance vs. Whole Life: Which is Right for You?",
    url: "https://insurancesupportindia.blogspot.com/term-vs-whole-life",
    serviceKeywords: ["term_insurance", "term", "life_insurance"],
    date: "2024-01-20T09:00:00Z",
  },
  {
    title: "Protect Your Ride: A Guide to Motor Insurance",
    url: "https://insurancesupportindia.blogspot.com/motor-insurance-guide",
    serviceKeywords: ["motor_insurance", "motor", "vehicle"],
    date: "2024-02-01T14:00:00Z",
  },
  {
    title: "SME Insurance: Safeguarding Your Small Business",
    url: "https://insurancesupportindia.blogspot.com/sme-insurance-business",
    serviceKeywords: ["sme_insurance", "sme", "business"],
    date: "2024-03-10T16:00:00Z",
  },
  {
    title: "Travel Insurance: Your Companion for Worry-Free Journeys",
    url: "https://insurancesupportindia.blogspot.com/travel-insurance-tips",
    serviceKeywords: ["travel_insurance", "travel"],
    date: "2024-04-05T08:00:00Z",
  },
  {
    title: "Planning for Retirement: The Benefits of Pension Plans",
    url: "https://insurancesupportindia.blogspot.com/pension-plan-benefits",
    serviceKeywords: ["pension_plans", "pension", "retirement"],
    date: "2024-05-12T13:00:00Z",
  },
  {
    title: "ULIP Plans: Investment and Insurance Combined",
    url: "https://insurancesupportindia.blogspot.com/ulip-explained",
    serviceKeywords: ["ulip_plans", "ulip", "investment"],
    date: "2024-06-01T10:00:00Z",
  },
  {
    title: "Wedding Insurance: Protecting Your Special Day",
    url: "https://insurancesupportindia.blogspot.com/wedding-insurance-guide",
    serviceKeywords: ["wedding_insurance", "wedding"],
    date: "2024-07-01T11:00:00Z",
  },
  {
    title: "Cyber Insurance: Essential Protection in the Digital Age",
    url: "https://insurancesupportindia.blogspot.com/cyber-insurance-security",
    serviceKeywords: ["cyber_insurance", "cyber", "security"],
    date: "2024-08-01T12:00:00Z",
  },
];

export const fetchBlogPosts = async (serviceTypeSlug: string): Promise<BlogPost[]> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));

  const normalizedServiceType = serviceTypeSlug.replace(/-/g, '_'); // Convert slug back to key format

  const filteredPosts = mockBlogPosts.filter(post =>
    post.serviceKeywords.some(keyword => normalizedServiceType.includes(keyword))
  );

  // Sort by date to get the latest
  return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};